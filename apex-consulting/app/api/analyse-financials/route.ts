import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

interface Row { [key: string]: string | number; }

function detectColumns(headers: string[]) {
  const h = headers.map((x) => x.toLowerCase().trim());
  return {
    month:    h.findIndex((x) => /month|date|period/.test(x)),
    revenue:  h.findIndex((x) => /revenue|income|sales|turnover/.test(x)),
    expenses: h.findIndex((x) => /expense|cost|spend|outgoing/.test(x)),
    profit:   h.findIndex((x) => /profit|net|ebitda|margin/.test(x)),
  };
}

function parseCSV(text: string): Row[] {
  const lines   = text.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map((h) => h.replace(/^"|"$/g, "").trim());
  const cols    = detectColumns(headers);
  return lines.slice(1).map((line) => {
    const vals  = line.split(",").map((v) => v.replace(/^"|"$/g, "").trim());
    const toNum = (i: number) => i >= 0 ? parseFloat(vals[i]?.replace(/[£$,]/g, "") || "0") || 0 : 0;
    return {
      month:    cols.month >= 0 ? vals[cols.month] : "",
      revenue:  toNum(cols.revenue),
      expenses: toNum(cols.expenses),
      profit:   cols.profit >= 0 ? toNum(cols.profit) : toNum(cols.revenue) - toNum(cols.expenses),
    };
  });
}

function deriveKPIs(rows: Row[]) {
  const revenues  = rows.map((r) => Number(r.revenue));
  const profits   = rows.map((r) => Number(r.profit));
  const expenses  = rows.map((r) => Number(r.expenses));
  const totalRev  = revenues.reduce((a, b) => a + b, 0);
  const totalProf = profits.reduce((a, b) => a + b, 0);
  const avgMargin = totalRev > 0 ? (totalProf / totalRev) * 100 : 0;
  const half      = Math.floor(revenues.length / 2);
  const h1 = revenues.slice(0, half).reduce((a,b)=>a+b,0) / (half||1);
  const h2 = revenues.slice(half).reduce((a,b)=>a+b,0) / ((revenues.length-half)||1);
  const growth = h1 > 0 ? ((h2-h1)/h1)*100 : 0;
  const totalExp   = expenses.reduce((a,b)=>a+b,0);
  const burnMulti  = totalRev > 0 ? totalExp/totalRev : 0;
  return {
    annualRevenue: `£${(totalRev/1000).toFixed(0)}K`,
    netProfit:     `£${(totalProf/1000).toFixed(0)}K`,
    avgMargin:     `${avgMargin.toFixed(1)}%`,
    burnMultiple:  `${burnMulti.toFixed(2)}×`,
    growthRate:    `${growth>0?"+":""}${growth.toFixed(0)}%`,
  };
}

function generateInsights(rows: Row[], kpis: ReturnType<typeof deriveKPIs>) {
  const insights = [];
  const growth = parseFloat(kpis.growthRate);
  const margin = parseFloat(kpis.avgMargin);
  const burn   = parseFloat(kpis.burnMultiple);
  if (growth > 50)  insights.push({ type: "positive", text: `Revenue growth of ${kpis.growthRate} — well above SME median of 42%` });
  else if (growth > 0) insights.push({ type: "warning", text: `Revenue growth of ${kpis.growthRate} — room to accelerate above SME median` });
  else insights.push({ type: "negative", text: `Revenue declining at ${kpis.growthRate} — urgent intervention recommended` });
  if (margin > 40)  insights.push({ type: "positive", text: `Gross margin of ${kpis.avgMargin} — strong unit economics for reinvestment` });
  else if (margin > 20) insights.push({ type: "warning", text: `Margin of ${kpis.avgMargin} — target 40%+ to improve reinvestment capacity` });
  else insights.push({ type: "negative", text: `Thin margins at ${kpis.avgMargin} — pricing or cost structure review critical` });
  if (burn < 0.6) insights.push({ type: "positive", text: `Burn multiple of ${kpis.burnMultiple} — efficient capital deployment` });
  else insights.push({ type: "warning", text: `Burn multiple of ${kpis.burnMultiple} — target below 0.6 for sustainable growth` });
  return insights;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
    const ext  = file.name.split(".").pop()?.toLowerCase();
    const text = await file.text();
    if (ext !== "csv") return NextResponse.json({ error: "Please upload CSV format" }, { status: 400 });
    const rows = parseCSV(text);
    if (rows.length === 0) return NextResponse.json({ error: "No data rows found" }, { status: 400 });
    const kpis     = deriveKPIs(rows);
    const insights = generateInsights(rows, kpis);
    return NextResponse.json({ chartData: rows, kpis, insights });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Parse failed" }, { status: 500 });
  }
}
