/**
 * Centralized content data for VELORA Hair Studio
 * All text, services, stylists, testimonials, etc. are stored here.
 */

export const siteConfig = {
  name: "VELORA",
  tagline: "Hair, Reimagined.",
  description:
    "Personalized cuts, effortless color, and elevated styling designed around you.",
  phone: "+1 (212) 555-0188",
  email: "hello@velorastudio.com",
  address: {
    street: "123 Mercer Street",
    city: "New York",
    state: "NY",
    zip: "10012",
  },
  hours: {
    weekdays: "Mon–Fri: 9:00 AM – 8:00 PM",
    saturday: "Sat: 9:00 AM – 6:00 PM",
    sunday: "Sun: Closed",
  },
  social: {
    instagram: "https://instagram.com/velorahairstudio",
    tiktok: "https://tiktok.com/@velorahairstudio",
    pinterest: "https://pinterest.com/velorahairstudio",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Studio", href: "#studio" },
  { label: "Stylists", href: "#stylists" },
  { label: "Journal", href: "#journal" },
];

export const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "8", label: "Expert Stylists" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "3K+", label: "Happy Clients" },
];

export const services = [
  {
    id: "precision-cut",
    name: "Precision Cut",
    description:
      "Expert cuts tailored to your face shape, hair texture, and personal style.",
    price: "From $65",
    imageKey: "haircut" as const,
  },
  {
    id: "signature-color",
    name: "Signature Color",
    description:
      "Dimensional, vibrant color that enhances your natural beauty.",
    price: "From $120",
    imageKey: "color" as const,
  },
  {
    id: "balayage",
    name: "Balayage",
    description:
      "Sun-kissed, hand-painted highlights for a natural, effortless look.",
    price: "From $180",
    imageKey: "balayage" as const,
  },
  {
    id: "hair-treatment",
    name: "Hair Treatment",
    description:
      "Deep conditioning and restorative treatments for healthy, glossy hair.",
    price: "From $90",
    imageKey: "treatment" as const,
  },
  {
    id: "blowout-styling",
    name: "Blowout & Styling",
    description:
      "Professional blowouts and styling for any occasion.",
    price: "From $55",
    imageKey: "styling" as const,
  },
  {
    id: "bridal-hair",
    name: "Bridal Hair",
    description:
      "Elegant, long-lasting styles for your special day.",
    price: "From $150",
    imageKey: "bridal" as const,
  },
];

export const transformationCategories = ["ALL", "CUTS", "COLOR", "STYLING"];

export const transformations = [
  {
    id: 1,
    service: "Balayage",
    stylist: "Maya Bennett",
    category: "COLOR",
    imageIndex: 0,
  },
  {
    id: 2,
    service: "Precision Cut",
    stylist: "Sofia Laurent",
    category: "CUTS",
    imageIndex: 1,
  },
  {
    id: 3,
    service: "Color Refresh",
    stylist: "Amelia Carter",
    category: "COLOR",
    imageIndex: 2,
  },
  {
    id: 4,
    service: "Blowout Styling",
    stylist: "Maya Bennett",
    category: "STYLING",
    imageIndex: 3,
  },
  {
    id: 5,
    service: "Full Color",
    stylist: "Sofia Laurent",
    category: "COLOR",
    imageIndex: 4,
  },
  {
    id: 6,
    service: "Textured Cut",
    stylist: "Noah Williams",
    category: "CUTS",
    imageIndex: 5,
  },
  {
    id: 7,
    service: "Balayage",
    stylist: "Amelia Carter",
    category: "COLOR",
    imageIndex: 6,
  },
  {
    id: 8,
    service: "Updo Styling",
    stylist: "Maya Bennett",
    category: "STYLING",
    imageIndex: 7,
  },
  {
    id: 9,
    service: "Fade Cut",
    stylist: "Noah Williams",
    category: "CUTS",
    imageIndex: 8,
  },
];

export const stylists = [
  {
    id: "maya",
    name: "Maya Bennett",
    role: "Creative Director",
    bio: "With over 15 years of experience, Maya leads our creative vision and specializes in editorial styling and transformative color work.",
    imageKey: "maya" as const,
  },
  {
    id: "sofia",
    name: "Sofia Laurent",
    role: "Color Specialist",
    bio: "Sofia's passion for color theory and dimensional techniques makes her one of the most sought-after colorists in New York.",
    imageKey: "sofia" as const,
  },
  {
    id: "amelia",
    name: "Amelia Carter",
    role: "Senior Stylist",
    bio: "Amelia brings a modern, fashion-forward approach to every cut and style, drawing inspiration from runway trends.",
    imageKey: "amelia" as const,
  },
  {
    id: "noah",
    name: "Noah Williams",
    role: "Men's Grooming Specialist",
    bio: "Noah combines classic barbering with contemporary techniques to create sharp, sophisticated looks for men.",
    imageKey: "noah" as const,
  },
];

export const whyVelora = [
  {
    number: "01",
    title: "Personalized Consultation",
    description:
      "Every appointment starts with understanding your hair, lifestyle and goals.",
  },
  {
    number: "02",
    title: "Premium Products",
    description:
      "We work with carefully selected professional haircare products.",
  },
  {
    number: "03",
    title: "Modern Techniques",
    description:
      "From dimensional color to precision cutting, our stylists stay ahead of trends.",
  },
  {
    number: "04",
    title: "Relaxed Luxury",
    description:
      "A calm studio designed to make every visit feel like time well spent.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Finally found a stylist who actually understood what I wanted. The result was even better than I imagined.",
    author: "Emma R.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Velora feels less like a salon and more like a luxury experience.",
    author: "Olivia M.",
    rating: 5,
  },
  {
    id: 3,
    quote: "The best balayage I've ever had.",
    author: "Sophia K.",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Maya transformed my hair completely. I've never felt more confident.",
    author: "Isabella T.",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The attention to detail and the atmosphere make every visit special.",
    author: "Charlotte W.",
    rating: 5,
  },
];

export const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Studio", href: "#studio" },
    { label: "Stylists", href: "#stylists" },
    { label: "Journal", href: "#journal" },
  ],
};
