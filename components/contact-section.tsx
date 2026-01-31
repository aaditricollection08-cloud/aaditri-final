"use client";

import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const WHATSAPP_NUMBER = "917278104982";
  const MY_EMAIL = "aaditricollection08@gmail.com"; 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const message = formData.get("message");

    const subject = `New Inquiry from ${name}`;
    const body = `Customer Details:%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ACity: ${city}%0D%0AMessage: ${message}`;

    // ১. হোয়াটসঅ্যাপ খুলে যাবে
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${body}`, "_blank");

    // ২. সরাসরি মেইল অ্যাপ খুলে যাবে (কোনো অ্যাক্টিভেশন লাগবে না)
    const mailtoLink = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background text-left">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-[#800000]" />
              <span>+91 7278104982 / 8777840679</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#800000]" />
              <span>{MY_EMAIL}</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Full Name" className="p-3 rounded-xl border bg-background" required />
              <input name="email" type="email" placeholder="Your Email ID" className="p-3 rounded-xl border bg-background" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="phone" type="text" placeholder="Phone Number" className="p-3 rounded-xl border bg-background" required />
              <input name="city" type="text" placeholder="City" className="p-3 rounded-xl border bg-background" required />
            </div>
            <textarea name="message" placeholder="Message" className="w-full p-3 rounded-xl border bg-background" rows={4} required></textarea>
            <button type="submit" className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <Send size={20} /> Send Inquiry Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
