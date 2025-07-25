"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const isUrdu = language === "ur";

  return (
    <footer className="bg-[#cdd6c2] font-urdu text-center py-10 border-t border-gray-200 text-gray-700 text-sm md:text-base">
      <p className="mb-1 mt-5">
        {isUrdu
          ? "دعاؤں، کوڈ اور خیال کے ساتھ تیار کردہ 🤍"
          : "Made with duas, code & care 🤍"}
      </p>

      <p className="mb-2">
        {isUrdu ? (
          <>
            <span className="font-semibold">پلوشہ</span> کی طرف سے — ہر دل کے
            لیے جو روشنی تلاش کر رہا ہے۔
          </>
        ) : (
          <>
            by <span className="font-semibold">Palwasha</span> — for every heart
            seeking a little light.
          </>
        )}
      </p>

      <div className="flex justify-center flex-wrap gap-4 text-xs md:text-sm mt-3">
        <Link href="/" className="hover:underline">
          {isUrdu ? "ہوم" : "Home"}
        </Link>
        <Link href="/about" className="hover:underline">
          {isUrdu ? "تعارف" : "About"}
        </Link>
        <Link href="/privacy-policy" className="hover:underline">
          {isUrdu ? "پرائیویسی" : "Privacy"}
        </Link>
        <Link href="/terms-of-use" className="hover:underline">
          {isUrdu ? "شرائط" : "Terms"}
        </Link>
      </div>
    </footer>
  );
}
