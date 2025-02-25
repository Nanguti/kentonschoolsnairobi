"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Early Years",
    ageRange: "Ages 2-5",
    description:
      "A nurturing environment where young learners begin their educational journey through play-based learning and discovery.",
    features: [
      "Play-based learning approach",
      "Foundation for literacy and numeracy",
      "Social and emotional development",
      "Specialist teaching in music and PE",
    ],
    image: "/academic/early-years.jpg",
    link: "/kindergarten-in-karen-runda-nairobi",
  },
  {
    title: "Primary School",
    ageRange: "Ages 5-11",
    description:
      "Building strong foundations in core subjects while developing critical thinking and creativity.",
    features: [
      "British National Curriculum",
      "Specialist subject teachers",
      "Wide range of extra-curricular activities",
      "Individual learning support",
    ],
    image: "/academic/primary.jpg",
    link: "/primary-preparatory-school-nairobi",
  },
  {
    title: "Secondary School",
    ageRange: "Ages 11-16",
    description:
      "Comprehensive IGCSE program preparing students for academic excellence and future success.",
    features: [
      "Cambridge IGCSE curriculum",
      "Wide range of subject choices",
      "Career guidance and counseling",
      "Advanced facilities and resources",
    ],
    image: "/academic/secondary.jpg",
    link: "/high-school-secondary-school-nairobi-kenya",
  },
  {
    title: "Sixth Form",
    ageRange: "Ages 16-18",
    description:
      "Advanced level studies preparing students for university and beyond through A-Levels and BTEC courses.",
    features: [
      "A-Level and BTEC options",
      "University preparation",
      "Leadership opportunities",
      "Specialized career guidance",
    ],
    image: "/academic/sixth-form.jpg",
    link: "/a-levels-kenya-nairobi",
  },
];

export function ProgramCards() {
  return (
    <section className="py-24" id="programs">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of academic programs designed to
            nurture every student's potential at each stage of their educational
            journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
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
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{program.title}</h3>
                  <span className="text-primary font-medium">
                    {program.ageRange}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={program.link}>
                  <Button className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
