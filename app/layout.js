"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [show, setShow] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="wrapper">
          <Navbar setShow={setShow} />
          {children}
          <Footer />
        </main>
        {show && <SideBar setShow={setShow} />}
      </body>
    </html>
  );
}
