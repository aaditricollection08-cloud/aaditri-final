import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4 text-foreground">
          Bedsheet Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bedsheets.map((p, i) => (
            <div key={i} className="group bg-background rounded-xl overflow-hidden border shadow-sm transition-all hover:shadow-md">
              <div className="aspect-[3/4] relative">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="text-sm font-medium">{p.title}</span>
                <Link href="#contact" className="text-accent">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
