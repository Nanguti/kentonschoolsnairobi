"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";

type EventCategory =
  | "Academic"
  | "Sports"
  | "Career Guidance"
  | "Arts & Culture";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  description: string;
  slug: string;
}

const events: Event[] = [
  {
    title: "Parent-Teacher Conference",
    date: "March 10, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Main Campus",
    category: "Academic",
    description:
      "Individual meetings with teachers to discuss student progress and development.",
    slug: "parent-teacher-conference-march-2024",
  },
  {
    title: "Inter-House Athletics Championship",
    date: "March 18, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Sports Complex",
    category: "Sports",
    description:
      "Annual athletics competition featuring track and field events across all year groups.",
    slug: "athletics-championship-2024",
  },
  {
    title: "University Fair 2024",
    date: "March 25, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "School Hall",
    category: "Career Guidance",
    description:
      "Meet representatives from top universities worldwide and explore higher education opportunities.",
    slug: "university-fair-2024",
  },
  {
    title: "Spring Music Concert",
    date: "April 5, 2024",
    time: "6:30 PM - 8:30 PM",
    location: "Auditorium",
    category: "Arts & Culture",
    description:
      "A showcase of musical talent featuring our school orchestra, choir, and individual performers.",
    slug: "spring-concert-2024",
  },
];

const categoryColors: Record<EventCategory, string> = {
  Academic: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  "Career Guidance": "bg-purple-100 text-purple-800",
  "Arts & Culture": "bg-orange-100 text-orange-800",
};

export function UpcomingEvents() {
  return (
    <section className="py-24 bg-muted/50" id="upcoming-events">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar for these exciting events happening at Kenton
            Schools Nairobi. Join us in celebrating learning, creativity, and
            community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                      categoryColors[event.category]
                    }`}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/events/${event.slug}`}>
                    <Bookmark className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/events/${event.slug}`}>
                    Event Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/events/calendar">
              View Full Calendar
              <Calendar className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
