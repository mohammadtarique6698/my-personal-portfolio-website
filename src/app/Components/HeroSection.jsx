"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ResumeLink = {
  link: "https://drive.google.com/file/d/1I7CXt3qgRIVaft50O5-45PPcKTWXcLe6/view?usp=sharing",
};

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 lg:col-span-8 lg:items-start"
        >
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Hello, This is Mohammad Tarique
            </span>

            <TypeAnimation
              sequence={[
                "An Experienced React.js Developer",
                2000,
                "An M365 Administrator experienced in Power Platform, Automate, & BI",
                2000,
                "A Passionate Coder, Tech Enthusiast, and AI Enthusiast",
                2000,
              ]}
              wrapper="div"
              speed={50}
              className="block mt-3 text-base text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 sm:text-lg lg:text-xl"
              repeat={Infinity}
            />
          </h1>

          <p className="text-left mb-6 text-base text-[#ADB7BE] sm:text-lg lg:pr-8">
            M365 Administrator with strong experience in Power Platform, Power
            Automate, and Power BI, delivering efficient and scalable business
            solutions across the Microsoft 365 ecosystem. Alongside this, I bring
            hands-on frontend development experience in React.js, building
            intuitive and responsive user interfaces, with a growing focus on
            AI-powered web solutions. I enjoy bridging business needs with
            reliable, user-centric technology.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
              <button className="px-6 py-3 text-lg font-medium text-black bg-white rounded-full hover:bg-slate-200">
                Hire Me
              </button>
            </a>

            <a
              href={ResumeLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-lg font-medium text-white transition border border-white rounded-full hover:bg-white hover:text-black">
                Download My CV
              </button>
            </a>
          </div>
        </motion.div>

        {/* AVATAR */}
        <div className="flex justify-center lg:col-span-4 lg:-ml-6">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-slate-800">
            <Image
              src="/avatar.png"
              alt="avatar"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;



// "use client"; //this is for rectification of type animation error
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// const ResumeLink = {
//   link: "https://drive.google.com/file/d/1I7CXt3qgRIVaft50O5-45PPcKTWXcLe6/view?usp=sharing",
// };

// const HeroSection = () => {
//   return (
//     <section className="lg:py-6">
//       <div className="grid grid-cols-1 lg:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
//         >
//           <h1 className="mb-5 font-extrabold text-white text-8xl sm:text-4xl lg:text-6xl lg:leading-normal">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">{`Hello, I'm Tarique`}</span>
//             <div className="p-4"></div>
//             {/* <TypeAnimation
//               sequence={[
//                 // Same substring at the start will only be typed out once, initially
//                 "Tarique",
//                 1000, // wait 1s before replacing "Mice" with "Hamsters"
//                 "A React Developer",
//                 1000,
//                 "A Front End Developer",
//                 1000,
//                 "A Web Developer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               style={{ fontSize: "1em" }}
//               repeat={Infinity}
//             /> */}

//             {/* Changed Code */}
//             <TypeAnimation
//               sequence={[
//                 "An Experienced React.js Developer",
//                 2000,
//                 "An M365 Administrator experienced in Power Platform, Automate, & BI",
//                 2000,
//                 "A Passionate Coder, Tech Enthusiast, and AI Enthusiast",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
//               style={{ fontSize: "0.7em", lineHeight: "1.1" }}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] pt-4 text-lg sm:text-lg lg:text-xl mb-8">
//             {/* Experienced Frontend Developer with a focus on React JS, adept at
//             crafting seamless user interfaces. Passionate about delivering
//             visually appealing and user-friendly solutions through a combination
//             of creativity and technical expertise. */}
//             M365 Administrator with strong experience in Power Platform, Power Automate, and Power BI, delivering efficient and scalable business solutions across the Microsoft 365 ecosystem. Alongside this, I bring hands-on frontend development experience in React.js, building intuitive and responsive user interfaces, with a growing focus on integrating AI-powered features into modern web solutions. I enjoy working across both platforms and frontend layers, bridging business requirements with reliable, user-centric technical solutions.
//           </p>
//           <div>
//             <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
//               <button className="w-full px-6 py-3 mb-3 mr-3 text-lg text-black bg-white rounded-full hover:bg-slate-200 sm:w-fit">
//                 Hire Me
//               </button>
//             </a>
//             <a href={ResumeLink.link} target="_blank" rel="noopener noreferrer">
//               <button className="w-full px-6 py-3 text-lg text-black bg-transparent bg-white border border-white rounded-full hover:bg-slate-800 hover:text-white sm:w-fit">
//                 Download My CV
//               </button>
//             </a>
//           </div>
//         </motion.div>
//         <div className="col-span-4 mt-4 place-self-center lg:mt-0">
//           <div className="rounded-full bg-slate-800 relative w-[250px] h-[250px]">
//             {/* width of the circle is given as w-250 and h-250 if we either increase h or w it will become oval */}
//             <Image
//               src="/avatar.png"
//               alt="avatar"
//               className="absolute transform -translate-x-0 -translate-y-0"
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
