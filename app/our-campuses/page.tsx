import { CampusesHero } from "@/components/campuses/CampusesHero";
import { CampusCard } from "@/components/campuses/CampusCard";
import { CampusFacilities } from "@/components/campuses/CampusFacilities";
import { CampusLocation } from "@/components/campuses/CampusLocation";

export const metadata = {
  title: "Our Campuses | Kenton Schools Nairobi School",
  description:
    "Explore our world-class campuses in Karen and Runda, featuring state-of-the-art facilities and inspiring learning environments.",
};

export default function CampusesPage() {
  return (
    <>
      <CampusesHero />
      <div className="py-12">
        <div className="container mx-auto px-4 space-y-24">
          <CampusCard
            name="Karen Campus"
            description="Our flagship campus set in the serene Karen suburb, offering extensive facilities and a nurturing environment for students from Early Years to Sixth Form."
            image="/campuses/karen.jpg"
            features={[
              "50-acre campus",
              "Olympic-size swimming pool",
              "Modern science laboratories",
              "Performing arts center",
              "Sports fields and courts",
            ]}
            href="/karen-school-nairobi"
          />
          <CampusCard
            name="Runda Campus"
            description="Our state-of-the-art campus in Runda, designed to provide an innovative learning environment with modern facilities and technology integration."
            image="/campuses/runda.jpg"
            features={[
              "Purpose-built facilities",
              "Digital learning spaces",
              "Indoor sports complex",
              "Creative arts studio",
              "Learning resource center",
            ]}
            href="/runda-school-nairobi"
            reverse
          />
        </div>
      </div>
      <CampusFacilities />
      <CampusLocation />
    </>
  );
}
