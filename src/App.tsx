import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioUIDesign } from './components/PortfolioUIDesign';
import { PortfolioWebDev } from './components/PortfolioWebDev';
import { PortfolioITBA } from './components/PortfolioITBA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ImageViewerModal } from './components/ImageViewerModal';
import { BackgroundStars } from './components/BackgroundStars';
import { Project } from './types/portfolio';

function PortfolioMain() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageModal, setImageModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    imageSrc: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    imageSrc: '',
  });

  const handleHireClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAFCFF] dark:bg-[#111A24] text-[#2F4860] dark:text-[#DCEEFF] transition-colors duration-300 font-sans-body selection:bg-[#FFF7CC] selection:text-[#2F4860] overflow-x-hidden">
      {/* Tactile 35mm Film Grain Texture from Moodboard */}
      <div className="fixed inset-0 pointer-events-none z-50 film-grain" />

      {/* Cute Floating Background Stars & Confetti running all the way down the page */}
      <BackgroundStars />

      {/* 1. Header (Navbar + Hero Section) */}
      <Navbar onHireClick={handleHireClick} />

      <main className="relative z-10">
        {/* 1. Header Hero with Bounding Box */}
        <HeroSection onHireClick={handleHireClick} />

        {/* Transition Ribbon to About */}
        <MarqueeRibbon
          text="THIS MOMENT, FEELS SO WONDERFUL ✦ WE MAY ACT A LITTLE STIFF ✦ DOWN TO OUR AWKWARD GREETING"
          variant="butter"
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* Transition Ribbon to UI Design */}
        <MarqueeRibbon
          text="OUR FIRST ENCOUNTER, YOU AND I ✦ THIS THING BETWEEN US, BEAUTIFUL"
          variant="cobalt"
        />

        {/* 3. Portfolio UI Design */}
        <PortfolioUIDesign onSelectProject={setSelectedProject} />

        {/* Transition Ribbon to Web Dev */}
        <MarqueeRibbon
          text="TOMORROW, AND THE DAY AFTER TOMORROW ✦ REMEMBER, FOREVER, THIS DAZZLING MOMENT"
          variant="ice"
        />

        {/* 4. Portfolio Web Development */}
        <PortfolioWebDev onSelectProject={setSelectedProject} />

        {/* Transition Ribbon to IT BA */}
        <MarqueeRibbon
          text="THIS MOMENT, FEELS SO WONDERFUL ✦ OUR FIRST ENCOUNTER, YOU AND I ✦ THIS THING BETWEEN US, BEAUTIFUL"
          variant="navy"
        />

        {/* 5. Portfolio IT Business Analyst */}
        <PortfolioITBA onSelectProject={setSelectedProject} />

        {/* Transition Ribbon to Contact */}
        <MarqueeRibbon
          text="TOMORROW, AND THE DAY AFTER TOMORROW ✦ REMEMBER, FOREVER, THIS DAZZLING MOMENT"
          variant="butter"
          direction="reverse"
        />

        {/* 6. My Contact (Instagram, Email, LinkedIn & Project Inquiry Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Lightbox Drawer Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />
      )}

      {/* Image Viewer Zoom Modal */}
      {imageModal.isOpen && (
        <ImageViewerModal
          isOpen={imageModal.isOpen}
          title={imageModal.title}
          subtitle={imageModal.subtitle}
          imageSrc={imageModal.imageSrc}
          onClose={() => setImageModal((prev) => ({ ...prev, isOpen: false }))}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioMain />
    </ThemeProvider>
  );
}
