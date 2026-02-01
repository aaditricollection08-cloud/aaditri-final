import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Trusted Wholesale Partner Since 2015
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Bedsheet & Nighty Wholesale
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {"Kolkata's trusted wholesaler of premium Cotton Nighties and Bedsheet Sets. Quality fabrics, competitive pricing, and reliable bulk supply for retailers across India."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="#products" className="flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Request Catalog</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Retailers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Products Delivered</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-serif font-bold text-foreground">9+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-nightwear.jpg"
                alt="Premium cotton nightwear and linens collection"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-2xl font-serif font-bold text-foreground">₹160/piece</p>
              <p className="text-xs text-muted-foreground">Minimum 25 pieces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
