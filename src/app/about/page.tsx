"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-34 min-h-screen bg-[#b2d1ba] text-[#1B4332] px-6 py-12">
        {language === "en" ? <EnglishContent /> : <UrduContent />}
      </main>
      <Footer />
    </>
  );
}

function EnglishContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center">About Zuhraa</h1>

      <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[#0d1d16] p-3 mb-4 leading-relaxed">
        Whenever conversations turned to the Prophets, I&rsquo;d often find
        myself in a familiar struggle. <br />
        Sometimes, a story would come to mind instantly like the Prophet who
        spoke to an ant 🐜 clear as day. <br />
        But at other times, when I tried to remember which Prophet could soften
        iron with his hands 🛠️, my mind would go completely blank.
        <br />
        <br />
        I&rsquo;d try so hard to recall&hellip; but nothing would come. Just
        silence.
        <br />
        And in those moments, a wave of embarrassment would wash over me 🌊.
        Sometimes, even a deep shame. <br />
        I truly wanted to ask someone. I needed to. But a quiet, nagging voice
        in my head would whisper: <br />
        <i>&ldquo;How can you forget this? This is basic Islam.&rdquo;</i>{" "}
        <br />
        <i>
          &ldquo;What kind of Muslim doesn&rsquo;t remember the Prophets?&rdquo;
          🕊️
        </i>
        <br />
        <br />
        So, I stayed quiet. I held that shame inside&mdash;a secret burden I
        didn&rsquo;t dare share. <br />
        But then, one day, something shifted. <br />A gentle thought bloomed in
        my heart 🌸. A soft whisper asked: <br />
        <i>
          &ldquo;What if I&rsquo;m not the only one who forgets?&rdquo;
        </i>{" "}
        <br />
        <i>
          &ldquo;What if someone else out there also struggles like me?&rdquo;
        </i>
        <br />
        <i>
          &ldquo;What if they&rsquo;re too afraid to ask just like I was?&rdquo;
        </i>{" "}
        <br />
        <br />
        That quiet moment, that small realization, changed something deep within
        me. <br />
        And that&rsquo;s how <b>Zuhraa</b> was born. <br />
        <br />
        <b>Zuhraa</b> is a gentle space crafted from my own heart, <br />
        for anyone who&rsquo;s ever forgotten, <br />
        for anyone who deeply wants to remember, and <br />
        for anyone who longs to understand without fear or shame 💛. <br />
        <br />
        This is for those who are still finding their way back 🛤️. <br />
        For the ones who seek the stories of the Prophets 📜. <br />
        For the ones who crave the strength of the Sahabah ⚔️. <br />
        For the ones who just want to reconnect with the light of Islam in the
        softest possible way 🌙. <br />
        For the ones who forget the stories of the Prophets, but never stop
        longing to remember 🤍. <br />
        For the ones who forget the names of the noble Sahabiyat, but still
        carry love for them in their hearts. <br />
        For the ones who can&rsquo;t recall the legacies of the Khulafaa, but
        wish they could 🏛️. <br />
        For the ones who forget the miracles of the Awliyaa and the signs of the
        Prophets, but feel something stir inside when they hear them again ✨.{" "}
        <br />
        For the ones who never learned the basics of Islam and for the ones
        relearning it with trembling hope 🌿. <br />
        For the ones searching for the purpose of their life, wondering where
        faith fits into it all 🧭. <br />
        For the ones who carry questions but are too afraid to ask ❓ <br />
        For the ones whose hearts have always quietly whispered, &ldquo;I wish I
        knew more.&rdquo; 💫 <br />
        <br />
        <b>Zuhraa</b> isn&rsquo;t just an app. It&rsquo;s a prayer 🕊️. <br />
        A warm hand reaching out 🤝. <br />
        A quiet return to love ❤️. <br />
        And a safe journey into remembrance together 🌌. <br />
        <br />
      </div>

      <p className="font-black mb-6 text-2xl">
        Where did the name <b>&quot;Zuhraa&quot;</b> come from? <br />
      </p>

      <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] p-3 leading-relaxed">
        🌙 <b>Zuhraa &mdash; a name born from light</b> <br />
        <br />
        Zuhraa is not just an app. It&rsquo;s a gentle space 🧡. <br />
        It&rsquo;s a return to what your soul might be yearning for 🌠. <br />
        But first... why the name Zuhraa? <br />
        <br />
        The name was first inspired by <b>Fatima al-Zahra (R.A.)</b> 🕊️ <br />
        The daughter of the Prophet Muhammad ﷺ. <br />
        She was known as <i>al-Zahra</i>, meaning{" "}
        <i>&ldquo;The Radiant.&rdquo;</i> 🌟 <br />
        A woman of unmatched strength, purity, and light. <br />
        Whose legacy continues to glow through generations. <br />
        Her name carries a timeless softness that felt like the perfect
        beginning. <br />
        <br />
        But there&rsquo;s a second light behind the name&hellip; <br />
        It&rsquo;s also named after someone deeply precious to me, my friend{" "}
        <b>Fatima Zahraa</b>. <br />
        Her presence in my life has been a reflection of calmness, comfort, and
        courage 🌸. <br />
        Her name, her soul&mdash;they became part of this dream without even
        trying. <br />I love her deeply, and this is my quiet way of saying{" "}
        <b>Thank you for existing.</b> 🤍
      </div>
    </div>
  );
}

