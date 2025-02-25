"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Building,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Scholarship Fund",
    description:
      "Support talented students who need financial assistance to access quality education at Kenton Schools Nairobi.",
    impact: "Funded 50+ scholarships last year",
  },
  {
    icon: Building,
    title: "Campus Development",
    description:
      "Contribute to the development and enhancement of school facilities and infrastructure.",
    impact: "Building new STEM center",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Share your expertise and experience with current students through our structured mentorship program.",
    impact: "200+ active mentors",
  },
  {
    icon: Heart,
    title: "Community Projects",
    description:
      "Support various community service initiatives and outreach programs run by the school.",
    impact: "10+ ongoing projects",
  },
];

export function AlumniGiving() {
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
            Give Back to Kenton Schools Nairobi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support helps us maintain excellence in education and create
            opportunities for the next generation of leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {initiative.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {initiative.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Make a Donation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            All donations are tax-deductible. For more information about giving
            options, please contact our development office.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
