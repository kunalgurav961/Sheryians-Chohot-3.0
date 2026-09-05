// carousel component: sliding through deadlines like a pro
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";
import gsap from "gsap";

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

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      slides,
      autoPlay = false,
      interval = 4000,
      showControls = true,
      showIndicators = true,
      aspectRatio = "16/9",
      className,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    // Auto-play timer
    useEffect(() => {
      if (!autoPlay || slides.length <= 1) return;
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    // Animate slide change
    useEffect(() => {
      if (!slideRef.current) return;
      gsap.fromTo(
        slideRef.current,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }, [currentIndex]);

    const ratioClass =
      aspectRatio === "16/9"
        ? "aspect-video"
        : aspectRatio === "4/3"
        ? "aspect-[4/3]"
        : aspectRatio === "square"
        ? "aspect-square"
        : "h-80";

    const currentSlide = slides[currentIndex];

    if (!slides || slides.length === 0) {
      return <div className="p-4 text-center text-gray-500">No slides provided</div>;
    }

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as any).current = node;
        }}
        className={cn(
          "relative overflow-hidden rounded-xl bg-slate-900 text-white select-none w-full shadow-lg group",
          ratioClass,
          className
        )}
        {...props}
      >
        {/* Slide View */}
        <div ref={slideRef} className="relative w-full h-full">
          {currentSlide.image && (
            <img
              src={currentSlide.image}
              alt={currentSlide.title || `Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay Gradient for readability */}
          {(currentSlide.title || currentSlide.description || currentSlide.content) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              {currentSlide.title && (
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentSlide.title}
                </h3>
              )}
              {currentSlide.description && (
                <p className="text-gray-200 text-sm sm:text-base max-w-xl">
                  {currentSlide.description}
                </p>
              )}
              {currentSlide.content && (
                <div className="mt-3">{currentSlide.content}</div>
              )}
            </div>
          )}
        </div>

        {/* Previous Button */}
        {showControls && slides.length > 1 && (
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Next Button */}
        {showControls && slides.length > 1 && (
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Slide Indicator Dots */}
        {showIndicators && slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
