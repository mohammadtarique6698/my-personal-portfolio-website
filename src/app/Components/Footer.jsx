import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative mt-12"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(10,10,15,0.8)",
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(224,64,251,0.5), rgba(124,58,237,0.5), transparent)" }}
      />

      <div className="flex flex-col items-center justify-between gap-4 px-8 py-5 sm:flex-row max-w-7xl">
        <Link href="/" className="group">
          <div className="relative">
            <div
              className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100"
              style={{
                background: "rgba(124,58,237,0.2)",
                filter: "blur(8px)",
                transform: "scale(1.5)",
              }}
            />
            <Image
              src="/my-image.png"
              alt="Mohammad Tarique"
              width={44}
              height={44}
              className="relative transition-colors border rounded-lg border-white/10 group-hover:border-purple-500/30"
            />
          </div>
        </Link>

        <p className="text-sm text-[#8892a4] text-center">
          Crafted with ❤️ by{" "}
          <span
            className="font-semibold"
            style={{
              background: "linear-gradient(135deg, #e040fb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mohammad Tarique
          </span>
          {" · "}
          <span className="text-xs">© {new Date().getFullYear()}</span>
        </p>

        <p className="text-xs text-[#4a5568]">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
//       <div
//         className="flex flex-row justify-between gap-4 px-12 py-6"
//         style={{ alignItems: "center" }}
//       >
//         <span>
//           <Link href={"/"} className="font-semibold text-white text-start">
//             <Image
//               src="/my-image.png"
//               alt="my-avatar"
//               width={50}
//               height={50}
//               className="rounded"
//               style={{ backgroundSize: "cover" }}
//             />
//           </Link>
//         </span>
//         <p className="text-center text-slate-400">
//           Developed By <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Mohammad Tarique</span> <span className="text-sm text-slate-400">© {new Date().getFullYear()}{" "}</span>
//         </p>
//         <p className="text-right text-slate-600">All rights reserverd</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
