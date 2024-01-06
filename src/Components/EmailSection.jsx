"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    const data_to_JSON = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data_to_JSON,
    };
    const Response = await fetch(endpoint, options);
    const resData = await Response.json();
    console.log(resData);
    if (Response.status === 200) {
      //alert("Message Successfully sent.");
      setEmailSubmitted(true);
    } else {
      alert("Error.");
    }
  };
  return (
    <section id="contact" className="grid grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8">{`Let's Connect`}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {`I am currently looking for new opportunities in frontend, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.`}
        </p>
        <div className="socials flex flex-row gap-2 my-10">
          <Link href="https://www.linkedin.com/in/itstarique6698/">
            <Image
              src="/linkedin.png"
              alt="icon"
              height={60}
              width={60}
              className="bg-white rounded-full border-2"
            />
          </Link>
          <Link href="https://github.com/mohammadtarique6698">
            <Image
              src="/github.png"
              alt="icon"
              height={60}
              width={60}
              className="bg-white rounded-full border-2"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col mt-3" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="pb-60 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Type your Content here...!!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="let's talk about..."
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully! :)
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
