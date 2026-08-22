import React, { useEffect } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

// Individual Detail Pages
import UiUxDetail from "./pages/UiUxDetail";
import AiChatbotDetail from "./pages/AiChatbotDetail";
import GraphicDesignDetail from "./pages/GraphicDesignDetail";
import WebDevDetail from "./pages/WebDevDetail";
import DigitalGrowthDetail from "./pages/DigitalGrowthDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout WITH Navbar and Footer
function MainLayout() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-ink antialiased overflow-x-hidden">
      {/* GLOBAL FIXED CORNER GLOWS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-Left Navy Glow */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-navy-500/25 blur-[120px] sm:h-[650px] sm:w-[650px]" />

        {/* Bottom-Right Orange Glow */}
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-[120px] sm:h-[650px] sm:w-[650px]" />
      </div>

      <ScrollToTop />

      <div className="relative z-10">
        <Routes>
          {/* Standard Pages WITH Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Standalone Detail Pages (WITHOUT Navbar & Footer) */}
          <Route path="/ui-ux-design" element={<UiUxDetail />} />
          <Route path="/ai-chatbot" element={<AiChatbotDetail />} />
          <Route path="/graphic-design" element={<GraphicDesignDetail />} />
          <Route path="/web-development" element={<WebDevDetail />} />
          <Route path="/digital-growth" element={<DigitalGrowthDetail />} />
        </Routes>
      </div>

      <Chatbot />
    </div>
  );
}