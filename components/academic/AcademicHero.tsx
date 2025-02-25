"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AcademicHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/academic/hero-bg.jpg"
          alt="Academic Excellence"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Academic Excellence Through Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From Early Years to A-Levels, we provide a comprehensive British
              curriculum that nurtures critical thinking, creativity, and
              academic achievement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#programs">
                <Button size="lg" variant="default">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/academic-results">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:text-white"
                >
                  View Results
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
