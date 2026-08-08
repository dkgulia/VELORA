"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { salonImages } from "@/lib/images";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  imageKey: keyof typeof salonImages.services;
}

export default function ServiceCard({
  name,
  description,
  price,
  imageKey,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={salonImages.services[imageKey]}
          alt={`${name} service at Velora Hair Studio`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl text-espresso mb-1">{name}</h3>
            <p className="text-sm text-taupe line-clamp-2">{description}</p>
          </div>
          <motion.div
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-espresso/20 text-espresso group-hover:bg-espresso group-hover:text-cream transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
        <p className="mt-4 text-sm font-medium text-gold">{price}</p>
      </div>
    </motion.div>
  );
}
