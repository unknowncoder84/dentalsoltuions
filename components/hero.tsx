"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const backgroundImages = [
  "/images/root-canal.jpg",
  "/images/teeth-cleaning.jpg",
  "/images/smile-designing.jpg",
  "/images/teeth-filling.jpg",
  "/images/teeth-whitening.jpg",
  "/images/wisdom-tooth.jpg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Scrolling Background Images with Fade Effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Dental Services Background"
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={90}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/80 via-dental-blue-dark/75 to-[#0d47a1]/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Additional gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Floating Teeth */}
      <FloatingTooth className="absolute left-[10%] top-[20%] animate-float" size={40} opacity={0.15} />
      <FloatingTooth className="absolute right-[15%] top-[30%] animate-float-delayed" size={28} opacity={0.1} />
      <FloatingTooth className="absolute left-[60%] top-[15%] animate-float" size={34} opacity={0.12} />
      <FloatingTooth className="absolute left-[30%] bottom-[25%] animate-float-delayed" size={24} opacity={0.1} />
      <FloatingTooth className="absolute right-[25%] bottom-[30%] animate-float" size={32} opacity={0.08} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Trusted by 10,000+ patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Your Smile, Our Passion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-2xl font-semibold text-white/95"
          >
            Advanced Dental Care. Confident Smiles.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-lg text-lg text-white/90 leading-relaxed"
          >
            Modern technology, gentle treatment, trusted results. Experience
            premium dental care designed around your comfort.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-dental-blue shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Consultation
              <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-2">
                {"->"}
              </span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/QccdouwgraKzJcfk9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <MapPin className="h-5 w-5" />
              View Location
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FloatingTooth({
  className,
  size,
  opacity,
}: {
  className?: string
  size: number
  opacity: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z"
        fill="white"
      />
    </svg>
  )
}
