import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  // --- Original Collections ---
  { title: "Beige Floral Bedsheet", image: "/images/bedsheet-beige-floral.jpg", count: "Premium" },
  { title: "Blue Floral Bedsheet", image: "/images/bedsheet-blue-floral.jpg", count: "Best Seller" },
  { title: "Brown Floral Bedsheet", image: "/images/bedsheet-brown-floral.jpg", count: "In Stock" },
  { title: "Colorful Floral Bedsheet", image: "/images/bedsheet-colorful-floral.jpg", count: "New Arrival" },
  { title: "Classic Floral", image: "/images/bedsheet-floral.jpg", count: "Classic" },
  { title: "Grey Floral Bedsheet", image: "/images/bedsheet-grey-floral.jpg", count: "New" },
  { title: "Grey Leaf Design", image: "/images/bedsheet-grey-leaf.jpg", count: "Trending" },
  { title: "Grey Set Bedsheet", image: "/images/bedsheet-grey-set.jpg", count: "Premium" },
  { title: "Light Grey Floral", image: "/images/bedsheet-light-grey.jpg", count: "In Stock" },
  { title: "Paisley Print Bedsheet", image: "/images/bedsheet-paisley.jpg", count: "New" },
  { title: "Pink Floral Bedsheet", image: "/images/bedsheet-pink-floral.jpg", count: "Best Seller" },
  { title: "Pink Leaf Bedsheet", image: "/images/bedsheet-pink-leaf.jpg", count: "In Stock" },
  { title: "Taupe Floral Bedsheet", image: "/images/bedsheet-taupe-floral.jpg", count: "Premium" },
  { title: "Premium Cotton Nighties", image: "/images/cotton-nighties.jpg", count: "200+ Designs" },
  { title: "Hero Nightwear", image: "/images/hero-nightwear.jpg", count: "Featured" },
  { title: "Designer Kaftans", image: "/images/kaftans.jpg", count: "New Style" },

  // --- New WhatsApp Uploads (Bedsheets & Nighties) ---
  { title: "Floral Elegance Set", image: "/images/WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg", count: "New" },
  { title: "Royal Floral Print", image: "/images/WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg", count: "Premium" },
  { title: "Spring Blossom Set", image: "/images/WhatsApp Image 2025-11-29 at 12.09.58_622bdb00.jpg", count: "New" },
  { title: "Gardenia Cotton Set", image: "/images/WhatsApp Image 2025-11-29 at 12.10.07_8c37fe39.jpg", count: "Best Seller" },
  { title: "Violet Dream Sheets", image: "/images/WhatsApp Image 2025-11-29 at 12.10.17_09ee1f3e.jpg", count: "Trending" },
  { title: "Lavender Mist Design", image: "/images/WhatsApp Image 2025-11-29 at 12.10.32_7533c396.jpg", count: "In Stock" },
  { title: "Peony Pink Collection", image: "/images/WhatsApp Image 2025-11-29 at 12.10.40_22aefd63.jpg", count: "New" },
  { title: "Rose Petal Print", image: "/images/WhatsApp Image 2025-11-29 at 12.10.50_c1b408b9.jpg", count: "Premium" },
  { title: "Summer Bloom Set", image: "/images/WhatsApp Image 2025-11-29 at 12.10.59_e1eb53a4.jpg", count: "In Stock" },
  
  // --- Additional Nighty & Dress Collection ---
  { title: "Classic Cotton Nighty", image: "/images/WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg", count: "Comfort Fit" },
  { title: "Evening Comfort Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg", count: "New Arrival" },
  { title: "Soft Cotton Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg", count: "Trending" },
  { title: "Designer Night Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.33.41_c96fc166.jpg", count: "Premium" },
  { title: "Floral Night Comfort", image: "/images/WhatsApp Image 2025-12-16 at 11.34.01_e40d79b6.jpg", count: "Best Seller" },
  { title: "Premium Night Gown", image: "/images/WhatsApp Image 2025-12-16 at 11.34.21_9bff7eae.jpg", count: "New" },
  { title: "Daily Comfort Wear", image: "/images/WhatsApp Image 2025-12-16 at 11.34.49_01952025.jpg", count: "In Stock" },
  { title: "Printed Nighty Set", image: "/images/WhatsApp Image 2025-12-16 at 11.35.01_e6f6db44.jpg", count: "Sale" },
  { title: "Summer Nighty Special", image: "/images/WhatsApp Image 2025-12-16 at 11.35.21_36dcc250.jpg", count: "New Arrival" }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-background border transition-all hover:shadow-xl">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold">{product.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {product.count}
                  </span>
                </div>
                <Link
                  href="#contact"
                  className="mt-4 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inquiry Now <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
