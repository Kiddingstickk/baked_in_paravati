import { Mail, Phone, MapPin, Instagram, Facebook, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isSticky, setIsSticky] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detect viewport size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll logic for both desktop and mobile
  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past ~80% of hero height
      setIsSticky(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];


  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-stone-800 via-stone-900 to-stone-800 backdrop-blur-lg border-b border-amber-500/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between items-center gap-6">
              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-light">(555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-light">hello@nailsspa.com</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-light">123 Beauty Lane, NYC</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navbar with Hamburger */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md px-4 py-3 flex justify-between items-center">
            <span className="text-black font-serif text-xl">Nails Spa</span>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-black">
              {sidebarOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-screen w-64 bg-stone-900 shadow-xl p-6 flex flex-col gap-6 transform transition-transform duration-500 z-50 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="#services" className="text-white hover:text-amber-400">Services</a>
            <a href="#gallery" className="text-white hover:text-amber-400">Gallery</a>
            <a href="#policies" className="text-white hover:text-amber-400">Policies</a>
            <a href="#contact" className="text-white hover:text-amber-400">Contact</a>
            <div className="mt-auto flex gap-4 text-amber-400">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-white" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50/50 to-stone-50" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-6xl md:text-7xl font-light text-stone-800 mb-4">
                Get in Touch
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-6" />
              <p className="text-lg text-stone-700 font-light leading-relaxed">
                We'd love to hear from you. Reach out to book your appointment or ask any questions.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:5551234567" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-light">Call Us</p>
                  <p className="text-lg text-stone-800 font-medium">(555) 123-4567</p>
                </div>
              </a>

              <a href="mailto:hello@nailsspa.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-light">Email Us</p>
                  <p className="text-lg text-stone-800 font-medium">hello@nailsspa.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-light">Visit Us</p>
                  <p className="text-lg text-stone-800 font-medium">
                    123 Beauty Lane, New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Flip Card for Business Hours */}
          <div className="relative perspective-1000">
            <div
              className={`relative w-full h-[400px] transition-transform duration-700 preserve-3d cursor-pointer ${
                flipped ? 'rotate-y-180' : ''
              }`}
              onClick={() => setFlipped(!flipped)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-white to-stone-50 rounded-3xl shadow-2xl border border-stone-200 p-8 flex flex-col items-center justify-center">
                  <h3 className="font-serif text-4xl text-stone-800 mb-4 text-center">
                    Business Hours
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-8" />
                  <p className="text-stone-600 font-light text-center mb-6">
                    Click to see our schedule
                  </p>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border-4 border-amber-200 flex items-center justify-center animate-pulse">
                    <div className="text-3xl">🕐</div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 backface-hidden rotate-y-180"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-2xl border border-amber-200 p-8">
                  <h3 className="font-serif text-3xl text-stone-800 mb-6 text-center">
                    Our Schedule
                  </h3>
                  <div className="space-y-6">
                    {hours.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-stone-200 last:border-b-0"
                      >
                        <span className="text-stone-700 font-light">{item.day}</span>
                        <span className="text-amber-700 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-stone-500 mt-6 font-light italic">
                    Click to flip back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}