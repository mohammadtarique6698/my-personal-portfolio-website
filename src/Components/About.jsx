"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButtons from "./TabButtons";

const TabData = [
  {
    title: "Skills",
    params: "Skills",
    content: (
      <ol className="pl-2" style={{ listStyleType: "disc" }}>
        <li>React.JS (Primary)</li>
        <li>JavaScript</li>
        <li>RESTful APIs</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.JS</li>
        <li>BootStrap</li>
        <li>Material UI</li>
        <li>Linux</li>
        <li>Python (Pandas, NumPy, Matplotlib)</li>
      </ol>
    ),
  },
  {
    title: "Education",
    params: "Education",
    content: (
      <ol className="pl-2" style={{ listStyleType: "disc" }}>
        <li>B.Tech: National Institute of Technology, Raipur</li>
        <li>12th: Senior Secondary School, Sector-X</li>
        <li>10th: Senior Secondary School, Sector-X</li>
      </ol>
    ),
  },
  {
    title: "Certifications",
    params: "Certifications",
    content: (
      <ol className="pl-2" style={{ listStyleType: "disc" }}>
        <li>Infosys Certified Front End Developer</li>
        <li>Infosys Certified React Professional</li>
        <li>Infosys Certified React Associate</li>
        <li>Infosys Certified React Web Developer</li>
        <li>Infosys Certified Node Developer</li>
        <li>Infosys Certified JavaScript Developer</li>
        <li>Infosys Certified Python Developer</li>
        <li>Infosys Certified Generative Ai Professional - Foundation</li>
        <li>Infosys Certified Professional - Generative AI for All</li>
        <li>Infosys Certified Cloud Begineer</li>
        <li>Infosys Certified Global Agile Developer</li>
      </ol>
    ),
  },
  {
    title: "Experience",
    params: "Experience",
    content: (
      <div>
        <h1 className="text-xl font-bold">Company: Infosys</h1>
        <h1 className="text-xl font-bold">Designation: Systems Engineer</h1>
        <h1 className="text-xl font-bold">DOJ: 14th April 2022 to Present</h1>
        <ol className="mt-2 pl-2" style={{ listStyleType: "disc" }}>
          <li>Working under CIS domain in CISSURE unit as DB Administrator.</li>
          <li>Created React based VM Monitoring and management web app.</li>
          <li>
            Manage and maintain SQL databases for multiple clients, monitors and
            optimizes database performance for optimal efficiency.
          </li>
        </ol>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (params) => {
    startTransition(() => {
      setTab(params);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-4">
        {/* width of the circle is given as w-250 and h-250 if we either increase h or w it will become oval */}
        <Image
          src="/my-avatar.png"
          alt="avatar"
          width={800}
          height={800}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 font-bold mb-4">
            About Me
          </h1>
          <p className="text-base lg:text-lg">
            I am a React Developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, React, Node.Js, HTML, CSS and git. Apart from that i
            also know Python and its libraries like Pandas, NumPy, Matplotlib. I
            am a motivated, enthusiast, a quick learner and i am always looking
            forward to learn new skills and expand my knowledge. I am also a
            team player and always ready to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButtons
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              {" "}
              Skills{" "}
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              {" "}
              Experience{" "}
            </TabButtons>
          </div>
          <div className="mt-4">
            {TabData.find((ele) => ele.params === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
