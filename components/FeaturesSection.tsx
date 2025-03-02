"use client";

import { useState, useRef, useEffect, RefObject } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Users,
  Medal,
  BookOpen,
  Palette,
  ChevronRight,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureType {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  details: string;
}

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "British curriculum from Early Years to A-Levels with outstanding results.",
    color: "#8B5CF6", // Purple
    details:
      "Our students consistently achieve top results in national and international examinations, with over 90% of our graduates securing places at leading universities worldwide.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "International exchange programs and diverse student community.",
    color: "#3B82F6", // Blue
    details:
      "Students from over 40 nationalities create a rich multicultural environment. Our international exchanges with partner schools across 5 continents broaden horizons.",
  },
  {
    icon: Users,
    title: "Pastoral Care",
    description:
      "Dedicated support system ensuring student wellbeing and development.",
    color: "#EC4899", // Pink
    details:
      "Our team of counselors, mentors, and house parents create a supportive environment where every student feels valued, heard, and empowered to reach their potential.",
  },
  {
    icon: Medal,
    title: "Sports & Activities",
    description:
      "Comprehensive sports program and extra-curricular activities.",
    color: "#F59E0B", // Amber
    details:
      "From swimming to cricket, basketball to athletics, we offer over 30 sporting disciplines. Our teams regularly compete and win at national and international competitions.",
  },
  {
    icon: BookOpen,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, and learning spaces.",
    color: "#10B981", // Emerald
    details:
      "Our campus features smart classrooms, science and computer labs, a comprehensive library, performing arts center, Olympic-sized swimming pool, and extensive sports fields.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description:
      "Rich programs in visual arts, music, drama, and cultural activities.",
    color: "#EF4444", // Red
    details:
      "Students develop their creative talents through dedicated arts facilities, expert tuition, and regular performances and exhibitions showcasing their achievements.",
  },
];

// SVG patterns for the background
const PatternBackground = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
    <svg
      className="absolute left-0 top-0 w-full h-full"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
        <pattern
          id="dot-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="1" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  </div>
);

// Feature card component
const FeatureCard = ({
  feature,
  index,
}: {
  feature: FeatureType;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Motion values for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth spring animation for rotation
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Background gradient that follows mouse
  const background = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    ${feature.color}10 0%,
    ${feature.color}05 40%,
    transparent 70%
  )`;

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / 25;
    const offsetY = (e.clientY - centerY) / 25;

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    rotateY.set(offsetX);
    rotateX.set(-offsetY);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Determine height for expanded card
  const expandedHeight = isExpanded ? "auto" : "0px";

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.21, 0.45, 0.05, 0.9],
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="h-full bg-background rounded-xl p-6 flex flex-col relative overflow-hidden group select-none"
      style={{
        boxShadow: `0 10px 30px -15px ${feature.color}40`,
        perspective: "1000px",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Border gradient */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px ${feature.color}40`,
        }}
      />

      {/* 3D rotation container */}
      <motion.div
        className="flex flex-col h-full z-10"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Icon with animated background */}
        <div className="relative mb-4 w-16 h-16">
          <div
            className="absolute inset-0 rounded-lg opacity-20"
            style={{ backgroundColor: feature.color }}
          />
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 0.8 : 0.3,
              scale: isHovered ? 1 : 0.8,
              backgroundColor: feature.color,
            }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <feature.icon className="h-8 w-8 text-white relative z-10" />
          </div>
        </div>

        {/* Title with animated underline */}
        <div className="mb-2 relative">
          <h3 className="text-2xl font-bold">{feature.title}</h3>
          <motion.div
            className="h-[2px] rounded"
            style={{ backgroundColor: feature.color }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "40px" : "0px" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <p className="text-muted-foreground text-lg">{feature.description}</p>

        <div className="mt-auto pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm font-medium mt-2 group/button"
            style={{ color: feature.color }}
          >
            <span>Learn more</span>
            <motion.div
              animate={{
                x: isExpanded ? 5 : 0,
                rotate: isExpanded ? 90 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: expandedHeight, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-muted-foreground">{feature.details}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Floating animated shapes
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 60 + 10;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: size,
              height: size,
              x: `${x}%`,
              y: `${y}%`,
              backgroundColor: features[i % features.length].color,
            }}
            animate={{
              y: [`${y}%`, `${y - 20}%`, `${y}%`],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export function FeaturesSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const headingControls = useAnimation();

  useEffect(() => {
    if (isHeadingInView) {
      headingControls.start("visible");
    }
  }, [isHeadingInView, headingControls]);

  const headingCharacters = "Why Choose Kenton Schools Nairobi?".split("");

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <PatternBackground />
      <FloatingShapes />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          className="text-center mb-20 relative"
        >
          {/* Animated heading with letter-by-letter reveal */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 overflow-hidden">
            <span className="sr-only">Why Choose Kenton Schools Nairobi?</span>
            <span aria-hidden="true" className="flex justify-center">
              {headingCharacters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: 80, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.03,
                        ease: [0.33, 1, 0.68, 1],
                      },
                    },
                  }}
                  className={cn(
                    "inline-block",
                    char === "K" || char === "S" || char === "N"
                      ? "text-primary"
                      : ""
                  )}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: headingCharacters.length * 0.03,
                },
              },
            }}
          >
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-6">
              We provide a comprehensive educational experience that nurtures
              academic excellence, personal growth, and global awareness.
            </p>

            <motion.div
              className="inline-flex items-center gap-2 text-primary font-medium text-lg cursor-pointer group"
              whileHover={{ gap: 4 }}
            >
              <span>Discover our approach</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: headingCharacters.length * 0.03 + 0.5,
              ease: "easeOut",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
