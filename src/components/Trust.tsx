"use client";

import Image from "next/image";
import { salonImages } from "@/lib/images";
import { stats } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  return (
    <section id="studio" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative aspect-[4/3] lg:aspect-[4/3] w-full overflow-hidden">
              <Image
                src={salonImages.interior}
                alt="Velora Hair Studio interior with modern luxury design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <SectionHeading
              label="The Velora Experience"
              title="Where great hair meets great taste."
              align="left"
            />

            <AnimatedSection delay={0.2}>
              <p className="text-taupe text-base md:text-lg leading-relaxed mb-8">
                At Velora, we believe great hair starts with understanding you.
                Every appointment begins with a personal consultation to capture
                your vision, followed by expert technique, premium products, and
                a relaxed luxury experience designed around your lifestyle.
              </p>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="text-center lg:text-left">
                    <p className="font-serif text-3xl md:text-4xl text-espresso">
                      {stat.value}
                    </p>
                    <p className="text-xs text-taupe tracking-wide mt-1 uppercase">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
