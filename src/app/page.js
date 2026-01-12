import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import AboutSection from "./Components/About";
import ProjectsSection from "./Components/Project";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="px-4 py-12 mt-24 lg:px-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
