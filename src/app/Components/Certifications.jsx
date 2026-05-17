import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft 365 Certified: Fundamentals (MS-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/29CAAF6C8CAC4E0D?sharingId=84024391FF47777F",
    color: "#3b82f6",
    icon: "🛡️",
  },
  {
    title: "Microsoft 365 Certified: Administrator Expert (MS-102)",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/81BCF1975CE334BB?sharingId=84024391FF47777F",
    color: "#2563eb",
    icon: "👨‍💻",
  },
  {
    title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/A5B82EC7FF30B89E?sharingId=84024391FF47777F",
    color: "#9333ea",
    icon: "⚡",
  },
  {
    title: "Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/9FB2E48DD8226FB1?sharingId=84024391FF47777F",
    color: "#c026d3",
    icon: "🧩",
  },
  {
    title: "Microsoft Certified: Power Platform Developer Associate (PL-400)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/40752406281B98FE?sharingId=84024391FF47777F",
    color: "#f97316",
    icon: "🚀",
  },
  {
    title: "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals (AB-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/4B5E464A1101C05C?sharingId=84024391FF47777F",
    color: "#14b8a6",
    icon: "🤖",
  },
  {
    title: "Microsoft Certified: AI Transformation Leader (AB-731)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/A47C0CDFCB639A95?sharingId=84024391FF47777F",
    color: "#ec4899",
    icon: "🧠",
  },
  {
    title: "Microsoft Certified: Agentic AI Business Solutions Architect (AB-100)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/A8E1BF094757C60F?sharingId=84024391FF47777F",
    color: "#e11d48",
    icon: "🎯",
  },
  {
    title: "Amazon Certified Cloud Practitioner (AWS-CP)",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/fa099da029c24a74a88a535b782b0295",
    color: "#f59e0b",
    icon: "☁️",
  },
  {
    title: "Google Cloud Certified: Cloud Digital Leader",
    link: "https://www.credly.com/badges/7074e6d1-609d-4c61-abe3-228a21d35cd0/public_url",
    color: "#06b6d4",
    icon: "🌍",
  },
];

const Certifications = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 mb-6">
        <h3
          className="text-xl font-bold text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Certifications
        </h3>
        <span
          className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "#818cf8",
          }}
        >
          {certifications.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
            style={{
              background: `${cert.color}0f`,
              border: `1px solid ${cert.color}25`,
              color: "#cbd5e1",
            }}
          >
            <span className="text-base leading-none">{cert.icon}</span>
            <span className="transition-colors duration-200 group-hover:text-white">
              {cert.title}
            </span>
            <svg
              className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: cert.color }}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;



// import React from "react";

// const certifications = [
//   {
//     title: "Microsoft 365 Certified: Fundamentals (MS-900)",
//     link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/29CAAF6C8CAC4E0D?sharingId=84024391FF47777F",
//   },
//   {
//     title: "Microsoft 365 Certified: Administrator Expert (MS-102)",
//     link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/81BCF1975CE334BB?sharingId=84024391FF47777F",
//   },
//   {
//     title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
//     link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/A5B82EC7FF30B89E?sharingId=84024391FF47777F",
//   },
//   {
//     title: "Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)",
//     link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/9FB2E48DD8226FB1?sharingId=84024391FF47777F",
//   },
//   {
//     title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
//     link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/DDE1C9A687CA732A?sharingId=84024391FF47777F",
//   },
//   {
//     title: "Amazon Certified Cloud Practitioner (AWS-CP)",
//     link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/fa099da029c24a74a88a535b782b0295",
//   },
//   {
//     title: "Google Cloud Certified: Cloud Digital Leader",
//     link: "https://www.credly.com/badges/7074e6d1-609d-4c61-abe3-228a21d35cd0/public_url",
//   },
// ];

// const Certifications = () => {
//   return (
//     <div>
//       <h3 className="mb-4 text-xl font-bold text-white">
//         Certifications
//       </h3>

//       <div className="flex flex-wrap gap-4">
//         {certifications.map((cert, index) => (
//           <a
//             key={index}
//             href={cert.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               group
//               flex items-center
//               rounded-xl
//               border border-white/10
//               bg-white/5
//               px-4 py-2
//               text-sm text-gray-200
//               backdrop-blur-sm
//               shadow-sm
//               transition-all duration-200
//               hover:-translate-y-0.5
//               hover:bg-indigo-500/20
//               hover:border-indigo-400/30
//               hover:shadow-md
//             "
//           >
//             <span className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-400 transition group-hover:scale-110" />
//             {cert.title}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certifications;
