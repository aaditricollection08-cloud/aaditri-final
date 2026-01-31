"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, X } from "lucide-react";

const WHATSAPP_NUMBER = "917278104982";

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
];

export function ProductsSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-4 text-center">Premium Collection</h2>
        <p className="text-center text-muted-foreground mb-12 italic">Bedsheets from ₹250 & Nighties from ₹160</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bedsheets.map((p) => {
            const message = encodeURIComponent(`Hello Aaditri Collection! I want to order:\n\nProduct: ${p.name}\nPrice: ₹${p.price}`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <div key={p.id} className="bg-background rounded-2xl overflow-hidden border shadow-sm p-4">
                {/* ছবিতে ক্লিক করলে বড় হবে */}
                <div 
                  className="aspect-[4/5] relative mb-4 cursor-zoom-in group"
                  onClick={() => setSelectedImg(p.img)}
                >
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    fill 
                    className="object-cover rounded-xl transition-transform group-hover:scale-105" 
                    unoptimized={true} 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center">
                    <span className="text-white bg-black/50 px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">Click to View</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-1 h-12 overflow-hidden">{p.name}</h3>
                <p className="text-[#e11d48] font-bold text-xl mb-4">₹{p.price}</p>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-colors"
                >
                  <ShoppingCart size={18} /> WhatsApp Order
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* ফুল স্ক্রিন ছবি দেখার উইন্ডো (Modal) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-3xl aspect-[4/5] md:aspect-auto md:h-[90vh]">
            <img 
              src={selectedImg} 
              alt="Zoomed product" 
              className="w-full h-full object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
