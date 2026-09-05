import { type VariantProps } from "class-variance-authority";
import React from "react";
declare const modalVariants: (props?: ({
    variant?: "light" | "dark" | "outline" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
    asChild?: boolean;
    isOpen?: boolean;
    title?: string;
    description?: string;
    onClose?: () => void;
    onDone?: () => void;
    doneText?: string;
    closeText?: string;
    children?: React.ReactNode;
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export { Modal, modalVariants };
//# sourceMappingURL=Modal.d.ts.map