"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Karen Campus",
    address: "Magadi Road, Karen, Nairobi, Kenya",
    phone: "+254 (0) 722 204 413",
    email: "karen@brookhouse.ac.ke",
    mapUrl: "https://maps.google.com/?q=Brookhouse+School+Karen",
  },
  {
    name: "Runda Campus",
    address: "Kiambu Road, Runda, Nairobi, Kenya",
    phone: "+254 (0) 722 204 414",
    email: "runda@brookhouse.ac.ke",
    mapUrl: "https://maps.google.com/?q=Brookhouse+School+Runda",
  },
];

export function CampusLocation() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Our Campuses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our world-class facilities firsthand. Schedule a visit to
            either of our campuses and discover the Brookhouse difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">{location.name}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{location.email}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href={`/visit-us/personalised-tours?campus=${location.name.toLowerCase()}`}
                  >
                    Book a Tour
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
