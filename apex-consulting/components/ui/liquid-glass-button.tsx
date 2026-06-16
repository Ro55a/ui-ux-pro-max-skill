"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  [
    "relative inline-flex items-center justify-center font-semibold tracking-wide",
    "transition-all duration-300 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/40",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:  "text-catalyst-base",
        outline:  "text-accent-400 bg-transparent border border-accent-400/30 hover:border-accent-400/60",
        ghost:    "text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.07]",
      },
      size: {
        sm:  "h-9  px-5 text-[11px] rounded-full gap-1.5",
        md:  "h-11 px-7 text-[12px] rounded-full gap-2",
        lg:  "h-12 px-8 text-[13px] rounded-full gap-2",
        xl:  "h-14 px-10 text-[13px] rounded-full gap-2.5",
      },
    },
    defaultVariants: { variant: "default", size: "lg" },
  },
);

export function GlassFilter() {
  return (
    <svg
      aria-hidden
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter id="catalyst-glass" x="-20%" y="-20%" width="140%" height="140%"
          colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65 0.65"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feComposite in="displaced" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant = "default", size = "lg", children, ...props }, ref) => {
    return (
      <>
        <GlassFilter />
        <button
          ref={ref}
          className={cn("group overflow-hidden", liquidbuttonVariants({ variant, size }), className)}
          {...props}
        >
          {variant === "default" && (
            <span
              aria-hidden
              className="absolute inset-0 rounded-[inherit]"
              style={{
                background: "linear-gradient(135deg, rgba(240,237,232,0.92) 0%, rgba(196,188,174,0.88) 100%)",
                filter: "url(#catalyst-glass)",
              }}
            />
          )}
          {variant === "default" && (
            <span
              aria-hidden
              className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)",
              }}
            />
          )}
          <span className="relative z-10 flex items-center gap-[inherit]">{children}</span>
        </button>
      </>
    );
  },
);
LiquidButton.displayName = "LiquidButton";
