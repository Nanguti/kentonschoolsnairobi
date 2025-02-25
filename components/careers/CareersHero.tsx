"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export function CareersHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/careers/careers-hero.jpg"
          alt="Careers at Brookhouse School"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Shape the Future of Education
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 text-gray-200"
          >
            Join a community of passionate educators and professionals dedicated
            to nurturing the next generation of leaders. Discover rewarding
            career opportunities at Brookhouse School.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="#job-listings">
                <Users className="mr-2 h-4 w-4" />
                View Open Positions
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 hover:bg-white/20 border-white"
            >
              <Link href="#application-process">
                <ArrowRight className="mr-2 h-4 w-4" />
                How to Apply
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
