"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"

export function HomeContact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dental-blue-50/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Get in Touch
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Book Your Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Fill out the form below and our team will get back to you within
            24 hours to confirm your appointment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg"
        >
          <div className="glass-card rounded-3xl p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
