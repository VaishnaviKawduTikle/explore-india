import {
  Fish,
  Waves,
  Mountain,
  Ship,
  Camera,
  Palmtree,
} from "lucide-react";

const experiences = [
  {
    title: "Deep Sea Fishing",
    icon: Fish,
    color: "text-cyan-400",
  },
  {
    title: "Scuba Diving",
    icon: Waves,
    color: "text-blue-400",
  },
  {
    title: "Mountain Trekking",
    icon: Mountain,
    color: "text-green-400",
  },
  {
    title: "Sunset Cruise",
    icon: Ship,
    color: "text-yellow-400",
  },
  {
    title: "Photography Tour",
    icon: Camera,
    color: "text-pink-400",
  },
  {
    title: "Beach Camping",
    icon: Palmtree,
    color: "text-orange-400",
  },
];

export default function Experiences() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trending Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#111827] rounded-3xl p-8 hover:scale-105 transition duration-300 border border-gray-700"
              >
                <Icon size={60} className={item.color} />

                <h3 className="text-2xl text-white mt-6 font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  Book unforgettable adventures with verified local guides.
                </p>

                <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white">
                  Book Now
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}