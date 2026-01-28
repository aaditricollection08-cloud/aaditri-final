import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Direct from manufacturers - no middlemen",
  "Quality checked before dispatch",
  "Flexible MOQ for new retailers",
  "Pan-India shipping available",
  "Easy returns and exchange policy",
  "Dedicated account manager for bulk orders",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {"Kolkata's Trusted Wholesale Partner"}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 2015, Aaditri Collection has been serving retailers across India with premium quality nightwear and linens. Based in the heart of Kolkata, we source directly from the best manufacturers to bring you competitive wholesale prices without compromising on quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality, timely delivery, and customer satisfaction has made us a preferred wholesale partner for over 500 retailers. Whether you're a small boutique or a large retail chain, we have the right products and pricing for your business.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary rounded-2xl p-8 text-center">
                  <p className="text-4xl font-serif font-bold text-foreground mb-2">9+</p>
                  <p className="text-sm text-muted-foreground">Years in Business</p>
                </div>
                <div className="bg-primary rounded-2xl p-8 text-center">
                  <p className="text-4xl font-serif font-bold text-primary-foreground mb-2">500+</p>
                  <p className="text-sm text-primary-foreground/80">Partner Retailers</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-accent/20 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-serif font-bold text-foreground mb-2">50K+</p>
                  <p className="text-sm text-muted-foreground">Orders Fulfilled</p>
                </div>
                <div className="bg-secondary rounded-2xl p-8 text-center">
                  <p className="text-4xl font-serif font-bold text-foreground mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">States Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
