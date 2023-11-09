"use client";
import { User } from "next-auth";
import Link from "next/link";

interface navbarProps{
  name: string;
  href: string;
}

type Props = {
  user: User,
  pagetype: string,
}

const NavbarHome: React.FC<{ navigation: navbarProps[]}> = ({ navigation }) => {
  // Define the initial and hover text colors
  const initialTextColor = "white";
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
    <nav className="bg-white sticky dark:bg-black w-full h-12 z-20 top-0 left-0 border-b border-white dark:border-gray-900 align items-center">
      <ul className="flex items-center justify-between p-4 md:p-0 mt-4 font-medium border border-white bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg- md:dark:bg-black dark:bg-gray-800">
        <div className="flex items-center"> {/* This div contains the left-aligned links */}
          {navigation.map((item) => (
            <li
              key={item.href}
              style={listItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className="block py-4 my-5 pl-3 pr-4 text-black rounded hover:bg-blue-600">
                {item.name}
              </Link>
            </li>
          ))}
        </div>
        <li>
          <Link href="/login" className="block py-4 my-5 pl-3 pr-4 text-black rounded hover:bg-blue-600">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHome;
