import React from "react";
export interface FloatingLabelProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label: string;
    size?: "sm" | "md" | "lg";
}
export declare const FloatingLabelInput: React.ForwardRefExoticComponent<FloatingLabelProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=FloatingLabelInput.d.ts.map