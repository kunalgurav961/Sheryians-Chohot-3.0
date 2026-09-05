// tooltip component made with love, coffee, and desperate energy
import React, { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-1.5 text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border border-slate-700",
        light: "bg-white text-gray-800 shadow-md border border-gray-200",
        primary: "bg-indigo-600 text-white",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      position: "top",
    },
  }
);

// typescript throws hands when content is a ReactNode instead of string, so we omit content
export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  delay?: number;
  animated?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      variant = "dark",
      position = "top",
      delay = 100,
      animated = true,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    // browser doesn't have nodejs types unless we import node, so ReturnType<typeof setTimeout> saves the day
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (tooltipRef.current && animated) {
        gsap.to(tooltipRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.15,
          onComplete: () => setIsVisible(false),
        });
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      if (isVisible && tooltipRef.current && animated) {
        gsap.fromTo(
          tooltipRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.7)" }
        );
      }
    }, [isVisible, animated]);

    return (
      <div
        className="relative inline-flex"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
        {isVisible && (
          <div
            ref={(node) => {
              tooltipRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as any).current = node;
            }}
            className={cn(tooltipVariants({ variant, position }), className)}
            role="tooltip"
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
