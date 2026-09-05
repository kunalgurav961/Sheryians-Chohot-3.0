import { Slot } from "@radix-ui/react-slot";
import React, { useEffect, useRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
// bringing gsap back from the dead so buttons don't explode on hover
import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: () => void;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const buttonVariants = cva(
  `inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      // upgrading button colors so they look like a real design system instead of random hex codes
      variant: {
        dark: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xs",
        primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs shadow-indigo-500/20",
        secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 dark:hover:bg-indigo-900/60 border border-indigo-200/50 dark:border-indigo-800/40",
        destructive: "bg-rose-600 text-white hover:bg-rose-500 shadow-xs shadow-rose-500/20",
        ok: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-xs shadow-emerald-500/20",
        ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800",
        link: "text-indigo-600 hover:underline dark:text-indigo-400",
        outline:
          "bg-transparent hover:bg-gray-50 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 dark:hover:bg-zinc-800/60",
      },
      size: {
        default: "px-9 py-3",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "jiggle",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const el = buttonRef.current;
      if (!el || animation === "none") return;
      entranceAnimations[animation]?.(el);
    }, [animation]);

    const handleMouseEnter = () => {
      const el = buttonRef.current;
      if (!el) return;
      hoverAnimations[hoverAnimation]?.(el);
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3,
      });
    };

    const handleMouseDown = () => {
      gsap.to(buttonRef.current, { scale: 0.92, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.15,
        ease: "back.out(2)",
      });
    };

    return (
      <Comp
        ref={(node) => {
          buttonRef.current = node as HTMLButtonElement;
          if (typeof ref === "function") ref(node as HTMLButtonElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
        }}
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
