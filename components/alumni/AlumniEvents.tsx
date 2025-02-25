"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Annual Alumni Reunion",
    date: "September 15, 2024",
    time: "2:00 PM - 8:00 PM",
    location: "Main Campus",
    description:
      "Join us for our biggest alumni gathering of the year. Reconnect with classmates, tour the campus, and enjoy an evening of networking and entertainment.",
    attendees: "250+ Expected",
  },
  {
    title: "Career Networking Night",
    date: "October 5, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Karen Campus",
    description:
      "Connect with fellow alumni across various industries. Perfect opportunity for career advancement and professional networking.",
    attendees: "100+ Expected",
  },
  {
    title: "Alumni Sports Tournament",
    date: "November 12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Sports Complex",
    description:
      "Participate in various sports competitions and relive your school days. Football, basketball, and athletics events planned.",
    attendees: "150+ Expected",
  },
  {
    title: "Global Alumni Summit",
    date: "December 3, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    description:
      "Join alumni from around the world for this virtual summit featuring keynote speakers, panel discussions, and networking sessions.",
    attendees: "500+ Expected",
  },
];

export function AlumniEvents() {
  return (
    <section className="py-24" id="alumni-events">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming Alumni Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the Brookhouse community through our regular
            alumni events and gatherings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{event.description}</p>

              <Button variant="outline">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
