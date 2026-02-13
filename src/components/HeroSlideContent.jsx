import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeroSlideContent({ subtitle, title, isActive }) {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

    return () => tl.kill();
  }, [isActive]);

  return (
    <>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <p
          ref={subtitleRef}
          className="text-gray-300 text-sm uppercase tracking-[0.3em] mb-2"
        >
          {subtitle}
        </p>
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          {title}
        </h1>
        <a
          ref={btnRef}
          href="#"
          className="px-10 py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors border-2 border-white"
        >
          Shop Now
        </a>
      </div>
    </>
  );
}
