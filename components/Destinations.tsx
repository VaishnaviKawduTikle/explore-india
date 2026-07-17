import Image from "next/image";

const destinations = [
  {
    name: "Goa",
    image: "/images/goa.jpg",
    price: "₹4,999",
  },
  {
    name: "Kerala",
    image: "/images/kerala.jpg",
    price: "₹6,999",
  },
  {
    name: "Rajasthan",
    image: "/images/rajasthan.jpg",
    price: "₹7,499",
  },
  {
    name: "Himachal",
    image: "/images/himachal.jpg",
    price: "₹5,999",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[#0B1120] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {destinations.map((place) => (
            <div
              key={place.name}
              className="bg-[#111827] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl text-white font-bold">
                  {place.name}
                </h3>

                <p className="text-cyan-400 mt-2">
                  Starting from {place.price}
                </p>

                <button className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}