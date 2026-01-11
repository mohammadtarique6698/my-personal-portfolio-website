import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";
import AboutSection from "./Components/About";
import ProjectsSection from "./Components/Project";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-auto">
      <Navbar />
      <div className="container mt-24 px-12 py-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
