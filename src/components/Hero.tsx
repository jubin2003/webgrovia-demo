"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { SupportChat } from "@/components/ui/support-chat";

const videoSources = [
  {
    url: "https://res.cloudinary.com/dsfwyhwfy/video/upload/v1746729795/0505_nbngyv.mp4",
    title: "Innovative Solutions",
    description: "Pushing boundaries with cutting-edge technology",
  },
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoChange = (index: number) => {
    setIsTransitioning(true);
    setCurrentVideoIndex(index);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleVideoEnded = () => {
    const nextIndex = (currentVideoIndex + 1) % videoSources.length;
    handleVideoChange(nextIndex);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      if (video.duration - video.currentTime <= 2 && !isMuted) {
        setIsMuted(true);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [currentVideoIndex, isMuted]);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoSources.map((video, index) => (
          <video
            key={video.url}
            ref={index === currentVideoIndex ? videoRef : null}
            src={video.url}
            autoPlay
            muted={isMuted}
            loop={false}
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content Bottom Left */}
      <div className="absolute bottom-12 left-8 z-10 w-full max-w-3xl pr-4">
        <motion.div
          key={currentVideoIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-white font-bold tracking-tight mb-4 text-4xl sm:text-5xl md:text-6xl leading-tight">
            {videoSources[currentVideoIndex].title}
          </h1>
          <p className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl max-w-xl">
            {videoSources[currentVideoIndex].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className={cn(
                "bg-white text-black",
                "hover:bg-gray-100",
                "transition-all duration-300",
                "shadow-lg hover:shadow-white/25"
              )}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={cn(
                "border-white/20 text-white",
                "hover:bg-white/10",
                "transition-all duration-300"
              )}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-4">
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

      {/* Video Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {videoSources.map((_, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Support Chat */}
      <SupportChat />
    </section>
  );
}
