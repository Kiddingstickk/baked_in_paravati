import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Café', href: '#cafe' },
      { label: 'Cottage', href: '#cottage' },
      { label: 'Trek', href: '#trek' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-blue-950 text-white border-t border-blue-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="BIP Logo"
                className="w-10 h-auto object-contain"
              />
              <div>
                <span className="font-display text-xl tracking-wider text-white">
                  Baked In
                </span>
                <span className="font-display text-xl tracking-wider text-blue-300 ml-1">
                  Parvati
                </span>
              </div>
            </a>
            <p className="text-blue-200 mb-4 max-w-sm text-sm">
              Café • Cottage • Trek — crafted with heart, inspired by nature.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-blue-800 border border-blue-700 rounded flex items-center justify-center text-blue-200 hover:border-white hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display text-md text-white mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us & Team Links */}
          <div>
            <h3 className="font-display text-md text-white mb-3">About Us & Our Team</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Embed */}
          <div className="w-full h-[200px] rounded shadow-lg overflow-hidden border border-blue-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1208.76485370139!2d77.4538407765085!3d31.99731588452161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904457d1eb01377%3A0xdaf0c794e7fafa6e!2sBaked%20In%20Parvati!5e1!3m2!1sen!2sin!4v1769411351699!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-blue-200">
              © {currentYear} Baked In Parvati. All rights reserved.
            </p>
            <p className="text-xs text-blue-200">
              Shahdol, Madhya Pradesh, India | Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;