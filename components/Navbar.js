import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const menu = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "register",
    link: "/register",
  },
  {
    name: "login",
    link: "/login",
  },
  {
    name: "edit",
    link: "/edit",
  },
 
];

export const Navbar = () => {
  return (
    <nav className="bg-white sticky flex items-center shadow-md justify-between top-0 text-white py-3 px-3 md:px-[20%]">
      <div className="logo-area cursor-pointer">
        <h2 className="font-bold text-2xl text-red-500 hidden md:block">
          Red <span className="text-green-500">Rose</span> Mission
        </h2>
        <h2 className="font-bold text-2xl text-red-500 md:hidden">Re<span className="text-green-500">Ro</span>Mi</h2>
      </div>
      <div className="search-box rounded-md hidden bg-zinc-200 md:flex items-center gap-0 px-2 w-[300px]">
        <FiSearch className="text-zinc-700" size={20} />
        <input
          type="search"
          name="search"
          id="search-box"
          className="rounded-lg py-2 bg-zinc-200 px-2 w-full focus:outline-none text-zinc-700"
        />
      </div>
      <div className="menu">
        <ul className="flex text-md bg-red-500 rounded-md">
          {menu.map((item, index) => (
            <Link href={`${item.link}`} key={index}>
              <li
                className="border-b-2 
              border-transparent transition-all 
              duration-300 md:px-4 rounded-md md:py-3 p-2 hover:bg-red-600 ease-in-out"
              >
                <a className="capitalize font-semibold">{item.name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
