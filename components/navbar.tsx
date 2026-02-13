"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <ToothLogo />
          <span className="font-heading text-xl font-bold text-dental-blue">
            Dental Solutions
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-dental-blue"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-dental-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+919876543210"
          className="hidden items-center gap-2 rounded-full bg-dental-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-dental-blue-dark hover:shadow-lg md:flex"
        >
          <Phone className="h-4 w-4" />
          Book Appointment
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-white/20 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-dental-blue/10 hover:text-dental-blue"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+919876543210"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-dental-blue px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function ToothLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z"
        fill="#1e88e5"
      />
      <path
        d="M32 4C28 4 24 6 22 10C24 8 28 6 32 6C36 6 40 8 42 10C40 6 36 4 32 4Z"
        fill="#64b5f6"
        opacity="0.6"
      />
    </svg>
  )
}
