"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Clock, Shield, Award } from "lucide-react"

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Painless root canal treatment with advanced rotary endodontics for complete tooth preservation.",
    image: "/images/root-canal.jpg",
    features: [
      "Advanced rotary endodontics",
      "Single-visit treatment available",
      "Painless procedure with local anesthesia",
      "High success rate",
      "Preserves natural tooth structure"
    ],
    duration: "60-90 minutes",
    warranty: "5 years"
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional scaling and polishing for healthier gums and a brighter, fresher smile.",
    image: "/images/teeth-cleaning.jpg",
    features: [
      "Ultrasonic scaling technology",
      "Removes plaque and tartar",
      "Prevents gum disease",
      "Fresh breath guarantee",
      "Polishing for smooth finish"
    ],
    duration: "30-45 minutes",
    warranty: "6 months"
  },
  {
    title: "Smile Designing",
    desc: "Digital smile makeover with veneers, bonding, and comprehensive aesthetic dentistry.",
    image: "/images/smile-designing.jpg",
    features: [
      "Digital smile preview",
      "Custom porcelain veneers",
      "Teeth reshaping and contouring",
      "Color matching technology",
      "Natural-looking results"
    ],
    duration: "2-3 visits",
    warranty: "10 years"
  },
  {
    title: "Teeth Filling",
    desc: "High-quality composite fillings that blend naturally with your teeth for lasting protection.",
    image: "/images/teeth-filling.jpg",
    features: [
      "Tooth-colored composite materials",
      "Mercury-free fillings",
      "Minimal tooth preparation",
      "Strong and durable",
      "Same-day completion"
    ],
    duration: "30-60 minutes",
    warranty: "3 years"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter, more confident smile in just one session.",
    image: "/images/teeth-whitening.jpg",
    features: [
      "Professional-grade whitening gel",
      "Up to 8 shades lighter",
      "Safe for enamel",
      "Immediate results",
      "Long-lasting brightness"
    ],
    duration: "45-60 minutes",
    warranty: "1 year"
  },
  {
    title: "Wisdom Tooth Surgery",
    desc: "Safe and comfortable wisdom tooth extraction with minimal discomfort and quick recovery.",
    image: "/images/wisdom-tooth.jpg",
    features: [
      "Painless extraction procedure",
      "Advanced surgical techniques",
      "Minimal swelling and discomfort",
      "Quick recovery time",
      "Post-operative care included"
    ],
    duration: "30-45 minutes per tooth",
    warranty: "Lifetime"
  },
]

export function ServicesPage() {
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
        
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Our Dental Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Comprehensive dental care with modern technology, experienced specialists, 
              and a commitment to your comfort and satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-dental-blue" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info Cards */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dental-blue/10">
                          <Clock className="h-5 w-5 text-dental-blue" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-semibold text-foreground">{service.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dental-blue/10">
                          <Shield className="h-5 w-5 text-dental-blue" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Warranty</p>
                          <p className="font-semibold text-foreground">{service.warranty}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a
                      href={`https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-dental-blue-dark hover:shadow-xl"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
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
              Why Choose Dental Solutions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We combine expertise, technology, and compassionate care to deliver exceptional results.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: "15+ Years Experience",
                desc: "Trusted by thousands of patients"
              },
              {
                icon: Shield,
                title: "Advanced Technology",
                desc: "Latest dental equipment and techniques"
              },
              {
                icon: CheckCircle2,
                title: "Quality Guarantee",
                desc: "Warranty on all treatments"
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                desc: "Evening and weekend appointments"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-dental-blue/10">
                  <item.icon className="h-7 w-7 text-dental-blue" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
