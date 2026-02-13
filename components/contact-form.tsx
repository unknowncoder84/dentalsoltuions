"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, User, Phone, MessageSquare, Mail } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex flex-col items-center py-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
          >
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </motion.div>
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Thank You!
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {"We'll contact you shortly to confirm your appointment."}
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <User className="h-4 w-4 text-dental-blue" />
              Full Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-dental-blue focus:ring-2 focus:ring-dental-blue/20"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4 text-dental-blue" />
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-dental-blue focus:ring-2 focus:ring-dental-blue/20"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-dental-blue" />
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-dental-blue focus:ring-2 focus:ring-dental-blue/20"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <MessageSquare className="h-4 w-4 text-dental-blue" />
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-dental-blue focus:ring-2 focus:ring-dental-blue/20"
              placeholder="Tell us about your dental concern or preferred appointment time..."
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-dental-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-dental-blue-dark hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
            Send via WhatsApp
          </button>
          
          <p className="text-xs text-center text-muted-foreground">
            Your message will be sent via WhatsApp for faster response
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
