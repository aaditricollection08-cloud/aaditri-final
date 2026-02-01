"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ZoomIn, Info } from "lucide-react";

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
    <section id="products" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-4 text-center">Bedsheet Collection</h2>
        <p className="text-center text-muted-foreground mb-12 italic">Wholesale Only | Min. Order: 25 Pcs per design</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-left">
          {bedsheets.map((p) => {
            const message = encodeURIComponent(`Hello Aaditri Collection! I'm interested in wholesale inquiry for:\n\nProduct: ${p.name}\nWholesale Price: ₹${p.price}\nNote: I understand the MOQ is 25 pieces.`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <div key={p.id} className="bg-background rounded-3xl overflow-hidden border shadow-sm hover:shadow-lg transition-all p-4">
                <div 
                  className="aspect-[4/5] relative mb-4 cursor-zoom-in group overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImg(p.img)}
                >
                  <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized={true} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg">
                      <ZoomIn size={18} /> Click to View
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-1 h-12 overflow-hidden">{p.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#800000] font-bold text-xl">₹{p.price}</p>
                  <span className="text-[10px] font-bold bg-[#800000]/10 text-[#800000] px-2 py-1 rounded uppercase flex items-center gap-1">
                    <Info size={10} /> MOQ: 25 Pcs
                  </span>
                </div>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#075E54] text-white py-3 rounded-xl font-bold hover:bg-[#054a42] transition-colors"
                >
                  <MessageCircle size={18} /> Wholesale Inquiry
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"><X size={32} /></button>
          <div className="relative w-full max-w-3xl h-[85vh]">
            <img src={selectedImg} alt="Zoomed product" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
