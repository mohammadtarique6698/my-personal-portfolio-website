"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Certifications from "./Certifications";
import { motion, useInView } from "framer-motion";

const skillBadge = (text, color) => (
  <span
    key={text}
    className="px-3 py-1 text-xs font-medium transition-all duration-200 border rounded-full cursor-default hover:scale-105"
    style={{
      background: `${color}18`,
      borderColor: `${color}35`,
      color: color,
    }}
  >
    {text}
  </span>
);

const frontendSkills = [
  ["React.js", "#e040fb"],
  ["Next.js", "#e040fb"],
  ["JavaScript", "#c084fc"],
  ["Tailwind CSS", "#c084fc"],
  ["REST APIs", "#a855f7"],
  ["Node.js", "#a855f7"],
  ["Framer Motion", "#9333ea"],
];

const m365Skills = [
  ["Microsoft 365", "#6366f1"],
  ["Power Platform", "#6366f1"],
  ["Power Automate", "#818cf8"],
  ["Power BI", "#818cf8"],
  ["SharePoint Online", "#a5b4fc"],
  ["Microsoft Teams", "#a5b4fc"],
  ["OneDrive", "#c7d2fe"],
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-2 text-white">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(224,64,251,0.4))" }} />
        <span
          className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
          style={{
            background: "rgba(224,64,251,0.08)",
            borderColor: "rgba(224,64,251,0.25)",
            color: "#e040fb",
          }}
        >
          About Me
        </span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.4), transparent)" }} />
      </motion.div>

      <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16">
        {/* LEFT: AVATAR */}
        <motion.div
          ref={ref}
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-sm mx-auto lg:mx-0"
        >
          {/* Decorative corner accents */}
          <div
            className="absolute z-10 w-16 h-16 border-t-2 border-l-2 pointer-events-none -top-3 -left-3 rounded-tl-xl"
            style={{ borderColor: "#e040fb" }}
          />
          <div
            className="absolute z-10 w-16 h-16 border-b-2 border-r-2 pointer-events-none -bottom-3 -right-3 rounded-br-xl"
            style={{ borderColor: "#7c3aed" }}
          />

          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "scale(1.1)",
            }}
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.12)",
            }}
          >
            <Image
              src="/my-avatar.png"
              alt="Mohammad Tarique"
              width={1000}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-auto"
            />
            {/* <Image
              src="/my-avatar.png"
              alt="Mohammad Tarique"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            /> */}
            {/* Gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background: "linear-gradient(to top, rgba(10,10,15,0.6), transparent)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2
  className="mb-5 text-3xl font-bold text-center lg:text-left sm:text-4xl"
  style={{
    fontFamily: "'Syne', sans-serif",
    background:
      "linear-gradient(135deg, #e040fb 0%, #7c3aed 50%, #22d3ee 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}
>
  Microsoft 365 & AI Solutions Engineer
</h2>

          {/* <h2
            className="mb-5 text-3xl font-bold sm:text-4xl"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #e040fb 0%, #7c3aed 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Full-Stack Problem Solver
          </h2> */}

          <p className="text-base leading-relaxed text-[#8892a4] mb-8 lg:text-lg">
            Experienced M365 Administrator with expertise in Power Platform,
            Power Automate, and Power BI, delivering efficient business
            solutions. Also a Frontend Developer specializing in React.js,
            focused on building intuitive user interfaces and exploring
            AI-driven features.
          </p>

          {/* DUAL TRACK CARDS */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* FRONTEND CARD */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative p-5 overflow-hidden rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(224,64,251,0.06) 0%, rgba(124,58,237,0.06) 100%)",
                border: "1px solid rgba(224,64,251,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, #e040fb, #7c3aed)" }}
              />

              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex items-center justify-center w-8 h-8 text-lg rounded-lg"
                  style={{ background: "rgba(224,64,251,0.15)" }}
                >
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-pink-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Frontend Engineering
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-[#8892a4] mb-4">
                {[
                  "Scalable web apps with React.js & Next.js",
                  "Reusable components & modular architecture",
                  "Responsive & accessible interfaces",
                  "REST API integration & state management",
                  "Performance-focused & clean code practices",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1 h-1 mt-1 rounded-full" style={{ background: "#e040fb" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {frontendSkills.map(([text, color]) => skillBadge(text, color))}
              </div>
            </motion.div>

            {/* M365 CARD */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative p-5 overflow-hidden rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(59,130,246,0.06) 100%)",
                border: "1px solid rgba(99,102,241,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, #6366f1, #3b82f6)" }}
              />

              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex items-center justify-center w-8 h-8 text-lg rounded-lg"
                  style={{ background: "rgba(99,102,241,0.15)" }}
                >
                  ☁️
                </div>
                <h3 className="text-lg font-bold text-indigo-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                  M365 & Power Platform
                </h3>
              </div>

              <ul className="space-y-2 text-sm text-[#8892a4] mb-4">
                {[
                  "Microsoft 365 tenant administration",
                  "Power Platform & Power Automate solutions",
                  "Power BI dashboards & reporting",
                  "M365 workflow & collaboration integration",
                  "Enterprise service & incident management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1 h-1 mt-1 rounded-full" style={{ background: "#6366f1" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {m365Skills.map(([text, color]) => skillBadge(text, color))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="mt-16">
        <Certifications />
      </div>
    </section>
  );
};

export default About;


// "use client";
// import React, { useRef } from "react";
// import Image from "next/image";
// import Certifications from "./Certifications";
// import { motion, useInView } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const avatarVariants = {
//     initial: { x: 50, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//   };

//   return (
//     <section id="about" className="text-white">
//       <div
//         className="
//           flex flex-col
//           items-center
//           gap-10
//           px-4 py-10
//           sm:px-6 sm:py-14
//           lg:grid
//           lg:grid-cols-[2fr_3fr]   /* 40% / 60% */
//           lg:items-center
//           lg:gap-12
//           lg:px-12 lg:py-16
//           xl:gap-16 xl:px-16
//         "
//       >
//         {/* LEFT: AVATAR */}
//         <motion.div
//           ref={ref}
//           variants={avatarVariants}
//           initial="initial"
//           animate={isInView ? "animate" : "initial"}
//           transition={{ duration: 1 }}
//           className="flex items-center justify-center w-full h-full lg:justify-start"
//         >
//           <Image
//             src="/my-avatar.png"
//             alt="avatar"
//             width={1000}
//             height={1000}
//             className="
//               rounded-xl
//               w-full
//               h-full
//               object-cover
//               transition-transform duration-300 ease-out
//               lg:hover:scale-[1.03]
//             "
//           />
//         </motion.div>

//         {/* RIGHT: CONTENT */}
//         <div className="w-full">
//           <TypeAnimation
//             sequence={["About Me", 1000, "", 100]}
//             wrapper="span"
//             cursor={false}
//             speed={60}
//             className="block mb-6 text-3xl font-bold text-center text-transparent lg:text-left bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 sm:text-4xl"
//             repeat={Infinity}
//           />

//           <div className="flex flex-col gap-10 mb-5">
//             <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
//               Experienced M365 Administrator with expertise in Power Platform,
//               Power Automate, and Power BI, delivering efficient business
//               solutions. Also a Frontend Developer specializing in React.js,
//               focused on building intuitive user interfaces and exploring
//               AI-driven features.
//             </p>
//           </div>

//           {/* DUAL TRACK SECTION */}
//           <div className="grid gap-6 md:grid-cols-2">
//             {/* FRONTEND CARD */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10"
//             >
//               <h3 className="mb-4 text-xl font-bold text-pink-400">
//                 Frontend Engineering
//               </h3>

//               <ul className="pl-4 space-y-2 text-gray-300 list-disc">
//                 <li>Scalable web applications using React.js and Next.js</li>
//                 <li>Reusable components and modular UI architecture</li>
//                 <li>Responsive and accessible user interfaces</li>
//                 <li>REST API integration and state management</li>
//                 <li>Performance-focused and clean code practices</li>
//               </ul>

//               <div className="flex flex-wrap gap-2 mt-4 text-sm">
//                 <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
//                   React.js
//                 </span>
//                 <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
//                   Next.js
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
//                   JavaScript
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
//                   Tailwind CSS
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
//                   REST APIs
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
//                   Node.js
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
//                   Framer Motion
//                 </span>
//               </div>
//             </motion.div>

//             {/* M365 CARD */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
//             >
//               <h3 className="mb-4 text-xl font-bold text-indigo-400">
//                 M365 & Power Platform
//               </h3>

//               <ul className="pl-4 space-y-2 text-gray-300 list-disc">
//                 <li>Microsoft 365 tenant administration</li>
//                 <li>Power Platform and Power Automate solutions</li>
//                 <li>Power BI dashboards and reporting</li>
//                 <li>M365 workflow and collaboration integration</li>
//                 <li>Enterprise service and incident management</li>
//               </ul>

//               <div className="flex flex-wrap gap-2 mt-4 text-sm">
//                 <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
//                   Microsoft 365
//                 </span>
//                 <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
//                   Power Platform
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   Power Automate
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   Power BI
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   SharePoint Online
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   OneDrive for Business
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   Microsoft Teams
//                 </span>
//                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
//                   Quarantine & Spam Policy Management
//                 </span>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* CERTIFICATIONS */}
//       <div className="mb-12">
//         <Certifications />
//       </div>
//     </section>
//   );
// };

// export default About;



// // "use client";
// // import React, { useRef } from "react";
// // import Image from "next/image";
// // import Certifications from "./Certifications";
// // import { motion, useInView } from "framer-motion";
// // import { TypeAnimation } from "react-type-animation";

// // const About = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });

// //   const avatarVariants = {
// //     initial: { x: 50, opacity: 0 },
// //     animate: { x: 0, opacity: 1 },
// //   };

// //   return (
// //     <section id="about" className="text-white">
// //       <div
// //         className="flex flex-col items-center gap-10 px-4 py-10 mx-auto sm:px-6 sm:py-14 lg:grid lg:grid-cols-3 lg:items-start lg:gap-12 lg:px-12 lg:py-16 xl:gap-16 xl:px-16 max-w-7xl"
// //       >
// //         {/* LEFT: AVATAR */}
// //         <motion.div
// //           ref={ref}
// //           variants={avatarVariants}
// //           initial="initial"
// //           animate={isInView ? "animate" : "initial"}
// //           transition={{ duration: 1 }}
// //           className="w-full h-full lg:col-span-1"
// //         >
// //           <Image
// //             src="/my-avatar.png"
// //             alt="avatar"
// //             width="1000"
// //             height="1000"
// //             className="
// //       rounded-xl
// //       w-full
// //       h-full
// //       object-cover
// //       transition-transform duration-300 ease-out
// //       lg:hover:scale-[1.03]
// //     "
// //           />
// //         </motion.div>


// //         {/* RIGHT: CONTENT */}
// //         <div className="lg:col-span-2">
// //           <TypeAnimation
// //               sequence={[
// //                 "About Me",
// //                 1000,
// //                 "",
// //                 100
// //               ]}
// //               wrapper="span"
// //               cursor={false}
// //               speed={60}
// //               className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
// //               style={{ fontSize: "2em", fontWeight: "bold" }}
// //               repeat={Infinity}
// //             />
            
// //         <div className="flex flex-col gap-10 mb-5">
// //           {/* ABOUT HEADER */}
// //             <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
// //               Experienced M365 Administrator with expertise in Power Platform,
// //               Power Automate, and Power BI, delivering efficient business
// //               solutions. Also a Frontend Developer specializing in React.js,
// //               focused on building intuitive user interfaces and exploring
// //               AI-driven features.
// //             </p>
// //           </div>

// //           {/* DUAL TRACK SECTION */}
// //           <div className="grid gap-6 md:grid-cols-2">
// //             {/* FRONTEND CARD */}
// //             <motion.div
// //               whileHover={{ y: -5 }}
// //               transition={{ type: "spring", stiffness: 200 }}
// //               className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10"
// //             >
// //               <h3 className="mb-4 text-xl font-bold text-pink-400">
// //                 Frontend Engineering
// //               </h3>

// //               <ul className="pl-4 space-y-2 text-gray-300 list-disc">
// //                 <li>Scalable web applications using React.js and Next.js</li>
// //                 <li>Reusable components and modular UI architecture</li>
// //                 <li>Responsive and accessible user interfaces</li>
// //                 <li>REST API integration and state management</li>
// //                 <li>Performance-focused and clean code practices</li>
// //               </ul>

// //               <div className="flex flex-wrap gap-2 mt-4 text-sm">
// //                 <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
// //                   React.js
// //                 </span>
// //                 <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
// //                   Next.js
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
// //                   JavaScript
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
// //                   Tailwind CSS
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
// //                   REST APIs
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
// //                   Node.js
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-pink-500/20">
// //                   Framer Motion
// //                 </span>
// //               </div>
// //             </motion.div>

// //             {/* M365 CARD */}
// //             <motion.div
// //               whileHover={{ y: -5 }}
// //               transition={{ type: "spring", stiffness: 200 }}
// //               className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
// //             >
// //               <h3 className="mb-4 text-xl font-bold text-indigo-400">
// //                 M365 & Power Platform
// //               </h3>

// //               <ul className="pl-4 space-y-2 text-gray-300 list-disc">
// //                 <li>Microsoft 365 tenant administration</li>
// //                 <li>Power Platform and Power Automate solutions</li>
// //                 <li>Power BI dashboards and reporting</li>
// //                 <li>M365 workflow and collaboration integration</li>
// //                 <li>Enterprise service and incident management</li>
// //               </ul>

// //               <div className="flex flex-wrap gap-2 mt-4 text-sm">
// //                 <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
// //                   Microsoft 365
// //                 </span>
// //                 <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
// //                   Power Platform
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   Power Automate
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   Power BI
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   SharePoint Online
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   OneDrive for Business
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   Microsoft Teams
// //                 </span>
// //                 <span className="px-3 py-1 rounded-full bg-indigo-500/20">
// //                   Quarantine & Spam Policy Management
// //                 </span>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //         </div>

// //       {/* CERTIFICATIONS */}
// //       <div className="mb-12"><Certifications /></div>
// //     </section>
// //   );
// // };

// // export default About;
