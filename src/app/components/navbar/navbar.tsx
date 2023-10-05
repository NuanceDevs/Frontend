"use client";
import Link from "next/link";
import React from "react";

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
    <nav className="my-16 animate-fade-in">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <li
            key={item.href}
            style={listItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
