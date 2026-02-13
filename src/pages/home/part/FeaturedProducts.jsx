import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollReveal from "../../../components/ScrollReveal";

const products = [
  { name: "Esprit Ruffle Hem Blouse", price: "$49.50", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
  { name: "Classic Denim Jacket", price: "$89.00", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80" },
  { name: "Slim Fit Jeans", price: "$59.99", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
  { name: "Casual Grey Tracksuit", price: "$79.50", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80" },
  { name: "Wool Blazer", price: "$129.00", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" },
];

const CARD_WIDTH = 280;
const RADIUS = 420;
const ANGLE_STEP = 360 / products.length;


const extendedProducts = [...products, ...products, ...products];

export default function FeaturedProducts() {
  const carouselRef = useRef(null);
  const isAnimating = useRef(false);
  const skipAnimation = useRef(false);
  const [current, setCurrent] = useState(products.length);

  const goToPrev = () => {
    if (isAnimating.current) return;
    setCurrent((p) => p - 1);
  };
  const goToNext = () => {
    if (isAnimating.current) return;
    setCurrent((p) => p + 1);
  };

  const getRotationForIndex = (index) => -index * ANGLE_STEP;

  const applyStyles = (carousel, index) => {
    if (!carousel) return;
    gsap.set(carousel, { rotationY: getRotationForIndex(index) });
  };

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    applyStyles(carousel, products.length);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (skipAnimation.current) {
      skipAnimation.current = false;
      applyStyles(carousel, current);
      return;
    }

    isAnimating.current = true;
    const targetRotation = getRotationForIndex(current);

    gsap.to(carousel, {
      rotationY: targetRotation,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.current = false;
        let newCurrent = current;
        if (current >= 2 * products.length) {
          newCurrent = current - products.length;
          gsap.set(carousel, { rotationY: getRotationForIndex(newCurrent) });
          skipAnimation.current = true;
          setCurrent(newCurrent);
        } else if (current < products.length) {
          newCurrent = current + products.length;
          gsap.set(carousel, { rotationY: getRotationForIndex(newCurrent) });
          skipAnimation.current = true;
          setCurrent(newCurrent);
        }
      },
    });
  }, [current]);

 
  const containerRef = useRef(null);
  const goToPrevRef = useRef(goToPrev);
  const goToNextRef = useRef(goToNext);
  goToPrevRef.current = goToPrev;
  goToNextRef.current = goToNext;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (isAnimating.current) return;
      e.preventDefault();
      if (e.deltaY > 0) goToNextRef.current();
      else if (e.deltaY < 0) goToPrevRef.current();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <ScrollReveal className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-2xl font-bold uppercase tracking-wider mb-12 border-t border-b border-gray-200 py-4">
        Featured Products
      </h2>
      <div
        ref={containerRef}
        className="relative overflow-hidden py-16 -mx-4"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 50%", minHeight: "480px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={carouselRef}
            className="relative"
            style={{
              width: CARD_WIDTH,
              height: "380px",
              transformStyle: "preserve-3d",
            }}
          >
            {extendedProducts.map((product, i) => {
              const angle = i * ANGLE_STEP;
              const isCenter = i === current;
              return (
                <div
                  key={`${product.name}-${i}`}
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                  style={{
                    width: CARD_WIDTH,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <a
                    href="#"
                    className={`flex flex-col items-center w-full group block rounded-xl ${
                      isCenter ? "ring-2 ring-black shadow-2xl z-10" : "shadow-lg opacity-80"
                    }`}
                    style={{
                      transform: isCenter ? "scale(1.05)" : "scale(0.9)",
                      transition: "transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-xl bg-white"
                      style={{ aspectRatio: "3/4", width: "100%" }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                        <span className="opacity-0 group-hover:opacity-100 text-sm font-medium bg-white px-4 py-2 transition-opacity rounded">
                          Quick View
                        </span>
                      </div>
                    </div>
                    <p className={`font-medium mt-3 ${isCenter ? "text-black" : "text-gray-400"}`}>
                      {product.name}
                    </p>
                    <p className="text-gray-500 text-sm">{product.price}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 border border-gray-100"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
          Scroll to navigate
        </p>
      </div>
    </ScrollReveal>
  );
}
