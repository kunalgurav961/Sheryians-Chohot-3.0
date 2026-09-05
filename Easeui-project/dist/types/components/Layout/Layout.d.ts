import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const layoutVariants: (props?: ({
    type?: "split" | "row" | "container" | "stack" | "grid2" | "grid3" | "grid4" | null | undefined;
    gap?: "none" | "sm" | "lg" | "xl" | "md" | null | undefined;
    padding?: "none" | "sm" | "lg" | "xl" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof layoutVariants> {
    as?: React.ElementType;
}
export declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Layout.d.ts.map