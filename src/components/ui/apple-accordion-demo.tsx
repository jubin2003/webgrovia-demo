"use client";
import { AppleAccordion } from "./apple-accordion";

export function AppleAccordionDemo() {
  const items = [
    {
      title: "What services does Webgrovia offer?",
      content: (
        <p>
          Webgrovia offers a comprehensive range of digital services including
          web development, mobile app development, UI/UX design, cloud
          solutions, and AI & machine learning services. We specialize in
          creating custom digital solutions that drive business growth.
        </p>
      ),
    },
    {
      title: "How long does a typical project take?",
      content: (
        <p>
          Project timelines vary depending on complexity and scope. A simple
          website might take 4-6 weeks, while a complex web application could
          take 3-6 months. We'll provide a detailed timeline during our initial
          consultation based on your specific requirements.
        </p>
      ),
    },
    {
      title: "What is your development process?",
      content: (
        <p>
          We follow an agile development methodology, breaking projects into
          sprints with regular client feedback. Our process includes discovery,
          design, development, testing, and deployment phases, ensuring
          transparency and quality at every step.
        </p>
      ),
    },
    {
      title: "Do you provide ongoing support?",
      content: (
        <p>
          Yes, we offer comprehensive maintenance and support services. This
          includes regular updates, security patches, performance monitoring,
          and technical support. We're committed to your long-term success.
        </p>
      ),
    },
    {
      title: "How do you handle project pricing?",
      content: (
        <p>
          We provide transparent pricing based on project scope and
          requirements. After understanding your needs, we'll provide a detailed
          quote. We offer both fixed-price and time-and-materials pricing models
          depending on project requirements.
        </p>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our services and process
          </p>
        </div>
        <AppleAccordion items={items} />
      </div>
    </section>
  );
}
