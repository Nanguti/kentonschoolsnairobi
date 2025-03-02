"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import { Group, Mesh } from "three";

// Animated planet component to add more visual interest
function AnimatedPlanet() {
  // Properly type the ref as Mesh to avoid the "rotation doesn't exist on type 'never'" error
  const planetRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Sphere ref={planetRef} args={[20, 32, 32]} position={[50, -20, -100]}>
      <meshStandardMaterial
        color="#6b21a8"
        roughness={0.7}
        metalness={0.2}
        emissive="#3b0764"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function AnimatedStars() {
  // Properly type the ref as Group to avoid the "rotation doesn't exist on type 'never'" error
  const groupRef = useRef<Group>(null);

  // Multiple star groups with different rotation speeds for more dynamic movement
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.03;
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      {/* Ambient light to make stars more visible */}
      <ambientLight intensity={0.3} />
      {/* Directional light to add dimension */}
      <directionalLight position={[0, 10, 5]} intensity={0.5} />

      {/* Main star group */}
      <group ref={groupRef}>
        <Stars
          radius={300}
          depth={60}
          count={7000}
          factor={5}
          saturation={0.5}
          fade
          speed={1.5}
        />
      </group>

      {/* Secondary star layer with different speed */}
      <Stars
        radius={250}
        depth={40}
        count={3000}
        factor={6}
        saturation={0.3}
        fade
        speed={1}
      />

      {/* Add planet for visual interest */}
      <AnimatedPlanet />
    </>
  );
}

const images = [
  {
    src: "/images/hero-banner-1.jpg",
    alt: "Students in classroom",
  },
  {
    src: "/images/main-banner.jpg",
    alt: "School campus",
  },
  {
    src: "/images/school-activities.jpg",
    alt: "School activities",
  },
  {
    src: "/images/culture.jpg",
    alt: "Cultural activities",
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Stars Background - Now with a dark background color */}
      <div className="absolute inset-0 z-0 bg-black">
        <Canvas
          camera={{ position: [0, 0, 100], fov: 75 }}
          dpr={[1, 2]} // Improved resolution
          gl={{
            antialias: true,
            alpha: false, // Ensure no transparency
            logarithmicDepthBuffer: true, // Better depth handling
          }}
        >
          <color attach="background" args={["#030014"]} />{" "}
          {/* Dark background with slight purple tint */}
          <fog attach="fog" args={["#030014", 100, 400]} />{" "}
          {/* Add fog for depth */}
          <AnimatedStars />
        </Canvas>
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary"
            >
              Welcome to{" "}
              <span className="text-primary drop-shadow-lg">
                Kenton Schools Nairobi
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Nurturing leaders of tomorrow through excellence in education,
              innovation, and character development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/enquire-now">
                <Button
                  size="lg"
                  className="text-lg group relative overflow-hidden"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="relative z-10">Enquire Now</span>
                  <motion.span
                    className="absolute inset-0 bg-primary-600"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovering ? "0%" : "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Button>
              </Link>
              <Link href="/our-school/about-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-2 hover:bg-primary/10 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel Column with improved animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.3)] bg-card/10 backdrop-blur-sm"
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-[0_0_100%] min-w-0 aspect-[4/3]"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: index === selectedIndex ? 1.05 : 1,
                      filter:
                        index === selectedIndex
                          ? "brightness(1.1)"
                          : "brightness(1)",
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Image overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Improved Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/30 hover:bg-primary/60 backdrop-blur-md shadow-lg"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-background/30 hover:bg-primary/60 backdrop-blur-md shadow-lg"
                  onClick={scrollNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Dots */}
            <div className="absolute bottom-6 left-0 right-0">
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: 1,
                      width: index === selectedIndex ? "2rem" : "0.5rem",
                      backgroundColor:
                        index === selectedIndex
                          ? "rgb(147, 51, 234)"
                          : "rgba(255, 255, 255, 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2 rounded-full cursor-pointer"
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
