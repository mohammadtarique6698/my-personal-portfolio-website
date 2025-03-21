"use client";
import React, { useState, useTransition, useRef } from "react";
import Image from "next/image";
import TabButtons from "./TabButtons";
import { motion, useInView } from "framer-motion";

const TabData = [
  {
    title: "Skills",
    params: "Skills",
    content: (
      <ol className="pl-2" style={{ listStyleType: "disc" }}>
        <li>React.JS (Primary)</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>Node.JS</li>
        <li>RESTful APIs</li>
        <li>HTML, CSS</li>
        <li>SQL</li>
        <li>Tailwind CSS</li>
        <li>Material UI</li>
        <li>M365 Administrator</li>
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
        <li>Microsoft Certified Azure Fundamentals</li>
        <li>Microsoft Certified Power Platform Fundamentals</li>
        <li>Microsft 365 Certified Fundamentals</li>
        <li>Microsoft Certified Power Platform Developer Associate</li>
        <li>Infosys Certified Front End Developer</li>
        <li>Infosys Certified React Professional</li>
        <li>Infosys Certified JavaScript Programmer</li>
        <li>Infosys Certified Professional - Generative AI for All</li>
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
        <div className="mt-2 pl-2">
{/*           <p className="font-semibold">
            In CISSURE - (October 2022 - March 2024)
          </p> */}
          <ul className="mb-2" style={{ listStyleType: "disc" }}>
            <li>As a Frontend Developer with 2 years of experience, I developed a Real-Time Analytics Dashboard using
              React.js, UseContext, Chart.js, and Notistack, ensuring seamless data visualization and real-time notifications.
            </li>
            <li>I collaborated with my team to optimize the UI/UX of a Monitoring System using Tailwind CSS, Grid/Flexbox,
              and lazy loading techniques, improving performance and responsiveness.
            </li>
            <li>
              I worked collaboratively with my team to implement debouncing, optimizing API request frequency to reduce
              unnecessary calls and improve performance.
            </li>
            <li>
              I enhanced user interaction by implementing smooth animations and transitions using Framer Motion, Swiper.js
              in an acclerate project.
            </li>
            <li>
              Currently as an M365 Administrator, I support a project that resolves issues and requests across Microsoft
              365 services, including SharePoint (via SharePoint Admin Center), OneDrive for Business (via Microsoft Admin Center), 
              Microsoft Exchange (via Exchange Admin Center), Teams (via Teams Admin Center), Outlook, and productivity tools like Miro.
            </li>
          </ul>
{/*           <hr />
          <p className="font-semibold my-2">
            In MSPTW - (April 2024 - Present)
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li>Completed Microsoft certifications.</li>
            <li>Currently learning about M365 Technologies and aligning myself with latest frontend technologies like Next.js etc.</li>
          </ul> */}
        </div>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (params) => {
    startTransition(() => {
      setTab(params);
    });
  };

  const avatarVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-4">
        {/* width of the circle is given as w-250 and h-250 if we either increase h or w it will become oval */}
        <motion.div
          variants={avatarVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <Image src="/my-avatar.png" alt="avatar" width={800} height={800} />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 font-bold mb-4">
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
              Certifications (Internal & External){" "}
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
