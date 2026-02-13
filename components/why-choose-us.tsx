"use client"

import { motion } from "framer-motion"
import { Award, Clock, Shield, Users, Heart, Star, Zap, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    desc: "Trusted by over 10,000 satisfied patients across Mumbai"
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    desc: "Latest digital dentistry equipment for precise treatments"
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Highly qualified specialists in all dental fields"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Evening and weekend appointments available"
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "Personalized treatment plans for every patient"
  },
  {
    icon: Star,
    title: "Quality Guarantee",
    desc: "Comprehensive warranty on all treatments"
  },
  {
    icon: Zap,
    title: "Quick Recovery",
    desc: "Minimally invasive procedures for faster healing"
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    desc: "No hidden costs, clear treatment estimates"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Why Choose Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            Excellence in Every Smile
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We're committed to providing the highest quality dental care with a focus on
            your comfort, health, and satisfaction.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 + 0.2, type: "spring" }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-dental-blue/10"
              >
                <feature.icon className="h-7 w-7 text-dental-blue" />
              </motion.div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
