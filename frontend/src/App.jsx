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

// Pages & Detail Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import UiUxDetail from "./pages/UiUxDetail";
import AiChatbotDetail from "./pages/AiChatbotDetail";
import GraphicDesignDetail from "./pages/GraphicDesignDetail";
import WebDevDetail from "./pages/WebDevDetail";
import DigitalGrowthDetail from "./pages/DigitalGrowthDetail";

// Job Application Form
import ApplyJob from "./pages/ApplyJob";
import Careers from "./pages/Careers";

// Footer detail
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// ---- Admin Panel ----
import { AdminAuthProvider } from "./admin/context/AdminAuthContext";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLayout from "./admin/components/AdminLayout";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Projects from "./admin/pages/Projects";
import ProjectDetail from "./admin/pages/ProjectDetail";
import Team from "./admin/pages/Team";

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

// Wraps every /admin/* route with auth context
function AdminRoot() {
  return (
    <AdminAuthProvider>
      <Outlet />
    </AdminAuthProvider>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div className="relative min-h-screen bg-white text-ink antialiased overflow-x-hidden">
      {/* GLOBAL FIXED CORNER GLOWS — skip on admin panel */}
      {!isAdminRoute && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-navy-500/25 blur-[120px] sm:h-[650px] sm:w-[650px]" />
          <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-[120px] sm:h-[650px] sm:w-[650px]" />
        </div>
      )}

      <ScrollToTop />

      <div className="relative z-10">
        <Routes>
          {/* Standard Pages WITH Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers/apply/:role" element={<ApplyJob />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Standalone Detail Pages (WITHOUT Navbar & Footer) */}
          <Route path="/ui-ux-design" element={<UiUxDetail />} />
          <Route path="/ai-chatbot" element={<AiChatbotDetail />} />
          <Route path="/graphic-design" element={<GraphicDesignDetail />} />
          <Route path="/web-development" element={<WebDevDetail />} />
          <Route path="/digital-growth" element={<DigitalGrowthDetail />} />

          {/* Internal Admin Panel — not linked anywhere publicly */}
          <Route path="/admin" element={<AdminRoot />}>
            <Route path="login" element={<AdminLogin />} />
            <Route
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectDetail />} />
              <Route
                path="team"
                element={
                  <ProtectedRoute adminOnly>
                    <Team />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </div>

      {!isAdminRoute && <Chatbot />}
    </div>
  );
}