import React from "react";
import { type VariantProps } from "class-variance-authority";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
declare const navbarVariants: (props?: ({
    variant?: "light" | "dark" | "primary" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface NavbarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navbarVariants> {
    asChild?: boolean;
    animation?: keyof typeof entranceAnimations;
    hoverAnimation?: keyof typeof hoverAnimations;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export { Navbar, navbarVariants };
//# sourceMappingURL=Navbar.d.ts.map