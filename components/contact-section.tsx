"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    message: ""
  });

  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection0@gmail.com"; // আপনার ইমেইল এখানে দিন

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp মেসেজ ফরম্যাট করা
    const text = `*New Inquiry - Aaditri Collection*\n\n` +
                 `*Name:* ${formData.name}\n` +
                 `*Business:* ${formData.business}\n` +
                 `*Phone:* ${formData.phone}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*City:* ${formData.city}\n` +
                 `*Message:* ${formData.message}`;
    
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Contact Us</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Call/WhatsApp</p>
                  <p className="text-muted-foreground">+91 7278104982</p>
                  <p className="text-muted-foreground">+91 8777840679</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Email Us</p>
                  <a href={`mailto:${MY_EMAIL}`} className="text-muted-foreground hover:text-accent transition-colors">
                    {MY_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 p-8 rounded-3xl border border-accent/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" placeholder="Full Name" required 
                  className="p-3 rounded-xl border bg-background"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="text" placeholder="Business Name" 
                  className="p-3 rounded-xl border bg-background"
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" placeholder="Phone Number" required
                  className="p-3 rounded-xl border bg-background"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                  type="email" placeholder="Email Address"
                  className="p-3 rounded-xl border bg-background"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <input 
                type="text" placeholder="City / Location"
                className="w-full p-3 rounded-xl border bg-background"
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
              <textarea 
                placeholder="Message" rows={4}
                className="w-full p-3 rounded-xl border bg-background"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold hover:bg-[#600000] transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
