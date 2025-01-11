import CTA from "@/components/CTA"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      </main>
    </div>
  )
}
