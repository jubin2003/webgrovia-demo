"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0); // Only show when user scrolls past hero section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-6 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919995965348?text=Hi!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20"></div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-lg">
          {/* WhatsApp Icon from the public folder */}
          <img
            src="/whatsapp.png"  // Assuming you have the WhatsApp icon saved in the public/icons folder
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </div>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+919995965348"
        className="relative group"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-20"></div>
        <div className="relative flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
          <Phone className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
