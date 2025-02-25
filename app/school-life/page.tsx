import { SchoolLifeHero } from "@/components/school-life/SchoolLifeHero";
import { Activities } from "@/components/school-life/Activities";
import { PastoralCare } from "@/components/school-life/PastoralCare";
import { StudentLife } from "@/components/school-life/StudentLife";

export default function SchoolLifePage() {
  return (
    <main>
      <SchoolLifeHero />
      <Activities />
      <PastoralCare />
      <StudentLife />
    </main>
  );
}
