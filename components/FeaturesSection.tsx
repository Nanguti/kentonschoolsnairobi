"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Users,
  Medal,
  BookOpen,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "British curriculum from Early Years to A-Levels with outstanding results.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "International exchange programs and diverse student community.",
  },
  {
    icon: Users,
    title: "Pastoral Care",
    description:
      "Dedicated support system ensuring student wellbeing and development.",
  },
  {
    icon: Medal,
    title: "Sports & Activities",
    description:
      "Comprehensive sports program and extra-curricular activities.",
  },
  {
    icon: BookOpen,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, and learning spaces.",
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description:
      "Rich programs in visual arts, music, drama, and cultural activities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Brookhouse</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide a comprehensive educational experience that nurtures
            academic excellence, personal growth, and global awareness.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
