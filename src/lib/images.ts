/**
 * Centralized image configuration for VELORA Hair Studio
 * All Unsplash image URLs are stored here for easy replacement later.
 * 
 * Image selection criteria:
 * - Premium editorial beauty/salon aesthetic
 * - High-quality, high-resolution
 * - No repeated images
 * - Portrait-oriented for stylist profiles
 * - Wide images for hero and CTA sections
 */

export const salonImages = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
  interior: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&q=80",
  
  services: {
    haircut: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    color: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    balayage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    treatment: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    styling: "https://images.unsplash.com/photo-1554519515-242161756769?w=800&q=80",
    bridal: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
  },

  stylists: {
    maya: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    sofia: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    amelia: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
    noah: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },

  transformations: [
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
  ],

  instagram: [
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  ],

  bookingCta: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80",
};

export type SalonImages = typeof salonImages;
