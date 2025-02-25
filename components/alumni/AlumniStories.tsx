"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    graduation: "Class of 2010",
    role: "Tech Entrepreneur",
    image: "/alumni/alumni-1.jpg",
    quote:
      "The foundation I received at Kenton Schools Nairobi prepared me for success in the tech industry. The critical thinking and leadership skills I developed here have been invaluable.",
  },
  {
    name: "David Mwangi",
    graduation: "Class of 2008",
    role: "Medical Doctor",
    image: "/alumni/alumni-2.jpg",
    quote:
      "Kenton Schools Nairobi fostered my passion for science and medicine. Today, I'm proud to be making a difference in healthcare, thanks to the strong academic foundation I received.",
  },
  {
    name: "Priya Patel",
    graduation: "Class of 2012",
    role: "International Diplomat",
    image: "/alumni/alumni-3.jpg",
    quote:
      "The international perspective and cultural awareness I gained at Kenton Schools Nairobi have been crucial in my diplomatic career. It truly shaped my worldview.",
  },
];

export function AlumniStories() {
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
            Alumni Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our alumni are making significant impacts across various fields
            globally. Here are some of their inspiring journeys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  ${"{story.quote}"}
                </p>
                <div>
                  <h3 className="text-xl font-semibold">{story.name}</h3>
                  <p className="text-primary">{story.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {story.graduation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
