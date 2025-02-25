import { VisitHero } from "@/components/visit-us/VisitHero";
import { PersonalisedTours } from "@/components/visit-us/PersonalisedTours";
import { OpenDays } from "@/components/visit-us/OpenDays";
import { ContactInfo } from "@/components/visit-us/ContactInfo";

export default function VisitUsPage() {
  return (
    <main>
      <VisitHero />
      <PersonalisedTours />
      <OpenDays />
      <ContactInfo />
    </main>
  );
}
