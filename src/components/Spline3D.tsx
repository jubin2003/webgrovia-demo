"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Spline3D() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload the Spline scene
    const preloadScene = async () => {
      try {
        const response = await fetch(
          "https://prod.spline.design/lE8WWt6Fjrj0PD52/scene.splinecode"
        );
        if (response.ok) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Failed to preload Spline scene:", error);
      }
    };

    preloadScene();
  }, []);

  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[800px] overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          {isLoaded && (
            <Spline
              scene="https://prod.spline.design/lE8WWt6Fjrj0PD52/scene.splinecode"
              className="absolute inset-0"
              style={{
                transform: "scale(1.1)",
                transformOrigin: "center",
                pointerEvents: "none", // Disable interaction with the 3D scene
              }}
            />
          )}
          {/* Focused overlay for bottom-right watermark */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-transparent via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/5 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
