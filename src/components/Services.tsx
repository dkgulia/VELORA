"use client";

import { services } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Offer"
          title="Signature Services"
          description="From precision cuts to transformative color, discover our curated range of premium hair services."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <ServiceCard
                name={service.name}
                description={service.description}
                price={service.price}
                imageKey={service.imageKey}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-espresso text-sm tracking-wide hover:text-gold transition-colors group"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
