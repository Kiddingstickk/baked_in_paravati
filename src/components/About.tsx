import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import imgMain from "../assets/pexels-lilartsy-3016312.jpg";
import imgOverlap from "../assets/jerry-zhang-ePpaQC2c1xA-unsplash.jpg";
import bgImg from "../assets/tuti.jpg"; // background image

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[110vh] w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bgImg} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-60 items-center">
          {/* Left Side - Images */}
          <div
            className={`order-1 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative">
              <img
                src={imgMain}
                alt="Main About"
                className="w-full h-[400px] object-cover rounded shadow-lg"
              />

              <div className="absolute -bottom-12 -right-8 w-2/3 hidden lg:block">
                <img
                  src={imgOverlap}
                  alt="Overlapping About"
                  className="w-full h-48 object-cover rounded border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text (shifted right) */}
          <div
            className={`order-2 space-y-12 ${isVisible ? "animate-slide-in-right" : "opacity-0"} translate-x-12`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-blue-600" />
              <span className="text-white uppercase tracking-widest text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-blue-900 mb-6">
              Born in the Shadow of the Mountains
            </h2>

            <div className="space-y-4 text-blue-950 font-bold italic text-lg mb-8">
              <p>
                <strong>BIP</strong> is more than a place — it’s a journey. We craft spaces
                where nature, warmth, and story meet, inviting wanderers to pause and belong.
              </p>
              <p>
                Whether it’s the café, the cottage, or the trek, each experience is designed
                to feel authentic, soulful, and unforgettable.
              </p>
            </div>

            <div className="flex items-center gap-3 text-blue-900">
              <Heart className="w-6 h-6 fill-blue-900 animate-pulse" />
              <p className="text-sm font-medium italic">
                Crafted with heart, inspired by nature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}