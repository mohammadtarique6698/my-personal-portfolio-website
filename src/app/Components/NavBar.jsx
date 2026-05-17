"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const nL = [
  { target: "about", title: "About" },
  { target: "project", title: "Projects" },
  { target: "contact", title: "Contact" },
];

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.85)"
          : "rgba(10,10,15,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container flex items-center justify-between px-6 py-3 mx-auto lg:px-10">
        {/* Logo */}
        <Link href="/" className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div
              className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, rgba(224,64,251,0.3), rgba(124,58,237,0.3))",
                filter: "blur(8px)",
                transform: "scale(1.4)",
              }}
            />
            <Image
              src="/my-image.png"
              alt="Mohammad Tarique"
              width={44}
              height={44}
              className="relative border rounded-lg border-white/10"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-1 md:flex">
          {nL.map((ele, index) => (
            <ScrollLink
              key={index}
              to={ele.target}
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              onSetActive={() => setActiveSection(ele.target)}
              className="relative px-5 py-2 text-sm font-medium text-[#8892a4] hover:text-white transition-colors duration-200 cursor-pointer rounded-lg hover:bg-white/5 group"
            >
              {ele.title}
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4"
                style={{ background: "linear-gradient(90deg, #e040fb, #7c3aed)" }}
              />
            </ScrollLink>
          ))}

          {/* CTA button */}
          <motion.a
            href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2 ml-4 text-sm font-semibold text-white rounded-full"
            style={{
              background: "linear-gradient(135deg, #e040fb, #7c3aed)",
              boxShadow: "0 0 20px rgba(124,58,237,0.3)",
            }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setSideBarOpen((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 text-white border rounded-lg md:hidden border-white/10 bg-white/5"
        >
          {sideBarOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {sideBarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
            style={{
              background: "rgba(10,10,15,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nL.map((ele, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <ScrollLink
                    to={ele.target}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={() => setSideBarOpen(false)}
                    className="block py-3 px-4 text-base text-[#8892a4] hover:text-white rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    {ele.title}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: nL.length * 0.08 }}
                href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity"
                className="block px-4 py-3 mt-2 text-base font-semibold text-center text-white rounded-full"
                style={{ background: "linear-gradient(135deg, #e040fb, #7c3aed)" }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
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
//   { target: "about", title: "About" },
//   { target: "project", title: "Projects" },
//   { target: "contact", title: "Contact" },
// ];

// const NavBar = () => {
//   const [sideBarOpen, setSideBarOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-20 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-80">
//       <div className="container flex flex-wrap items-center justify-between px-10 py-2 pt-4 mx-auto lg:py-4">
//         <Link href="/" className="text-2xl font-semibold text-white md:text-5xl">
//           <Image
//             src="/my-image.png"
//             alt="my-avatar"
//             width={50}
//             height={50}
//             className="rounded"
//           />
//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="block md:hidden">
//           <button
//             onClick={() => setSideBarOpen((prev) => !prev)}
//             className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//           >
//             {sideBarOpen ? (
//               <XMarkIcon className="w-5 h-5" />
//             ) : (
//               <Bars3Icon className="w-5 h-5" />
//             )}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:block md:w-auto">
//           <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
//             {nL.map((ele, index) => (
//               <li key={index}>
//                 <NavLinks target={ele.target} title={ele.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {sideBarOpen && <MenuOverlay links={nL} />}
//     </nav>
//   );
// };

// export default NavBar;


// // "use client";
// // import React, { useState } from "react";
// // import Link from "next/link";
// // import NavLinks from "../Components/NavLinks";
// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// // import MenuOverlay from "./MenuOverlay";
// // import Image from "next/image";

// // const nL = [
// //   {
// //     target: "about",
// //     title: "About",
// //   },
// //   {
// //     target: "project",
// //     title: "Projects",
// //   },
// //   {
// //     target: "contact",
// //     title: "Contact",
// //   },
// // ];

// // const NavBar = () => {
// //   const [sideBarOpen, setSideBarOpen] = useState(false);
// //   return (
// //     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-80">
// //       <div className="container flex flex-wrap items-center justify-between py-2 pt-4 mx-auto lg:py-4 px-11">
// //         <Link
// //           href={"/"}
// //           className="text-2xl font-semibold text-white md:text-5xl"
// //         >
// //           <Image
// //             src="/my-image.png"
// //             alt="my-avatar"
// //             width={50}
// //             height={50}
// //             className="rounded"
// //             style={{ backgroundSize: "cover" }}
// //           />
// //         </Link>
// //         <div className="block mobile-menu md:hidden">
// //           {!sideBarOpen ? (
// //             <button
// //               onClick={() => setSideBarOpen(true)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// //             >
// //               <Bars3Icon className="w-5 h-5" />
// //             </button>
// //           ) : (
// //             <button
// //               onClick={() => setSideBarOpen(false)}
// //               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
// //             >
// //               <XMarkIcon className="w-5 h-5" />
// //             </button>
// //           )}
// //         </div>
// //         <div className="hidden menu md:block md:w-auto" id="navbar">
// //           <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
// //             {nL.map((ele, index) => (
// //               <li key={index}>
// //                 <NavLinks target={ele.target} title={ele.title} />
// //               </li>
// //             ))}
// //             {/* <a
// //               href="https://drive.google.com/file/d/1PVrJiEdqQnq7KkjJW6a43HMtU_scp5CG/view?usp=drive_link"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <button className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
// //                 Certificate Drive
// //               </button>
// //             </a> */}
// //           </ul>
// //         </div>
// //       </div>
// //       {sideBarOpen ? (
// //         <MenuOverlay
// //           links={nL}
// //           // href="https://drive.google.com/file/d/1PVrJiEdqQnq7KkjJW6a43HMtU_scp5CG/view?usp=drive_link"
// //         />
// //       ) : null}
// //     </nav>
// //   );
// // };

// // export default NavBar;
