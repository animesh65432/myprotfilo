"use client";

import "./globals.css";
import Provider from "@/context/Provider";
import { useContext } from "react";
import { context } from "@/context";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Provider>
          <ColorWrapper>{children}</ColorWrapper>
        </Provider>
      </body>
    </html>
  );
}


function ColorWrapper({ children }: { children: React.ReactNode }) {
  const { color } = useContext(context);
  return <div className={color ? "bg-white h-[100vh] text-black" : "bg-black h-[100vh] text-white"}>{children}</div>;
}
