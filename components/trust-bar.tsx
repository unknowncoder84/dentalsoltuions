"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Cpu, Smile, Heart } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Sterile Environment",
    desc: "International-grade sterilization protocols",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    desc: "Latest digital dentistry technology",
  },
  {
    icon: Smile,
    title: "Pain-Free Dentistry",
    desc: "Gentle techniques for maximum comfort",
  },
  {
    icon: Heart,
    title: "Expert Care",
    desc: "Experienced dental professionals",
  },
]

export function TrustBar() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card flex flex-col items-center rounded-2xl p-6 text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-dental-blue/10">
              <item.icon className="h-6 w-6 text-dental-blue" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
