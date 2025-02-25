"use client";

import { motion } from "framer-motion";
import { Book, Award, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const curriculumData = {
  igcse: {
    title: "IGCSE Curriculum",
    description:
      "Our IGCSE program offers a wide range of subjects preparing students for advanced studies.",
    subjects: [
      "English Language & Literature",
      "Mathematics",
      "Sciences (Physics, Chemistry, Biology)",
      "Modern Languages (French, Spanish)",
      "Humanities (History, Geography)",
      "Business Studies",
      "Computer Science",
      "Art & Design",
      "Music",
      "Physical Education",
    ],
  },
  alevels: {
    title: "A-Levels",
    description:
      "Advanced level qualifications focusing on specialized subjects for university preparation.",
    subjects: [
      "Mathematics & Further Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
      "Business Studies",
      "Computer Science",
      "Psychology",
      "English Literature",
      "History",
    ],
  },
  btec: {
    title: "BTEC Courses",
    description:
      "Vocational qualifications providing practical knowledge and skills.",
    subjects: [
      "Business",
      "Information Technology",
      "Sport",
      "Hospitality",
      "Art & Design",
      "Media Production",
      "Engineering",
      "Health & Social Care",
      "Travel & Tourism",
      "Performing Arts",
    ],
  },
};

export function Curriculum() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            British Curriculum Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our curriculum follows the British education system, offering
            internationally recognized qualifications through Cambridge
            Assessment International Education.
          </p>
        </motion.div>

        <Tabs defaultValue="igcse" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="igcse" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              IGCSE
            </TabsTrigger>
            <TabsTrigger value="alevels" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              A-Levels
            </TabsTrigger>
            <TabsTrigger value="btec" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              BTEC
            </TabsTrigger>
          </TabsList>

          {Object.entries(curriculumData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-lg p-6 shadow-lg mt-6"
              >
                <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
                <p className="text-muted-foreground mb-6">{data.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.subjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {subject}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
