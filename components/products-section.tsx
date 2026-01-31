import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const bedsheets = [
  { id: 1, name: "Spring Meadow Tulip", img: "/bedsheet-1.jpg", price: "250" },
  { id: 2, name: "Midnight Galaxy Blue", img: "/bedsheet-2.jpg", price: "250" },
  { id: 3, name: "Rose Garden Delight", img: "/bedsheet-3.jpg", price: "250" },
  { id: 4, name: "Golden Oasis Pattern", img: "/bedsheet-4.jpg", price: "250" },
  { id: 5, name: "Lavender Mist Floral", img: "/bedsheet-5.jpg", price: "250" },
  { id: 6, name: "Royal Emerald Classic", img: "/bedsheet-6.jpg", price: "250" },
  { id: 7, name: "Oceanic Wave Texture", img: "/bedsheet-7.jpg", price: "250" },
  { id: 8, name: "Crimson Velvet Bloom", img: "/bedsheet-8.jpg", price: "250" },
  { id: 9, name: "Ivory Pearl Elegance", img: "/bedsheet-9.jpg", price: "250" },
  { id: 10, name: "Sunset Glow Abstract", img: "/bedsheet-10.jpeg", price: "250" },
  { id: 11, name: "Turquoise Bliss", img: "/bedsheet-11.jpeg", price: "250" },
  { id: 12, name: "Peony Paradise", img: "/bedsheet-12.jpeg", price: "250" },
  { id: 13, name: "Sapphire Night Star", img: "/bedsheet-13.jpeg", price: "250" },
  { id: 14, name: "Autumn Breeze Leaf", img: "/bedsheet-14.jpeg", price: "250" },
  { id: 15, name: "Marble Silk Touch", img: "/bedsheet-15.jpeg", price: "250" },
  { id: 16, name: "Ruby Romance Red", img: "/bedsheet-16.jpeg", price: "250" },
  { id: 17, name: "Pastel Petal Dream", img: "/bedsheet-17.jpeg", price: "250" },
  { id: 18, name: "Indigo Ink Modern", img: "/bedsheet-18.jpeg", price: "250" },
  { id: 19, name: "Diamond Sparkle White", img: "/bedsheet-19.jpeg", price: "250" },
  { id: 20, name: "Vintage Heritage Gold", img: "/bedsheet-20.jpeg", price: "250" },
  { id: 21, name: "Urban Chic Charcoal", img: "/bedsheet-21.jpeg", price: "250" }
].map(p => ({
  ...p,
  size: "90×108 inch",
  material: "Glace Cotton",
  includes: "1 Sheet + 2 Pillow + 1 Bolster"
}));

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-foreground">Premium Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bedsheets.map((p) => (
            <div key={p.id} className="group bg-background rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  unoptimized={true} 
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1 leading-tight h-12">{p.name}</h3>
                <p className="text-accent font-extrabold text-xl mb-3">₹{p.price}</p>
                <div className="space-y-1.5 mb-5 text-sm text-muted-foreground border-t pt-3">
                  <div className="flex justify-between"><span>Size:</span> <span className="text-foreground font-medium">{p.size}</span></div>
                  <div className="flex justify-between"><span>Material:</span> <span className="text-foreground font-medium">{p.material}</span></div>
                </div>
                <Link href="#contact" className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold hover:bg-accent transition-all text-center">
                  <ShoppingCart size={18} className="inline-block mr-2" /> Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
