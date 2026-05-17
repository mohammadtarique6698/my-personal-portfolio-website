"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ResumeLink = {
  link: "https://drive.google.com/file/d/16PUmX0xF-BMM3pHrOhuunhFa1kKUWmRU/view?usp=sharing",
};

// Mini floating particle component
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: style.duration,
      delay: style.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const generateParticles = () =>
  Array.from({ length: 12 }, (_, i) => ({
    width: Math.random() * 4 + 2 + "px",
    height: Math.random() * 4 + 2 + "px",
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    background:
      i % 3 === 0 ? "#e040fb" : i % 3 === 1 ? "#7c3aed" : "#22d3ee",
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
    filter: "blur(1px)",
  }));

const HeroSection = () => {

  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current = generateParticles();
  }, []);

  return (
    <section className="relative py-4 overflow-hidden lg:py-10">
      {/* Ambient background blobs */}
      <div className="absolute rounded-full pointer-events-none -top-40 -left-40 w-96 h-96 bg-purple-600/10 blur-3xl" />
      <div className="absolute rounded-full pointer-events-none -bottom-20 -right-20 w-80 h-80 bg-cyan-500/8 blur-3xl" />

      {/* Floating particles */}
      {particlesRef.current.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      <div className="relative z-10 grid items-center grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 lg:col-span-7 lg:items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 font-medium"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-3xl font-extrabold leading-tight text-center text-white sm:text-5xl lg:text-6xl lg:text-left">
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #e040fb 0%, #7c3aed 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {"Hi, I'm Mohammad Tarique"}
            </span>

            <div className="mt-3 text-base sm:text-xl lg:text-2xl font-medium min-h-[2.5rem]">
              <TypeAnimation
                sequence={[
                  "React.js & Next.js Developer",
                  2000,
                  "M365 Administrator & Power Platform Expert",
                  2000,
                  "AI Enthusiast & Tech Builder",
                  2000,
                ]}
                wrapper="span"
                speed={55}
                className="block"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                repeat={Infinity}
              />
            </div>
          </h1>

          <p className="text-center lg:text-left max-w-xl text-base text-[#8892a4] sm:text-lg leading-relaxed lg:pr-4">
            M365 Administrator with expertise in Power Platform, Power Automate,
            and Power BI — building scalable business solutions across the
            Microsoft 365 ecosystem. Alongside, I craft intuitive React.js
            interfaces with a growing focus on AI-powered web solutions.
          </p>

          <div className="flex flex-col items-center gap-4 mt-2 sm:flex-row">
            <motion.a
              href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                className="relative px-8 py-3.5 text-base font-semibold text-white rounded-full overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #e040fb, #7c3aed)",
                  boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                }}
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-white/10 group-hover:opacity-100" />
              </button>
            </motion.a>

            <motion.a
              href={ResumeLink.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <button className="px-8 py-3.5 text-base font-semibold text-white rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300">
                Download CV
              </button>
            </motion.a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center w-full gap-8 pt-6 mt-4 border-t lg:justify-start border-white/10"
          >
            {[
              { number: "7+", label: "MS Certifications" },
              { number: "12+", label: "Projects Built" },
              { number: "4", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #e040fb, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-[#8892a4] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center lg:col-span-5"
        >
          <div className="relative">
            {/* Rotating outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #e040fb, #7c3aed, #22d3ee, #e040fb)",
                padding: "2px",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: "var(--bg-primary)" }}
              />
            </motion.div>

            {/* Second decorative ring */}
            <motion.div
              className="absolute border rounded-full -inset-4 border-purple-500/20"
              animate={{ rotate: -360, scale: [1, 1.02, 1] }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.2)",
              }}
            />

            {/* Avatar image */}
            <div
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
              style={{
                border: "3px solid transparent",
                background: "linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, #e040fb, #7c3aed, #22d3ee) border-box",
                boxShadow: "0 0 60px rgba(124,58,237,0.35), inset 0 0 30px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/avatar.png"
                alt="Mohammad Tarique"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 380px"
                className="object-contain rounded-full"
              />

              {/* <Image
                src="/avatar.png"
                alt="Mohammad Tarique"
                fill
                className="object-contain rounded-full"
                priority
              /> */}
            </div>

            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 bg-pink-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "130px 0px",
                boxShadow: "0 0 10px rgba(224,64,251,0.8)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "-120px 0px",
                boxShadow: "0 0 10px rgba(34,211,238,0.8)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;



// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// const ResumeLink = {
//   link: "https://drive.google.com/file/d/1I7CXt3qgRIVaft50O5-45PPcKTWXcLe6/view?usp=sharing",
// };

// const HeroSection = () => {
//   return (
//     <section className="py-8 lg:py-12">
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">

//         {/* TEXT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center gap-4 lg:col-span-8 lg:items-start"
//         >
//           <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl">
//             <span className="block text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
//               Hello, My Name is Mohammad Tarique
//             </span>

//             <TypeAnimation
//               sequence={[
//                 "An Experienced React.js Developer",
//                 2000,
//                 "An M365 Administrator experienced in Power Platform, Automate, & BI",
//                 2000,
//                 "A Passionate Coder, Tech Enthusiast, and AI Enthusiast",
//                 2000,
//               ]}
//               wrapper="div"
//               speed={50}
//               className="block mt-3 text-base text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 sm:text-lg lg:text-xl"
//               repeat={Infinity}
//             />
//           </h1>

//           <p className="text-left mb-6 text-base text-[#ADB7BE] sm:text-lg lg:pr-8">
//             M365 Administrator with strong experience in Power Platform, Power
//             Automate, and Power BI, delivering efficient and scalable business
//             solutions across the Microsoft 365 ecosystem. Alongside this, I bring
//             hands-on frontend development experience in React.js, building
//             intuitive and responsive user interfaces, with a growing focus on
//             AI-powered web solutions. I enjoy bridging business needs with
//             reliable, user-centric technology.
//           </p>

//           <div className="flex flex-col items-center gap-4 sm:flex-row">
//             <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
//               <button className="px-6 py-3 text-lg font-medium text-black bg-white rounded-full hover:bg-slate-200">
//                 Hire Me
//               </button>
//             </a>

//             <a
//               href={ResumeLink.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="px-6 py-3 text-lg font-medium text-white transition border border-white rounded-full hover:bg-white hover:text-black">
//                 Download My CV
//               </button>
//             </a>
//           </div>
//         </motion.div>

//         {/* AVATAR */}
//         <div className="flex justify-center lg:col-span-4 lg:-ml-6">
//           <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full bg-slate-800">
//             <Image
//               src="/avatar.png"
//               alt="avatar"
//               fill
//               className="object-contain rounded-full"
//               priority
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// // "use client"; //this is for rectification of type animation error
// // import React from "react";
// // import Image from "next/image";
// // import { TypeAnimation } from "react-type-animation";
// // import { motion } from "framer-motion";

// // const ResumeLink = {
// //   link: "https://drive.google.com/file/d/1I7CXt3qgRIVaft50O5-45PPcKTWXcLe6/view?usp=sharing",
// // };

// // const HeroSection = () => {
// //   return (
// //     <section className="lg:py-6">
// //       <div className="grid grid-cols-1 lg:grid-cols-12">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.5 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.5 }}
// //           className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
// //         >
// //           <h1 className="mb-5 font-extrabold text-white text-8xl sm:text-4xl lg:text-6xl lg:leading-normal">
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">{`Hello, I'm Tarique`}</span>
// //             <div className="p-4"></div>
// //             {/* <TypeAnimation
// //               sequence={[
// //                 // Same substring at the start will only be typed out once, initially
// //                 "Tarique",
// //                 1000, // wait 1s before replacing "Mice" with "Hamsters"
// //                 "A React Developer",
// //                 1000,
// //                 "A Front End Developer",
// //                 1000,
// //                 "A Web Developer",
// //                 1000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               style={{ fontSize: "1em" }}
// //               repeat={Infinity}
// //             /> */}

// //             {/* Changed Code */}
// //             <TypeAnimation
// //               sequence={[
// //                 "An Experienced React.js Developer",
// //                 2000,
// //                 "An M365 Administrator experienced in Power Platform, Automate, & BI",
// //                 2000,
// //                 "A Passionate Coder, Tech Enthusiast, and AI Enthusiast",
// //                 2000,
// //               ]}
// //               wrapper="span"
// //               speed={50}
// //               className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
// //               style={{ fontSize: "0.7em", lineHeight: "1.1" }}
// //               repeat={Infinity}
// //             />
// //           </h1>
// //           <p className="text-[#ADB7BE] pt-4 text-lg sm:text-lg lg:text-xl mb-8">
// //             {/* Experienced Frontend Developer with a focus on React JS, adept at
// //             crafting seamless user interfaces. Passionate about delivering
// //             visually appealing and user-friendly solutions through a combination
// //             of creativity and technical expertise. */}
// //             M365 Administrator with strong experience in Power Platform, Power Automate, and Power BI, delivering efficient and scalable business solutions across the Microsoft 365 ecosystem. Alongside this, I bring hands-on frontend development experience in React.js, building intuitive and responsive user interfaces, with a growing focus on integrating AI-powered features into modern web solutions. I enjoy working across both platforms and frontend layers, bridging business requirements with reliable, user-centric technical solutions.
// //           </p>
// //           <div>
// //             <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
// //               <button className="w-full px-6 py-3 mb-3 mr-3 text-lg text-black bg-white rounded-full hover:bg-slate-200 sm:w-fit">
// //                 Hire Me
// //               </button>
// //             </a>
// //             <a href={ResumeLink.link} target="_blank" rel="noopener noreferrer">
// //               <button className="w-full px-6 py-3 text-lg text-black bg-transparent bg-white border border-white rounded-full hover:bg-slate-800 hover:text-white sm:w-fit">
// //                 Download My CV
// //               </button>
// //             </a>
// //           </div>
// //         </motion.div>
// //         <div className="col-span-4 mt-4 place-self-center lg:mt-0">
// //           <div className="rounded-full bg-slate-800 relative w-[250px] h-[250px]">
// //             {/* width of the circle is given as w-250 and h-250 if we either increase h or w it will become oval */}
// //             <Image
// //               src="/avatar.png"
// //               alt="avatar"
// //               className="absolute transform -translate-x-0 -translate-y-0"
// //               width={300}
// //               height={300}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
