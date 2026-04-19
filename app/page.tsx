import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import WhyAtlas from "@/components/WhyAtlas";
import Founder from "@/components/Founder";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <WhyAtlas />
        <Founder />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
