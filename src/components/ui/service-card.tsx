"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverGifUrl: string;
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  hoverGifUrl,
}: ServiceCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative h-[400px] rounded-2xl overflow-hidden",
        "bg-black/40 backdrop-blur-lg border border-white/10",
        "hover:border-white/20 transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={hoverGifUrl}
          alt={`${title} animation`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.h3
          className="text-2xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {/* Hover Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6 text-white transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
