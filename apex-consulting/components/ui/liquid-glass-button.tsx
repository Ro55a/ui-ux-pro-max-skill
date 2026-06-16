"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  [
    "relative inline-flex items-center justify-center font-semibold",
    "transition-all duration-300 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
    "disabled:pointer-events-none disabled:opacity-40",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-white",
          "bg-white/[0.08] backdrop-blur-xl",
          "border border-white/[0.14]",
          "shadow-[0_2px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)]",
          "hover:bg-white/[0.14] hover:border-white/[0.22]",
          "hover:shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.18)]",
          "active:scale-[0.98]",
        ],
        solid: [
          "text-catalyst-base font-bold",
          "bg-accent-400",
          "hover:bg-accent-300",
          "shadow-[0_2px_12px_rgba(208,201,188,0.2)]",
          "hover:shadow-[0_4px_24px_rgba(208,201,188,0.3)]",
          "active:scale-[0.98]",
        ],
        outline: [
          "text-accent-400 bg-transparent",
          "border border-accent-400/30",
          "hover:border-accent-400/60 hover:bg-accent-400/[0.06]",
        ],
        ghost: [
          "text-white/60 hover:text-white",
          "bg-white/[0.03] hover:bg-white/[0.07]",
          "border border-white/[0.06]",
        ],
      },
      size: {
        sm: "h-9  px-5 text-[11px] rounded-full gap-1.5 tracking-[0.04em]",
        md: "h-11 px-7 text-[12px] rounded-full gap-2   tracking-[0.04em]",
        lg: "h-12 px-8 text-[13px] rounded-full gap-2   tracking-[0.06em]",
        xl: "h-14 px-10 text-[13px] rounded-full gap-2.5 tracking-[0.06em]",
      },
    },
    defaultVariants: { variant: "default", size: "lg" },
  },
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant = "default", size = "lg", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("group overflow-hidden", liquidbuttonVariants({ variant, size }), className)}
        {...props}
      >
        {/* Shimmer sweep on hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-[inherit] translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.10] to-transparent pointer-events-none"
        />
        {/* Top-edge highlight */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[1px] rounded-full bg-white/[0.18] pointer-events-none"
        />
        <span className="relative z-10 flex items-center gap-[inherit]">{children}</span>
      </button>
    );
  },
);
LiquidButton.displayName = "LiquidButton";
