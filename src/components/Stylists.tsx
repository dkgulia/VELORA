"use client";

import { stylists } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import StylistCard from "./StylistCard";

export default function Stylists() {
  return (
    <section id="stylists" className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Meet Your Stylist"
          description="Talented artists dedicated to creating your perfect look."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stylists.map((stylist, index) => (
            <AnimatedSection key={stylist.id} delay={index * 0.1}>
              <StylistCard
                name={stylist.name}
                role={stylist.role}
                bio={stylist.bio}
                imageKey={stylist.imageKey}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
