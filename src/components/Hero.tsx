"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { salonImages } from "@/lib/images";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-deep-espresso overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={salonImages.hero}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Subtle gold gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Corner accent lines */}
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-20 left-0 w-32 h-px bg-gradient-to-r from-gold/50 to-transparent origin-left"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-20 left-0 w-px h-32 bg-gradient-to-b from-gold/50 to-transparent origin-top"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 right-0 w-32 h-px bg-gradient-to-l from-gold/50 to-transparent origin-right"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-20 right-0 w-px h-32 bg-gradient-to-t from-gold/50 to-transparent origin-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Sparkles size={14} className="text-gold" />
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold/80 font-medium">
                {siteConfig.name} Hair Studio — Est. 2011
              </p>
              <Sparkles size={14} className="text-gold" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] text-warm-white mb-8"
            >
              <span className="block">Your Hair.</span>
              <span className="block mt-2">
                <span className="text-gold italic">Your</span>{" "}
                <span className="text-warm-white">Signature.</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg text-champagne/70 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#booking"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-deep-espresso text-sm font-medium tracking-widest uppercase hover:bg-champagne transition-all duration-300"
              >
                Book an Appointment
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/30 text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6 md:gap-8"
            >
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold">
                  4.9
                </p>
                <p className="text-[10px] tracking-widest uppercase text-champagne/50 mt-1">
                  Rating
                </p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold">
                  3K+
                </p>
                <p className="text-[10px] tracking-widest uppercase text-champagne/50 mt-1">
                  Clients
                </p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold">
                  15+
                </p>
                <p className="text-[10px] tracking-widest uppercase text-champagne/50 mt-1">
                  Years
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, x: 30 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Image Container with Gold Border Accent */}
              <div className="relative aspect-[3/4] max-h-[650px] mx-auto lg:mx-0 overflow-hidden">
                {/* Decorative gold corner */}
                <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold/40 z-20" />
                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold/40 z-20" />

                <Image
                  src={salonImages.hero}
                  alt="Woman with beautiful modern hair styling at Velora Hair Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(26,18,16,0.3)]" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20, x: -20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="absolute -bottom-6 -left-6 sm:bottom-12 sm:-left-12 bg-espresso/95 backdrop-blur-md p-5 md:p-7 shadow-2xl border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-px bg-gold" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                    Award Winning
                  </p>
                </div>
                <p className="font-serif text-xl md:text-2xl text-warm-white">
                  15+ Years
                </p>
                <p className="text-xs text-champagne/60 tracking-wide mt-1">
                  of hair artistry
                </p>
              </motion.div>

              {/* Floating Badge - Top Right */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -top-4 -right-4 sm:top-8 sm:-right-8 bg-gold text-deep-espresso p-4 shadow-xl"
              >
                <p className="font-serif text-lg md:text-xl font-bold">#1</p>
                <p className="text-[9px] tracking-widest uppercase">NYC Salon</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
          Scroll
        </p>
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
