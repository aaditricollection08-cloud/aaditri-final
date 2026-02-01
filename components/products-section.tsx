"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ZoomIn, ShoppingBag, CheckCircle2 } from "lucide-react";

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
  const [selectedImg, setSelectedImg] = useState<any>(null);

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Bedsheet Collection</h2>
          <div className="inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
            <ShoppingBag size={16} /> Minimum Order: 25 Pcs
          </div>
          <p className="text-muted-foreground mt-4 italic">Glace Cotton | Queen Size (90×108 inch)</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bedsheets.map((p) => {
            const message = encodeURIComponent(`Hello! Inquiry for: ${p.name}. (Wholesale Min. 25 pcs)`);
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <div key={p.id} className="bg-background rounded-3xl overflow-hidden border shadow-sm hover:shadow-lg transition-all p-4 flex flex-col">
                <div 
                  className="aspect-[4/5] relative mb-4 cursor-zoom-in group overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImg(p)}
                >
                  <Image src={p.img} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized={true} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                      <ZoomIn size={18} /> View Details
                    </div>
                  </div>
                </div>

                <div className="text-left flex-grow">
                  <h3 className="font-bold text-lg mb-1 leading-tight">{p.name}</h3>
                  <p className="text-[#800000] font-bold text-xl mb-2">₹{p.price}</p>
                  
                  {/* ছোট করে ডিটেইলস কার্ডের ওপর */}
                  <div className="space-y-1 mb-4">
                    <p className="text-[12px] text-muted-foreground">Material: Glace Cotton</p>
                    <p className="text-[12px] text-muted-foreground">Size: 90×108 inch</p>
                  </div>
                </div>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#075E54] text-white py-3 rounded-xl font-bold hover:bg-[#054a42] transition-colors mt-auto"
                >
                  <MessageCircle size={18} /> Wholesale Inquiry
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* জুম এবং ফুল ডিটেইলস মডাল */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white z-50"><X size={32} /></button>
          
          <div className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl" onClick={(e) => e.stopPropagation()}>
             {/* ছবি অংশ */}
             <div className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh] bg-zinc-100">
                <img src={selectedImg.img} alt={selectedImg.name} className="w-full h-full object-contain" />
             </div>
             
             {/* ডিটেইলস অংশ */}
             <div className="p-8 md:w-1/2 text-left flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">{selectedImg.name}</h2>
                <p className="text-2xl text-[#800000] font-bold mb-6">₹{selectedImg.price} <span className="text-sm font-normal text-gray-500">/ per set</span></p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span><strong>Size:</strong> Queen (90×108 inch)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span><strong>Material:</strong> Glace Cotton</span>
                  </div>
                  <div className="mt-4 p-4 bg-secondary/30 rounded-2xl">
                    <p className="font-bold text-sm mb-2 uppercase">Package Includes:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 1 Double Bedsheet</li>
                      <li>• 2 Pillow Covers</li>
                      <li>• 1 Bolster Cover ✅</li>
                    </ul>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Inquiry for ${selectedImg.name}`}
                  target="_blank"
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg hover:bg-[#1ebd57]"
                >
                  <MessageCircle /> WhatsApp Inquiry
                </a>
             </div>
          </div>
        </div>
      )}
    </section>
  );
}
