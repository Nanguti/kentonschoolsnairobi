"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const feeStructure = [
  {
    level: "Early Years",
    term: "KES 450,000",
    annual: "KES 1,350,000",
    extras: ["Registration Fee: KES 10,000", "Development Levy: KES 50,000"],
  },
  {
    level: "Primary School",
    term: "KES 550,000",
    annual: "KES 1,650,000",
    extras: ["Registration Fee: KES 10,000", "Development Levy: KES 50,000"],
  },
  {
    level: "Secondary School",
    term: "KES 650,000",
    annual: "KES 1,950,000",
    extras: ["Registration Fee: KES 10,000", "Development Levy: KES 50,000"],
  },
  {
    level: "Sixth Form",
    term: "KES 750,000",
    annual: "KES 2,250,000",
    extras: ["Registration Fee: KES 10,000", "Development Levy: KES 50,000"],
  },
];

export function AdmissionsFees() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">School Fees</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our fee structure for the academic year 2024/2025. All fees are in
            Kenyan Shillings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {feeStructure.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{level.level}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Per Term</p>
                  <p className="text-2xl font-bold text-primary">
                    {level.term}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual</p>
                  <p className="text-lg font-semibold">{level.annual}</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">
                    Additional Fees
                  </p>
                  {level.extras.map((extra, i) => (
                    <p key={i} className="text-sm">
                      {extra}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/admissions/fees">
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Complete Fee Structure
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
