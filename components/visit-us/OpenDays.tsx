"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const upcomingOpenDays = [
  {
    date: "March 15, 2024",
    time: "9:00 AM - 2:00 PM",
    title: "Spring Term Open Day",
    description:
      "Experience our vibrant academic community and see our students in action.",
    highlights: [
      "Campus Tours",
      "Student Performances",
      "Faculty Presentations",
      "Q&A Sessions",
    ],
  },
  {
    date: "May 20, 2024",
    time: "10:00 AM - 3:00 PM",
    title: "Summer Showcase",
    description:
      "Join us for a special showcase of student achievements and school facilities.",
    highlights: [
      "Art Exhibition",
      "Sports Demonstrations",
      "Science Fair",
      "Music Recitals",
    ],
  },
];

export function OpenDays() {
  return (
    <section className="py-24 bg-muted/50" id="open-days">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming Open Days
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for an immersive experience of life at Kenton Schools
            Nairobi. Meet our teachers, students, and see our facilities in
            action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {upcomingOpenDays.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{event.description}</p>

              <div className="space-y-3 mb-6">
                {event.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full">Register Interest</Button>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-background rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Register Your Interest
          </h3>
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
                Preferred Open Day
              </label>
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option value="">Select an Open Day</option>
                {upcomingOpenDays.map((event, index) => (
                  <option key={index} value={event.date}>
                    {event.title} - {event.date}
                  </option>
                ))}
              </select>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Register Now
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
