"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Users, Building, CheckCircle } from "lucide-react";

const tourFeatures = [
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Tours available Monday to Friday, 9 AM to 3 PM",
  },
  {
    icon: Users,
    title: "Personal Guide",
    description: "Dedicated staff member to answer all your questions",
  },
  {
    icon: Building,
    title: "Full Access",
    description: "Visit all key facilities and learning spaces",
  },
  {
    icon: CheckCircle,
    title: "Custom Focus",
    description: "Tour tailored to your specific interests",
  },
];

export function PersonalisedTours() {
  return (
    <section className="py-24" id="personalised-tours">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tour Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Personalised Campus Tours
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience Kenton Schools Nairobi through a guided tour tailored
              to your interests. Our staff will show you our facilities and
              answer all your questions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tourFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-muted/50 rounded-lg p-6"
                  >
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Book Your Tour</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Preferred Date
                </label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Additional Notes
                </label>
                <Textarea placeholder="Tell us about your specific interests or requirements" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Schedule Tour
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
