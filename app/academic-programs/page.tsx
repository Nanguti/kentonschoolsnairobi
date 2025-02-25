import { AcademicHero } from "@/components/academic/AcademicHero";
import { ProgramCards } from "@/components/academic/ProgramCards";
import { Curriculum } from "@/components/academic/Curriculum";
import { AcademicResults } from "@/components/academic/AcademicResults";

export const metadata = {
  title: "Academic Programs | Kenton Schools Nairobi School",
  description:
    "Explore our comprehensive academic programs from Early Years to A-Levels, including IGCSE and BTEC courses.",
};

export default function AcademicProgramsPage() {
  return (
    <>
      <AcademicHero />
      <ProgramCards />
      <Curriculum />
      <AcademicResults />
    </>
  );
}
