"use client";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="bg-[#b2d1ba] text-[#1B4332] min-h-screen">
        <main className="p-6 max-w-3xl mx-auto pt-40">
          {language === "en" ? (
            <>
              <div>
                <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
                <p className="mb-4">Last updated: July 25, 2025</p>
                <p className="mb-4">
                  Zuhraa respects your privacy deeply. This site does not
                  collect personal information without your consent...🌸
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-right leading-[2.5rem] font-urdu">
                <h1 className="text-3xl font-semibold mb-4">
                  رازداری کی پالیسی
                </h1>
                <p className="mb-4">آخری بار اپ ڈیٹ ہوئی: 25 جولائی، 2025</p>
                <p className="mb-4">
                  زُہراء آپ کی رازداری کی قدر کرتی ہے۔ یہ سائٹ آپ کی اجازت کے
                  بغیر کوئی ذاتی معلومات اکٹھی نہیں کرتی...🌸
                </p>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
