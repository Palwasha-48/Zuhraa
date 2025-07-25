import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext"; // ✅ use absolute path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
