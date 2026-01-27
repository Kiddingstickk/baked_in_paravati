export default function FooterSection() {
    return (
      <footer className="relative bg-black text-white py-16 text-center">
        {/* Brand Line */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Baked in Parvati
        </h2>
  
        {/* Location */}
        <p className="mt-4 text-gray-400 text-lg">
          Kalga • Pulga • Parvati Valley
        </p>
  
        {/* Copyright */}
        <p className="mt-2 text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
  
        {/* Optional: Socials */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
      </footer>
    );
  }