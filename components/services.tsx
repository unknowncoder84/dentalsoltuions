"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Painless root canal treatment with advanced rotary endodontics for complete tooth preservation.",
    image: "/images/root-canal.jpg",
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional scaling and polishing for healthier gums and a brighter, fresher smile.",
    image: "/images/teeth-cleaning.jpg",
  },
  {
    title: "Smile Designing",
    desc: "Digital smile makeover with veneers, bonding, and comprehensive aesthetic dentistry.",
    image: "/images/smile-designing.jpg",
  },
  {
    title: "Teeth Filling",
    desc: "High-quality composite fillings that blend naturally with your teeth for lasting protection.",
    image: "/images/teeth-filling.jpg",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter, more confident smile in just one session.",
    image: "/images/teeth-whitening.jpg",
  },
  {
    title: "Wisdom Tooth Surgery",
    desc: "Safe and comfortable wisdom tooth extraction with minimal discomfort and quick recovery.",
    image: "/images/wisdom-tooth.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-dental-blue-50/40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Our Services
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Comprehensive Dental Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            From preventive care to advanced cosmetic procedures, we provide
            a full spectrum of dental treatments under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group cursor-default overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
