"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AdmissionsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Begin your journey at Brookhouse School, where excellence meets
              opportunity. We welcome students who are eager to learn, grow, and
              make a positive impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions/download-brochure">
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Prospectus
                </Button>
              </Link>
              <Link href="#enquiry-form">
                <Button variant="outline" size="lg">
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Key Information</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Applications open for all year groups</li>
              <li>• British Curriculum from Early Years to A-Levels</li>
              <li>• Scholarships available for exceptional students</li>
              <li>• Boarding facilities for secondary students</li>
              <li>• Transport services available</li>
              <li>• Individual campus tours available</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 