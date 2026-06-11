import type { Metadata } from "next";
import AuthSync from "@/components/AuthSync";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VTU Buddy",
  description: "Your AI Powered VTU Student Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${openSans.className} min-h-full flex flex-col`}
      >
        <AuthSync />
        {children}
      </body>
    </html>
  );
}