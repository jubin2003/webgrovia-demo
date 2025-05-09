"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";

export default function WebgroviaServicesCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Creative & Digital Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ServiceContent = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      <img
        src={image}
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Web Design & Development",
    title: "Websites That Work and Wow.",
    src: "/website.png",
    content: (
      <ServiceContent
        title="Fast, Modern, Responsive Websites"
        description="We design and develop high-performing websites tailored to convert and captivate your audience — optimized for all devices."
        image="/web-design.png"
      />
    ),
  },
  {
    category: "App Development",
    title: "Powerful Mobile Apps, Built Right.",
    src: "/mobile app.png",
    content: (
      <ServiceContent
        title="Custom iOS & Android App Development"
        description="From prototypes to polished products, we build scalable, intuitive apps that deliver seamless experiences on every device."
        image="/app-development.png"
      />
    ),
  },
  {
    category: "Poster & Billboard Design",
    title: "Designs That Stand Tall.",
    src: "/poster_design.png",
    content: (
      <ServiceContent
        title="Eye-Catching Posters & Billboards"
        description="We craft bold and effective visual campaigns, placing your brand on real-world billboards and street posters that turn heads."
        image="/posterdesign.png"
      />
    ),
  },
  {
    category: "Video Ads Creation",
    title: "Video Content That Converts.",
    src: "/ad.png",
    content: (
      <ServiceContent
        title="Cinematic Ads & Commercial Videos"
        description="We produce professional video ads that capture attention, tell your story, and drive engagement across all platforms."
        image="/video-ads.png"
      />
    ),
  },
  {
    category: "Branding",
    title: "Build a Brand That Lasts.",
    src: "/branding.png",
    content: (
      <ServiceContent
        title="Identity, Logo & Visual Strategy"
        description="From logo design to full brand systems, we help you create a strong, recognizable identity that connects with your audience."
        image="/logo-branding.png"
      />
    ),
  },
  {
    category: "Digital Marketing",
    title: "Marketing That Drives Growth.",
    src: "/digital_marketing.png",
    content: (
      <ServiceContent
        title="SEO, Social Media & Paid Ads"
        description="Reach your ideal customers with smart digital strategies — SEO, PPC, email, and social media campaigns that deliver real results."
        image="/digital-marketing.png"
      />
    ),
  },
];
