import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/another_trail.jpg";       // background image
import highlightImage from "../assets/removed-background (5).png";  // PNG overlay

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingOuterRef = useRef<HTMLDivElement>(null); // layout container (unchanged)
  const headingInnerRef = useRef<HTMLDivElement>(null); // animated wrapper

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current || !headingInnerRef.current) return;

      // Ensure the animated element doesn't affect layout
      gsap.set(headingInnerRef.current, {
        xPercent: 0,
        opacity: 1,
        willChange: "transform, opacity",
        force3D: true,
      });

      // Slide in from left to the exact current position
      gsap.fromTo(
        headingInnerRef.current,
        { xPercent: -120, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 90%",   // when hero enters viewport
            end: "top 70%",     // completes the slide-in shortly after
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      // Slide out to the right as you scroll away; reverses when scrolling back up
      gsap.to(headingInnerRef.current, {
        xPercent: 120,
        opacity: 0.0,
        ease: "power2.in",
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 60%",     // begin sliding out once you scroll past the hero a bit
          end: "bottom top",    // finish when the hero leaves the viewport
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Desktop Hero */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden hidden md:block"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Bar */}
        <div className="absolute top-8 left-8 right-16 z-40 flex items-center justify-between">
          {/* Brand */}
          <span className="text-white font-serif text-2xl font-bold tracking-wide">
            BIP
          </span>
          {/* Nav Buttons */}
          <div className="flex gap-12">
            <button className="text-sm uppercase tracking-wider text-white hover:text-amber-400 transition">
              Cafe
            </button>
            <button className="text-sm uppercase tracking-wider text-white hover:text-amber-400 transition">
              Trek
            </button>
            <button className="text-sm uppercase tracking-wider text-white hover:text-amber-400 transition">
              Cottage
            </button>
            <button className="text-sm uppercase tracking-wider text-white hover:text-amber-400 transition">
              About
            </button>
          </div>
        </div>

        {/* Heading (outer = layout, inner = animated) */}
        <div
          ref={headingOuterRef}
          className="absolute inset-0 z-10 flex items-start justify-start px-0.0025 pt-48 text-left"
        >
          <div
            ref={headingInnerRef}
            className="inline-block -translate-x-3"
            style={{ transform: "translateZ(0)" }} // avoid blurring on some GPUs
          >
            <p className="text-white text-sm font-light tracking-widest mb-2">
              BAKED IN
            </p>
            <h1 className="font-serif whitespace-nowrap text-[9vw] font-bold text-white leading-none tracking-wide">
              PARVATI
            </h1>
          </div>
        </div>

        {/* Foreground PNG Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src={highlightImage}
            alt="Highlight"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Links */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-24">
          <a
            href="https://instagram.com"
            className="text-white text-sm tracking-widest transform rotate-90 hover:text-amber-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            className="text-white text-sm tracking-widest transform rotate-90 hover:text-amber-400 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com"
            className="text-white text-sm tracking-widest transform rotate-90 hover:text-amber-400 transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://facebook.com"
            className="text-white text-sm tracking-widest transform rotate-90 hover:text-amber-400 transition-colors"
          >
            Facebook
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-200/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-amber-200/70 rounded-full animate-scroll" />
          </div>
        </div>

        {/* Sound Wave Button */}
        <button className="absolute bottom-8 left-8 z-40 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/10 text-white hover:border-amber-400 transition-colors">
          <div className="flex gap-1 items-end">
            <span className="w-1 h-2 bg-white animate-pulse"></span>
            <span className="w-1 h-4 bg-white animate-pulse delay-100"></span>
            <span className="w-1 h-6 bg-white animate-pulse delay-200"></span>
            <span className="w-1 h-4 bg-white animate-pulse delay-300"></span>
            <span className="w-1 h-2 bg-white animate-pulse delay-400"></span>
          </div>
        </button>
      </section>

      {/* Mobile Hero (unchanged) */}
      <section className="relative h-screen w-full overflow-hidden block md:hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground PNG Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src={highlightImage}
            alt="Highlight"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading Text (mobile-friendly) */}
        <div className="absolute inset-0 z-10 flex items-start justify-start px-6 pt-64 text-left">
          <div>
            <p className="text-white text-xs font-light tracking-widest mb-2">
              BAKED IN
            </p>
            <h1 className="font-serif whitespace-nowrap text-[20vw] font-bold text-white leading-none tracking-wide">
              PARVATI
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-200/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-amber-200/70 rounded-full animate-scroll" />
          </div>
        </div>
      </section>
    </>
  );
}