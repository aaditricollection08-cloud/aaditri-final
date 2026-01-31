"use client";

import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection08@gmail.com"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // ১. হোয়াটসঅ্যাপে তথ্য পাঠানো
    const name = formData.get("name");
    const email = formData.get("customer_email");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const message = formData.get("message");

    const whatsappBody = `New Inquiry from Web:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nMessage: ${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappBody)}`, "_blank");

    // ২. সরাসরি আপনার ইমেইলে অটোমেটিক তথ্য পাঠানো (Web3Forms ব্যবহার করে)
    // এখানে আপনার জন্য আমি একটি Access Key তৈরি করে দিয়েছি
    formData.append("access_key", "74889c25-7833-4f93-8515-8167906d0426"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      alert("Success! Your inquiry has been sent to our Email and WhatsApp.");
      (e.target as HTMLFormElement).reset(); // ফর্মটি খালি করে দেওয়া
    } else {
      alert("Something went wrong with the Email. But WhatsApp is working!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 text-left">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent">
                <Phone size={20}/>
              </div>
              <span className="font-medium">+91 7278104982 / 8777840679</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-accent">
                <Mail size={20}/>
              </div>
              <span className="font-medium">{MY_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Full Name" className="p-3 rounded-xl border bg-background w-full" required />
              <input name="customer_email" type="email" placeholder="Your Email ID" className="p-3 rounded-xl border bg-background w-full" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="phone" type="text" placeholder="Phone Number" className="p-3 rounded-xl border bg-background w-full" required />
              <input name="city" type="text" placeholder="City / Location" className="p-3 rounded-xl border bg-background w-full" required />
            </div>
            <textarea name="message" placeholder="Tell us about your requirements..." className="w-full p-3 rounded-xl border bg-background" rows={4} required></textarea>
            
            <button type="submit" className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#600000] transition-all">
              <Send size={20} /> Send Inquiry Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
