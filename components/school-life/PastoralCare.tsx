"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Student Wellbeing",
    description:
      "Comprehensive emotional and social support through dedicated counselors and mentors.",
  },
  {
    icon: Brain,
    title: "Academic Support",
    description:
      "Personalized learning assistance and study skills development programs.",
  },
  {
    icon: Users,
    title: "House System",
    description:
      "Supportive community groups fostering belonging and healthy competition.",
  },
  {
    icon: Shield,
    title: "Student Safety",
    description:
      "Creating a secure and nurturing environment for all students.",
  },
];

export function PastoralCare() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pastoral Care</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supporting every student's wellbeing and personal development
            through comprehensive care programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 text-center shadow-lg"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
