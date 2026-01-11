"use client"; //this is for rectification of type animation error
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ResumeLink = {
  link: "https://drive.google.com/file/d/1I7CXt3qgRIVaft50O5-45PPcKTWXcLe6/view?usp=sharing",
};

const HeroSection = () => {
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-5 font-extrabold text-white text-8xl sm:text-4xl lg:text-6xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">{`Hello, I'm Tarique`}</span>
            <div className="p-4"></div>
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tarique",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A React Developer",
                1000,
                "A Front End Developer",
                1000,
                "A Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            /> */}

            {/* Changed Code */}
            <TypeAnimation
              sequence={[
                "An Experienced React.js Developer",
                2000,
                "An M365 Administrator experienced in Power Platform, Automate, & BI",
                2000,
                "A Passionate Coder, Tech Enthusiast, and AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
              style={{ fontSize: "0.7em", lineHeight: "1.1" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] pt-4 text-lg sm:text-lg lg:text-xl mb-8">
            {/* Experienced Frontend Developer with a focus on React JS, adept at
            crafting seamless user interfaces. Passionate about delivering
            visually appealing and user-friendly solutions through a combination
            of creativity and technical expertise. */}
            M365 Administrator with strong experience in Power Platform, Power Automate, and Power BI, combined with hands-on frontend development in React.js and a growing focus on AI-powered web solutions.
          </p>
          <div>
            <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
              <button className="w-full px-6 py-3 mb-3 mr-3 text-lg text-black bg-white rounded-full hover:bg-slate-200 sm:w-fit">
                Hire Me
              </button>
            </a>
            <a href={ResumeLink.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full px-6 py-3 text-lg text-black bg-transparent bg-white border border-white rounded-full hover:bg-slate-800 hover:text-white sm:w-fit">
                Download My CV
              </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-4 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-slate-800 relative w-[250px] h-[250px]">
            {/* width of the circle is given as w-250 and h-250 if we either increase h or w it will become oval */}
            <Image
              src="/avatar.png"
              alt="avatar"
              className="absolute transform -translate-x-0 -translate-y-0"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
