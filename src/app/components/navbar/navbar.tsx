"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/nuancelogo.svg";
import SettingsGear from "../../../../public/settings-gear.svg"; 
import Searchbar from "../searchbar/searchbar";


interface navbarProps {
  name: string;
  href: string;
}

const Navbar: React.FC<{ navigation: navbarProps[] }> = ({ navigation }) => {
  // Define the initial and hover text colors
  const initialTextColor = "black";
  const hoverTextColor = "darkgrey";

  // Define a style object for the list items
  const listItemStyle = {
    color: initialTextColor,
    transition: "color 0.3s ease-in-out", // Add a transition for smooth color change
  };

  // Function to handle mouse enter (hover) event
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    // Change the text color to hoverTextColor when the mouse enters
    e.currentTarget.style.color = hoverTextColor;
  };

  // Function to handle mouse leave event
  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    // Change the text color back to initialTextColor when the mouse leaves
    e.currentTarget.style.color = initialTextColor;
  };

  return (
    <nav className="w-full h-24 animate-fade-in shadow-xl bg-black flex items-start">
      <ul className="flex items-center w-full h-full justify-center px-4 text-white =">
          <ul className='hidden sm:flex'>
    	      <Link href="/about">
              <li className='ml-10 hover:'>About</li>
            </Link>
            <Link href="/">
            <Image src={Logo}
             alt={"Logo"}
            width={100}
            height={100}
            className=''
            priority>
            </Image>
          </Link>
            <Link href="/shopping">
              <li className='ml-10 hover: sm:flex'>Shopping</li>
            </Link>
            <Link href="/Sale">
              <li className='ml-10 hover: sm:flex'>Images</li>
            </Link>
            <Link href="/blog">
              <li className='ml-10 hover: sm:flex'>Maps</li>
            </Link>
            <Link href="/settings">
            <Image src={SettingsGear}
             alt={"Logo"}
            width={25}
            height={25}
            className='ml-10 hover: sm:flex'
            priority>
            </Image>
            </Link>
            </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
