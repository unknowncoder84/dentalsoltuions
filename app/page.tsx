import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { About } from "@/components/about"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Statistics } from "@/components/statistics"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { MapSection } from "@/components/map-section"
import { HomeContact } from "@/components/home-contact"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <ServicesOverview />
      <WhyChooseUs />
      <Statistics />
      <BeforeAfter />
      <Testimonials />
      <MapSection />
      <HomeContact />
      <Footer />
      <FloatingActions />
    </main>
  )
}
