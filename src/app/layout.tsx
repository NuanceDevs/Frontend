import "./globals.css";
import Logo  from "./components/Logo/logo";
import NavbarHome  from "./components/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/contact" },
];
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuancée",
  description: "Portfolio of Nuancée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <NavbarHome></NavbarHome>
      </header>
      <body>
        <Logo></Logo>
        {/* <Searchbar></Searchbar> */}
      </body>
      <footer>
        {/* <Footer></Footer> */}
      </footer>
    </html>
  );
}
