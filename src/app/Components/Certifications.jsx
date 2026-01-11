import React from "react";

const certifications = [
  {
    title: "Microsoft 365 Certified: Fundamentals (MS-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/29CAAF6C8CAC4E0D?sharingId=84024391FF47777F",
  },
  {
    title: "Microsoft 365 Certified: Administrator Expert (MS-102)",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/81BCF1975CE334BB?sharingId=84024391FF47777F",
  },
  {
    title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/MohammadTarique-1999/A5B82EC7FF30B89E?sharingId=84024391FF47777F",
  },
  {
    title: "Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/9FB2E48DD8226FB1?sharingId=84024391FF47777F",
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/MohammadTarique-1999/DDE1C9A687CA732A?sharingId=84024391FF47777F",
  },
  {
    title: "Amazon Certified Cloud Practitioner (AWS-CP)",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/fa099da029c24a74a88a535b782b0295",
  },
  {
    title: "Google Cloud Certified: Cloud Digital Leader",
    link: "https://www.credly.com/badges/7074e6d1-609d-4c61-abe3-228a21d35cd0/public_url",
  },
];

const Certifications = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-white">
        Certifications
      </h3>

      <div className="flex flex-wrap gap-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center
              rounded-xl
              border border-white/10
              bg-white/5
              px-4 py-2
              text-sm text-gray-200
              backdrop-blur-sm
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-indigo-500/20
              hover:border-indigo-400/30
              hover:shadow-md
            "
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-400 transition group-hover:scale-110" />
            {cert.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
