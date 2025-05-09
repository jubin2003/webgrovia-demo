"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function ContactIcons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show icons after scrolling past 20% of the page
      setIsVisible(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed bottom-8 left-8 z-50 flex flex-col gap-4"
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contact on WhatsApp"
          >
            <IconBrandWhatsapp className="w-6 h-6" />
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href="tel:+919876543210"
            className="bg-black text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
