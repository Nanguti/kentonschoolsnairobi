"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    title: "Outstanding A-Level Results 2024",
    excerpt: "Our students achieve exceptional results with 85% A*-B grades.",
    image: "/news/results.jpg",
    date: "March 15, 2024",
    category: "Academic",
    slug: "/news/outstanding-a-level-results-2024",
  },
  {
    title: "International Arts Festival Success",
    excerpt: "Students showcase talent in music, drama, and visual arts.",
    image: "/news/arts-festival.jpg",
    date: "March 10, 2024",
    category: "Arts & Culture",
    slug: "/news/international-arts-festival-2024",
  },
  {
    title: "Sports Teams Regional Champions",
    excerpt: "Brookhouse teams triumph in regional championships.",
    image: "/news/sports.jpg",
    date: "March 5, 2024",
    category: "Sports",
    slug: "/news/sports-teams-regional-champions",
  },
];

export function NewsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings, achievements, and events at
            Brookhouse School.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-primary font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Link href={item.slug}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
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
          <Link href="/school-life/news-events">
            <Button size="lg">View All News & Events</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
