"use client";
import { useParams } from "next/navigation";
import names from "@/data/asmaulhusna.json";
import { useLanguage } from "@/context/LanguageContext";

export default function AsmaDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();

  const nameDetail = names.find((n) => n.id === Number(id));

  if (!nameDetail) {
    return <div className="p-10 text-center text-red-500">Not Found ❌</div>;
  }

  return (
    <div className="min-h-screen pt-32 px-6 py-12 bg-[#f4f9f4] text-[#1B4332]">
      {language === "en" ? (
        <EnglishDetail nameDetail={nameDetail} />
      ) : (
        <UrduDetail nameDetail={nameDetail} />
      )}
    </div>
  );
}

function EnglishDetail({ nameDetail }: { nameDetail: NameDetail }) {
  const content = nameDetail.translations.english;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Heading section (center aligned) */}
      <h1 className="text-5xl font-bold text-center mb-4">{nameDetail.arabic}</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">{content.name}</h2>

      {/* Content section (left aligned) */}
      <div className="text-left leading-relaxed space-y-4">
        <p>{content.details}</p>
        <p className="text-green-800 font-semibold">📖 {content.lesson}</p>
        <p className="text-blue-800 font-semibold">🌸 {content.virtues}</p>
        <p className="text-blue-900 font-semibold">{content.wazifa}</p>
      </div>
    </div>
  );
}

function UrduDetail({ nameDetail }: { nameDetail: NameDetail }) {
  const content = nameDetail.translations.urdu;

  return (
    <div dir="rtl" className="max-w-3xl mx-auto font-urdu">
      {/* Heading section (center aligned) */}
      <h1 className="text-5xl font-bold text-center mb-4">{nameDetail.arabic}</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">{content.name}</h2>

      {/* Content section (right aligned) */}
      <div className="text-right leading-[2.5rem] space-y-4">
        <p>{content.details}</p>
        <p className="text-green-800 font-semibold">📖 {content.lesson}</p>
        <p className="text-green-800 font-semibold">🌸 {content.virtues}</p>
        <p className="text-green-900 font-semibold">{content.wazifa}</p>
      </div>
    </div>
  );
}

type NameDetail = {
  arabic: string;
  translations: {
    urdu: {
      name: string;
      details: string;
      lesson: string;
      virtues: string;
      wazifa: string;
    };
    english: {
      name: string;
      details: string;
      lesson: string;
      virtues: string;
      wazifa: string;
    };
  };
};
