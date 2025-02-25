"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Home, Utensils, Bus, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const dailySchedule = [
  {
    time: "07:30",
    activity: "Arrival & Registration",
    description: "Students arrive and prepare for the day",
  },
  {
    time: "08:00",
    activity: "Morning Assembly",
    description: "Daily announcements and community gathering",
  },
  {
    time: "08:30",
    activity: "Academic Sessions",
    description: "Core subject lessons begin",
  },
  {
    time: "10:30",
    activity: "Morning Break",
    description: "Refreshments and social time",
  },
  {
    time: "12:30",
    activity: "Lunch Break",
    description: "Dining hall service and activities",
  },
  {
    time: "14:00",
    activity: "Afternoon Sessions",
    description: "Specialized subjects and activities",
  },
  {
    time: "16:00",
    activity: "Extra-Curricular",
    description: "Sports, clubs, and activities",
  },
];

const facilities = [
  {
    icon: Home,
    title: "Boarding Houses",
    description: "Modern boarding facilities with comfortable living spaces",
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Nutritious meals prepared by professional catering staff",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Comprehensive bus service covering major residential areas",
  },
];

export function StudentLife() {
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
            A Day in the Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant daily life at Brookhouse, where every day
            brings new opportunities for learning and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Daily Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              Daily Schedule
            </h3>
            <div className="space-y-6">
              {dailySchedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-primary font-semibold w-20">
                    {item.time}
                  </div>
                  <div>
                    <div className="font-medium">{item.activity}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Facilities */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src="/school-life/campus-life.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg p-4 shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">{facility.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {facility.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Experience Brookhouse Life
          </h3>
          <div className="flex justify-center gap-4">
            <Link href="/visit-us/personalised-tours">
              <Button size="lg">
                Book a School Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/school-life/calendar">
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                View Calendar
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
