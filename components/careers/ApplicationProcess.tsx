"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  FileText,
  UserCheck,
  Users,
  Phone,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Review Requirements",
    description:
      "Carefully review the job description, qualifications, and responsibilities for your desired position.",
  },
  {
    icon: FileText,
    title: "2. Prepare Documents",
    description:
      "Submit your CV, cover letter, educational certificates, and professional references.",
  },
  {
    icon: UserCheck,
    title: "3. Initial Screening",
    description:
      "Our HR team will review your application and assess your qualifications against the role requirements.",
  },
  {
    icon: Users,
    title: "4. Panel Interview",
    description:
      "Qualified candidates will be invited for a panel interview with department heads and school leadership.",
  },
  {
    icon: Phone,
    title: "5. Reference Check",
    description:
      "We'll contact your professional references to verify your experience and qualifications.",
  },
  {
    icon: CheckCircle,
    title: "6. Job Offer",
    description:
      "Successful candidates will receive a formal offer letter with employment terms and conditions.",
  },
];

export function ApplicationProcess() {
  return (
    <section className="py-24 bg-muted/50" id="application-process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Application Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to apply for a position at our school. We aim to
            make the process transparent and straightforward.
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
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            For any questions about the application process, please contact our
            HR department at{" "}
            <a
              href="mailto:careers@Kenton Schools Nairobi.com"
              className="text-primary hover:underline"
            >
              careers@Kenton Schools Nairobi.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
