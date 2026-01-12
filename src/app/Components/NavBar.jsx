"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../Components/NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const nL = [
  { target: "about", title: "About" },
  { target: "project", title: "Projects" },
  { target: "contact", title: "Contact" },
];

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-80">
      <div className="container flex flex-wrap items-center justify-between px-10 py-2 pt-4 mx-auto lg:py-4">
        <Link href="/" className="text-2xl font-semibold text-white md:text-5xl">
          <Image
            src="/my-image.png"
            alt="my-avatar"
            width={50}
            height={50}
            className="rounded"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setSideBarOpen((prev) => !prev)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {sideBarOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {nL.map((ele, index) => (
              <li key={index}>
                <NavLinks target={ele.target} title={ele.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sideBarOpen && <MenuOverlay links={nL} />}
    </nav>
  );
};

export default NavBar;


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import NavLinks from "../Components/NavLinks";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";

// const nL = [
//   {
//     target: "about",
//     title: "About",
//   },
//   {
//     target: "project",
//     title: "Projects",
//   },
//   {
//     target: "contact",
//     title: "Contact",
//   },
// ];

// const NavBar = () => {
//   const [sideBarOpen, setSideBarOpen] = useState(false);
//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-80">
//       <div className="container flex flex-wrap items-center justify-between py-2 pt-4 mx-auto lg:py-4 px-11">
//         <Link
//           href={"/"}
//           className="text-2xl font-semibold text-white md:text-5xl"
//         >
//           <Image
//             src="/my-image.png"
//             alt="my-avatar"
//             width={50}
//             height={50}
//             className="rounded"
//             style={{ backgroundSize: "cover" }}
//           />
//         </Link>
//         <div className="block mobile-menu md:hidden">
//           {!sideBarOpen ? (
//             <button
//               onClick={() => setSideBarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="w-5 h-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setSideBarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="w-5 h-5" />
//             </button>
//           )}
//         </div>
//         <div className="hidden menu md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
//             {nL.map((ele, index) => (
//               <li key={index}>
//                 <NavLinks target={ele.target} title={ele.title} />
//               </li>
//             ))}
//             {/* <a
//               href="https://drive.google.com/file/d/1PVrJiEdqQnq7KkjJW6a43HMtU_scp5CG/view?usp=drive_link"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
//                 Certificate Drive
//               </button>
//             </a> */}
//           </ul>
//         </div>
//       </div>
//       {sideBarOpen ? (
//         <MenuOverlay
//           links={nL}
//           // href="https://drive.google.com/file/d/1PVrJiEdqQnq7KkjJW6a43HMtU_scp5CG/view?usp=drive_link"
//         />
//       ) : null}
//     </nav>
//   );
// };

// export default NavBar;
