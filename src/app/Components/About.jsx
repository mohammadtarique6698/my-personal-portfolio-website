"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Certifications from "./Certifications";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const avatarVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="about" className="text-white">
      <div
        className="
          flex flex-col
          items-center
          gap-10
          px-4 py-10
          sm:px-6 sm:py-14
          lg:grid
          lg:grid-cols-[2fr_3fr]   /* 40% / 60% */
          lg:items-center
          lg:gap-12
          lg:px-12 lg:py-16
          xl:gap-16 xl:px-16
        "
      >
        {/* LEFT: AVATAR */}
        <motion.div
          ref={ref}
          variants={avatarVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1 }}
          className="flex justify-center w-full h-full lg:justify-start"
        >
          <Image
            src="/my-avatar.png"
            alt="avatar"
            width={1000}
            height={1000}
            className="
              rounded-xl
              w-full
              h-full
              object-cover
              transition-transform duration-300 ease-out
              lg:hover:scale-[1.03]
            "
          />
        </motion.div>

        {/* RIGHT: CONTENT */}
        <div className="w-full">
          <TypeAnimation
            sequence={["About Me", 1000, "", 100]}
            wrapper="span"
            cursor={false}
            speed={60}
            className="block mb-6 text-3xl font-bold text-center text-transparent lg:text-left bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 sm:text-4xl"
            repeat={Infinity}
          />

          <div className="flex flex-col gap-10 mb-5">
            <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
              Experienced M365 Administrator with expertise in Power Platform,
              Power Automate, and Power BI, delivering efficient business
              solutions. Also a Frontend Developer specializing in React.js,
              focused on building intuitive user interfaces and exploring
              AI-driven features.
            </p>
          </div>

          {/* DUAL TRACK SECTION */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* FRONTEND CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10"
            >
              <h3 className="mb-4 text-xl font-bold text-pink-400">
                Frontend Engineering
              </h3>

              <ul className="pl-4 space-y-2 text-gray-300 list-disc">
                <li>Scalable web applications using React.js and Next.js</li>
                <li>Reusable components and modular UI architecture</li>
                <li>Responsive and accessible user interfaces</li>
                <li>REST API integration and state management</li>
                <li>Performance-focused and clean code practices</li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
                  React.js
                </span>
                <span className="px-3 py-1 font-medium rounded-full bg-pink-500/30">
                  Next.js
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20">
                  REST APIs
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20">
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20">
                  Framer Motion
                </span>
              </div>
            </motion.div>

            {/* M365 CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 border rounded-xl border-white/10 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
            >
              <h3 className="mb-4 text-xl font-bold text-indigo-400">
                M365 & Power Platform
              </h3>

              <ul className="pl-4 space-y-2 text-gray-300 list-disc">
                <li>Microsoft 365 tenant administration</li>
                <li>Power Platform and Power Automate solutions</li>
                <li>Power BI dashboards and reporting</li>
                <li>M365 workflow and collaboration integration</li>
                <li>Enterprise service and incident management</li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
                  Microsoft 365
                </span>
                <span className="px-3 py-1 font-medium rounded-full bg-indigo-500/30">
                  Power Platform
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  Power Automate
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  Power BI
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  SharePoint Online
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  OneDrive for Business
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  Microsoft Teams
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20">
                  Quarantine & Spam Policy Management
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="mb-12">
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
//         className="flex flex-col items-center gap-10 px-4 py-10 mx-auto sm:px-6 sm:py-14 lg:grid lg:grid-cols-3 lg:items-start lg:gap-12 lg:px-12 lg:py-16 xl:gap-16 xl:px-16 max-w-7xl"
//       >
//         {/* LEFT: AVATAR */}
//         <motion.div
//           ref={ref}
//           variants={avatarVariants}
//           initial="initial"
//           animate={isInView ? "animate" : "initial"}
//           transition={{ duration: 1 }}
//           className="w-full h-full lg:col-span-1"
//         >
//           <Image
//             src="/my-avatar.png"
//             alt="avatar"
//             width="1000"
//             height="1000"
//             className="
//       rounded-xl
//       w-full
//       h-full
//       object-cover
//       transition-transform duration-300 ease-out
//       lg:hover:scale-[1.03]
//     "
//           />
//         </motion.div>


//         {/* RIGHT: CONTENT */}
//         <div className="lg:col-span-2">
//           <TypeAnimation
//               sequence={[
//                 "About Me",
//                 1000,
//                 "",
//                 100
//               ]}
//               wrapper="span"
//               cursor={false}
//               speed={60}
//               className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
//               style={{ fontSize: "2em", fontWeight: "bold" }}
//               repeat={Infinity}
//             />
            
//         <div className="flex flex-col gap-10 mb-5">
//           {/* ABOUT HEADER */}
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
//         </div>

//       {/* CERTIFICATIONS */}
//       <div className="mb-12"><Certifications /></div>
//     </section>
//   );
// };

// export default About;
