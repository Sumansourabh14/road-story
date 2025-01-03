import Footer from "@/components/customUi/Footer";
import Navbar from "@/components/customUi/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import KeepServerAlive from "@/components/KeepServerAlive";
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${brandTitle} | Wear Helmet!`,
  description: "A road safety awareness website for India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <KeepServerAlive />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
