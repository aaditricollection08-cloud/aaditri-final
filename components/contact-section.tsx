"use client";

import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection08@gmail.com"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get("name"),
      email: formData.get("customer_email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      message: formData.get("message"),
    };

    // ১. হোয়াটসঅ্যাপে তথ্য পাঠানো
    const whatsappBody = `New Inquiry from Web:\nনাম: ${data.name}\nইমেইল: ${data.email}\nফোন: ${data.phone}\nশহর: ${data.city}\nমেসেজ: ${data.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappBody)}`, "_blank");

    // ২. অটোমেটিক ইমেইল পাঠানো (Formspree)
    try {
      await fetch("https://formspree.io/f/xvgzlowz", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });
      alert("ধন্যবাদ! আপনার ইনকোয়ারি সফলভাবে পাঠানো হয়েছে।");
    } catch (error) {
      console.log("Error sending email");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 text-left">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">যোগাযোগ করুন</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent"><Phone size={20}/></div>
              <span className="font-medium">+91 7278104982 / 8777840679</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent"><Mail size={20}/></div>
              <span className="font-medium">{MY_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="আপনার নাম (Full Name)" className="p-3 rounded-xl border bg-background w-full" required />
              <input name="customer_email" type="email" placeholder="আপনার ইমেইল (Email ID)" className="p-3 rounded-xl border bg-background w-full" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="phone" type="text" placeholder="ফোন নম্বর (Phone)" className="p-3 rounded-xl border bg-background w-full" required />
              <input name="city" type="text" placeholder="শহর বা এলাকা (City)" className="p-3 rounded-xl border bg-background w-full" required />
            </div>
            <textarea name="message" placeholder="আপনার প্রশ্ন বা কোন পণ্যটি কিনতে চান তা এখানে লিখুন..." className="w-full p-3 rounded-xl border bg-background" rows={4} required></textarea>
            
            <button type="submit" className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600000] transition-all">
              <Send size={20} /> ইনকোয়ারি পাঠান (Send Inquiry)
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
