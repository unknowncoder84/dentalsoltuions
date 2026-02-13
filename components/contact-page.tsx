"use client"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue via-dental-blue-dark to-[#0d47a1] py-24 px-6">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Get In Touch</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">Have questions? We are here to help.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">Visit us, call us, or send us a message.</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-dental-blue/10">
                    <Phone className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:+919876543210" className="mt-1 text-muted-foreground hover:text-dental-blue transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-dental-blue/10">
                    <Mail className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@dentalsolutions.in" className="mt-1 text-muted-foreground hover:text-dental-blue transition-colors">info@dentalsolutions.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-dental-blue/10">
                    <MapPin className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="mt-1 text-muted-foreground">509, Vedamrut Polyclinic, Raheja Vihar, Chandivali, Mumbai, Maharashtra 400072</p>
                    <a href="https://maps.app.goo.gl/QccdouwgraKzJcfk9" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-dental-blue hover:underline">Get Directions</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below.</p>
              <div className="mt-6"><ContactForm /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
