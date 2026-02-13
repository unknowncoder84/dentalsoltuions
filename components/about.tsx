"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "State-of-the-art hygiene & sterilization standards",
  "Advanced digital dentistry solutions",
  "Patient comfort-first approach",
  "Personalized treatment plans",
  "Experienced team of dental specialists",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-dental-blue via-dental-blue-dark to-[#0d47a1] h-[450px] flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="mx-auto h-32 w-32 text-white/80 mb-6" viewBox="0 0 64 64" fill="none">
                  <path d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z" fill="white"/>
                </svg>
                <h3 className="text-white text-2xl font-bold font-heading mb-2">Dental Solutions</h3>
                <p className="text-white/80 text-sm">Modern Dental Care Facility</p>
              </div>
              {/* Decorative overlay corner */}
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-center text-white">
                  <span className="block text-2xl font-bold font-heading">15+</span>
                  <span className="block text-xs">Years</span>
                </span>
              </div>
            </div>
            {/* Decorative border accent */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl border-2 border-dental-blue/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
              About Our Clinic
            </span>

            {/* Tooth divider */}
            <div className="mt-2 mb-4 flex items-center gap-2">
              <div className="h-0.5 w-12 bg-dental-blue" />
              <svg width="16" height="16" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <path
                  d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z"
                  fill="#1e88e5"
                />
              </svg>
              <div className="h-0.5 w-12 bg-dental-blue" />
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
              Your Smile, Our Passion
            </h2>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Dental Solutions, we combine cutting-edge technology with
              compassionate care to deliver exceptional dental experiences.
              Our clinic is designed to make every visit comfortable,
              efficient, and reassuring.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-dental-blue" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
