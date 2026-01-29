import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const bedsheets = [
  "/images/bedsheet-beige-floral.jpg", "/images/bedsheet-blue-floral.jpg", 
  "/images/bedsheet-brown-floral.jpg", "/images/bedsheet-colorful-floral.jpg",
  "/images/bedsheet-floral.jpg", "/images/bedsheet-grey-floral.jpg",
  "/images/bedsheet-grey-leaf.jpg", "/images/bedsheet-grey-set.jpg",
  "/images/bedsheet-light-grey.jpg", "/images/bedsheet-paisley.jpg",
  "/images/bedsheet-pink-floral.jpg", "/images/bedsheet-pink-leaf.jpg"
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4 text-center">Bedsheet Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bedsheets.map((img, i) => (
            <div key={i} className="group bg-background rounded-xl overflow-hidden border shadow-sm">
              <div className="aspect-[3/4] relative">
                <Image src={img} alt="Bedsheet" fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-sm font-medium">Premium Design</span>
                <Link href="#contact" className="text-accent"><ArrowUpRight size={18} /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
