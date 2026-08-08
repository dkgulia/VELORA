"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { salonImages } from "@/lib/images";
import { siteConfig } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function BookingCTA() {
  return (
    <section id="booking" className="relative py-16 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={salonImages.bookingCta}
          alt="Velora Hair Studio booking"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Ready For A Change?
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4">
            Ready For Your Next Look?
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10">
            Let&apos;s create something you&apos;ll love wearing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-espresso text-sm tracking-wide font-medium hover:bg-gold/90 transition-colors"
            >
              Book Your Appointment
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/30 text-cream text-sm tracking-wide hover:bg-cream/10 transition-colors"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
