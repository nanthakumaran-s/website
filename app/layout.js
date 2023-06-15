import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="wrapper">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
