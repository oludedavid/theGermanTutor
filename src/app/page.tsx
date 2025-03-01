import Hero from "@/ui/components/hero";
import Competence from "@/ui/components/competence";
import MiniAbout from "@/ui/components/mini-about";
import CallToEnroll from "@/ui/components/call-to-enroll";

export default function Home() {
  return (
    <section className="grid grid-cols-1">
      <Hero />
      <Competence />
      <MiniAbout />
      <CallToEnroll />
    </section>
  );
}
