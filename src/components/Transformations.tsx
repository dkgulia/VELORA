"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { salonImages } from "@/lib/images";
import {
  transformationCategories,
  transformations,
} from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Transformations() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredTransformations =
    activeCategory === "ALL"
      ? transformations
      : transformations.filter((t) => t.category === activeCategory);

  return (
    <section id="journal" className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="A Little Transformation Goes a Long Way."
        />

        {/* Category Tabs */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-14">
            {transformationCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-espresso text-cream"
                    : "bg-card text-taupe hover:text-espresso"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTransformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                } aspect-square`}
              >
                <Image
                  src={
                    salonImages.transformations[transformation.imageIndex]
                  }
                  alt={`${transformation.service} by ${transformation.stylist}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-cream p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs tracking-widest uppercase text-gold mb-1">
                      {transformation.service}
                    </p>
                    <p className="text-sm mb-3">
                      by {transformation.stylist}
                    </p>
                    <span className="inline-flex items-center text-xs tracking-wide border border-cream/30 px-4 py-2 hover:bg-cream hover:text-espresso transition-colors">
                      View Look
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
