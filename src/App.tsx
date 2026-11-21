import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactFooter } from './components/ContactFooter';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="bg-[#F5F5F2] text-ink font-body selection:bg-mint-highlight selection:text-studio-deep relative antialiased overflow-x-hidden min-h-screen">
      {/* Film Grain Overlay */}
      <div className="film-grain fixed inset-0 pointer-events-none z-50 mix-blend-overlay" />

      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <ContactFooter onOpenInquiry={() => setInquiryOpen(true)} />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}
