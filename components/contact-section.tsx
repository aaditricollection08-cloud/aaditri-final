"use client";

import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection0@gmail.com";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const name = (document.getElementById('full-name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone-number') as HTMLInputElement).value;
    const city = (document.getElementById('city-loc') as HTMLInputElement).value;
    const msg = (document.getElementById('msg-text') as HTMLTextAreaElement).value;
    
    const subject = `Inquiry from ${name}`;
    const body = `Name: ${name}%0APhone: ${phone}%0ACity: ${city}%0AMessage: ${msg}`;

    // ১. হোয়াটসঅ্যাপ মেসেজ পাঠানো
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${body}`;
    window.open(whatsappLink, "_blank");

    // ২. ইমেইল উইন্ডো খোলা
    const mailtoLink = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent"><Phone size={20}/></div>
              <span>+91 7278104982 / 8777840679</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent"><Mail size={20}/></div>
              <span>{MY_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input id="full-name" type="text" placeholder="Full Name" className="p-3 rounded-xl border bg-background" required />
              <input id="phone-number" type="text" placeholder="Phone Number" className="p-3 rounded-xl border bg-background" required />
            </div>
            <input id="city-loc" type="text" placeholder="City / Location" className="w-full p-3 rounded-xl border bg-background" />
            <textarea id="msg-text" placeholder="Tell us what you need..." className="w-full p-3 rounded-xl border bg-background" rows={4}></textarea>
            
            <button type="submit" className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600000] transition-all">
              <Send size={20} /> Send Inquiry Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
