"use client";
import Link from "next/link";
import names from "@/data/asmaulhusna.json";
import { useLanguage } from "@/context/LanguageContext";

export default function AsmaPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 px-6 py-10 bg-[#b2d1ba] text-[#1B4332]">
      {language === "en" ? <EnglishIntro /> : <UrduIntro />}

      <div className="grid font-urdu grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 max-w-7xl mx-auto">
        {Array.isArray(names) &&
          names.map((name) => (
            <Link key={name.id} href={`/Asmaulhusna/${name.id}`}>
              <div className="p-6 h-35 bg-[#ccd3b8] rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition duration-200 cursor-pointer text-center flex flex-col justify-center items-center">
                <span
                  className={`font-bold text-[#1B4332] block ${
                    name.arabic.length > 15
                      ? "text-xl leading-snug"
                      : "text-3xl"
                  }`}
                >
                  {name.arabic}
                </span>
                <span className="block mt-2 text-lg font-semibold text-[#1B4332]">
                  {name.id}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

function EnglishIntro() {
  return (
    <>
      <h1 className="text-5xl font-serif text-center mb-4 tracking-wide">
        Asma-ul-Husna
      </h1>
      <p className="text-lg text-center text-[#2D6A4F] max-w-3xl mx-auto mb-10 leading-relaxed">
        Asma‑ul‑Husna are the 99 beautiful names of Allah Ta’ala, each
        reflecting His greatness and attributes. Understanding them and calling
        upon Allah through these names is a form of worship. The Qur’an and
        Hadith mention the virtues and blessings of these names.
      </p>
    </>
  );
}

function UrduIntro() {
  return (
    <>
      <h1 className="text-center mb-4 tracking-wide font-urdu text-5xl">
        اسماء الحسنیٰ
      </h1>
      <p
        className="text-lg leadding-[2.5rem] font-urdu text-center text-[#2D6A4F] max-w-3xl mx-auto mb-10 leading-relaxed"
        dir="rtl"
      >
        اسماء الحسنیٰ اللہ تعالیٰ کے 99 خوبصورت نام ہیں، جو اس کی عظمت اور صفات
        کو ظاہر کرتے ہیں۔ انہیں سمجھنا اور ان ناموں کے ذریعے اللہ کو پکارنا
        عبادت کا حصہ ہے۔ قرآن اور حدیث میں ان ناموں کی فضیلت اور برکت کا ذکر آیا
        ہے۔
      </p>
    </>
  );
}
