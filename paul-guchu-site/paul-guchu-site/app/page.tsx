import Hero from "@/components/Hero";
import Trainer from "@/components/Trainer";
import Certifications from "@/components/Certifications";
import JoinMe from "@/components/JoinMe";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Marquee from "@/components/Marquee";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Trainer />
      <Certifications />
      <JoinMe />
      <Benefits />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
