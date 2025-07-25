"use client";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsOfUsePage() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="bg-[#b2d1ba] text-[#1B4332] min-h-screen pb-20">
        <main className="p-6 max-w-3xl mx-auto pt-40">
          {language === "en" ? (
            <>
            <div>
              <h1 className="text-3xl font-semibold mb-4">Terms of Use</h1>
              <p className="mb-4">Welcome to Zuhraa 🌙</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  This site is built for inspiration, reflection, and spiritual
                  well-being.
                </li>
                <li>
                  You are free to read, share, and reflect — but content is not
                  to be copied, rebranded, or resold without permission.
                </li>
                <li>
                  We may update or remove content at any time to keep the space
                  aligned with our vision of peace and faith.
                </li>
                <li>
                  If you use this site in any way that harms others or violates
                  spiritual values, we reserve the right to block access.
                </li>
              </ul>
              <p>
                If you have any questions, contact:{" "}
                <strong>palwasheyqureshi@gmail.com</strong>
              </p>
              </div>
            </>
          ) : (
            <>
            <div className="text-right leading-[2.5rem] font-urdu">
              <h1 className="text-3xl font-semibold mb-4">شرائطِ استعمال</h1>
              <p className="mb-4">زُہراء میں خوش آمدید 🌙</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  یہ سائٹ روحانی سکون، غور و فکر، اور ترغیب کے لیے بنائی گئی ہے۔
                </li>
                <li>
                  آپ اس مواد کو پڑھنے، شیئر کرنے اور اس پر غور کرنے کے لیے آزاد
                  ہیں — لیکن بغیر اجازت مواد کو کاپی، دوبارہ پیش، یا فروخت نہیں
                  کیا جا سکتا۔
                </li>
                <li>
                  ہم اس جگہ کو امن اور ایمان کے ویژن کے ساتھ ہم آہنگ رکھنے کے
                  لیے کسی بھی وقت مواد کو اپ ڈیٹ یا ہٹا سکتے ہیں۔
                </li>
                <li>
                  اگر آپ اس سائٹ کو کسی ایسے طریقے سے استعمال کرتے ہیں جو دوسروں
                  کو نقصان پہنچائے یا روحانی اقدار کے خلاف ہو، تو ہمیں آپ کی
                  رسائی محدود کرنے کا حق حاصل ہے۔
                </li>
              </ul>
              <p>
                اگر آپ کے کوئی سوالات ہوں تو رابطہ کریں:{" "}
                <strong>palwasheyqureshi@gmail.com</strong>
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
