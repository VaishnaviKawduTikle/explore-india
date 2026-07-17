import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <main className="bg-[#0B1120]">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
    </main>
  );
}