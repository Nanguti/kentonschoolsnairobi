"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FlagTriangleRight,
  Music,
  Users,
  Globe,
  Award,
  ChevronRight,
} from "lucide-react";

const activities = [
  {
    title: "Sports",
    icon: FlagTriangleRight,
    description:
      "Comprehensive sports program including football, rugby, cricket, swimming, athletics, and more.",
    image: "/images/swimming-pool.jpg",
    features: [
      "Professional coaching",
      "Modern facilities",
      "Inter-school competitions",
      "Sports scholarships",
    ],
    link: "/school-life/sports",
  },
  {
    title: "Arts & Culture",
    icon: Music,
    description:
      "Rich artistic programs in music, drama, dance, and visual arts.",
    image: "/images/hero-banner-1.jpg",
    features: [
      "Music ensembles",
      "Drama productions",
      "Art exhibitions",
      "Cultural festivals",
    ],
    link: "/school-life/arts",
  },
  {
    title: "Clubs & Societies",
    icon: Users,
    description:
      "Student-led clubs fostering leadership and special interests.",
    image: "/images/music.jpg",
    features: [
      "Debate club",
      "STEM society",
      "Environmental club",
      "Community service",
    ],
    link: "/school-life/clubs",
  },
  {
    title: "Global Programs",
    icon: Globe,
    description: "International exchanges and global citizenship initiatives.",
    image: "/images/main-banner.jpg",
    features: [
      "Exchange programs",
      "Model United Nations",
      "International trips",
      "Cultural exchanges",
    ],
    link: "/school-life/global-programs",
  },
];

export function Activities() {
  return (
    <section className="py-24" id="activities">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Extra-Curricular Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse range of activities ensures every student can explore
            their interests and develop new skills beyond the classroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
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
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {activity.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {activity.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <a href={activity.link}>
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
