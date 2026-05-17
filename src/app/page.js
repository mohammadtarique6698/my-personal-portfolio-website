"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import AboutSection from "./Components/About";
import ProjectsSection from "./Components/Project";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <LoadingScreen />
    <main
      className="relative flex flex-col min-h-screen"
      style={{ background: "var(--bg-primary, #0a0a0f)", color: "#e2e8f0" }}
    >
      <Navbar />

      <div className="relative z-10 w-full px-4 py-12 mt-20 lg:px-12 xl:px-20 max-w-10xl">
        <HeroSection />

        {/* Divider */}
        <div className="w-full h-px my-16" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

        <AboutSection />

        <div className="w-full h-px my-16" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

        <ProjectsSection />

        <div className="w-full h-px my-16" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

        <EmailSection />
      </div>

      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed z-50 flex items-center justify-center text-white rounded-full bottom-8 right-8 w-11 h-11"
            style={{
              background: "linear-gradient(135deg, #e040fb, #7c3aed)",
              boxShadow: "0 0 20px rgba(124,58,237,0.5)",
            }}
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
    </>
  );
}


// import HeroSection from "./Components/HeroSection";
// import Navbar from "./Components/NavBar";
// import AboutSection from "./Components/About";
// import ProjectsSection from "./Components/Project";
// import EmailSection from "./Components/EmailSection";
// import Footer from "./Components/Footer";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen min-w-screen flex-col bg-[#121212]">
//       <Navbar />
//       <div className="px-4 py-12 mt-24 lg:px-16">
//         <HeroSection />
//         <AboutSection />
//         <ProjectsSection />
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }
