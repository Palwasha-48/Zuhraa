import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuhraa - Islamic App",
  description: "An Islamic knowledge hub for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#F9F7F3] text-[#1B4332] m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
