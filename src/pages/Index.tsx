import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "@/components/Contact";
import FAQ from "../components/FAQ";
import Spline3D from "../components/Spline3D";
import Footer from "../components/Footer";
import InquiryPopup from "../components/InquiryPopup";
import AppleCardCarousal from "../components/ui/apple-cards-carousel-demo";
import { TextReveal } from "@/components/ui/text-reveal";
import FloatingContact from "@/components/FloatingContact";


const Index = () => {
  // Add custom scroll behavior to handle anchor links smoothly with fixed header
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash !== "") {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Account for fixed header height
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    // Handle hash in URL on first load
    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up event listener
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col">
        <Hero />
        <FloatingContact />
        <TextReveal>
          Transforming ideas into digital excellence through innovative
          technology solutions and creative design
        </TextReveal>
        <AboutUs />
        <WhyChooseUs />
        <Services />

        <AppleCardCarousal />
        <Contact />
        {/* //<Spline3D /> */}
        <FAQ />
      </main>

      <Footer />

      {/* Initial popup on page load */}
      <InquiryPopup isInitial={true} />

      {/* Recurring popup every 20 seconds */}
      <InquiryPopup />
    </div>
  );
};

export default Index;
