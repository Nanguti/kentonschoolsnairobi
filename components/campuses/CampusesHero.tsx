"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CampusesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/campuses/hero-bg.jpg"
          alt="Brookhouse School Campuses"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our World-Class Campuses
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Experience excellence in education across our two prestigious
            locations in Nairobi, each offering unique opportunities for
            learning and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
