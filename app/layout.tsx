import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Ibra — Market & Growth Advisory",
  description: "We're shaping the way business is done.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${publicSans.variable} font-body`}
      >
        <CartProvider>
          <AnnouncementBar />
          <Nav />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
