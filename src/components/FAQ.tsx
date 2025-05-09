"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/core/accordion";
import { ChevronRight } from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="flex w-full flex-col">
            <AccordionItem value="industries" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    What industries do you work with?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  We work with startups, small businesses, and enterprises
                  across various industries including tech, healthcare,
                  eCommerce, real estate, education, and more. Our flexible
                  approach allows us to tailor solutions to your niche.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeline" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    How long does it take to complete a website or app?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  Project timelines vary based on complexity, features, and
                  scope. On average, websites take 3–6 weeks, and mobile apps
                  may take 6–12 weeks. We'll provide a detailed project timeline
                  after our initial consultation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="branding" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    Do you offer end-to-end branding services?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  Yes! From logo design and brand guidelines to full visual
                  identity systems, we help businesses build a strong, cohesive
                  brand that stands out across all platforms.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="visibility" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    Can Webgrovia help improve my online visibility?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  Absolutely. Our digital marketing team uses proven strategies
                  like SEO, PPC, and social media marketing to boost your online
                  presence, drive traffic, and increase conversions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    Do you provide ongoing support and maintenance?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  Yes, we offer flexible maintenance and support packages for
                  websites, apps, and marketing campaigns to ensure long-term
                  performance and stability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    Is my data secure with you?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  Definitely. We follow industry best practices for secure
                  development and data protection. Our solutions are built with
                  security and compliance in mind from day one.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="difference" className="py-2">
              <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                  <div className="ml-2 text-zinc-950 dark:text-zinc-50">
                    What makes Webgrovia different from other agencies?
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="origin-left">
                <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
                  We're not just developers or designers — we're strategic
                  partners. We combine creative design, strong development
                  skills, and data-driven marketing under one roof to deliver
                  real business results.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
