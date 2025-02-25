"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const leaders = [
  {
    name: "Dr. John Smith",
    role: "Director",
    image: "/about/leaders/director.jpg",
    bio: "With over 25 years in international education, Dr. Smith brings extensive experience in curriculum development and school leadership.",
    linkedin: "https://linkedin.com/in/john-smith",
    email: "director@brookhouse.ac.ke",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Secondary",
    image: "/about/leaders/secondary-head.jpg",
    bio: "An experienced educator passionate about fostering academic excellence and student wellbeing in secondary education.",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    email: "secondary@brookhouse.ac.ke",
  },
  {
    name: "Michael Chen",
    role: "Head of Primary",
    image: "/about/leaders/primary-head.jpg",
    bio: "Dedicated to creating engaging learning environments that nurture young minds and promote holistic development.",
    linkedin: "https://linkedin.com/in/michael-chen",
    email: "primary@brookhouse.ac.ke",
  },
];

export function AboutLeadership() {
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
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals guiding Brookhouse School towards
            excellence in education and student development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.role}</p>
                <p className="text-muted-foreground mb-6">{leader.bio}</p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={`mailto:${leader.email}`}>
                      <MailIcon className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
