"use client";

import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection08@gmail.com"; 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name");
    const customerEmail = formData.get("customer_email");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const message = formData.get("message");

    const subject = `Inquiry from ${name} - Aaditri Collection`;
    const bodyText = `Customer Details:%0D%0A--------------------%0D%0AName: ${name}%0D%0AEmail: ${customerEmail}%0D%0APhone: ${phone}%0D%0ACity: ${city}%0D%0AMessage: ${message}`;

    // ১. প্রথমে হোয়াটসঅ্যাপ চ্যাট উইন্ডো খুলবে
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${bodyText}`;
    window.open(whatsappLink, "_blank");

    // ২. তারপর ইউজারের ডিফল্ট ইমেইল অ্যাপ (Gmail/Mail) খুলে যাবে
    // এতে কোনো এক্টিভেশন লিঙ্ক লাগবে না, সরাসরি আপনার ইনবক্সে মেইল যাবে
    const mailtoLink = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${bodyText}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 text-left">
        <div>
          <h2 className="text-4xl font-bold mb-6 italic">Contact Us</h2>
          <p className="mb-8 text-muted-foreground text-lg">Have questions? Reach out to us via WhatsApp or Email.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
              <Phone className="text-[#800000]" size={24} />
              <span className="font-semibold text-lg">+91 7278104982 / 8777840679</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
              <Mail className="text-[#800000]" size={24} />
              <span className="font-semibold text-lg">{MY_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Full Name" className="p-4 rounded-xl border bg-background w-full focus:ring-2 focus:ring-[#800000] outline-none" required />
              <input name="customer_email" type="email" placeholder="Your Email ID" className="p-4 rounded-xl border bg-background w-full focus:ring-2 focus:ring-[#800000] outline-none" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="phone" type="text" placeholder="Phone Number" className="p-4 rounded-xl border bg-background w-full focus:ring-2 focus:ring-[#800000] outline-none" required />
              <input name="city" type="text" placeholder="City / Location" className="p-4 rounded-xl border bg-background w-full focus:ring-2 focus:ring-[#800000] outline-none" required />
            </div>
            <textarea name="message" placeholder="Write your requirements here..." className="w-full p-4 rounded-xl border bg-background focus:ring-2 focus:ring-[#800000] outline-none" rows={4} required></textarea>
            
            <button type="submit" className="w-full bg-[#800000] hover:bg-[#600000] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md">
              <Send size={20} /> Send via WhatsApp & Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
