import "./globals.css";
import Logo from "./components/Logo/logo";
import NavbarHome from "./components/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/components/navbar";
import Description from "./ui/components/description";
import { Session } from "inspector";
import UserCard  from "./ui/components/UserCard";
import Searchbar from "./components/searchbar/searchbar";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/ui/pages/projects" },
  { name: "Blog", href: "/ui/pages/blog" },
  { name: "About", href: "/ui/pages/about" },
  { name: "Login", href: "/api/auth/signin" },
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
      <body>
        <NavbarHome></NavbarHome>
        <div className="flex flex-col items-center justify-center h-screen">
          <Logo></Logo>
          <Searchbar></Searchbar>
        </div>
      </body>
    </html>
  );
}
