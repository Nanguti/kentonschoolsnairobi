"use client";

import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Globe,
  BarChart,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical coverage, wellness programs, and work-life balance initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Continuous learning opportunities, workshops, and career advancement pathways.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside passionate educators in a supportive and inclusive environment.",
  },
  {
    icon: Target,
    title: "Competitive Package",
    description:
      "Attractive salary, performance bonuses, and comprehensive benefits package.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Support",
    description:
      "Resources and support for implementing innovative teaching methods and ideas.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connect with educators worldwide through our international school network.",
  },
  {
    icon: BarChart,
    title: "Career Growth",
    description:
      "Clear progression paths and leadership opportunities across departments.",
  },
  {
    icon: Leaf,
    title: "Work Environment",
    description:
      "Modern facilities, state-of-the-art technology, and beautiful campus grounds.",
  },
];

export function Benefits() {
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
            Why Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a school that values its staff and provides comprehensive
            benefits to support your professional growth and personal wellbeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-lg"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
