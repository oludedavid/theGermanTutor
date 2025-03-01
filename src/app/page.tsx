import Hero from "@/ui/components/hero";
import Competence from "@/ui/components/competence";

export default function Home() {
  return (
    <section className="grid grid-cols-1">
      <Hero />
      <Competence />
    </section>
  );
}
