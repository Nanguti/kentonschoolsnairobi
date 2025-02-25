"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  GraduationCap,
  Calendar,
  CreditCard,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Complete the online application form and submit required documents",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Student completes entrance assessments appropriate to their age",
  },
  {
    icon: Calendar,
    title: "Interview",
    description: "Family interview with the relevant Head of School",
  },
  {
    icon: GraduationCap,
    title: "Offer",
    description: "Successful candidates receive an offer of placement",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Secure placement by paying registration fee and deposit",
  },
  {
    icon: CheckCircle,
    title: "Enrollment",
    description: "Complete enrollment process and prepare for start date",
  },
];

export function AdmissionsProcess() {
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
            Admissions Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our straightforward admissions process ensures we can best support
            your child educational journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
