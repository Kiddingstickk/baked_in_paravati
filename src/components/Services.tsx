import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Coffee, Home, ChevronLeft, ChevronRight } from "lucide-react";
import cafeImg from "../assets/another_trial.jpg";
import bgImg from "../assets/paul-pastourmatzis-r0J9sGBWFOc-unsplash.avif";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Mountain,
    title: "Trek",
    description: "Lose yourself in breathtaking trails, where silence speaks louder than words.",
    type: "video",
    bg: "https://www.pexels.com/download/video/32296485/", // external video link
    poster: "https://images.pexels.com/photos/19877800/pexels-photo-19877800.jpeg" // poster image
  },
  {
    icon: Coffee,
    title: "Cafe",
    description: "Sip, savor, and slow down — a cozy corner for authentic flavors and warm moments.",
    type: "image",
    bg: cafeImg
  },
  {
    icon: Home,
    title: "Cottage",
    description: "Rustic stays crafted for peace, where every dawn feels like a new beginning.",
    type: "video",
    bg: "https://www.pexels.com/download/video/15776901/", // external video link
    poster: "https://images.pexels.com/photos/14446670/pexels-photo-14446670.jpeg" // local poster image
  }
];

export default function ServicesImage() {
  const [open, setOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!servicesRef.current || !headingRef.current) return;

      gsap.fromTo(
        headingRef.current,
        { xPercent: -120, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 60%",
            end: "top 30%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      className="relative min-h-[110vh] w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bgImg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Left Side - Heading + Text */}
      <div
        ref={headingRef}
        className="flex flex-col items-start justify-start px-6 md:px-12 text-left w-1/2 space-y-8 z-10 -translate-y-18"
      >
        <div>
          <p className="text-white text-xl font-semibold tracking-widest mb-2">OUR</p>
          <h2 className="font-serif whitespace-nowrap text-[8vw] md:text-[6vw] font-bold text-white leading-none tracking-wide">
            SERVICES
          </h2>
        </div>

        <div className="space-y-6 text-white">
          <p className="flex items-center gap-2 text-xl">
            <Mountain className="w-5 h-5 text-blue-600" />
            <span className="italic">Soulful journeys through breathtaking trails.</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <Coffee className="w-5 h-5 text-blue-600" />
            <span className="italic">Cozy flavors and warm conversations.</span>
          </p>
          <p className="flex items-center gap-2 text-xl">
            <Home className="w-5 h-5 text-blue-600" />
            <span className="italic">Rustic stays designed for peace.</span>
          </p>
        </div>
      </div>

      {/* Right Side - Drawer + Cards */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-end w-1/2 z-30 px-6">
        <div
          className={`flex items-center transition-transform duration-700 ease-in-out relative ${
            open ? "translate-x-0" : "translate-x-[50%]"
          }`}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors"
          >
            {open ? <ChevronRight className="w-8 h-8" /> : <ChevronLeft className="w-8 h-8" />}
          </button>

          {/* Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-700 w-64 h-[22rem] flex-shrink-0 mr-6 bg-gray-800"
              >
                {service.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={service.poster} // ✅ poster image
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={service.bg} type="video/mp4" /> {/* external video link */}
                  </video>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${service.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500" />

                <div className="absolute bottom-0 right-0 p-4 w-full transition-all duration-500 group-hover:translate-y-[-40%]">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <Icon className="w-5 h-5 text-amber-400" />
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}