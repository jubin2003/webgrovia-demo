"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { Carousel, Card } from "./apple-cards-carousel";
import { Button } from "./button";

type ServiceData = {
  category: string;
  title: string;
  src: string;
  content: {
    title: string;
    description: string;
    image: string;
  };
};

const data: ServiceData[] = [
  {
    category: "Web Design & Development",
    title: "Websites That Work and Wow.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/website_ccxcte.png",
    content: {
      title: "Fast, Modern, Responsive Websites",
      description:
        "We design and develop high-performing websites tailored to convert and captivate your audience — optimized for all devices.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/web-design_cb9qmu.png",
    },
  },
  {
    category: "App Development",
    title: "Powerful Mobile Apps, Built Right.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/mobile_app_o7lbrl.png",
    content: {
      title: "Custom iOS & Android App Development",
      description:
        "From prototypes to polished products, we build scalable, intuitive apps that deliver seamless experiences on every device.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/app-development_yctjxz.png",
    },
  },
  {
    category: "Poster & Billboard Design",
    title: "Designs That Stand Tall.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/poster_design_d2sssn.png",
    content: {
      title: "Eye-Catching Posters & Billboards",
      description:
        "We craft bold and effective visual campaigns, placing your brand on real-world billboards and street posters that turn heads.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/poster-design_glaarm.png",
    },
  },
  {
    category: "Video Ads Creation",
    title: "Video Content That Converts.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/video-ads_lw9ve0.png",
    content: {
      title: "Cinematic Ads & Commercial Videos",
      description:
        "We produce professional video ads that capture attention, tell your story, and drive engagement across all platforms.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/74c157a9-4cda-4083-bd85-2b56a9f0db58_lyys5v.png",
    },
  },
  {
    category: "Branding",
    title: "Build a Brand That Lasts.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_300/logo-branding_v8z11c.png",
    content: {
      title: "Identity, Logo & Visual Strategy",
      description:
        "From logo design to full brand systems, we help you create a strong, recognizable identity that connects with your audience.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_300/branding-logo_wqnhek.png",
    },
  },
  {
    category: "Digital Marketing",
    title: "Marketing That Drives Growth.",
    src: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/digital-marketing_pre9zh.png",
    content: {
      title: "SEO, Social Media & Paid Ads",
      description:
        "Reach your ideal customers with smart digital strategies — SEO, PPC, email, and social media campaigns that deliver real results.",
      image: "https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_600/59e7b952-158f-4e03-b702-97e7a3961a7b_uzajac.png",
    },
  },
];

const ServiceContent = ({
  title,
  description,
  image,
  onClose,
}: {
  title: string;
  description: string;
  image: string;
  onClose: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-neutral-900 p-4 md:p-10 rounded-3xl shadow-2xl w-full max-h-[90vh] overflow-y-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
      </button>

      <div className="text-center px-4 md:px-10">
        <h3 className="text-2xl md:text-5xl font-extrabold text-black mb-4 leading-tight tracking-tight">
          {title}
        </h3>

        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto font-medium mb-6">
          {description}
        </p>
        <img
          src={image}
          alt={title}
          className="mt-4 mx-auto w-full max-w-[320px] md:max-w-md object-contain rounded-xl"
        />
        <div className="mt-8">
          <Button
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() =>
              window.open(
                "https://wa.me/919995965348?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20consultation.",
                "_blank"
              )
            }
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Add window resize listener for mobile detection
export default function WebgroviaServicesCarousel() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCard !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCard]);

  return (
    <div className="w-full h-full py-20 relative">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-400 font-sans mb-12">
        Explore Our Creative & Digital Services
      </h2>

      <Carousel
        items={data.map((card, index) => (
          <div key={card.src} className="relative group pointer-events-auto">
            <div className="transition-transform duration-300 group-hover:scale-[1.02] pointer-events-none">
              <Card card={card} index={index} />
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCard(index);
              }}
              className={`absolute bottom-6 left-6 z-10 flex items-center gap-2 bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-200 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg backdrop-blur-sm`}
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        ))}
      />

      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-4xl mx-auto my-auto">
              <ServiceContent
                {...data[selectedCard].content}
                onClose={() => setSelectedCard(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
