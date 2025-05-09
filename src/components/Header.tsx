"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo & Name */}
        <a href="/" className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
          Webgrovia
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <a
            href="#about-us"
            className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4"
          >
            About Us
          </a>
          <a
            href="#why-choose-us"
            className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4"
          >
            Why Choose Us
          </a>
          <a
            href="#services"
            className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full py-2 px-4"
          >
            Contact
          </a>
        </div>

        {/* Book a Demo Button */}
        <motion.a
          href="tel:+919995965348"
          className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-80 transition-all ease-in-out transform px-8 py-4 rounded-md text-xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Demo
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-black dark:text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-black dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mobile-menu overflow-hidden bg-white dark:bg-black/80"
          >
            <div className="py-6 space-y-6">
              <a
                href="#about-us"
                className="block px-6 py-4 text-2xl font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                About Us
              </a>
              <a
                href="#why-choose-us"
                className="block px-6 py-4 text-2xl font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                Why Choose Us
              </a>
              <a
                href="#services"
                className="block px-6 py-4 text-2xl font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="block px-6 py-4 text-2xl font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all"
              >
                Contact
              </a>

              <div className="px-6 pt-6">
                <motion.a
                  href="tel:+919995965348"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-80 transition-all ease-in-out transform px-8 py-4 rounded-md text-xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
