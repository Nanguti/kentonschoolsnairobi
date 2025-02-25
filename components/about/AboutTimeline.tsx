"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1981",
    title: "Foundation",
    description:
      "Kenton Schools Nairobi School was established with a vision to provide world-class education in Kenya.",
  },
  {
    year: "1991",
    title: "Karen Campus",
    description:
      "Expansion to our flagship Karen campus, featuring state-of-the-art facilities.",
  },
  {
    year: "2005",
    title: "IB Authorization",
    description:
      "Became an authorized International Baccalaureate World School.",
  },
  {
    year: "2016",
    title: "Runda Campus",
    description:
      "Opening of our second campus in Runda to serve the growing community.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description:
      "Launch of comprehensive digital learning platforms and virtual classrooms.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description:
      "Achieved outstanding academic results and global university placements.",
  },
];

export function AboutTimeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over four decades of excellence in education, shaping generations of
            leaders and innovators.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="bg-background rounded-lg p-6 shadow-lg">
                    <span className="text-primary font-bold text-xl mb-2 block">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
