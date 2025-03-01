"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main-banner.jpg"
          alt="Kenton Schools Nairobi School Campus"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Kenton Schools Nairobi School
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            A legacy of excellence in education since 1981, nurturing future
            leaders and global citizens in the heart of Kenya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
