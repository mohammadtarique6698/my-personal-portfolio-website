import React from "react";
import { EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imageUrl, title, description, previewURL }) => {
  return (
    <div
      className="relative flex flex-col h-full overflow-hidden transition-all duration-500 group rounded-2xl hover:-translate-y-2"
      style={{
        background: "linear-gradient(135deg, rgba(19,19,28,0.9) 0%, rgba(13,13,20,0.95) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 rounded-2xl"
        style={{
          boxShadow: "0 0 40px rgba(124,58,237,0.2), inset 0 0 40px rgba(224,64,251,0.03)",
          border: "1px solid rgba(224,64,251,0.2)",
        }}
      />

      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #e040fb, #7c3aed, #22d3ee)" }}
      />

      {/* Image Container */}
      <div
        className="relative flex-shrink-0 overflow-hidden h-44 md:h-52"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay always visible */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,10,15,0.7) 100%)",
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 duration-400"
          style={{ background: "rgba(10,10,15,0.75)", backdropFilter: "blur(4px)" }}
        >
          <Link
            href={previewURL}
            target={previewURL.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #e040fb, #7c3aed)",
              boxShadow: "0 0 20px rgba(124,58,237,0.5)",
            }}
          >
            <EyeIcon className="w-4 h-4" />
            View Project
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Live badge */}
        {previewURL !== "/" && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              background: "rgba(10,10,15,0.7)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#4ade80",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Live
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h5
          className="mb-2 text-base font-bold leading-snug text-white line-clamp-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h5>
        <p className="text-sm text-[#8892a4] leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Footer link */}
        <Link
          href={previewURL}
          target={previewURL.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="flex items-center gap-1 mt-4 text-xs font-medium transition-colors duration-200 group/link w-fit"
          style={{ color: "#a78bfa" }}
        >
          <span className="transition-colors group-hover/link:text-pink-400">View project</span>
          <ArrowTopRightOnSquareIcon className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;


// import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imageUrl, title, description, previewURL }) => {
//   return (
//     <div>
//       <div
//         className="relative h-36 md:h-72 rounded-t-xl group"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
//           {/* <Link
//             href="/"
//             className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
//           </Link> */}
//           <Link
//             href={previewURL}
//             className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <EyeIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
//           </Link>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl px-4 py-6 bg-[#181818]">
//         <h5 className="text-xl font-semibold">{title}</h5>
//         <p className="mt-4">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
