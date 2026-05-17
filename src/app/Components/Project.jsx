"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    imageURl: "/images/projects-image/p10.png",
    title: `Agentic AI Troubleshooting Assistant – RAG & Ollama LLMs`,
    description:
      "Designed and developed a fully local Agentic AI troubleshooting assistant using Retrieval-Augmented Generation (RAG) and Ollama-based LLMs to resolve enterprise support issues through SOP and knowledge base documents. Implemented intelligent retrieval and fallback reasoning workflows to improve response accuracy and reduce hallucinations. Built document parsing for structured and unstructured data, semantic search with vector databases, and an explainable AI-driven interface for enterprise support automation.",
    tag: ["All"],
    previewURL: "/",
  },
  {
    id: 2,
    imageURl: "/images/projects-image/p10.png",
    title: `Microsoft 365 Service Health Monitoring App – Power Platform & Power BI Dashboard (Client Project)`,
    description: "Built a Power Apps Canvas application to monitor real-time Microsoft 365 service incidents using Power Automate flows integrated with Microsoft Graph API and Dataverse for centralized tracking. Implemented role-based access control, search, filtering, and scheduled data synchronization to ensure secure, accurate, and up-to-date incident data. Integrated Power BI dashboards into the app and SharePoint Online to provide tenant-level insights and unified monitoring.",
    tag: ["All", "Mobile"],
    previewURL: "/",
  },
  {
    id: 3,
    imageURl: "/images/projects-image/p10.png",
    title: "SharePoint Online Service Health Dashboard (React.js + SPFx) (Client Project)",
    description: "Developed an SPFx web part using React and Fluent UI to display Microsoft 365 service health insights, securely integrating Microsoft Graph API through MSGraphClientFactory. Enhanced the solution with customizable property pane options and integrated Power Apps and Power Automate endpoints to enable unified reporting across the Microsoft 365 ecosystem.",
    tag: ["All", "Web"],
    previewURL: "/",
  },
  {
    id: 4,
    imageURl: "/images/projects-image/p0.png",
    title: "React-Vite-Tailwind based Earthquake Analyser Website",
    description: "A React Vite-based responsive seismic data visualization application that uses Chart.js to create interactive line charts and Leaflet to map locations. It is styled using Tailwind CSS and has features like magnitude filtering, data sorting, and comprehensive trends based on location click.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://earthquake-visualizer-kohl.vercel.app/",
  },
  {
    id: 5,
    imageURl: "/images/projects-image/p9.png",
    title: "React-NextJs based EV-Vehicle Analyser Website",
    description: "A responsive website built with React and Next.js application leveraging Tailwind CSS, react-charts, Chart.js, and PapaParse for processing and visualizing large CSV datasets with 50,001 rows. It features efficient CSV parsing and provides interactive charts for in-depth data analysis.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://ev-vehicle-analysis-jikl.vercel.app/",
  },
  {
    id: 6,
    imageURl: "/images/projects-image/p8.png",
    title: "Real-Time Weather and AQI Updates",
    description: "The Weather Dashboard provides real-time weather updates and Air Quality Index (AQI) data for various locations. Featuring user authentication, a responsive design, and integration with Google OAuth and RapidAPI services, the application prioritizes accuracy, reliability, and user convenience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://weather-project-psi-five.vercel.app/",
  },
  {
    id: 7,
    imageURl: "/images/projects-image/p7.png",
    title: "Horse Booking System",
    description: "A user-friendly horse booking system built with React, Vite, Redux, and a suite of tools like notistack and react-datepicker, ensuring smooth scheduling and seamless navigation.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://horse-booking-website.vercel.app/",
  },
  {
    id: 8,
    imageURl: "/images/projects-image/p6.png",
    title: "Full-Stack MERN Food Ordering Platform",
    description: "A comprehensive food ordering application featuring React, Axios, Bootstrap, MongoDB, and Express, offering secure user authentication, real-time notifications, and a seamless ordering experience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://github.com/mohammadtarique6698/Food-App-MERN",
  },
  {
    id: 9,
    imageURl: "/images/projects-image/p1.png",
    title: "React based Client Portfolio Website",
    description: "A SPA (Single Page Application) tailored for a Law Firm (client), featuring comprehensive web profiles for a group of lawyers, including their expertise and individual details.",
    tag: ["All", "Web"],
    previewURL: "https://law-firm-by-tarique.netlify.app/",
  },
  {
    id: 10,
    imageURl: "/images/projects-image/p3.png",
    title: "React-CSS based responsive Shopping Cart Web App.",
    description: "A shopping cart web app made by React and CSS, consists of features like filtering options, item addition and displaying total cart amount details.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://geektrust-tee-rex-tarique.netlify.app/",
  },
  {
    id: 11,
    imageURl: "/images/projects-image/p2.png",
    title: "A React based responsive clone of E-Commerce Shopping Web Application",
    description: "A React based shopping web app, utilizing Material UI for Responsive user interface, implementing responsive product cards, search functionality with add to cart functionality and Checkout landing page.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://qkart-tarique.netlify.app/",
  },
  {
    id: 12,
    imageURl: "/images/projects-image/p4.png",
    title: "Vanilla JavaScript based responsive clone of E-Commerce Trip Booking Web Application",
    description: "A fully responsive web page for seamless trip booking, leveraging HTML, CSS, JavaScript and Bootstrap to ensure dynamic functionality.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://tariqueqtripdynamicpage.netlify.app/",
  },
  {
    id: 13,
    imageURl: "/images/projects-image/p5.png",
    title: "Vanilla JavaScript based a responsive News Feed Web Application",
    description: "A web page designed with vanilla JavaScript magic. The seamless blend of Bootstrap's accordion and carousel ensures a dynamic, user-friendly experience.",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://tarique-crio-feed-news.netlify.app/",
  },
];

