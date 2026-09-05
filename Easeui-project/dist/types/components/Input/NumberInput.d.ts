import React from "react";
import { type InputProps } from "./Input";
export declare const NumberInput: React.ForwardRefExoticComponent<Omit<InputProps, "type" | "onChange"> & {
    onChange?: (value: number) => void;
    step?: number;
    min?: number;
    max?: number;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberInput.d.ts.map