import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import bgImg from "../assets/gaurav-sharma-VCkzM-XDeGE-unsplash.jpg"; // background image
import img1 from "../assets/cristiano-pinto-h26rYnb7tBw-unsplash.jpg";
import img2 from "../assets/jerry-zhang-ePpaQC2c1xA-unsplash.jpg";
import img3 from "../assets/matteo-catanese-kSYwKLhTNz0-unsplash.jpg";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Regular Client",
    content:
      "Best barbershop in the city. James knows exactly what I want before I even say it.",
    rating: 5,
    image: img1,
  },
  {
    name: "David Chen",
    role: "Business Executive",
    content:
      "The Executive package is worth every penny. Walking into meetings with confidence is priceless.",
    rating: 5,
    image: img2,
  },
  {
    name: "Sarah Johnson",
    role: "First-time Visitor",
    content:
      "Warm welcome, sharp cut, and great vibes. I’ll be back soon.",
    rating: 5,
    image: img3,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative min-h-[110vh] w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bgImg} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-60 items-center">
          {/* Left Side - Changing Image */}
          <div className="order-1 animate-fadeIn transition-all duration-1000 ease-in-out">
            <div className="relative">
              <img
                key={testimonial.image} // ensures re-render on change
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-[400px] object-cover rounded shadow-lg border-4 border-white transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* Right Side - Heading + Testimonial */}
          <div className="order-2 space-y-8 animate-slideIn transition-all duration-1000 ease-in-out">
            {/* Heading */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-blue-600" />
              <span className="text-white uppercase tracking-widest text-sm font-medium">
                What People Say About Us
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-blue-900 mb-6">
              Real Experiences, Real Voices
            </h2>

            {/* Testimonial Content */}
            <div className="space-y-4 text-blue-950 font-bold italic text-lg mb-8 transition-all duration-1000 ease-in-out">
              <p>"{testimonial.content}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <p className="text-blue-900 font-semibold">{testimonial.name}</p>
              <p className="text-blue-700 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}