import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div
        className="container px-12 py-6 flex flex-row justify-between"
        style={{ alignItems: "center" }}
      >
        <span>
          <Link href={"/"} className="text-white font-semibold">
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
        <p className="text-slate-400 text-center">
          Developed By Mohammad Tarique
        </p>
        <p className="text-slate-600">All rights reserverd</p>
      </div>
    </footer>
  );
};

export default Footer;
