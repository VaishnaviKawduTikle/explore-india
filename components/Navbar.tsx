"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          🌍 Explore India
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="rounded-full bg-sky-600 px-5 py-2 text-white hover:bg-sky-700 transition">
          Login
        </button>
      </div>
    </header>
  );
}