"use client"

import { motion } from "framer-motion"
import { Users, Award, Star, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Patients",
    desc: "Trusted by families across Mumbai"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    desc: "Delivering excellence since 2009"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Patient Rating",
    desc: "Consistently high satisfaction"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Success Rate",
    desc: "Proven treatment outcomes"
  }
]

export function Statistics() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-blue via-dental-blue-dark to-[#0d47a1]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                             radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Our Achievements
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white lg:text-4xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Years of dedication to dental excellence have earned us the trust of thousands
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass-card-white rounded-2xl p-8 text-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: "spring" }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white/20"
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="mt-6 font-heading text-4xl font-bold text-white"
                >
                  {stat.number}
                </motion.p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/70">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
