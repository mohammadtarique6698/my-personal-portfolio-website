"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    imageURl: "/images/projects-image/p10.png",
    title: `Microsoft 365 Service Health Monitoring App – Power Platform & Power BI Dashboard (Client Project)`,
    description:"Built a Power Apps Canvas application to monitor real-time Microsoft 365 service incidents using Power Automate flows integrated with Microsoft Graph API and Dataverse for centralized tracking. Implemented role-based access control, search, filtering, and scheduled data synchronization to ensure secure, accurate, and up-to-date incident data. Integrated Power BI dashboards into the app and SharePoint Online to provide tenant-level insights and unified monitoring.",
    tag: ["All", "Mobile"],
    previewURL: "/",
  },
  {
    id: 2,
    imageURl: "/images/projects-image/p10.png",
    title: "SharePoint Online Service Health Dashboard (React.js + SPFx) (Client Project)",
    description: "Developed an SPFx web part using React and Fluent UI to display Microsoft 365 service health insights, securely integrating Microsoft Graph API through MSGraphClientFactory. Enhanced the solution with customizable property pane options and integrated Power Apps and Power Automate endpoints to enable unified reporting across the Microsoft 365 ecosystem.",
    tag: ["All", "Web"],
    previewURL: "/",
  },
  {
    id: 3,
    imageURl: "/images/projects-image/p0.png",
    title: "React-Vite-Tailwind based Earthquake Analyser Website",
    description:
      "A React Vite-based responsive seismic data visualization application that uses Chart.js to create interactive line charts and Leaflet to map locations. It is styled using Tailwind CSS and has features like as magnitude filtering, data sorting, and comprehensive trends based on location click. Tools such as React Icons and React Charts improve functionality and user experience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://earthquake-visualizer-kohl.vercel.app/",
  },
  {
    id: 4,
    imageURl: "/images/projects-image/p9.png",
    title: "React-NextJs based EV-Vehicle Analyser Website",
    description:
      "A responsive website built with React and Next.js application leveraging Tailwind CSS, react-charts, Chart.js, and PapaParse for processing and visualizing large CSV datasets with 50,001 rows. It features efficient CSV parsing and provides interactive charts for in-depth data analysis.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://ev-vehicle-analysis-jikl.vercel.app/",
  },
  {
    id: 5,
    imageURl: "/images/projects-image/p8.png",
    title: "Real-Time Weather and AQI Updates",
    description:
      "The Weather Dashboard, is an innovative application that provides real-time weather updates and Air Quality Index (AQI) data for various locations. Featuring user authentication, a responsive design, and integration with Google OAuth and RapidAPI services, the application prioritizes accuracy, reliability, and user convenience. This tool empowers users to make informed decisions about their activities and plans based on the latest weather and air quality information.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://weather-project-psi-five.vercel.app/",
  },
  {
    id: 6,
    imageURl: "/images/projects-image/p7.png",
    title: "Horse Booking System",
    description:
      " user-friendly horse booking system built with React, Vite, Redux, and a suite of tools like notistack and react-datepicker, ensuring smooth scheduling and seamless navigation.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://horse-booking-website.vercel.app/",
  },
  {
    id: 7,
    imageURl: "/images/projects-image/p6.png",
    title: "Full-Stack MERN Food Ordering Platform",
    description:
      "A comprehensive food ordering application featuring React, Axios, Bootstrap, MongoDB, and Express, offering secure user authentication, real-time notifications, and a seamless ordering experience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://github.com/mohammadtarique6698/Food-App-MERN",
  },
  {
    id: 8,
    imageURl: "/images/projects-image/p1.png",
    title: "React based Client Portfolio Website",
    description:
      "A SPA (Single Page Application) tailored for Law Firm (client), featuring comprehensive web profiles for a group of lawyers, including their expertise and individual details.",
    tag: ["All", "Web"],
    previewURL: "https://law-firm-by-tarique.netlify.app/",
  },
  {
    id: 9,
    imageURl: "/images/projects-image/p3.png",
    title: "React-CSS based responsive Shopping Cart Web App.",
    description:
      "A shopping cart web app made by React and CSS, consists of features like filtering options, item addition and displaying total cart amount details.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://geektrust-tee-rex-tarique.netlify.app/",
  },
  {
    id: 10,
    imageURl: "/images/projects-image/p2.png",
    title:
      "A React based responsive clone of E-Commerce Shopping Web Application",
    description:
      "A React based shopping web app, utilizing Material UI for Responsive user interface, implementing responsive product cards, search functionality with add to cart functionality with Checkout landing page as last final page. A prototype of an E-Commerce Web Application.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://qkart-tarique.netlify.app/",
  },
  {
    id: 11,
    imageURl: "/images/projects-image/p4.png",
    title:
      "Vanilla JavaScript based responsive clone of E-Commerce Trip Booking Web Application",
    description:
      "A fully responsive web page for seamless trip booking, leveraging HTML, CSS, JavaScript and Bootstrap to ensure dynamic functionality.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://tariqueqtripdynamicpage.netlify.app/",
  },
  {
    id: 12,
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
      <h2 className="mb-6 text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
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
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
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
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
