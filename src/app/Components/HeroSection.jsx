"use client"; //this is for rectification of type animation error
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ResumeLink = {
  link: "https://drive.google.com/file/d/1moU-CrgUhkgLzJWkbmIxe7-4oTwEbtvK/view?usp=sharing",
};

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">{`Hello, I'm `}</span>
            <TypeAnimation
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
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-lg lg:text-xl mb-8">
            Experienced Frontend Developer with a focus on React JS, adept at
            crafting seamless user interfaces. Passionate about delivering
            visually appealing and user-friendly solutions through a combination
            of creativity and technical expertise.
          </p>
          <div>
            <a href="mailto:mohammadtarique661998@gmail.com?subject=Regarding%20Job%20Opportunity">
              <button className="rounded-full text-lg px-6 py-3 mr-3 bg-white hover:bg-slate-200 text-black mb-3 w-full sm:w-fit">
                Hire Me
              </button>
            </a>
            <a href={ResumeLink.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-white rounded-full text-lg px-6 py-3 bg-transparent hover:bg-slate-800 text-black hover:text-white border border-white w-full sm:w-fit">
                Download My CV
              </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
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
