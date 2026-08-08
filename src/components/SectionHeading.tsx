"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      {label && (
        <p
          className={`text-xs tracking-[0.2em] uppercase mb-4 ${
            light ? "text-white/60" : "text-taupe"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-taupe"}`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
