import { useState } from "react";
import amenitiesImage from "../assets/jerry-zhang-ePpaQC2c1xA-unsplash.jpg"; // replace with your actual background

export default function AmenitiesSection() {
  const amenities = [
    { name: "Free Wi‑Fi", desc: "Stay connected with high‑speed internet.\nPerfect for work or leisure." },
    { name: "Bonfire Evenings", desc: "Warm nights under the stars.\nShare stories with fellow travelers." },
    { name: "Kitchen Access", desc: "Cook your own meals.\nEnjoy homely comfort away from home." },
    { name: "Garden & Views", desc: "Relax amidst greenery.\nSoak in serene mountain landscapes." },
    { name: "Cozy Common Spaces", desc: "Meet new people.\nUnwind in welcoming lounges." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Desktop Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden hidden md:flex">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={amenitiesImage}
            alt="Amenities Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading (top-left) */}
        <div className="absolute top-24 left-12 z-10 text-left">
          <h1 className="font-serif text-[6vw] md:text-[4vw] font-bold text-white leading-none tracking-wide">
            AMENITIES
          </h1>
        </div>

        {/* Content (bottom-right, stacked column) */}
        <div className="absolute bottom-16 right-12 z-10 text-right space-y-6">
          {amenities.map((item, idx) => (
            <div key={idx} className="group">
              <p className="text-xl font-medium text-white cursor-pointer">
                {item.name}
              </p>
              {/* Smooth fade-in/out under the name */}
              <div className="opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                {item.desc.split("\n").map((line, i) => (
                  <div key={i} className="text-white/80 text-sm mt-1">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Section */}
      <section className="relative min-h-[100vh] w-full overflow-hidden block md:hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={amenitiesImage}
            alt="Amenities Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading (top-left) */}
        <div className="absolute top-16 left-6 z-10 text-left">
          <h1 className="font-serif text-[10vw] font-bold text-white">
            AMENITIES
          </h1>
        </div>

        {/* Content (bottom-right, stacked column) */}
        <div className="absolute bottom-12 right-6 z-10 text-right space-y-6">
          {amenities.map((item, idx) => (
            <div key={idx}>
              <p
                className="text-lg font-medium text-white cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
              >
                {item.name}
              </p>
              {/* Smooth fade-in/out on click */}
              <div
                className={`transition-all duration-500 ease-out ${
                  activeIndex === idx
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                {activeIndex === idx &&
                  item.desc.split("\n").map((line, i) => (
                    <div key={i} className="text-white/80 text-sm mt-1">
                      {line}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}