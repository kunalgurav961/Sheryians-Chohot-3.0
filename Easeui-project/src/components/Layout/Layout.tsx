// layout primitives because css flexbox shouldn't make us cry at 2am
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const layoutVariants = cva("w-full transition-all", {
  variants: {
    type: {
      container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      stack: "flex flex-col",
      row: "flex flex-row flex-wrap items-center",
      grid2: "grid grid-cols-1 sm:grid-cols-2",
      grid3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      grid4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      split: "flex flex-col md:flex-row items-center justify-between",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },
  },
  defaultVariants: {
    type: "container",
    gap: "md",
    padding: "none",
  },
});

export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  as?: React.ElementType;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ as: Component = "div", type, gap, padding, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(layoutVariants({ type, gap, padding }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Layout.displayName = "Layout";
