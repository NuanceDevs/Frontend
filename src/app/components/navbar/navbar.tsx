'use client';
import Logo from '../Logo/logo'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavbarWithDropdown() {
  return (
        <nav className="bg-black dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-900 dark:border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="flex items-center">
            <Logo></Logo>
        </a>
        <div className="flex md:order-2">
            <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-clack dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-black dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg- md:dark:bg-gray-900 dark:border-gray-900">
            <li>
                <a href="/about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="/blog" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">blog</a>
            </li>
            <li>
                <a href="/shopping" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">shopping</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
  )
};


