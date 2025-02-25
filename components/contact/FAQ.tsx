"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the school hours?",
    answer:
      "Our school day runs from 8:00 AM to 3:30 PM, Monday through Friday. Students are encouraged to arrive by 7:45 AM to prepare for the day. After-school activities typically run until 5:00 PM.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "The admission process begins with submitting an online application form through our admissions portal. You'll need to provide academic records, recommendation letters, and complete an entrance assessment. Visit our Admissions page for detailed information.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "We offer both the British Curriculum and International Baccalaureate (IB) programs. The choice of curriculum depends on the student's age, previous educational background, and future academic goals.",
  },
  {
    question: "Do you offer transportation services?",
    answer:
      "Yes, we provide bus transportation services covering major residential areas in Nairobi. Routes and schedules are available through our transport office, and fees vary depending on the distance.",
  },
  {
    question: "What extra-curricular activities are available?",
    answer:
      "We offer a wide range of activities including sports (football, swimming, basketball), arts (music, drama, visual arts), and academic clubs (debate, robotics, environmental). Activities vary by term and age group.",
  },
  {
    question: "How do you handle special educational needs?",
    answer:
      "Our Learning Support Department provides individualized support for students with special educational needs. We work closely with families to develop appropriate learning plans and accommodations.",
  },
  {
    question: "What are the fees and payment options?",
    answer:
      "Tuition fees vary by grade level and are payable per term. We offer various payment plans and accept both local and international payments. Detailed fee structures are available from our Finance office.",
  },
  {
    question: "How can I get involved as a parent?",
    answer:
      "Parents can join our Parent-Teacher Association (PTA), volunteer for school events, attend parent workshops, and participate in our regular parent-teacher conferences. We value active parent involvement in our community.",
  },
];

export function FAQ() {
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our school. If you can not
            find what you are looking for, feel free to contact us directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
