"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/context/Provider";
import { useContext } from "react";
import { context } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          <ColorWrapper>{children}</ColorWrapper>
        </Provider>
      </body>
    </html>
  );
}


function ColorWrapper({ children }: { children: React.ReactNode }) {
  const { color } = useContext(context);
  return <div className={color ? "bg-sky-50 h-[100vh] text-black" : "bg-black h-[100vh] text-white"}>{children}</div>;
}
