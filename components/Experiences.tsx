import {
  Fish,
  Waves,
  Mountain,
  Ship,
  Camera,
  Trees,
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
    icon: Trees,
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-700 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-slate-800 p-4">
                  <Icon size={48} className={item.color} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  Book unforgettable adventures with verified local guides
                  across India.
                </p>

                <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
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