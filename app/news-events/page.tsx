import { NewsHero } from "@/components/news-events/NewsHero";
import { LatestNews } from "@/components/news-events/LatestNews";
import { UpcomingEvents } from "@/components/news-events/UpcomingEvents";
import { NewsletterSignup } from "@/components/news-events/NewsletterSignup";

export default function NewsEventsPage() {
  return (
    <main>
      <NewsHero />
      <LatestNews />
      <UpcomingEvents />
      <NewsletterSignup />
    </main>
  );
}
