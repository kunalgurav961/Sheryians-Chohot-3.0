import React from "react";
export interface CarouselSlide {
    id?: string | number;
    image?: string;
    title?: string;
    description?: string;
    content?: React.ReactNode;
}
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    slides: CarouselSlide[];
    autoPlay?: boolean;
    interval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
    aspectRatio?: "16/9" | "4/3" | "square" | "auto";
}
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Carousel.d.ts.map