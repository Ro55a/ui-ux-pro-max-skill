# How to Edit This Website

You do not need to know how to code. Almost everything visible on the site is controlled from a single file.

---

## 1. Edit content

Open this file:
```
apex-consulting/content/site.config.ts
```

It contains clearly labelled sections:

| Section | What it controls |
|---|---|
| `COMPANY` | Your name, phone, email, address, Companies House number |
| `HERO` | Headline, sub-headline, call-to-action button text, video file path |
| `STATS` | The key metrics strip — fill in your own real numbers, or leave blank to hide |
| `SERVICES` | The 8 service cards — edit names, descriptions, and tags |
| `TESTIMONIALS` | Client quotes — only add with written permission |
| `FAQS` | Questions and answers shown in the FAQ section |
| `LEGAL` | Your booking URL (Calendly etc.), cookie version, governing law |

Save the file — the site updates instantly in development mode.

---

## 2. Add your scroll video

1. Find a cinematic background video (15–30 seconds, 1080p or higher).
   - Free sources: [pexels.com/videos](https://pexels.com/videos), [coverr.co](https://coverr.co), [mixkit.co](https://mixkit.co)
   - Ideal subjects: city skylines, abstract motion, architecture, business environments.
2. Rename the file to `hero.mp4`.
3. Drop it into the folder: `apex-consulting/public/`
4. In `site.config.ts`, confirm `HERO.videoSrc` is set to `"/hero.mp4"`.

The video does **not** play with sound and does **not** auto-play — it advances frame-by-frame as the user scrolls, like the Apple product pages.

---

## 3. Add real statistics

In `site.config.ts`, find the `STATS` array:

```ts
export const STATS = [
  { value: "", label: "" }, // hidden when value is empty
  ...
];
```

Fill in your actual figures. Only include numbers you can verify:

```ts
export const STATS = [
  { value: "£2.4M",  label: "Additional revenue unlocked for clients" },
  { value: "38",     label: "Engagements completed" },
  { value: "4.9",    label: "Client satisfaction score (out of 5)" },
  { value: "30d",    label: "Average time to first measurable result" },
];
```

---

## 4. Connect a real booking link

1. Create a free [Calendly](https://calendly.com) account and set up a 45-minute meeting type.
2. Copy your Calendly link (e.g. `https://calendly.com/yourname/strategy-call`).
3. In `site.config.ts`, set:
   ```ts
   bookingUrl: "https://calendly.com/yourname/strategy-call",
   ```

All "Book a Call" buttons across the site will now link directly to your calendar.

---

## 5. Connect the contact form

The form currently simulates submission. To make it real, choose one option:

**Option A — Formspree (easiest, free tier):**
1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. In `components/CTASection.tsx`, replace the fake submission with:
   ```ts
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ ...form, services: selected }),
   });
   ```

**Option B — Resend (for developers):**
Add an API route at `app/api/contact/route.ts` using the [Resend SDK](https://resend.com).

---

## 6. Legal pages

The Privacy Policy, Terms of Service, and Cookie Policy are at:
- `/privacy`
- `/terms`  
- `/cookies`

**Before going live, you must:**
1. Replace all placeholder values in `site.config.ts` (Companies House number, VAT number, registered address).
2. Have a solicitor review the legal documents and customise them for your specific services.
3. If you use Google Analytics or any other tracking tools, set `usesGoogleAnalytics: true` in `LEGAL` and update the Cookie Policy accordingly.

---

## 7. Deploy

This is a Next.js app. The easiest deployment is [Vercel](https://vercel.com):

1. Push your code to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → New Project → Import the `ui-ux-pro-max-skill` repo.
3. Set the **Root Directory** to `apex-consulting`.
4. Click Deploy. Vercel gives you a free `.vercel.app` domain immediately.
5. Add your custom domain in Vercel's dashboard.
