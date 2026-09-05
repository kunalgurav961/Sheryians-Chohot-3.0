import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    tone?: "error" | "default" | "success" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">, VariantProps<typeof inputVariants> {
    label?: string;
    hint?: string;
    error?: string;
    id?: string;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
//# sourceMappingURL=Input.d.ts.map