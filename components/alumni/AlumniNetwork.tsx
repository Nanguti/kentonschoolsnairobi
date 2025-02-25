"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  MessageSquare,
  Calendar,
  Heart,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Global Connections",
    description:
      "Connect with fellow alumni worldwide through our exclusive online platform.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Access job postings, mentorship programs, and professional networking events.",
  },
  {
    icon: GraduationCap,
    title: "Lifelong Learning",
    description:
      "Participate in workshops, seminars, and continuous education programs.",
  },
  {
    icon: Globe,
    title: "Regional Chapters",
    description:
      "Join local alumni groups and attend regional meetups and gatherings.",
  },
  {
    icon: MessageSquare,
    title: "Mentorship Program",
    description:
      "Share your experience or receive guidance from experienced alumni.",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description:
      "Attend special alumni-only events, reunions, and networking sessions.",
  },
  {
    icon: Heart,
    title: "Give Back",
    description:
      "Support current students through scholarships and mentoring programs.",
  },
  {
    icon: Award,
    title: "Alumni Benefits",
    description:
      "Enjoy exclusive discounts, facility access, and special privileges.",
  },
];

export function AlumniNetwork() {
  return (
    <section className="py-24" id="alumni-network">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Alumni Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of a thriving community of Brookhouse graduates and
            enjoy exclusive benefits designed to support your personal and
            professional growth.
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
