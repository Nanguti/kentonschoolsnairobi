"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    title: "Students Excel in International Science Olympiad",
    excerpt:
      "Our students brought home multiple gold medals from this year's International Science Olympiad, showcasing exceptional talent in STEM subjects.",
    image: "/news-events/science-olympiad.jpg",
    date: "February 28, 2024",
    category: "Academic Achievement",
    slug: "science-olympiad-success-2024",
  },
  {
    title: "New Sports Complex Opening Ceremony",
    excerpt:
      "Kenton Schools Nairobi celebrates the grand opening of our state-of-the-art sports complex, featuring Olympic-standard facilities for multiple sports.",
    image: "/news-events/sports-complex.jpg",
    date: "February 25, 2024",
    category: "Campus Development",
    slug: "sports-complex-opening-2024",
  },
  {
    title: "Annual Arts Festival Showcases Student Creativity",
    excerpt:
      "The annual Arts Festival brought together incredible displays of visual arts, music, and drama from students across all year groups.",
    image: "/news-events/arts-festival.jpg",
    date: "February 20, 2024",
    category: "Arts & Culture",
    slug: "arts-festival-2024",
  },
  {
    title: "Community Service Initiative Makes Impact",
    excerpt:
      "Our students' environmental conservation project has successfully planted over 1,000 trees in local communities.",
    image: "/news-events/community-service.jpg",
    date: "February 15, 2024",
    category: "Community Outreach",
    slug: "community-service-2024",
  },
];

export function LatestNews() {
  return (
    <section className="py-24" id="latest-news">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep up with the latest news and achievements from our vibrant
            school community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{article.title}</h3>
                <p className="text-muted-foreground mb-6">{article.excerpt}</p>
                <Button asChild variant="outline">
                  <Link href={`/news/${article.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/news/archive">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
