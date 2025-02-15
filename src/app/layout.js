import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className=" pt-8 w-full bg-slate-800 text-white pb-28 mt-10">
          <section className="w-full container mx-auto px-5 text-center">
            <b>Made With ❤️ by Mugni</b>
          </section>
        </footer>
        <Navbar />
      </body>
    </html>
  );
}
