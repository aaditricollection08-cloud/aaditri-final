import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart } from "lucide-react";

const bedsheets = [
  { 
    name: "Spring Bloom Tulip Set", 
    img: "/images/bedsheet-tulip.jpg", // এই নামটি গিটহাবে পরিবর্তন করে নিন
    price: "250",
    size: "90×108 inch",
    material: "Glace Cotton",
    includes: "1 Sheet + 2 Pillow + 1 Bolster"
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-12 text-foreground">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bedsheets.map((p, i) => (
            <div key={i} className="group bg-background rounded-2xl overflow-hidden border shadow-sm">
              <div className="aspect-[4/5] relative">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-accent font-bold text-xl mb-3">₹{p.price}</p>
                <div className="text-sm text-muted-foreground border-t pt-3 space-y-1">
                  <p>Size: {p.size}</p>
                  <p>Material: {p.material}</p>
                  <p className="text-accent font-semibold text-xs mt-2">{p.includes}</p>
                </div>
                <Link href="#contact" className="mt-4 w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold hover:bg-accent transition-all">
                  <ShoppingCart size={18} /> Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
