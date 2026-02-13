import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { AboutPage } from "@/components/about-page"

export const metadata = {
  title: "About Us | Dental Solutions",
  description: "Learn about Dental Solutions - your trusted dental care provider in Mumbai with 15+ years of experience.",
}

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <Footer />
      <FloatingActions />
    </main>
  )
}
