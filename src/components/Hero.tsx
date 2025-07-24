"use client";

import React, { useEffect, useState } from "react";
import ayats from "@/data/quran.json";
import Navbar from "../components/Navbar";
import Link from "next/link";

interface Ayah {
  arabic: string;
  urdu: string;
  english: string;
  reference: string;
  serial: string; // Change to string if your JSON uses string for serial
  background: string;
}

export default function HomePage() {
  const [ayah, setAyah] = useState<Ayah | null>(null);

  useEffect(() => {
    getRandomAyah();
  }, []);

  const getRandomAyah = () => {
    const randomIndex = Math.floor(Math.random() * ayats.length);
    setAyah(ayats[randomIndex]);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: ayah
            ? `url(/backgrounds/${ayah.background}.jpg)`
            : "none",
        }}
      >
        {/* Welcome Text */}
        <div className="absolute top-32 text-center">
          <p className="text-md md:text-xl text-gray-200 mt-3 drop-shadow-sm">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ{" "}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-yellow-100">Zuhraa</span>
          </h1>
          <p className="text-md md:text-xl text-gray-200 mt-3 drop-shadow-sm">
            In the name of Allah, the Most Gracious, the Most Merciful 🌧️❤️{" "}
          </p>
        </div>

        {/* Ayat Section */}
        <div className="p-4 md:p-6 rounded-lg bg-black/20 w-[100%] max-w-xl mt-60">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
            {ayah?.arabic}
          </h1>
          <p
            className="text-lg md:text-xl text-white font-urdu mb-3 leading-loose"
            dir="rtl"
          >
            {ayah?.urdu}
          </p>
          <p className="text-lg md:text-md text-gray-200 italic mb-3">
            {ayah?.english}
          </p>
          <span className="text-gray-300 text-sm">{ayah?.reference}</span>

          <button
            onClick={getRandomAyah}
            className="mt-4 px-3 py-1.5 bg-yellow-100/90 text-[#1B4332] rounded-full shadow hover:bg-yellow-200 transition flex items-center gap-1"
          >
            <span className="text-xl">↻</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-[#cdd6c2] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-9">
            About Zuhraa
          </h2>
          <p className="text-lg text-[#2D6A4F] mb-9">
            Zuhraa is a gentle space 🌸 for hearts that forget, yet still long
            to remember 🌙. <br /> It&rsquo;s a quiet return to faith 🤲, love ❤️, and
            light ✨ without fear, without shame.
          </p>

          <button>
            <Link
              href="/about"
              className="px-6 py-4 bg-[#1B4332] text-[16px] text-white rounded-full shadow hover:bg-[#204d3a] transition"
            >
              Learn More
            </Link>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-[#b2d1ba] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#204d3a] mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-[#153024] mb-6">
            Have a question, a thought, or just want to say Salaam? 🤍 <br />{" "}
            Reach out softly, I&rsquo;m just a message away on{" "}
            <a href="https://www.linkedin.com/in/palwashey-qureshi/">
              {" "}
              LinkedIn 🌿{" "}
            </a>{" "}
            or
            <a href="https://www.facebook.com/share/1GoKRcVqaG/">
              {" "}
              Facebook ☁️.{" "}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
