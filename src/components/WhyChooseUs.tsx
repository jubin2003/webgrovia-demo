"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconTools,
  IconChartBar,
  IconShieldCheck,
  IconWorld,
  IconRocket,
} from "@tabler/icons-react";

const features = [
  {
    title: "Full-Stack Tech Expertise",
    description:
      "Our team of seasoned developers delivers scalable, secure, and high-performing software using modern technologies like React, Node.js, Python, and more.",
    icon: <IconCode className="h-6 w-6" />,
    gradient: "from-blue-500 to-cyan-500",
    keywords: [
      "full-stack development",
      "software engineers",
      "scalable software",
    ],
  },
  {
    title: "Custom Software Solutions",
    description:
      "We craft tailor-made web and mobile applications that fit your unique business needs, from SaaS platforms to internal tools.",
    icon: <IconTools className="h-6 w-6" />,
    gradient: "from-purple-500 to-pink-500",
    keywords: [
      "custom software development",
      "mobile app development",
      "SaaS solutions",
    ],
  },
  {
    title: "Agile & Transparent Process",
    description:
      "With our agile methodology, you get full visibility and control throughout the development lifecycle. We deliver in sprints, with regular feedback loops.",
    icon: <IconChartBar className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-500",
    keywords: [
      "agile development",
      "iterative software process",
      "project transparency",
    ],
  },
  {
    title: "Scalable Architecture for Growth",
    description:
      "Whether you're launching a startup or modernizing enterprise software, we build systems designed to grow with your business.",
    icon: <IconRocket className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-500",
    keywords: [
      "scalable tech solutions",
      "startup software",
      "enterprise application development",
    ],
  },
  {
    title: "Security-First Development",
    description:
      "We implement best-in-class security protocols, secure code practices, and compliance-ready infrastructure from day one.",
    icon: <IconShieldCheck className="h-6 w-6" />,
    gradient: "from-indigo-500 to-violet-500",
    keywords: [
      "secure software development",
      "app security",
      "data protection",
    ],
  },
  {
    title: "End-to-End Product Support",
    description:
      "From ideation to post-launch maintenance, Webgrovia is your long-term tech partner. We offer full product lifecycle support to ensure continued success.",
    icon: <IconWorld className="h-6 w-6" />,
    gradient: "from-teal-500 to-blue-500",
    keywords: [
      "end-to-end development",
      "product maintenance",
      "long-term tech partner",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
  Why Choose Us
</h2>

<div className="w-24 h-1 bg-white mx-auto mb-6"></div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience excellence in every aspect of our service delivery
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card
                className={cn(
                  "bg-black/40 backdrop-blur-lg border border-white/10",
                  "hover:border-white/20 transition-all duration-300",
                  "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                )}
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br",
                        feature.gradient,
                        "flex items-center justify-center text-white mb-4"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <motion.div
                      className="absolute -right-4 -top-4 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                    >
                      <div
                        className={cn(
                          "w-full h-full rounded-full bg-gradient-to-br",
                          feature.gradient,
                          "opacity-20 blur-xl"
                        )}
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {feature.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
