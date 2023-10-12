"use client";
import Logo from "../Logo/logo";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function NavbarHome() {
  return (
    <nav className="bg-black dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-900 dark:border-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
          <ul>
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg- md:dark:bg-gray-900 dark:border-gray-900">
            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                blog
              </a>
            </li>
            <li>
              <a
                href="/shopping"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                shopping
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
