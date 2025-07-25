"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navTexts = {
    en: {
      home: "Home",
      about: "About",
      privacy: "Privacy",
      terms: "Terms",
      langToggle: "اردو",
    },
    ur: {
      home: "صفحۂ اول",
      about: "تعارف",
      privacy: "رازداری",
      terms: "شرائط",
      langToggle: "EN",
    },
  } as const;

  type Language = keyof typeof navTexts;

  const t = navTexts[language as Language];

  return (
    <nav className="backdrop-blur-md bg-[#1B4332]/90 text-[#F9F7F3] shadow-lg fixed w-full z-50 border-b border-[#F9F7F3]/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide text-[#F9F7F3]">Zuhraa</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg items-center">
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <Link href="/">{t.home}</Link>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <Link href="/about">{t.about}</Link>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <Link href="/privacy-policy">{t.privacy}</Link>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <Link href="/terms-of-use">{t.terms}</Link>
          </li>
          <li
            onClick={toggleLanguage}
            className="hover:text-[#FFD700] cursor-pointer transition-colors px-2"
          >
            {t.langToggle}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none text-3xl"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#1B4332]/95 backdrop-blur-md rounded-b-lg shadow-lg px-4 py-4 space-y-2"
          >
            <ul className="flex flex-col gap-2 text-lg">
              <li onClick={closeMobileMenu} className="hover:text-[#FFD700] cursor-pointer">
                <Link href="/">{t.home}</Link>
              </li>
              <li onClick={closeMobileMenu} className="hover:text-[#FFD700] cursor-pointer">
                <Link href="/about">{t.about}</Link>
              </li>
              <li onClick={closeMobileMenu} className="hover:text-[#FFD700] cursor-pointer">
                <Link href="/privacy-policy">{t.privacy}</Link>
              </li>
              <li onClick={closeMobileMenu} className="hover:text-[#FFD700] cursor-pointer">
                <Link href="/terms-of-use">{t.terms}</Link>
              </li>
              <li onClick={() => { toggleLanguage(); closeMobileMenu(); }} className="hover:text-[#FFD700] cursor-pointer">
                {t.langToggle}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
