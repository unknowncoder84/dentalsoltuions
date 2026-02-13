"use client"

import { motion } from "framer-motion"
import { Award, Users, Heart, Shield, Clock, Star, CheckCircle2, Target } from "lucide-react"

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-blue via-dental-blue-dark to-[#0d47a1] py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              About Dental Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Your trusted partner in dental health for over 15 years, combining expertise, 
              technology, and compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Founded in 2009, Dental Solutions has been serving the Mumbai community with 
                exceptional dental care. What started as a small clinic has grown into a 
                comprehensive dental care center, trusted by over 10,000 patients.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our journey has been driven by a simple philosophy: combine cutting-edge 
                technology with compassionate care to deliver the best possible outcomes for 
                our patients. Every smile we create is a testament to our commitment to excellence.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Located in the heart of Chandivali, Mumbai, we've built lasting relationships 
                with families across generations, becoming their trusted dental care partner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                { icon: Users, number: "10,000+", label: "Happy Patients" },
                { icon: Award, number: "15+", label: "Years Experience" },
                { icon: Star, number: "4.9/5", label: "Patient Rating" },
                { icon: Heart, number: "98%", label: "Success Rate" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-dental-blue/10">
                    <stat.icon className="h-7 w-7 text-dental-blue" />
                  </div>
                  <p className="mt-4 font-heading text-3xl font-bold text-foreground">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-dental-blue-50/40 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-dental-blue/10">
                <Target className="h-7 w-7 text-dental-blue" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To provide world-class dental care that is accessible, affordable, and delivered 
                with compassion. We strive to create a comfortable environment where patients 
                feel valued and cared for, while using the latest technology to ensure the best 
                possible outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-dental-blue/10">
                <Star className="h-7 w-7 text-dental-blue" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To be Mumbai's most trusted dental care provider, known for excellence in 
                treatment, patient satisfaction, and innovation. We envision a future where 
                everyone has access to quality dental care and can smile with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Patient-Centered Care",
                desc: "Your comfort, health, and satisfaction are our top priorities in every treatment."
              },
              {
                icon: Shield,
                title: "Quality & Safety",
                desc: "We maintain the highest standards of hygiene, sterilization, and treatment protocols."
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Continuous learning and improvement to provide the best dental care possible."
              },
              {
                icon: Users,
                title: "Integrity",
                desc: "Honest, transparent communication and ethical practices in all our interactions."
              },
              {
                icon: Clock,
                title: "Accessibility",
                desc: "Flexible scheduling and affordable treatment options for all our patients."
              },
              {
                icon: Star,
                title: "Innovation",
                desc: "Embracing latest technology and techniques to deliver superior results."
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dental-blue/10">
                  <value.icon className="h-6 w-6 text-dental-blue" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dental-blue-50/40 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
              Why Patients Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              What sets us apart from other dental clinics
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              "Advanced digital dentistry and 3D imaging technology",
              "Experienced team of specialized dentists",
              "Painless treatment procedures with modern anesthesia",
              "Comprehensive warranty on all treatments",
              "Flexible payment plans and insurance support",
              "Evening and weekend appointments available",
              "State-of-the-art sterilization protocols",
              "Comfortable, anxiety-free environment",
              "Transparent pricing with no hidden costs",
              "Emergency dental care services",
              "Multilingual staff for better communication",
              "Free follow-up consultations"
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-dental-blue" />
                <span className="text-foreground/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Join thousands of satisfied patients who trust us with their dental care
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-dental-blue-dark hover:shadow-xl"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full border-2 border-dental-blue bg-white px-8 py-4 text-sm font-semibold text-dental-blue transition-all hover:bg-dental-blue hover:text-white"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
