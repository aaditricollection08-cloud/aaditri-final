import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  // --- Bedsheets ---
  { name: "Beige Floral", img: "/images/bedsheet-beige-floral.jpg", cat: "Bedsheet" },
  { name: "Blue Floral", img: "/images/bedsheet-blue-floral.jpg", cat: "Bedsheet" },
  { name: "Brown Floral", img: "/images/bedsheet-brown-floral.jpg", cat: "Bedsheet" },
  { name: "Colorful Floral", img: "/images/bedsheet-colorful-floral.jpg", cat: "Bedsheet" },
  { name: "Grey Leaf", img: "/images/bedsheet-grey-leaf.jpg", cat: "Bedsheet" },
  { name: "Pink Floral", img: "/images/bedsheet-pink-floral.jpg", cat: "Bedsheet" },
  { name: "Premium Set", img: "/images/WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg", cat: "Bedsheet" },
  { name: "Royal Print", img: "/images/WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg", cat: "Bedsheet" },
  { name: "Spring Bloom", img: "/images/WhatsApp Image 2025-11-29 at 12.09.58_622bdb00.jpg", cat: "Bedsheet" },
  { name: "Gardenia Cotton", img: "/images/WhatsApp Image 2025-12-18 at 17.07.08_acd7074f - Copy.jpg", cat: "Bedsheet" },

  // --- Nightwear ---
  { name: "Cotton Nighty", img: "/images/cotton-nighties.jpg", cat: "Nighty" },
  { name: "Designer Kaftan", img: "/images/kaftans.jpg", cat: "Nighty" },
  { name: "Evening Comfort", img: "/images/WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg", cat: "Nighty" },
  { name: "Azure Blue", img: "/images/WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg", cat: "Nighty" },
  { name: "Pink Blossom", img: "/images/WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg", cat: "Nighty" },
  { name: "Maroon Luxury", img: "/images/WhatsApp Image 2025-12-16 at 11.33.41_c96fc166.jpg", cat: "Nighty" },
  { name: "Daily Wear", img: "/images/WhatsApp Image 2025-12-16 at 11.34.49_01952025.jpg", cat: "Nighty" },
  { name: "Batik Special", img: "/images/WhatsApp Image 2026-01-10 at 12.26.55 PM.jpeg", cat: "Nighty" },
  { name: "Floral Gown", img: "/images/WhatsApp Image 2026-01-10 at 12.27.27 PM.jpeg", cat: "Nighty" },
  { name: "Royal Blue", img: "/images/WhatsApp Image 2026-01-10 at 12.29.00 PM.jpeg", cat: "Nighty" },
  { name: "Pastel Dream", img: "/images/WhatsApp Image 2026-01-10 at 12.29.13 PM.jpeg", cat: "Nighty" },
  { name: "Aaditri Exclusive", img: "/images/WhatsApp Image 2026-01-13 at 10.14.57 AM.jpeg", cat: "Nighty" },
  { name: "Summer Nighty", img: "/images/WhatsApp Image 2026-01-13 at 10.15.59 AM.jpeg", cat: "Nighty" }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Aaditri Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-accent text-white text-[10px] px-2 py-1 rounded-full">
                  {p.cat}
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-medium text-sm">{p.name}</h3>
                <Link href="#contact" className="text-accent"><ArrowUpRight size={18}/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
