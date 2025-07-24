"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="backdrop-blur-md bg-[#1B4332]/90 text-[#F9F7F3] shadow-lg fixed w-full z-50 border-b border-[#F9F7F3]/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide text-[#F9F7F3]">
            Zuhraa
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#FFD700] cursor-pointer transition-colors">
            <a href="/about">About</a>
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
              <li
                className="hover:text-[#FFD700] cursor-pointer"
                onClick={closeMobileMenu}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="hover:text-[#FFD700] cursor-pointer"
                onClick={closeMobileMenu}
              >
                <a href="/about">About</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
