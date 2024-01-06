import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Project from "../Components/Project";
import EmailSection from "../Components/EmailSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <Project />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

// "use client"
// // Import necessary components and modules
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeroSection from "../Components/HeroSection";
// import NavBar from "../Components/NavBar";
// import About from "../Components/About";
// import Project from "../Components/Project";
// import EmailSection from "../Components/EmailSection";
// import Footer from "../Components/Footer";

// // Define the Home component
// export default function Home() {
//   return (
//     <main className="container flex min-h-screen flex-col bg-[#121212]">
//       {/* Include the NavBar component */}
//       <NavBar />
//       <div className="container mt-24 mx-auto px-12 py-4">
//         {/* Use Router and Routes from react-router-dom for routing */}
//         <Router>
//           <Routes>
//             {/* Define routes for different sections */}
//             <Route path="/" element={<HeroSection />} />
//             <Route path="/#about" element={<About />} />
//             <Route path="/#project" element={<Project />} />
//             <Route path="/#contact" element={<EmailSection />} />
//           </Routes>
//         </Router>
//       </div>
//       {/* Include the Footer component */}
//       <Footer />
//     </main>
//   );
// }

