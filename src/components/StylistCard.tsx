"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { salonImages } from "@/lib/images";

interface StylistCardProps {
  name: string;
  role: string;
  bio: string;
  imageKey: keyof typeof salonImages.stylists;
}

export default function StylistCard({
  name,
  role,
  bio,
  imageKey,
}: StylistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden mb-5">
        <Image
          src={salonImages.stylists[imageKey]}
          alt={`${name}, ${role} at Velora Hair Studio`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Social Icons on Hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-cream/90 text-espresso hover:bg-cream transition-colors"
            aria-label={`${name} Instagram`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif text-xl text-espresso">{name}</h3>
        <p className="text-xs tracking-widest uppercase text-gold mt-1">
          {role}
        </p>
        <p className="text-sm text-taupe mt-3 line-clamp-2">{bio}</p>
      </div>
    </motion.div>
  );
}
