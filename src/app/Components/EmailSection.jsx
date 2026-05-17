"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!email || !subject || !message) {
      enqueueSnackbar("Please fill in all fields", { variant: "warning" });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mreeboan", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!res.ok) throw new Error("Formspree failed");

      enqueueSnackbar("Message sent successfully!", { variant: "success" });
      form.reset();
    } catch (err) {
      enqueueSnackbar("Failed to send message. Please try again.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mohammadmttarique/",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      color: "#0a66c2",
    },
    {
      href: "https://github.com/mohammadtarique6698",
      icon: <GithubIcon />,
      label: "GitHub",
      color: "#6e5494",
    },
    {
      href: "mailto:mohammadtarique661998@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "Email",
      color: "#e040fb",
    },
  ];

  return (
    <section id="contact" className="relative">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
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
          Contact
        </span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.4), transparent)" }} />
      </motion.div>

      <div className="relative z-10 grid items-start grid-cols-1 gap-10 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4 text-4xl font-extrabold leading-tight lg:text-5xl"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #e040fb 0%, #7c3aed 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Build Something Great
          </h2>

          <p className="mb-6 text-[#8892a4] leading-relaxed max-w-md">
            Interested in working together, collaborating, or just saying hi?
            Feel free to drop a message — I typically respond within 24 hours.
          </p>

          {/* Contact info pills */}
          <div className="mb-8 space-y-3">
            {[
              { label: "Email", value: "mohammadtarique661998@gmail.com", icon: "✉" },
              { label: "Location", value: "India", icon: "📍" },
              { label: "Status", value: "Open to opportunities", icon: "🟢" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-base">{item.icon}</span>
                <div>
                  <span className="text-xs text-[#8892a4]">{item.label}</span>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200"
                style={{
                  background: `${social.color}18`,
                  border: `1px solid ${social.color}30`,
                  color: social.color,
                }}
              >
                {social.icon}
                {social.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-7 rounded-2xl"
          style={{
            background: "rgba(19,19,28,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(124,58,237,0.08)",
          }}
        >
          {/* Top gradient accent */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, #e040fb, #7c3aed, #22d3ee)" }}
          />

          <div className="mb-5">
            <h3
              className="mb-1 text-xl font-bold text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Send a Message
            </h3>
            <p className="text-xs text-[#8892a4]">I usually respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full p-3.5 rounded-xl text-sm text-white placeholder-[#4a5568] outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full p-3.5 rounded-xl text-sm text-white placeholder-[#4a5568] outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="w-full p-3.5 rounded-xl text-sm text-white placeholder-[#4a5568] outline-none resize-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              className="relative w-full py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #e040fb, #7c3aed)",
                boxShadow: "0 0 25px rgba(124,58,237,0.35)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 rounded-full border-white/40 border-t-white animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message →"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useSnackbar } from "notistack";

// const EmailSection = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (loading) return;
//     setLoading(true);

//     const form = e.currentTarget;

//     const email = form.email.value.trim();
//     const subject = form.subject.value.trim();
//     const message = form.message.value.trim();

//     if (!email || !subject || !message) {
//       enqueueSnackbar("Please fill in all fields", { variant: "warning" });
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("https://formspree.io/f/mreeboan", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           subject,
//           message,
//         }),
//       });

//       console.log("Formspree response:", res);

//       if (!res.ok) {
//         throw new Error("Formspree failed");
//       }

//       enqueueSnackbar("Message sent successfully!", {
//         variant: "success",
//       });

//       form.reset();
//     } catch (err) {
//       console.error("Send failed:", err);
//       enqueueSnackbar(
//         "Failed to send message. Please try again.",
//         { variant: "error" }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };


//   //   const apiUrl =
//   //     typeof window !== "undefined"
//   //       ? `${window.location.origin}/api/send`
//   //       : "/api/send";

//   //   try {
//   //     const response = await fetch(apiUrl, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Accept: "application/json",
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const data = await response.json();

//   //     if (!response.ok) {
//   //       throw new Error(data?.error || "Failed to send");
//   //     }

//   //     enqueueSnackbar("Message sent successfully!", {
//   //       variant: "success",
//   //     });

//   //     e.target.reset();
//   //   } catch (error) {
//   //     console.error("Send failed:", error);
//   //     enqueueSnackbar("Failed to send message. Please try again.", {
//   //       variant: "error",
//   //     });
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <section
//       id="contact"
//       className="relative grid grid-cols-1 gap-12 py-24 my-12 md:grid-cols-2"
//     >
//       {/* LEFT */}
//       <div>
//         <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
//           Let’s Connect
//         </h2>

//         <p className="max-w-md mb-6 text-[#ADB7BE]">
//           Interested in working together, collaborating, or just saying hi?
//           Feel free to drop a message. I’ll get back to you as soon as possible.
//         </p>

//         <div className="flex gap-4 mt-8">
//           <Link
//             href="https://www.linkedin.com/in/mohammadmttarique/"
//             target="_blank"
//           >
//             <Image
//               src="/linkedin.png"
//               alt="LinkedIn"
//               width={48}
//               height={48}
//               className="transition bg-white rounded-full hover:scale-105"
//             />
//           </Link>

//           <Link
//             href="https://github.com/mohammadtarique6698"
//             target="_blank"
//           >
//             <Image
//               src="/github.png"
//               alt="GitHub"
//               width={48}
//               height={48}
//               className="transition bg-white rounded-full hover:scale-105"
//             />
//           </Link>
//         </div>
//       </div>

//       {/* RIGHT – FORM */}
//       <div className="relative p-8 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm">
//         <div className="mb-3">
//           <h3 className="text-2xl font-semibold text-white">
//             Send me a message
//           </h3>
//           <p className="my-3 text-sm text-gray-400">
//             I usually respond within 24 hours.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input
//             type="email"
//             name="email"
//             required
//             autoCapitalize="none"
//             autoCorrect="off"
//             inputMode="email"
//             placeholder="Your email"
//             className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] focus:outline-none focus:border-purple-500"
//           />

//           <input
//             type="text"
//             name="subject"
//             required
//             placeholder="Subject"
//             className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] focus:outline-none focus:border-purple-500"
//           />

//           <textarea
//             name="message"
//             rows={5}
//             required
//             placeholder="Your message..."
//             className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] resize-none focus:outline-none focus:border-purple-500"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             onClick={(e) => e.currentTarget.blur()}
//             className="flex items-center justify-center gap-2 py-3 font-medium transition bg-purple-500 rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? (
//               <>
//                 <span className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
//                 Sending...
//               </>
//             ) : (
//               "Send Message"
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EmailSection;