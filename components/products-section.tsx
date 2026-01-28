import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// আপনার ১২টি বেডশিট
const bedsheets = [
  { id: 1, img: "/images/bedsheet-beige-floral.jpg" },
  { id: 2, img: "/images/bedsheet-blue-floral.jpg" },
  { id: 3, img: "/images/bedsheet-brown-floral.jpg" },
  { id: 4, img: "/images/bedsheet-colorful-floral.jpg" },
  { id: 5, img: "/images/bedsheet-floral.jpg" },
  { id: 6, img: "/images/bedsheet-grey-floral.jpg" },
  { id: 7, img: "/images/bedsheet-grey-leaf.jpg" },
  { id: 8, img: "/images/bedsheet-grey-set.jpg" },
  { id: 9, img: "/images/bedsheet-light-grey.jpg" },
  { id: 10, img: "/images/bedsheet-paisley.jpg" },
  { id: 11, img: "/images/bedsheet-pink-floral.jpg" },
  { id: 12, img: "/images/bedsheet-pink-leaf.jpg" }
];

// আপনার ৬৭টি নাইটির প্রধান কিছু স্যাম্পল (বাকিগুলো অটোমেটিক আসবে না, আপনাকে এখানে কয়েকটা নাম অন্তত দিতেই হবে)
const nighties = [
  { id: 1, img: "/images/cotton-nighties.jpg" },
  { id: 2, img: "/images/kaftans.jpg" },
  { id: 3, img: "/images/hero-nightwear.jpg" },
  { id: 4, img: "/images/WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg" },
  { id: 5, img: "/images/WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg" },
  { id: 6, img: "/images/WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg" },
  { id: 7, img: "/images/WhatsApp Image 2026-01-10 at 12.26.55 PM.jpeg" },
  { id: 8, img: "/images/WhatsApp Image 2026-01-13 at 10.14.57 AM.jpeg" },
  // এখানে আপনি চাইলে আরও ২০-৩০টা নাম পেস্ট করতে পারেন, তবে কোড যেন ছোট থাকে।
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Bedsheet Collection ({bedsheets.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {bedsheets.map((p) => <ProductCard key={p.id} img={p.img} title={`Bedsheet ${p.id}`} />)}
        </div>

        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Nightwear Collection ({nighties.length}+ Designs)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nighties.map((p) => <ProductCard key={p.id} img={p.img} title={`Nighty ${p.id}`} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ img, title }: { img: string, title: string }) {
  return (
    <div className="group bg-background rounded-xl overflow-hidden border shadow-sm">
      <div className="aspect-[3/4] relative">
        <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-3 flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <Link href="#contact" className="text-accent"><ArrowUpRight size={18} /></Link>
      </div>
    </div>
  );
}
