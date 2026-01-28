import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- আপনার সব ছবি এখানে ---
const bedsheets = [
  { title: "Premium Floral", image: "/images/bedsheet-beige-floral.jpg" },
  { title: "Royal Blue", image: "/images/bedsheet-blue-floral.jpg" },
  { title: "Classic Brown", image: "/images/bedsheet-brown-floral.jpg" },
  { title: "Spring Bloom", image: "/images/bedsheet-colorful-floral.jpg" },
  { title: "Grey Leaf", image: "/images/bedsheet-grey-leaf.jpg" },
  { title: "Pink Petal", image: "/images/bedsheet-pink-floral.jpg" },
  { title: "Lavender Set", image: "/images/WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg" },
  { title: "Rose Garden", image: "/images/WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg" }
];

const nighties = [
  { title: "Cotton Nighty", image: "/images/cotton-nighties.jpg" },
  { title: "Silk Kaftan", image: "/images/kaftans.jpg" },
  { title: "Comfort Fit", image: "/images/WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg" },
  { title: "Azure Blue", image: "/images/WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg" },
  { title: "Pink Blossom", image: "/images/WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg" },
  { title: "Maroon Luxury", image: "/images/WhatsApp Image 2025-12-16 at 11.33.41_c96fc166.jpg" },
  { title: "Batik Print", image: "/images/WhatsApp Image 2026-01-10 at 12.26.55 PM.jpeg" },
  { title: "Aaditri Special", image: "/images/WhatsApp Image 2026-01-13 at 10.14.57 AM.jpeg" }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Bedsheet Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bedsheets.map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Nightwear Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nighties.map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: any }) {
  return (
    <div className="rounded-2xl bg-background border overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[4/5] relative">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
      </div>
      <div className="p-4 flex justify-between items-center">
        <h3 className="font-serif font-semibold">{p.title}</h3>
        <Link href="#contact" className="text-accent"><ArrowUpRight size={20}/></Link>
      </div>
    </div>
  );
}
