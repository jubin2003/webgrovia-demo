"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const AppleAccordion = ({ items, className }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-neutral-200 dark:border-neutral-800"
        >
          <button
            className="flex justify-between items-center w-full py-4 text-left"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl"
            >
              +
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pb-4 text-neutral-600 dark:text-neutral-400">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
