"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const inquiryTypes = [
  "General Inquiry",
  "Admissions",
  "Academic Programs",
  "School Visits",
  "Employment",
  "Alumni Relations",
  "Media Relations",
  "Other",
];

export function ContactForm() {
  return (
    <section className="py-24 bg-muted/50" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as
              possible. All fields marked with an asterisk (*) are required.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-lg p-8 shadow-lg space-y-6"
          >
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address *
                </label>
                <Input type="email" placeholder="Enter your email" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            {/* Inquiry Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Inquiry Details</h3>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Type of Inquiry *
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject *
                </label>
                <Input placeholder="Enter message subject" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message *
                </label>
                <Textarea
                  placeholder="Type your message here..."
                  className="min-h-[150px]"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