const TAGS = ["All", "Web", "Mobile"];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filterProjects = ProjectData.filter((ele) => ele.tag.includes(tag));

  return (
    <div id="project" className="px-4 py-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
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
          Portfolio
        </span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.4), transparent)" }} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-2 text-4xl font-extrabold text-center lg:text-5xl"
        style={{
          fontFamily: "'Syne', sans-serif",
          background: "linear-gradient(135deg, #e040fb 0%, #7c3aed 50%, #22d3ee 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        My Projects
      </motion.h2>
      <p className="text-center text-[#8892a4] text-sm mb-8">
        {filterProjects.length} project{filterProjects.length !== 1 ? "s" : ""} — crafted with care
      </p>

      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center justify-center gap-3 mb-10"
      >
        {TAGS.map((t) => (
          <motion.button
            key={t}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTag(t)}
            className="relative px-6 py-2 overflow-hidden text-sm font-semibold transition-all duration-300 rounded-full"
            style={
              tag === t
                ? {
                  background: "linear-gradient(135deg, #e040fb, #7c3aed)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                }
                : {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8892a4",
                }
            }
          >
            {t}
            {tag === t && (
              <motion.div
                layoutId="activeTag"
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #e040fb, #7c3aed)",
                  zIndex: -1,
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.ul
        ref={ref}
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filterProjects.map((ele, index) => (
            <motion.li
              key={ele.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: isInView ? index * 0.07 : 0,
                ease: "easeOut",
              }}
            >
              <ProjectCard
                imageUrl={ele.imageURl}
                title={ele.title}
                description={ele.description}
                previewURL={ele.previewURL}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default Project;


// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTags from "./ProjectTags";
// import { TypeAnimation } from "react-type-animation";
// import { motion, useInView } from "framer-motion";

// const ProjectData = [
//   {
//     id: 1,
//     imageURl: "/images/projects-image/p10.png",
//     title: `Microsoft 365 Service Health Monitoring App – Power Platform & Power BI Dashboard (Client Project)`,
//     description:"Built a Power Apps Canvas application to monitor real-time Microsoft 365 service incidents using Power Automate flows integrated with Microsoft Graph API and Dataverse for centralized tracking. Implemented role-based access control, search, filtering, and scheduled data synchronization to ensure secure, accurate, and up-to-date incident data. Integrated Power BI dashboards into the app and SharePoint Online to provide tenant-level insights and unified monitoring.",
//     tag: ["All", "Mobile"],
//     previewURL: "/",
//   },
//   {
//     id: 2,
//     imageURl: "/images/projects-image/p10.png",
//     title: "SharePoint Online Service Health Dashboard (React.js + SPFx) (Client Project)",
//     description: "Developed an SPFx web part using React and Fluent UI to display Microsoft 365 service health insights, securely integrating Microsoft Graph API through MSGraphClientFactory. Enhanced the solution with customizable property pane options and integrated Power Apps and Power Automate endpoints to enable unified reporting across the Microsoft 365 ecosystem.",
//     tag: ["All", "Web"],
//     previewURL: "/",
//   },
//   {
//     id: 3,
//     imageURl: "/images/projects-image/p0.png",
//     title: "React-Vite-Tailwind based Earthquake Analyser Website",
//     description:
//       "A React Vite-based responsive seismic data visualization application that uses Chart.js to create interactive line charts and Leaflet to map locations. It is styled using Tailwind CSS and has features like as magnitude filtering, data sorting, and comprehensive trends based on location click. Tools such as React Icons and React Charts improve functionality and user experience.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://earthquake-visualizer-kohl.vercel.app/",
//   },
//   {
//     id: 4,
//     imageURl: "/images/projects-image/p9.png",
//     title: "React-NextJs based EV-Vehicle Analyser Website",
//     description:
//       "A responsive website built with React and Next.js application leveraging Tailwind CSS, react-charts, Chart.js, and PapaParse for processing and visualizing large CSV datasets with 50,001 rows. It features efficient CSV parsing and provides interactive charts for in-depth data analysis.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://ev-vehicle-analysis-jikl.vercel.app/",
//   },
//   {
//     id: 5,
//     imageURl: "/images/projects-image/p8.png",
//     title: "Real-Time Weather and AQI Updates",
//     description:
//       "The Weather Dashboard, is an innovative application that provides real-time weather updates and Air Quality Index (AQI) data for various locations. Featuring user authentication, a responsive design, and integration with Google OAuth and RapidAPI services, the application prioritizes accuracy, reliability, and user convenience. This tool empowers users to make informed decisions about their activities and plans based on the latest weather and air quality information.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://weather-project-psi-five.vercel.app/",
//   },
//   {
//     id: 6,
//     imageURl: "/images/projects-image/p7.png",
//     title: "Horse Booking System",
//     description:
//       " user-friendly horse booking system built with React, Vite, Redux, and a suite of tools like notistack and react-datepicker, ensuring smooth scheduling and seamless navigation.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://horse-booking-website.vercel.app/",
//   },
//   {
//     id: 7,
//     imageURl: "/images/projects-image/p6.png",
//     title: "Full-Stack MERN Food Ordering Platform",
//     description:
//       "A comprehensive food ordering application featuring React, Axios, Bootstrap, MongoDB, and Express, offering secure user authentication, real-time notifications, and a seamless ordering experience.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://github.com/mohammadtarique6698/Food-App-MERN",
//   },
//   {
//     id: 8,
//     imageURl: "/images/projects-image/p1.png",
//     title: "React based Client Portfolio Website",
//     description:
//       "A SPA (Single Page Application) tailored for Law Firm (client), featuring comprehensive web profiles for a group of lawyers, including their expertise and individual details.",
//     tag: ["All", "Web"],
//     previewURL: "https://law-firm-by-tarique.netlify.app/",
//   },
//   {
//     id: 9,
//     imageURl: "/images/projects-image/p3.png",
//     title: "React-CSS based responsive Shopping Cart Web App.",
//     description:
//       "A shopping cart web app made by React and CSS, consists of features like filtering options, item addition and displaying total cart amount details.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://geektrust-tee-rex-tarique.netlify.app/",
//   },
//   {
//     id: 10,
//     imageURl: "/images/projects-image/p2.png",
//     title:
//       "A React based responsive clone of E-Commerce Shopping Web Application",
//     description:
//       "A React based shopping web app, utilizing Material UI for Responsive user interface, implementing responsive product cards, search functionality with add to cart functionality with Checkout landing page as last final page. A prototype of an E-Commerce Web Application.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://qkart-tarique.netlify.app/",
//   },
//   {
//     id: 11,
//     imageURl: "/images/projects-image/p4.png",
//     title:
//       "Vanilla JavaScript based responsive clone of E-Commerce Trip Booking Web Application",
//     description:
//       "A fully responsive web page for seamless trip booking, leveraging HTML, CSS, JavaScript and Bootstrap to ensure dynamic functionality.",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://tariqueqtripdynamicpage.netlify.app/",
//   },
//   {
//     id: 12,
//     imageURl: "/images/projects-image/p5.png",
//     title: "Vanilla JavaScript based a responsive News Feed Web Application",
//     description:
//       "A  web page designed with vanilla JavaScript magic. The seamless blend of Bootstrap's accordion and carousel ensures a dynamic, user-friendly experience",
//     tag: ["All", "Web", "Mobile"],
//     previewURL: "https://tarique-crio-feed-news.netlify.app/",
//   },
// ];

// const Project = () => {
//   const [tag, setTag] = useState("All");

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   const filterProjects = ProjectData.filter((ele) => ele.tag.includes(tag));
//   return (
//     <div id="project">
//       <h2 className="mb-6 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
//         <TypeAnimation
//           sequence={[
//             // Same substring at the start will only be typed out once, initially
//             "My Projects",
//             1000, // wait 1s before replacing "Mice" with "Hamsters"
//             "My Showcase",
//             1000,
//             "My Works",
//             1000,
//           ]}
//           wrapper="span"
//           speed={50}
//           style={{ fontSize: "1em" }}
//           repeat={Infinity}
//         />
//       </h2>
//       <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
//         <ProjectTags
//           name="All"
//           onClick={handleTagChange}
//           active={tag === "All"}
//         />
//         <ProjectTags
//           name="Web"
//           onClick={handleTagChange}
//           active={tag === "Web"}
//         />
//         <ProjectTags
//           name="Mobile"
//           onClick={handleTagChange}
//           active={tag === "Mobile"}
//         />
//       </div>
//       <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
//         {filterProjects.map((ele, index) => (
//           <motion.li
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.5, delay: index * 0.3 }}
//           >
//             <ProjectCard
//               imageUrl={ele.imageURl}
//               title={ele.title}
//               description={ele.description}
//               previewURL={ele.previewURL}
//             />
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Project;
