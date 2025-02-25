import { CareersHero } from "@/components/careers/CareersHero";
import { JobListings } from "@/components/careers/JobListings";
import { Benefits } from "@/components/careers/Benefits";
import { ApplicationProcess } from "@/components/careers/ApplicationProcess";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <Benefits />
      <JobListings />
      <ApplicationProcess />
    </main>
  );
}
