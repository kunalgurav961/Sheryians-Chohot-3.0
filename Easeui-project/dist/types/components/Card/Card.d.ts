import React from "react";
import { type VariantProps } from "class-variance-authority";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
declare const cardVariants: (props?: ({
    variant?: "light" | "dark" | "outline" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    asChild?: boolean;
    title?: string;
    description?: string;
    image?: string;
    ratio?: "square" | "16:9" | "4:3";
    footer?: React.ReactNode;
    animate?: boolean;
    hoverAnimation?: keyof typeof hoverAnimations;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, cardVariants };
//# sourceMappingURL=Card.d.ts.map