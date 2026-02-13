"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Find Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
            Visit Our Clinic
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-dental-blue/10">
                <MapPin className="h-5 w-5 text-dental-blue" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                Address
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                509, Vedamrut Polyclinic,
                <br />
                Raheja Vihar, Chandivali,
                <br />
                Mumbai, Maharashtra 400072
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-dental-blue/10">
                <Clock className="h-5 w-5 text-dental-blue" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                Working Hours
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-dental-blue/10">
                <PhoneIcon className="h-5 w-5 text-dental-blue" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                Contact
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                +91 98765 43210
                <br />
                info@dentalsolutions.in
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.326743!2d72.89770731490314!3d19.116700987061234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8aaaaaaaaa1%3A0x1234567890abcdef!2sVedamrut%20Polyclinic!5e0!3m2!1sen!2sin!4v1707825600000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Solutions Clinic - 509, Vedamrut Polyclinic, Raheja Vihar, Chandivali"
                className="w-full"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href="https://maps.app.goo.gl/QccdouwgraKzJcfk9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-dental-blue-dark hover:shadow-lg"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
