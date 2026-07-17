import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop"
        alt="Goa Beach"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Discover Incredible India
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore beaches, mountains, heritage, adventure, and unforgettable
            travel experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-full bg-sky-600 px-8 py-4 text-white font-semibold hover:bg-sky-700 transition">
              Explore Destinations
            </button>

            <button className="rounded-full border border-white px-8 py-4 text-white hover:bg-white hover:text-black transition">
              AI Trip Planner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}