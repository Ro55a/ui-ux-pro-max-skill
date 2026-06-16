"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, BarChart2, TrendingUp, Mail, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url:  string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home",     url: "#",          icon: Home      },
  { name: "Services", url: "#services",  icon: Briefcase },
  { name: "Analytics",url: "#analytics", icon: BarChart2 },
  { name: "Results",  url: "#results",   icon: TrendingUp},
  { name: "Contact",  url: "#contact",   icon: Mail      },
];

interface NavBarProps {
  items?:     NavItem[];
  className?: string;
}

export function NavBar({ items = NAV_ITEMS, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-16 left-1/2 -translate-x-1/2 z-40 mb-6 sm:mb-0 sm:mt-3",
        className,
      )}
    >
      <div className="flex items-center gap-0.5 bg-catalyst-base/80 border border-white/[0.07] backdrop-blur-2xl py-1 px-1 rounded-full shadow-dark-lg">
        {items.map((item) => {
          const isActive = activeTab === item.name;
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer select-none px-5 py-2.5 rounded-full",
                "text-[10px] font-semibold tracking-[0.12em] uppercase",
                "transition-colors duration-200",
                isActive ? "text-accent-400" : "text-white/25 hover:text-white/50",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <Icon size={15} strokeWidth={1.6} className="md:hidden" />

              {isActive && (
                <motion.div
                  layoutId="catalyst-lamp"
                  className="absolute inset-0 bg-accent-400/[0.07] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 36 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-accent-400/45 rounded-full overflow-visible">
                    <div className="absolute w-20 h-8 bg-accent-400/[0.07] rounded-full blur-xl -top-4 -left-6" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
