"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  return (
    <section id="results" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-dental-blue">
            Real Results
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance lg:text-4xl">
            See the Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Drag the slider to see stunning before and after results from our
            teeth whitening treatment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-2xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
          >
            {/* Single image that shows before/after split */}
            <Image
              src="/images/before-after.jpg"
              alt="Teeth whitening before and after comparison"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />

            {/* Overlay to darken the before side */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            />

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              {/* Handle */}
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl border-4 border-dental-blue">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 4L3 10L7 16M13 4L17 10L13 16"
                    stroke="#1e88e5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute left-6 top-6 z-10 rounded-full bg-black/70 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
              Before
            </div>
            <div className="absolute right-6 top-6 z-10 rounded-full bg-black/70 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
              After
            </div>

            {/* Sparkle effects on after side */}
            <Sparkle className="absolute right-[20%] top-[30%]" delay={0} />
            <Sparkle className="absolute right-[35%] top-[50%]" delay={1} />
            <Sparkle className="absolute right-[15%] top-[65%]" delay={2} />
          </div>
          
          <p className="mt-6 text-center text-base text-muted-foreground">
            Professional teeth whitening - dramatic results in just one session
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Sparkle({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay * 0.8,
        ease: "easeInOut",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </motion.div>
  )
}
