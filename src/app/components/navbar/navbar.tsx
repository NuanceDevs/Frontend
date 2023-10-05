"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../../../public/nuanceelogo.svg";
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
    <nav className="w-full h-24 animate-fade-in shadow-xl bg-white flex items-start">
      <ul className="flex items-center w-full h-full justify-center px-4 text-black =">
          <Link href="/">
            <Image src={Logo}
             alt={"Logo"}
            width={205}
            height={105}
            className=''
            priority>
            </Image>
          </Link>
          <Searchbar></Searchbar>
          <ul className='hidden sm:flex'>
    	      <Link href="/about">
              <li className='ml-10 hover: border-b text-xl'>About</li>
            </Link>
            <Link href="/shopping">
              <li className='ml-10 hover: border-b text-xl'>Shopping</li>
            </Link>
            <Link href="/Sale">
              <li className='ml-10 hover: border-b text-xl'>Images</li>
            </Link>
            <Link href="/blog">
              <li className='ml-10 hover: border-b text-xl'>Maps</li>
            </Link>
            </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
