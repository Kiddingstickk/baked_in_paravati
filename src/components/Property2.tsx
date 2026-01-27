import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import villasImage from "../assets/paul-pastourmatzis-r0J9sGBWFOc-unsplash.jpg";       // replace with your actual image
import highlightImage from "../assets/removed-background (6).png"; // PNG overlay

gsap.registerPlugin(ScrollTrigger);

export default function VillasSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !headingRef.current) return;

      gsap.set(headingRef.current, {
        xPercent: 0,
        opacity: 1,
        willChange: "transform, opacity",
        force3D: true,
      });

      gsap.fromTo(
        headingRef.current,
        { xPercent: -120, opacity: 0 }, // slide in from left
        {
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.to(headingRef.current, {
        xPercent: 120,
        opacity: 0,
        ease: "power2.in",
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Desktop Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[100vh] w-full overflow-hidden hidden md:flex items-center"
      >
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={villasImage}
            alt="Villas Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layer 2: Heading + Content (left aligned) */}
        <div
          ref={headingRef}
          className="absolute inset-0 z-10 flex items-start justify-start px-12 pt-40 text-left"
        >
          <div className="inline-block -translate-x-3" style={{ transform: "translateZ(0)" }}>
            <h1 className="font-serif text-[7vw] md:text-[5vw] font-bold text-white leading-none tracking-wide">
              VILLAS
            </h1>
            <p className="mt-6 text-gray-200 max-w-md text-lg">
              Baked in Parvati – Villas, Kalga.  
              3 cottages with kitchen option.  
              Perfect for families or long stays with comfort and independence.
            </p>
          </div>
        </div>

        {/* Layer 3: PNG Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src={highlightImage}
            alt="Highlight"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Mobile Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden block md:hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={villasImage}
            alt="Villas Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* PNG Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <img
            src={highlightImage}
            alt="Highlight"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading + Content (stacked for mobile) */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 text-left">
          <h1 className="font-serif text-[12vw] font-bold text-white leading-none tracking-wide">
            VILLAS
          </h1>
          <p className="mt-4 text-gray-200 text-base max-w-sm">
            Baked in Parvati – Villas, Kalga.  
            3 cottages with kitchen option.  
            Perfect for families or long stays with comfort and independence.
          </p>
        </div>
      </section>
    </>
  );
}