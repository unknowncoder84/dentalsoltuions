"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Painless procedure to save your natural tooth",
    image: "/images/root-canal.jpg",
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile up to 8 shades",
    image: "/images/teeth-whitening.jpg",
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    title: "Smile Designing",
    desc: "Complete smile transformation",
    image: "/images/smile-designing.jpg",
    color: "from-pink-500/10 to-pink-600/10"
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional deep cleaning for healthy gums",
    image: "/images/teeth-cleaning.jpg",
    color: "from-green-500/10 to-green-600/10"
  },
  {
    title: "Teeth Filling",
    desc: "Natural-looking cavity restoration",
    image: "/images/teeth-filling.jpg",
    color: "from-orange-500/10 to-orange-600/10"
  },
  {
    title: "Wisdom Tooth Surgery",
    desc: "Safe extraction with quick recovery",
    image: "/images/wisdom-tooth.jpg",
    color: "from-red-500/10 to-red-600/10"
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 px-6 bg-dental-blue-50/40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Our Services
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From routine checkups to advanced procedures, we offer complete dental solutions
            tailored to your needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent`} />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-dental-blue transition-all group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-dental-blue-dark hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
