import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground px-6 py-16 text-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M32 4C24 4 20 8 18 12C16 16 14 20 12 28C10 36 12 48 16 56C18 60 20 60 22 56C24 52 26 44 28 40C30 36 32 36 32 36C32 36 34 36 36 40C38 44 40 52 42 56C44 60 46 60 48 56C52 48 54 36 52 28C50 20 48 16 46 12C44 8 40 4 32 4Z"
                  fill="#64b5f6"
                />
              </svg>
              <span className="font-heading text-lg font-bold text-dental-blue-light">
                Dental Solutions
              </span>
            </div>
            <p className="mt-3 text-sm text-background/60 leading-relaxed">
              Premium dental care with modern technology and trusted results.
              Your smile is our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-background/90">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-background/50 transition-colors hover:text-dental-blue-light"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-background/90">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Root Canal",
                "Dental Implants",
                "Teeth Cleaning",
                "Smile Design",
                "Braces",
                "Cosmetic Dentistry",
              ].map((service) => (
                <span
                  key={service}
                  className="text-sm text-background/50"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-background/90">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-background/50 transition-colors hover:text-dental-blue-light"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@dentalsolutions.in"
                className="flex items-center gap-2 text-sm text-background/50 transition-colors hover:text-dental-blue-light"
              >
                <Mail className="h-4 w-4" />
                info@dentalsolutions.in
              </a>
              <span className="flex items-start gap-2 text-sm text-background/50">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            {"Dental Solutions Clinic. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
