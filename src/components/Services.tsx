"use client";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconChartBar,
  IconBrandX,
  IconSpeakerphone,
  IconLayoutGrid,
  IconVideo,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const services = [
  {
    title: "Web Design & Development",
    description:
      "We design and develop custom websites that are fast, secure, responsive, and optimized for user experience. Whether it's an eCommerce site, corporate portal, or landing page — we build for performance and growth.",
    header: <Skeleton />,
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "web design company",
      "website development services",
      "responsive websites",
      "custom web development",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Build user-friendly, feature-rich mobile apps for iOS and Android. We offer native and cross-platform app development to help businesses reach customers anytime, anywhere.",
    header: <Skeleton />,
    icon: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "mobile app development",
      "iOS and Android apps",
      "cross-platform apps",
      "app development agency",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Delight users with intuitive, user-centered interfaces. Our UI/UX team creates seamless digital experiences backed by research, wireframing, prototyping, and usability testing.",
    header: <Skeleton />,
    icon: <IconPalette className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "UI/UX design services",
      "user experience design",
      "interface design",
      "app UI design",
    ],
  },
  {
    title: "Poster & Billboard Design",
    description:
      "Get noticed with professionally designed posters and billboards that communicate your message at a glance. Perfect for campaigns, product launches, or brand awareness.",
    header: <Skeleton />,
    icon: <IconLayoutGrid className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "poster design services",
      "billboard design agency",
      "outdoor advertising creatives",
    ],
  },
  {
    title: "Branding & Identity Design",
    description:
      "We craft memorable brand identities that resonate with your target audience. Our team specializes in logo design, color strategy, typography, and complete brand guidelines to establish a cohesive and professional presence.",
    header: <Skeleton />,
    icon: <IconBrandX className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "branding services",
      "logo design",
      "brand identity design",
      "creative branding agency",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Drive engagement, traffic, and conversions with our ROI-focused digital marketing strategies. We offer SEO, PPC, content marketing, email campaigns, and social media management that help your brand stand out.",
    header: <Skeleton />,
    icon: <IconSpeakerphone className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "digital marketing agency",
      "SEO services",
      "PPC advertising",
      "social media marketing",
    ],
  },
  {
    title: "Video Ads & Commercial Creation",
    description:
      "Boost your brand's visibility with engaging video ads tailored for digital platforms. From scripting to editing, we produce eye-catching video content for social media, YouTube, and paid campaigns.",
    header: <Skeleton />,
    icon: <IconVideo className="h-4 w-4 text-neutral-500" />,
    keywords: [
      "video ad creation",
      "digital commercials",
      "promotional video production",
      "social media video ads",
    ],
  },
];

export default function Services() {
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the
            modern world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid className="max-w-4xl mx-auto">
            {services.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={service.description}
                header={service.header}
                icon={service.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
