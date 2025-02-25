"use client";

import { motion } from "framer-motion";
import { Target, Star, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide a world-class education that nurtures individual talents, fosters academic excellence, and develops responsible global citizens.",
  },
  {
    icon: Star,
    title: "Vision",
    description:
      "To be the leading international school in Africa, recognized for excellence in education, innovation, and character development.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Excellence, Integrity, Innovation, Global Mindedness, Respect, and Community Service form the foundation of our educational philosophy.",
  },
];

export function AboutMission() {
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
            Our Mission & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Kenton Schools Nairobi, we are committed to excellence in
            education and the development of well-rounded individuals prepared
            for global challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-muted/50 rounded-lg p-8 text-center"
            >
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our founding in 1981, Kenton Schools Nairobi has maintained an
            unwavering commitment to academic excellence, personal growth, and
            the development of future leaders who will make positive
            contributions to society.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
