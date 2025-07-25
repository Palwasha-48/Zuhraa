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
  serial: string;
  background: string;
}

const translations = {
  en: {
    aboutHeading: "About Zuhraa",
    aboutText:
      "Zuhraa is a gentle space 🌸 for hearts that forget — yet long to remember 🌙. \nIt’s a soft return to faith 🤲, love ❤️, and light ✨ — without fear, without shame.",
    learnMore: "Learn More",
    contactHeading: "Contact Me",
    contactText:
      "Have a question, a thought, or just want to say Salaam? 🤍 \nReach out softly on",
    linkedin: "LinkedIn 🌿",
    facebook: "Facebook ☁️",
  },
  ur: {
    aboutHeading: "زُہراء کے بارے میں",
    aboutText:
      "زُہراء ایک نرم گوشہ ہے 🌸 اُن دلوں کے لیے جو بھول جاتے ہیں — مگر یاد کرنا چاہتے ہیں 🌙۔ \nیہ ایمان 🤲، محبت ❤️، اور روشنی ✨ کی طرف ایک نرم واپسی ہے — بغیر کسی خوف یا شرمندگی کے۔",
    learnMore: "مزید جانیں",
    contactHeading: "رابطہ کریں",
    contactText:
      "کوئی سوال، خیال، یا صرف سلام کہنا چاہتے ہیں؟ 🤍 \nنرمی سے رابطہ کریں",
    linkedin: "لنکڈ ان 🌿",
    facebook: "فیس بک ☁️",
  },
};

export default function HomePage() {
  const [ayah, setAyah] = useState<Ayah | null>(null);
  const [language, setLanguage] = useState<"en" | "ur">("en");

  useEffect(() => {
    getRandomAyah();
  }, []);

  const getRandomAyah = () => {
    const randomIndex = Math.floor(Math.random() * ayats.length);
    setAyah(ayats[randomIndex]);
  };

  const t = translations[language];

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
        <div className="absolute top-32 text-center px-4">
          <p className="text-md md:text-xl text-gray-200 mt-3 drop-shadow-sm">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-yellow-100">Zuhraa</span>
          </h1>
          <p className="text-md md:text-xl text-gray-200 mt-3 drop-shadow-sm">
            In the name of Allah, the Most Gracious, the Most Merciful 🌧️❤️
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

      {/* Language Toggle */}
      <div className="text-center mt-8">
        <button
          onClick={() => setLanguage(language === "en" ? "ur" : "en")}
          className="px-4 py-2 bg-[#1B4332] text-white rounded-full shadow hover:bg-[#204d3a] transition"
        >
          {language === "en" ? "اردو میں دیکھیں" : "View in English"}
        </button>
      </div>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-6 bg-[#cdd6c2] text-center ${
          language === "ur" ? "font-urdu" : ""
        }`}
        dir={language === "ur" ? "rtl" : "ltr"}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-9">
            {t.aboutHeading}
          </h2>
          <p className="text-lg text-[#2D6A4F] mb-9 leading-relaxed whitespace-pre-line">
            {t.aboutText}
          </p>

          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-[#1B4332] text-white rounded-full shadow hover:bg-[#204d3a] transition"
          >
            {t.learnMore}
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 px-6 bg-[#b2d1ba] text-center ${
          language === "ur" ? "font-urdu" : ""
        }`}
        dir={language === "ur" ? "rtl" : "ltr"}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#204d3a] mb-6">
            {t.contactHeading}
          </h2>
          <p className="text-lg text-[#153024] mb-8 leading-relaxed whitespace-pre-line">
            {t.contactText}{" "}
            <a
              href="https://www.linkedin.com/in/palwashey-qureshi/"
              className="underline hover:text-[#1B4332] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.linkedin}
            </a>{" "}
            {language === "ur" ? "یا" : "or"}{" "}
            <a
              href="https://www.facebook.com/share/1GoKRcVqaG/"
              className="underline hover:text-[#1B4332] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.facebook}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
