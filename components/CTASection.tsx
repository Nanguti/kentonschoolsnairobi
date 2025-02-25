"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Journey at Brookhouse
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Take the first step towards providing your child with an
              exceptional education experience. Contact us today to learn more
              about our admissions process or schedule a campus visit.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+254 (0) 722 204 413</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>admissions@brookhouse.ac.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Magadi Road, Karen, Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/enquire-now">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary hover:text-primary"
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/visit-us/personalised-tours">
                <Button size="lg" variant="outline" className="border-white">
                  Book a Tour
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-lg p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Admissions Process",
                  href: "/admissions/admissions-process",
                },
                {
                  title: "School Fees",
                  href: "/admissions/fees",
                },
                {
                  title: "Academic Calendar",
                  href: "/school-life/calendar",
                },
                {
                  title: "Download Prospectus",
                  href: "/admissions/download-brochure",
                },
                {
                  title: "FAQs",
                  href: "/admissions/faqs",
                },
                {
                  title: "Contact Us",
                  href: "/brookhouse-contact",
                },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
