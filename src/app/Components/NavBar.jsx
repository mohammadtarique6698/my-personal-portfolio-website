"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../Components/NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const nL = [
  {
    target: "about",
    title: "About",
  },
  {
    target: "project",
    title: "Projects",
  },
  {
    target: "contact",
    title: "Contact",
  },
];

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-80">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto pt-4 px-11 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/my-image.png"
            alt="my-avatar"
            width={50}
            height={50}
            className="rounded"
            style={{ backgroundSize: "cover" }}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!sideBarOpen ? (
            <button
              onClick={() => setSideBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setSideBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {nL.map((ele, index) => (
              <li key={index}>
                <NavLinks target={ele.target} title={ele.title} />
              </li>
            ))}
            <a
              href="https://drive.google.com/file/d/1TLFPVzDd-eMxhKH4C1p3RLIduCiZMsOv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                Certificate Drive
              </button>
            </a>
          </ul>
        </div>
      </div>
      {sideBarOpen ? (
        <MenuOverlay
          links={nL}
          href="https://drive.google.com/file/d/1TLFPVzDd-eMxhKH4C1p3RLIduCiZMsOv/view?usp=sharing"
        />
      ) : null}
    </nav>
  );
};

export default NavBar;
