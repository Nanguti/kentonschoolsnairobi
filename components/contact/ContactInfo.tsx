"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Main Campus",
    details: [
      "123 School Lane",
      "Karen, Nairobi",
      "P.O. Box 45678-00100",
      "Kenya",
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "Main: +254 (0) 123 456 789",
      "Admissions: +254 (0) 123 456 790",
      "Emergency: +254 (0) 123 456 791",
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@brookhouse.com",
      "admissions@brookhouse.com",
      "support@brookhouse.com",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
  {
    icon: Globe,
    title: "Social Media",
    details: [
      "Facebook: @BrookhouseSchool",
      "Twitter: @BrookhouseKE",
      "Instagram: @brookhouse_school",
    ],
  },
];

export function ContactInfo() {
  return (
    <section className="py-24" id="contact-info">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us through any of these channels. We're here to
            help and will respond to your inquiry as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-lg"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2">
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-center">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-background rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7794359606517!2d36.7634!3d-1.3177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMDQuNCJTIDM2wrA0NSc0OC4yIkU!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
