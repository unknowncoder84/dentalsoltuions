"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    treatment: "Smile Designing",
    rating: 5,
    text: "The team at Dental Solutions transformed my smile beyond my expectations. Professional, caring, and the results are absolutely stunning!",
    location: "Powai, Mumbai"
  },
  {
    name: "Rajesh Kumar",
    treatment: "Root Canal",
    rating: 5,
    text: "I was terrified of root canal treatment, but Dr. made it completely painless. The entire staff was so supportive and professional.",
    location: "Chandivali, Mumbai"
  },
  {
    name: "Anita Desai",
    treatment: "Teeth Whitening",
    rating: 5,
    text: "Amazing results in just one session! My teeth are noticeably whiter and the process was quick and comfortable. Highly recommend!",
    location: "Vikhroli, Mumbai"
  },
  {
    name: "Vikram Patel",
    treatment: "Wisdom Tooth Surgery",
    rating: 5,
    text: "The extraction was smooth with minimal discomfort. Recovery was faster than I expected. Great post-operative care and follow-up.",
    location: "Kanjurmarg, Mumbai"
  },
  {
    name: "Meera Iyer",
    treatment: "Dental Cleaning",
    rating: 5,
    text: "Regular cleaning sessions have improved my gum health significantly. The hygienist is gentle and thorough. My teeth feel amazing!",
    location: "Ghatkopar, Mumbai"
  },
  {
    name: "Arjun Mehta",
    treatment: "Teeth Filling",
    rating: 5,
    text: "The composite filling looks so natural, you can't even tell it's there. Quick procedure with excellent results. Very satisfied!",
    location: "Bhandup, Mumbai"
  }
]

export function Testimonials() {
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
            Patient Stories
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real experiences from real people who trusted us with their smiles
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between">
                <Quote className="h-8 w-8 text-dental-blue/20" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
                <div className="rounded-full bg-dental-blue/10 px-3 py-1">
                  <p className="text-xs font-semibold text-dental-blue">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied patients
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-dental-blue-dark hover:shadow-xl"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  )
}
