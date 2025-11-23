import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const variants = {
      primary: "bg-neon-blue text-tech-black font-bold hover:bg-blue-400 border border-transparent",
      secondary: "bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10",
      glass: "glass-button text-white",
      outline: "border border-white/20 hover:border-white/50 text-white bg-transparent",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const glowEffect = glow ? "shadow-[0_0_20px_rgba(57,167,255,0.5)] hover:shadow-[0_0_30px_rgba(57,167,255,0.8)]" : "";

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center transition-all duration-300 rounded-md font-space tracking-wide overflow-hidden",
          variants[variant],
          sizes[size],
          glowEffect,
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
