import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// আপনার ১২টি বেডশিট (এগুলো ফিক্সড থাকল)
const bedsheets = [
  { title: "Bedsheet 1", img: "/images/bedsheet-beige-floral.jpg" },
  { title: "Bedsheet 2", img: "/images/bedsheet-blue-floral.jpg" },
  { title: "Bedsheet 3", img: "/images/bedsheet-brown-floral.jpg" },
  { title: "Bedsheet 4", img: "/images/bedsheet-colorful-floral.jpg" },
  { title: "Bedsheet 5", img: "/images/bedsheet-floral.jpg" },
  { title: "Bedsheet 6", img: "/images/bedsheet-grey-floral.jpg" },
  { title: "Bedsheet 7", img: "/images/bedsheet-grey-leaf.jpg" },
  { title: "Bedsheet 8", img: "/images/bedsheet-grey-set.jpg" },
  { title: "Bedsheet 9", img: "/images/bedsheet-light-grey.jpg" },
  { title: "Bedsheet 10", img: "/images/bedsheet-paisley.jpg" },
  { title: "Bedsheet 11", img: "/images/bedsheet-pink-floral.jpg" },
  { title: "Bedsheet 12", img: "/images/bedsheet-pink-leaf.jpg" }
];

// আপনার প্রথম ৫টি নাইটি
const nighties = [
  { title: "Nighty 1", img: "/images/WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg" },
  { title: "Nighty 2", img: "/images/WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg" },
  { title: "Nighty 3", img: "/images/WhatsApp Image 2025-11-29 at 12.09.58_622bdb00.jpg" },
  { title: "Nighty 4", img: "/images/WhatsApp Image 2025-11-29 at 12.10.07_8c37fe39.jpg" },
  { title: "Nighty 5", img: "/images/WhatsApp Image 2025-11-29 at 12.10.17_09ee1f3e.jpg" }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Bedsheets ({bedsheets.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {bedsheets.map((p, i) => <ProductCard key={i} img={p.img} title={p.title} />)}
        </div>

        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">Nighties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nighties.map((p, i) => <ProductCard key={i} img={p.img} title={p.title} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="group bg-background rounded-xl overflow-hidden border shadow-sm">
      <div className="aspect-[3/4] relative">
        <Image src={img} alt={title} fill className="object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="p-3 flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <Link href="#contact" className="text-accent"><ArrowUpRight size={18} /></Link>
      </div>
    </div>
  );
}
