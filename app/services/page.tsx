import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { ServicesPage } from "@/components/services-page"

export const metadata = {
  title: "Our Services | Dental Solutions",
  description: "Comprehensive dental services including root canal, teeth cleaning, smile designing, teeth filling, teeth whitening, and wisdom tooth surgery.",
}

export default function Services() {
  return (
    <main>
      <Navbar />
      <ServicesPage />
      <Footer />
      <FloatingActions />
    </main>
  )
}
