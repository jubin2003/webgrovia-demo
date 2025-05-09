"use client";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div
      className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.2] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <div className="h-[60vh] flex items-center justify-center">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Build with Webgrovia"
          description="Scroll to see the magic of our innovative solutions come to life"
        />
      </div>
    </div>
  );
}
