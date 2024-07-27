"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    imageURl: "/images/projects-image/p0.png",
    title: "React-NextJs based Responsive Portfolio Website",
    description:
      "Welcome to Tarique's Creative Hub!. I am Mohammad Tarique a dedicated Systems Engineer and passionate Frontend Developer specialized in React.Js, Javascript, HTML, CSS. Step into my digital world. Explore a showcase of my diverse projects spanning from Vanilla JavaScript to React.Js. I believe in the power of collaboration and invite you to connect. Let's work together and build something amazing!",
    tag: ["All", "Web", "Mobile"],
    previewURL: "/",
  },
  {
    id: 2,
    imageURl: "/images/projects-image/p8.png",
    title: "Real-Time Weather and AQI Updates",
    description:
      "The Weather Dashboard, is an innovative application that provides real-time weather updates and Air Quality Index (AQI) data for various locations. Featuring user authentication, a responsive design, and integration with Google OAuth and RapidAPI services, the application prioritizes accuracy, reliability, and user convenience. This tool empowers users to make informed decisions about their activities and plans based on the latest weather and air quality information.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://weather-project-psi-five.vercel.app/",
  },
  {
    id: 3,
    imageURl: "/images/projects-image/p7.png",
    title: "Horse Booking System",
    description:
      " user-friendly horse booking system built with React, Vite, Redux, and a suite of tools like notistack and react-datepicker, ensuring smooth scheduling and seamless navigation.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://horse-booking-website.vercel.app/",
  },
  {
    id: 4,
    imageURl: "/images/projects-image/p6.png",
    title: "Full-Stack MERN Food Ordering Platform",
    description:
      "A comprehensive food ordering application featuring React, Axios, Bootstrap, MongoDB, and Express, offering secure user authentication, real-time notifications, and a seamless ordering experience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://github.com/mohammadtarique6698/Food-App-MERN",
  },
  {
    id: 5,
    imageURl: "/images/projects-image/p1.png",
    title: "React based Client Portfolio Website",
    description:
      "A SPA (Single Page Application) tailored for Law Firm (client), featuring comprehensive web profiles for a group of lawyers, including their expertise and individual details.",
    tag: ["All", "Web"],
    previewURL: "https://law-firm-by-tarique.netlify.app/",
  },
  {
    id: 6,
    imageURl: "/images/projects-image/p3.png",
    title: "React-CSS based responsive Shopping Cart Web App.",
    description:
      "A shopping cart web app made by React and CSS, consists of features like filtering options, item addition and displaying total cart amount details.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://geektrust-tee-rex-tarique.netlify.app/",
  },
  {
    id: 7,
    imageURl: "/images/projects-image/p2.png",
    title:
      "A React based responsive clone of E-Commerce Shopping Web Application",
    description:
      "A React based shopping web app, utilizing Material UI for Responsive user interface, implementing responsive product cards, search functionality with add to cart functionality with Checkout landing page as last final page. A prototype of an E-Commerce Web Application.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://qkart-tarique.netlify.app/",
  },
  {
    id: 8,
    imageURl: "/images/projects-image/p4.png",
    title:
      "Vanilla JavaScript based responsive clone of E-Commerce Trip Booking Web Application",
    description:
      "A fully responsive web page for seamless trip booking, leveraging HTML, CSS, JavaScript and Bootstrap to ensure dynamic functionality.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://tariqueqtripdynamicpage.netlify.app/",
  },
  {
    id: 9,
    imageURl: "/images/projects-image/p5.png",
    title: "Vanilla JavaScript based a responsive News Feed Web Application",
    description:
      "A  web page designed with vanilla JavaScript magic. The seamless blend of Bootstrap's accordion and carousel ensures a dynamic, user-friendly experience",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://tarique-crio-feed-news.netlify.app/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filterProjects = ProjectData.filter((ele) => ele.tag.includes(tag));
  return (
    <div id="project">
      <h2 className="text-5xl mb-6 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "My Projects",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "My Showcase",
            1000,
            "My Works",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTags
          name="All"
          onClick={handleTagChange}
          active={tag === "All"}
        />
        <ProjectTags
          name="Web"
          onClick={handleTagChange}
          active={tag === "Web"}
        />
        <ProjectTags
          name="Mobile"
          onClick={handleTagChange}
          active={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((ele, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard
              imageUrl={ele.imageURl}
              title={ele.title}
              description={ele.description}
              previewURL={ele.previewURL}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
