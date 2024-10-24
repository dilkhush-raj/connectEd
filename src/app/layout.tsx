import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectEd",
  description: "This project is a student portal for ConnectEd",
  keywords: "ConnectEd, Student Portal, Next.js, React, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
