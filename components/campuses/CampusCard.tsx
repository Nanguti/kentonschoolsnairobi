"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface CampusCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  href: string;
  reverse?: boolean;
}

export function CampusCard({
  name,
  description,
  image,
  features,
  href,
  reverse = false,
}: CampusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 relative aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="text-lg text-muted-foreground mb-6">{description}</p>

          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Check className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link href={href}>
            <Button size="lg">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
