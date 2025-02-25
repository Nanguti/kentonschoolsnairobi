"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Book,
  Music,
  Trophy,
  TestTube,
  Palette,
  Users,
  Library,
  LucideIcon,
} from "lucide-react";

function FacilityCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background rounded-lg p-6 text-center"
    >
      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

const facilities = [
  {
    icon: Laptop,
    title: "Technology",
    description:
      "State-of-the-art computer labs and digital learning resources",
  },
  {
    icon: Book,
    title: "Libraries",
    description:
      "Extensive collection of books, journals, and online resources",
  },
  {
    icon: Music,
    title: "Performing Arts",
    description: "Modern auditoriums and music rooms for creative expression",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "World-class sports facilities and training programs",
  },
  {
    icon: TestTube,
    title: "Science Labs",
    description: "Well-equipped laboratories for practical learning",
  },
  {
    icon: Palette,
    title: "Art Studios",
    description: "Dedicated spaces for visual arts and design",
  },
  {
    icon: Users,
    title: "Common Areas",
    description: "Collaborative spaces for student interaction",
  },
  {
    icon: Library,
    title: "Resource Centers",
    description: "Learning support and research facilities",
  },
];

export function CampusFacilities() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our campuses are equipped with modern facilities designed to enhance
            learning, creativity, and personal development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
