import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// আপনার ২১টি ছবির লিস্ট সাজানো হচ্ছে
const bedsheets = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  // আপনার আপলোড করা ফরম্যাট অনুযায়ী (১-১২ পর্যন্ত .jpg আর ১৩-২১ পর্যন্ত .jpeg)
  const extension = id >= 13 ? "jpeg" : "jpg"; 
  
  return {
    id,
    name: `Aaditri Premium Set ${id}`,
    img: `/bedsheet-${id}.${extension}`,
    price: "250",
    size: "90×108 inch",
    material: "Glace Cotton",
    includes: "1 Sheet + 2 Pillow + 1 Bolster"
  };
});

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Premium Collection</h2>
          <p className="text-muted-foreground">Quality you can feel, comfort you can dream in.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bedsheets.map((p) => (
            <div key={p.id} className="group bg-background rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{p.name}</h3>
                <p className="text-accent font-extrabold text-xl mb-3">₹{p.price}</p>
                <div className="space-y-1.5 mb-5 text-sm text-muted-foreground border-t pt-3">
                  <div className="flex justify-between"><span>Size:</span> <span className="text-foreground font-medium">{p.size}</span></div>
                  <div className="flex justify-between"><span>Material:</span> <span className="text-foreground font-medium">{p.material}</span></div>
                </div>
                <Link href="#contact" className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold hover:bg-accent transition-all">
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
