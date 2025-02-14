import Hero from "@/components/home/Hero";
import LeagueValue from "@/components/home/LeagueValue";
import LeagueInfo from "@/components/home/LeagueInfo";
import ContactStrip from "@/components/home/ContactStrip";

export default function Home() {
  return (
    <>
      <ContactStrip />
      <Hero />
      <LeagueValue />
      <LeagueInfo />
    </>
  );
}
