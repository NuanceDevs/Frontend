import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/components/navbar";
import Description from "./ui/components/description";
import { Session } from "inspector";
import UserCard  from "./ui/components/UserCard";

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
        <Navbar navigation={navigation} />
        {children}
      </body>
    </html>
  );
}
