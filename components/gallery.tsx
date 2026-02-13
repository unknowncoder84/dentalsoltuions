"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const images = [
  { title: "Modern Treatment Room", color: "from-blue-400 to-blue-600" },
  { title: "Advanced Equipment", color: "from-cyan-400 to-cyan-600" },
  { title: "Comfortable Waiting Area", color: "from-teal-400 to-teal-600" },
  { title: "Sterilization Station", color: "from-sky-400 to-sky-600" },
  { title: "Reception Area", color: "from-indigo-400 to-indigo-600" },
  { title: "Consultation Room", color: "from-blue-500 to-blue-700" },
]

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="gallery" className="py-24 bg-dental-blue-50/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Our Space
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Clinic Gallery
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]" />
        {images.map((img, i) => (
          <motion.div
            key={img.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative flex-shrink-0 snap-center"
          >
            <div className={`relative h-64 w-80 overflow-hidden rounded-2xl shadow-lg sm:h-72 sm:w-96 bg-gradient-to-br ${img.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="mx-auto h-16 w-16 text-white/80 mb-4" viewBox="0 0 64 64" fill="none">
                    <path d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z" fill="white"/>
                  </svg>
                  <p className="text-white font-semibold text-lg">{img.title}</p>
                  <p className="text-white/80 text-sm mt-2">Add your clinic photos here</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]" />
      </div>
    </section>
  )
}
