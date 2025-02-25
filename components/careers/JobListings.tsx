"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

const jobListings = [
  {
    title: "Secondary Mathematics Teacher",
    department: "Academic",
    location: "Main Campus",
    type: "Full-time",
    description:
      "Experienced Mathematics teacher needed for IGCSE and A-Level classes. Strong background in curriculum development and differentiated instruction required.",
  },
  {
    title: "Primary School Coordinator",
    department: "Administration",
    location: "Junior School",
    type: "Full-time",
    description:
      "Looking for an experienced educator to oversee primary school operations, curriculum implementation, and staff development.",
  },
  {
    title: "School Counselor",
    department: "Student Support",
    location: "All Campuses",
    type: "Full-time",
    description:
      "Licensed counselor needed to provide academic, social, and emotional support to students across all grade levels.",
  },
  {
    title: "Physical Education Teacher",
    department: "Academic",
    location: "Main Campus",
    type: "Full-time",
    description:
      "PE teacher needed to develop and implement comprehensive physical education programs for secondary students.",
  },
  {
    title: "IT Support Specialist",
    department: "Technology",
    location: "All Campuses",
    type: "Full-time",
    description:
      "Technical support specialist needed to maintain school IT infrastructure and provide support to staff and students.",
  },
  {
    title: "Library Assistant",
    department: "Academic Resources",
    location: "Main Campus",
    type: "Part-time",
    description:
      "Support the school librarian in managing resources, assisting students, and organizing library events.",
  },
];

export function JobListings() {
  return (
    <section className="py-24" id="job-listings">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Current Openings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our current job opportunities and find a role where you can
            make a difference in students' lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{job.description}</p>

              <Button asChild variant="outline">
                <Link href="#application-process">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
