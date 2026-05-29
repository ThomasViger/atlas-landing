// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Features from '@/components/Features'
import CelestialVault from '@/components/CelestialVault'
import TrustBand from '@/components/TrustBand'
import Pricing from '@/components/Pricing'
import Founder from '@/components/Founder'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Manifesto />
        <div className="section-divider" />
        <Features />
        <CelestialVault />
        <TrustBand />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Founder />
        <div className="section-divider" />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
