import { Metadata } from "next";
import "./globals.css";
import { Phone, Menu, Apple, Search, User, ShoppingCart } from "lucide-react";
import React from "react";
import { MenuToggle } from "./components/MenuToggle";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Sam's Cabin",
  description: "Ahh Shit, Here We Go Again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-2 md:px-14 pt-36">
        <div className="fixed z-50 bg-white top-0 left-0 w-screen px-2">
        <div className="inline-flex justify-between w-full md:px-14 box-border ">
          <span className="inline-flex gap-2  py-1">
            <Phone size={24} className="mt-auto"/>
            <h1 className="font-bold text-lg">7605 802 236</h1>
            <span className="text-md text-gray-300 pt-[1px] font-bold ">Open Now!</span>
          </span>

          <span>
            <MenuToggle />
          </span>
        </div>
        <Header />
        <div className="w-full md:px-14 z-50 bg-white ">
          <Navbar />
        </div>
        </div>
        {children}
      </body>
    </html>
  );
}
