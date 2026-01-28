import { Truck, Shield, BadgePercent, Headphones, Package, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: BadgePercent,
    title: "Best Wholesale Prices",
    description: "Direct manufacturer sourcing ensures the most competitive rates in the market.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every piece is quality checked before dispatch to maintain our high standards.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable shipping to all major cities and towns across India.",
  },
  {
    icon: Package,
    title: "Flexible MOQ",
    description: "Start with smaller quantities as a new partner, scale up as you grow.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Hassle-free return and exchange policy for defective products.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account manager for bulk orders and business queries.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Built for Retailers, By Industry Experts
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            We understand the challenges of retail business. Our services are designed to help you succeed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
