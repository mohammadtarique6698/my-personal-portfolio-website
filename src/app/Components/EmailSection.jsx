"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";

const EmailSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;
  setLoading(true);

  const form = e.currentTarget;

  const email = form.email?.value?.trim();
  const subject = form.subject?.value?.trim();
  const message = form.message?.value?.trim();

  if (!email || !subject || !message) {
    enqueueSnackbar("Please fill in all fields", { variant: "warning" });
    setLoading(false);
    return;
  }

  if (typeof navigator !== "undefined" && !navigator.onLine) {
    enqueueSnackbar("No internet connection", { variant: "error" });
    setLoading(false);
    return;
  }

  // ✅ FormData (mobile-safe)
  const formData = new FormData();
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  try {
    const response = await fetch("/api/send", {
      method: "POST",
      body: formData, // ❗ no headers
    });

    let data = {};
    try {
      data = await response.json();
    } catch {}

    if (!response.ok) {
      throw new Error(data?.error || "Failed to send");
    }

    enqueueSnackbar("Message sent successfully!", {
      variant: "success",
    });

    form.reset();
  } catch (error) {
    console.error("Send failed:", error);
    enqueueSnackbar("Failed to send message. Please try again.", {
      variant: "error",
    });
  } finally {
    setLoading(false);
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Prevent double submit (very important on mobile)
  //   if (loading) return;
  //   setLoading(true);

  //   // Safely read values (mobile browsers are picky)
  //   const form = e.currentTarget;
  //   const email = form.email?.value?.trim();
  //   const subject = form.subject?.value?.trim();
  //   const message = form.message?.value?.trim();

  //   // Client-side validation (fast fail on mobile)
  //   if (!email || !subject || !message) {
  //     enqueueSnackbar("Please fill in all fields", { variant: "warning" });
  //     setLoading(false);
  //     return;
  //   }

  //   // Mobile network check
  //   if (typeof navigator !== "undefined" && !navigator.onLine) {
  //     enqueueSnackbar("No internet connection", { variant: "error" });
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const response = await fetch("/api/send", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         subject,
  //         message,
  //       }),
  //       cache: "no-store", // mobile-safe
  //     });

  //     // Defensive JSON parsing (Safari/iOS safe)
  //     let data = {};
  //     try {
  //       data = await response.json();
  //     } catch {
  //       data = {};
  //     }

  //     if (!response.ok) {
  //       throw new Error(data?.error || "Failed to send");
  //     }

  //     enqueueSnackbar("Message sent successfully!", {
  //       variant: "success",
  //     });

  //     form.reset();
  //   } catch (error) {
  //     console.error("Send failed:", error);

  //     enqueueSnackbar(
  //       error.name === "AbortError"
  //         ? "Request timed out. Try again."
  //         : "Failed to send message. Please try again.",
  //       { variant: "error" }
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //   const apiUrl =
  //     typeof window !== "undefined"
  //       ? `${window.location.origin}/api/send`
  //       : "/api/send";

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data?.error || "Failed to send");
  //     }

  //     enqueueSnackbar("Message sent successfully!", {
  //       variant: "success",
  //     });

  //     e.target.reset();
  //   } catch (error) {
  //     console.error("Send failed:", error);
  //     enqueueSnackbar("Failed to send message. Please try again.", {
  //       variant: "error",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section
      id="contact"
      className="relative grid grid-cols-1 gap-12 py-24 my-12 md:grid-cols-2"
    >
      {/* LEFT */}
      <div>
        <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
          Let’s Connect
        </h2>

        <p className="max-w-md mb-6 text-[#ADB7BE]">
          Interested in working together, collaborating, or just saying hi?
          Feel free to drop a message. I’ll get back to you as soon as possible.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="https://www.linkedin.com/in/mohammadmttarique/"
            target="_blank"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={48}
              height={48}
              className="transition bg-white rounded-full hover:scale-105"
            />
          </Link>

          <Link
            href="https://github.com/mohammadtarique6698"
            target="_blank"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={48}
              height={48}
              className="transition bg-white rounded-full hover:scale-105"
            />
          </Link>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="relative p-8 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-white">
            Send me a message
          </h3>
          <p className="my-3 text-sm text-gray-400">
            I usually respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            required
            autoCapitalize="none"
            autoCorrect="off"
            inputMode="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your message..."
            className="p-3 rounded-lg bg-[#18191E] border border-[#33353F] resize-none focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            onClick={(e) => e.currentTarget.blur()}
            className="py-3 font-medium transition bg-purple-500 rounded-lg hover:bg-purple-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

