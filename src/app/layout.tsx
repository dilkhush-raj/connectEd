import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "ConnectEd",
  description: "This project is a student portal for ConnectEd",
  keywords: "ConnectEd, Student Portal, Next.js, React, Tailwind CSS",
  openGraph: {
    title: "ConnectEd",
    description: "This project is a student portal for ConnectEd",
    images: "https://connect-ed.dilkhushraj.me/og.png",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Navbar name={"Gabrisa"} standard={7} subjects={"Math + Science"} />
        {children}
      </body>
    </html>
  );
}
