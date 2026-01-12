import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div
        className="flex flex-row justify-between gap-4 px-12 py-6"
        style={{ alignItems: "center" }}
      >
        <span>
          <Link href={"/"} className="font-semibold text-white text-start">
            <Image
              src="/my-image.png"
              alt="my-avatar"
              width={50}
              height={50}
              className="rounded"
              style={{ backgroundSize: "cover" }}
            />
          </Link>
        </span>
        <p className="text-center text-slate-400">
          Developed By <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Mohammad Tarique</span> <span className="text-sm text-slate-400">© {new Date().getFullYear()}{" "}</span>
        </p>
        <p className="text-right text-slate-600">All rights reserverd</p>
      </div>
    </footer>
  );
};

export default Footer;
