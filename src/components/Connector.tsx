export default function BridgeSection() {
  return (
    <section className="bg-gray-50 min-h-[110vh] flex items-center">
      <div className="container mx-auto px-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Heading + Text */}
        <div>
          <div className="text-left mb-12">
            <p className="text-blue-700 text-xl font-semibold tracking-widest mb-2">
              LET’S
            </p>
            <h2 className="font-serif whitespace-nowrap text-[8vw] md:text-[6vw] font-bold text-blue-900 leading-none tracking-wide">
              STAY CONNECTED
            </h2>
          </div>

          <p className="text-blue-700 text-lg md:text-xl italic font-light leading-relaxed max-w-3xl">
            Communication is at the heart of everything we do. Whether you’re
            sharing stories over coffee, finding peace in a cottage, or
            discovering new paths on a trek, we believe in creating spaces
            where voices are heard and connections are made. This is more than
            a destination — it’s a conversation that continues long after you
            leave. We invite you to be part of that story, to stay connected,
            and to carry a piece of Parvati with you wherever you go.
          </p>
        </div>

        {/* Right Side - Video Container */}
        <div className="relative flex justify-center">
          <div className="w-[70%] h-[250px] rounded-lg overflow-hidden shadow-lg border-4 border-white translate-x-20 translate-y-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg"   // ✅ add a lightweight poster image
              className="w-full h-full object-cover"
            >
              <source src="https://www.pexels.com/download/video/26765315/" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}