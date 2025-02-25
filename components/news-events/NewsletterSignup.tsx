"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Bell, Send } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important school news,
              events, and achievements. We send updates twice a month.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">School Updates</h3>
                <p className="text-muted-foreground">
                  Get the latest news about academic achievements, campus
                  developments, and important announcements.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Event Reminders</h3>
                <p className="text-muted-foreground">
                  Never miss an important school event with timely reminders
                  about upcoming activities and functions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              By subscribing, you agree to receive school newsletters and accept
              our privacy policy.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
