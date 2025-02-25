"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Users } from "lucide-react";

const statistics = [
  {
    icon: Trophy,
    value: "97%",
    label: "A*-C Grades at A-Level",
    description: "Outstanding achievement in advanced studies",
  },
  {
    icon: Star,
    value: "92%",
    label: "A*-B Grades at IGCSE",
    description: "Exceptional performance in international examinations",
  },
  {
    icon: Award,
    value: "100%",
    label: "University Acceptance",
    description: "Students accepted into top universities worldwide",
  },
  {
    icon: Users,
    value: "85%",
    label: "Russell Group Offers",
    description: "Students receiving offers from prestigious UK universities",
  },
];

const universities = [
  "University of Oxford",
  "University of Cambridge",
  "Imperial College London",
  "London School of Economics",
  "University College London",
  "University of Toronto",
  "McGill University",
  "Stanford University",
];

export function AcademicResults() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students consistently achieve outstanding results, enabling them
            to pursue their studies at leading universities worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 text-center shadow-lg"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Recent University Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                {university}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
