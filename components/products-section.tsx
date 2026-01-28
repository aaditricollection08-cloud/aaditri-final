import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const bedsheets = [
  // --- Standard Named Bedsheets ---
  { title: "Beige Floral Premium", image: "/images/bedsheet-beige-floral.jpg", count: "Premium" },
  { title: "Blue Floral Classic", image: "/images/bedsheet-blue-floral.jpg", count: "Best Seller" },
  { title: "Brown Floral Elegance", image: "/images/bedsheet-brown-floral.jpg", count: "New" },
  { title: "Colorful Spring Bloom", image: "/images/bedsheet-colorful-floral.jpg", count: "Trending" },
  { title: "Classic Floral Art", image: "/images/bedsheet-floral.jpg", count: "Classic" },
  { title: "Grey Floral Modern", image: "/images/bedsheet-grey-floral.jpg", count: "New" },
  { title: "Grey Leaf Pattern", image: "/images/bedsheet-grey-leaf.jpg", count: "Modern" },
  { title: "Grey Luxury Set", image: "/images/bedsheet-grey-set.jpg", count: "Premium" },
  { title: "Light Grey Blossom", image: "/images/bedsheet-light-grey.jpg", count: "In Stock" },
  { title: "Paisley Print Heritage", image: "/images/bedsheet-paisley.jpg", count: "Designer" },
  { title: "Pink Floral Dream", image: "/images/bedsheet-pink-floral.jpg", count: "Popular" },
  { title: "Pink Leaf Comfort", image: "/images/bedsheet-pink-leaf.jpg", count: "New" },
  { title: "Taupe Floral Luxury", image: "/images/bedsheet-taupe-floral.jpg", count: "Premium" },
  { title: "Classic Cotton White", image: "/images/bedsheets.jpg", count: "Best Value" },
  
  // --- WhatsApp Uploaded Bedsheets (Nov-Dec 2025) ---
  { title: "Gardenia Floral Set", image: "/images/WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg", count: "New" },
  { title: "Royal Orchid Print", image: "/images/WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg", count: "Premium" },
  { title: "Spring Meadow Set", image: "/images/WhatsApp Image 2025-11-29 at 12.09.58_622bdb00.jpg", count: "New" },
  { title: "Marigold Cotton Mix", image: "/images/WhatsApp Image 2025-12-18 at 17.07.08_acd7074f - Copy.jpg", count: "Trending" }
];

const nighties = [
  // --- Base Collection ---
  { title: "Premium Cotton Nighty", image: "/images/cotton-nighties.jpg", count: "200+ Designs" },
  { title: "Designer Silk Kaftan", image: "/images/kaftans.jpg", count: "New Style" },
  { title: "Aaditri Hero Nightwear", image: "/images/hero-nightwear.jpg", count: "Exclusive" },

  // --- WhatsApp Uploaded Nighties (Dec 2025) ---
  { title: "Comfort Fit Nighty", image: "/images/WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg", count: "Daily Wear" },
  { title: "Azure Blue Comfort", image: "/images/WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg", count: "New" },
  { title: "Pink Blossom Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg", count: "Popular" },
  { title: "Maroon Luxury Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.33.41_c96fc166.jpg", count: "Premium" },
  { title: "Sunshine Cotton Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.34.01_e40d79b6.jpg", count: "Best Seller" },
  { title: "Rose Print Nighty", image: "/images/WhatsApp Image 2025-12-16 at 11.34.21_9bff7eae.jpg", count: "In Stock" },
  { title: "Mint Green Comfort", image: "/images/WhatsApp Image 2025-12-16 at 11.34.49_01952025.jpg", count: "Trending" },
  { title: "Dotted Blue Charm", image: "/images/WhatsApp Image 2025-12-16 at 11.35.01_e6f6db44.jpg", count: "New Arrival" },
  { title: "Violet Dream Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.35.21_36dcc250.jpg", count: "Premium" },
  { title: "Crimson Cotton Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.35.44_661dc02c.jpg", count: "New" },
  { title: "Indigo Nighty Print", image: "/images/WhatsApp Image 2025-12-16 at 11.36.04_c8352682.jpg", count: "Classic" },
  { title: "Teal Comfort Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.36.21_57b70b0c.jpg", count: "In Stock" },
  { title: "Peach Petal Nighty", image: "/images/WhatsApp Image 2025-12-16 at 11.36.34_0d9d7a3f.jpg", count: "Soft" },
  { title: "Mauve Designer Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.36.54_6d8e753f.jpg", count: "Limited" },

  // --- Jan 2026 New Collection ---
  { title: "Summer Special 2026", image: "/images/WhatsApp Image 2026-01-10 at 12.26.42 PM.jpeg", count: "Fresh Arrival" },
  { title: "Premium Batik Print", image: "/images/WhatsApp Image 2026-01-10 at 12.26.55 PM.jpeg", count: "New" },
  { title: "Classic Bengali Cotton", image: "/images/WhatsApp Image 2026-01-10 at 12.27.1
