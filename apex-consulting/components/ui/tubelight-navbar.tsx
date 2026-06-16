"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-16 left-1/2 -translate-x-1/2 z-40 mb-6 sm:mb-0 sm:mt-3",
        className
      )}
    >
      <div className="flex items-center gap-0.5 bg-catalyst-base/75 border border-white/[0.07] backdrop-blur-xl py-1 px-1 rounded-full shadow-dark-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-[10px] font-medium px-5 py-2 rounded-full transition-colors tracking-[0.1em] uppercase",
                "text-white/30 hover:text-white/60",
                isActive && "text-accent-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden"><Icon size={15} strokeWidth={1.5} /></span>

              {isActive && (
                <motion.div
                  layoutId="catalyst-lamp"
                  className="absolute inset-0 w-full bg-accent-400/[0.06] rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Tube light glow above active pill */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-accent-400/50 rounded-t-full">
                    <div className="absolute w-16 h-6 bg-accent-400/6 rounded-full blur-xl -top-3 -left-4" />
                    <div className="absolute w-8 h-4 bg-accent-400/10 rounded-full blur-md -top-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
