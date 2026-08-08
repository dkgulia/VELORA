"use client";

import { whyVelora } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function WhyVelora() {
  return (
    <section className="py-12 md:py-16 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="More Than A Hair Appointment."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {whyVelora.map((item, index) => (
            <AnimatedSection key={item.number} delay={index * 0.1}>
              <div className="text-center md:text-left">
                <span className="font-serif text-5xl md:text-6xl text-gold/30 block mb-4">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
