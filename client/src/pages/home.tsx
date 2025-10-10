import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import UnderwaterTransition from "@/components/underwater-transition";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-cyan-50 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="font-serif font-semibold text-xl hover:opacity-80 transition-opacity" data-testid="link-brand" aria-label="Go to top of page" style={{ 
              color: '#10b981',
              textShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
              fontFamily: 'Playfair Display, serif'
            }}>
              The Alcove
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <UnderwaterTransition />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-serif font-semibold text-xl text-white">The Alcove</div>
            <div className="flex space-x-6">
              <a href="https://github.com/Lolli-AK" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" data-testid="link-github" aria-label="Visit GitHub profile">GitHub</a>
              <a href="https://www.linkedin.com/in/aamuktha-kottapalli/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" data-testid="link-linkedin" aria-label="Visit LinkedIn profile">LinkedIn</a>
              <a href="mailto:aamuktha1k@gmail.com" className="text-slate-400 hover:text-white transition-colors" data-testid="link-email" aria-label="Send email">Email</a>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
