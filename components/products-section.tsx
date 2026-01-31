import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Contact Us</h2>
            <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
              যেকোনো অর্ডার বা তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground mb-1">Call/WhatsApp</p>
                  <p className="text-muted-foreground">+91 7278104982</p>
                  <p className="text-muted-foreground">+91 8777840679</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/30 p-10 rounded-[2rem] border border-accent/10">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <p className="text-muted-foreground mb-8">সরাসরি কথা বলতে নিচের বাটনে ক্লিক করুন:</p>
            <a 
              href="https://wa.me/917278104982" 
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <MessageCircle size={24} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
