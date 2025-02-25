import { AlumniHero } from "@/components/alumni/AlumniHero";
import { AlumniNetwork } from "@/components/alumni/AlumniNetwork";
import { AlumniStories } from "@/components/alumni/AlumniStories";
import { AlumniEvents } from "@/components/alumni/AlumniEvents";
import { AlumniGiving } from "@/components/alumni/AlumniGiving";

export default function AlumniPage() {
  return (
    <main>
      <AlumniHero />
      <AlumniNetwork />
      <AlumniStories />
      <AlumniEvents />
      <AlumniGiving />
    </main>
  );
}
