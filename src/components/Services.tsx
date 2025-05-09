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
);// Update the Video component to be more responsive
const Video = ({ src }: { src: string }) => (
  <video
    className="w-full h-full min-h-[200px] object-cover rounded-xl"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={src} type="video/mp4" />
  </video>
);


const services = [
  {
    title: "Web Design & Development",
    description:
      "We design and develop custom websites that are fast, secure, responsive, and optimized for user experience. Whether it's an eCommerce site, corporate portal, or landing page — we build for performance and growth.",
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763575/web_design_n6fvhr.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763578/mobile-app_fyx52k.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763581/uiux_htxhbf.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763582/poster_q2ceja.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763588/Branding_dhjekq.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763580/SEO_qhdfdd.mp4" />
      ),
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
      header: (
        <Video src="https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746763580/video_editing_qdztui.mp4" />
      ),
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
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
  Our Services
</h2>
<div className="w-16 sm:w-24 h-1 bg-black mx-auto mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4">
            Comprehensive digital solutions to help your business thrive in the
            modern world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-2 sm:px-4"
        >
          <BentoGrid className="max-w-7xl mx-auto gap-4 sm:gap-6">
            {services.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={
                  <div className="block sm:hidden">
                    {service.description}
                  </div>
                }
                header={service.header}
                icon={service.icon}
                className={`${
                  i === 3 || i === 6 ? "md:col-span-2" : ""
                } transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
