import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const tooltipVariants: (props?: ({
    variant?: "light" | "dark" | "primary" | null | undefined;
    position?: "bottom" | "left" | "right" | "top" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">, VariantProps<typeof tooltipVariants> {
    content: React.ReactNode;
    delay?: number;
    animated?: boolean;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map