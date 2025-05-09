"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Web Development", href: "#web-development" },
    { name: "Mobile Apps", href: "#mobile-apps" },
    { name: "UI/UX Design", href: "#ui-ux" },
    { name: "Branding", href: "#branding" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Webgrovia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}