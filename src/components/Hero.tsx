"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { SupportChat } from "@/components/ui/support-chat";
import FloatingContact from "./FloatingContact";

const videoSources = [
  {
    desktopUrl: "https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto,w_720/v1746769314/webgrovia_liq7w6.mp4",
    mobileUrl: "https://res.cloudinary.com/dsfwyhwfy/video/upload/f_auto,q_auto/v1746782636/webgrovia-vertical_y4snjt.mp4",
    title: "Innovative Solutions",
    description: "Pushing boundaries with cutting-edge technology",
  },
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // Added state for scroll detection
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = window.innerWidth <= 768;

  const handleVideoEnded = () => {
    const nextIndex = (currentVideoIndex + 1) % videoSources.length;
    setCurrentVideoIndex(nextIndex);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [currentVideoIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Detect when the user scrolls past the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0); // Update scroll state
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoSources.map((video, index) => (
          <video
            key={video.desktopUrl}
            ref={index === currentVideoIndex ? videoRef : null}
            src={isMobile ? video.mobileUrl : video.desktopUrl}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content - Updated for mobile centering */}
      <div className="absolute z-10 w-full px-4 sm:px-8 sm:bottom-12 sm:left-8">
        <motion.div
          key={currentVideoIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0 flex flex-col items-center sm:items-start"
        >
          <h1 className="text-white font-bold tracking-tight mb-4 text-4xl sm:text-5xl md:text-6xl leading-tight">
            {videoSources[currentVideoIndex].title}
          </h1>
          <p className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl max-w-xl">
            {videoSources[currentVideoIndex].description}
          </p>
        </motion.div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-20 sm:bottom-8 right-8 z-20 flex flex-col items-end gap-4">
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={togglePlay}
            className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </motion.button>
          <motion.button
            onClick={toggleMute}
            className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
        <motion.p
          className="text-white/70 text-sm mb-2 uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Support Chat */}
      <SupportChat />
      <FloatingContact/>
     
    </section>
  );
}