function UrduContent() {
  return (
    <div className="max-w-4xl mx-auto text-right font-urdu" dir="rtl">
      <h1 className="text-5xl font-bold mb-8 text-center">
        زُہراء کے بارے میں
      </h1>

      <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-[#0d1d16] p-3 mb-4 leading-[2.5rem]">
        جب کبھی بات انبیاء کرامؑ پر آتی، <br />
        میں اکثر ایک مانوس سی کشمکش میں مبتلا ہوجاتی۔ <br />
        کبھی کوئی قصہ فوراً یاد آجاتا — جیسے وہ نبی جنہوں نے چیونٹی سے بات کی
        تھی 🐜، <br />
        بالکل صاف، روشن، واضح۔ <br />
        اور کبھی جب یاد کرنے کی کوشش کرتی کہ وہ کون نبی تھے جو اپنے ہاتھوں سے
        لوہا نرم کر لیتے تھے 🛠️ — <br />
        میرا ذہن بالکل خالی ہوجاتا۔ <br />
        <br />
        میں بہت کوشش کرتی… مگر کچھ بھی یاد نہ آتا۔ بس خاموشی۔ <br />
        اور انہی لمحوں میں، شرمندگی کی ایک لہر دل پر چھا جاتی 🌊۔ کبھی کبھی تو
        دل میں شرم کی شدت سے آنکھیں جھک جاتیں۔ <br />
        میں واقعی پوچھنا چاہتی تھی۔ ضرورت تھی۔ لیکن ایک خاموش سی، تیز دھار آواز
        میرے دل میں سرگوشی کرتی: <br />
        <i>"تمہیں یہ بھول کیسے سکتا ہے؟ یہ تو دین کی بنیادی باتیں ہیں!"</i>{" "}
        <br />
        <i>
          "تم کس قسم کی مسلمان ہو، جو انبیاء کے بارے میں نہیں جانتی؟" 🕊️
        </i>{" "}
        <br />
        <br />
        اور یوں میں خاموش رہتی۔ اس شرمندگی کو دل میں دبا لیتی — ایک ایسا بوجھ جو
        کسی سے نہ کہہ پاتی۔ <br />
        مگر پھر… ایک دن کچھ بدل گیا۔ <br />
        میرے دل میں ایک نرم سا خیال کِھلا 🌸 — ایک دھیمی سی سرگوشی نے پوچھا:{" "}
        <br />
        <i>"کیا یہ ممکن ہے کہ میں اکیلی نہیں ہوں؟"</i> <br />
        <i>"کیا کوئی اور بھی ایسا ہے، جو یاد نہیں رکھ پاتا؟"</i> <br />
        <i>
          "کیا کوئی اور بھی ہے، جو میرے جیسا شرمندہ ہے، پوچھ نہیں پاتا؟"
        </i>{" "}
        <br />
        <br />
        وہ خاموش لمحہ… وہ چھوٹا سا ادراک… میرے اندر کچھ بڑا بدل گیا۔ <br />
        اور یوں <b>زُہراء</b> بنی <br />
        <br />
        <b>زُہراء</b> ایک نرم گوشہ ہے — میرے اپنے دل سے نکلا ہوا، <br />
        ان سب کے لیے: <br />
        جو کبھی بھول جاتے ہیں، <br />
        جو دل سے یاد رکھنا چاہتے ہیں، اور <br />
        جو بغیر کسی ڈر یا شرمندگی کے سمجھنا چاہتے ہیں 💛 <br />
        <br />
        یہ اُن لوگوں کے لیے ہے <br />
        جو اب بھی اپنے راستے کی تلاش میں ہیں 🛤️ <br />
        جو انبیاء کی کہانیاں جاننا چاہتے ہیں 📜 <br />
        جو صحابہ کی قوت کو محسوس کرنا چاہتے ہیں ⚔️ <br />
        جو اسلام کی روشنی سے دوبارہ جُڑنا چاہتے ہیں — نرمی، محبت، اور سکون کے
        ساتھ 🌙 <br />
        جو انبیاء کی کہانیاں بھول جاتے ہیں، مگر یاد رکھنے کی تڑپ کبھی نہیں بجھتی
        🤍 <br />
        جو صحابیات کے نام یاد نہیں رکھ پاتے، مگر اُن سے بے پناہ محبت دل میں
        رکھتے ہیں <br />
        جو خلفاءِ راشدین کے کارنامے یاد نہیں رکھ پاتے، مگر جاننے کی خواہش رکھتے
        ہیں 🏛️ <br />
        جو اولیاء کے کرامات اور انبیاء کی نشانیاں بھول گئے ہیں، مگر دوبارہ سن کر
        دل میں روشنی محسوس کرتے ہیں ✨ <br />
        جو اسلام کی بنیادی باتیں کبھی سیکھ نہ سکے — یا اب کانپتے دل کے ساتھ
        دوبارہ سیکھنے کی کوشش کر رہے ہیں 🌿 <br />
        جو اپنی زندگی کا مقصد تلاش کر رہے ہیں، اور سوچتے ہیں کہ ایمان کا اس میں
        کیا مقام ہے 🧭 <br />
        جو سوال دل میں رکھتے ہیں، مگر پوچھنے سے گھبراتے ہیں ❓ <br />
        جن کے دل ہمیشہ آہستگی سے کہتے ہیں: <i>"کاش میں اور جانتی..."</i> 💫{" "}
        <br />
        <br />
        <b>زُہراء</b> صرف ایک ایپ نہیں ہے۔ یہ ایک دُعا ہے 🕊️ <br />
        ایک گرمجوش ہاتھ ہے، جو تمہاری طرف بڑھ رہا ہے 🤝 <br />
        محبت کی طرف ایک خاموش واپسی ہے ❤️ <br />
        اور یاد دہانی کے سفر میں ایک محفوظ ہمسفر 🌌 <br />
      </div>

      <p className="font-black mb-6 text-2xl">
        <b>"زُہراء"</b> کا نام کہاں سے آیا؟ <br />
      </p>

      <div className="lg:text-[18px] md:text-[16px] sm:text-[14px] p-3 leading-[2.5rem]">
        🌙 <b>زُہراء — ایک ایسا نام جو روشنی سے پیدا ہوا</b> <br />
        <br />
        زُہراء صرف ایک ایپ نہیں ہے۔ یہ ایک نرم گوشہ ہے 🧡 <br />
        ایسا مقام… جہاں شاید تمہاری روح لوٹنا چاہتی ہو 🌠 <br />
        لیکن سب سے پہلے... یہ نام <b>زُہراء</b> کیوں رکھا؟ <br />
        <br />
        یہ نام پہلے <b>حضرت فاطمہ الزہراءؓ</b> سے متاثر ہو کر رکھا گیا 🕊️ <br />
        حضرت محمد ﷺ کی صاحبزادی۔ <br />
        جو <i>الزہراء</i> کے لقب سے جانی جاتیں — <i>"روشن"</i> 🌟 <br />
        ایک ایسی ہستی، جو پاکیزگی، طاقت، اور روشنی کی علامت تھیں <br />
        جن کی روشنی نسلوں تک چمکتی رہی۔ <br />
        ان کا نام ایک ایسی نرمی رکھتا ہے، جو اس سفر کی شروعات کے لیے بالکل مناسب
        لگا۔ <br />
        <br />
        لیکن… اس نام کے پیچھے ایک دوسری روشنی بھی ہے… <br />
        یہ نام ایک بہت ہی پیاری دوست — <b>فاطمہ زہرا</b> — کے نام سے بھی متاثر
        ہے۔ <br />
        ان کی موجودگی میری زندگی میں سکون، حوصلہ، اور قرار کی مانند رہی 🌸{" "}
        <br />
        ان کا نام، ان کی روح — سب کچھ اس خواب کا حصہ بن گیا، بغیر کسی کوشش کے۔{" "}
        <br />
        <b>
          میں اُن سے دل سے محبت کرتی ہوں، اور یہ میرا خاموش سا طریقہ ہے کہ میں
          اُن سے کہہ سکوں: "شکریہ… تم اس دنیا میں ہو۔"
        </b>{" "}
        🤍
      </div>
    </div>
  );
}
