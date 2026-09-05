import React from "react";
import type { VariantProps } from "class-variance-authority";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    onClick?: () => void;
    animation?: keyof typeof entranceAnimations;
    hoverAnimation?: keyof typeof hoverAnimations;
}
declare const buttonVariants: (props?: ({
    variant?: "dark" | "link" | "outline" | "primary" | "secondary" | "destructive" | "ok" | "ghost" | null | undefined;
    size?: "auto" | "default" | "sm" | "lg" | "xl" | "icon" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=Button.d.ts.map