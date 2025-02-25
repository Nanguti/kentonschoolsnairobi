import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutLeadership } from "@/components/about/AboutLeadership";

export const metadata = {
  title: "About Us | Kenton Schools Nairobi School",
  description:
    "Learn about Kenton Schools Nairobi School's history, mission, values, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTimeline />
      <AboutLeadership />
    </>
  );
}
