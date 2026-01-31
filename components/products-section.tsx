import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingCart } from "lucide-react";

const bedsheets = [
  // ... আগের ১২টি এখানে থাকবে (জায়গা বাঁচাতে আমি শুধু নতুনটি দেখাচ্ছি)
  { 
    name: "Colorful Tulip Bloom", 
    img: "/images/WhatsApp Image 2025-11-29 at 12.10.58_aaf4ecb2.jpg",
    price: "₹250",
    size: "90×108 inch",
    material: "Glace Cotton",
    includes: "1 Sheet + 2 Pillow + 1 Bolster"
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground border-b pb-4">
          Bedsheet Collection
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bedsheets.map((p, i) => (
            <div key={i} className="group bg-background rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-accent font-extrabold text-xl mb-3">{p.price} <span className="text-xs text-muted-foreground font-normal">/ set</span></p>
                
                <div className="space-y-1.5 mb-5 text-sm text-muted-foreground border-t pt-3">
                  <div className="flex justify-between"><span>Size:</span> <span className="text-foreground font-medium">{p.size}</span></div>
                  <div className="flex justify-between"><span>Material:</span> <span className="text-foreground font-medium">{p.material}</span></div>
                  <div className="flex justify-center font-semibold text-accent mt-2 text-[11px] bg-accent/5 py-1 rounded">
                    {p.includes}
                  </div>
                </div>

                <Link href="#contact" className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all">
                  <ShoppingCart size={18} /> Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
