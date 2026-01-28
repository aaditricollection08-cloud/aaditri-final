import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [const products = [
  { title: "Beige Floral Bedsheet", image: "/images/bedsheet-beige-floral.jpg", count: "New Arrival" },
  { title: "Blue Floral Bedsheet", image: "/images/bedsheet-blue-floral.jpg", count: "Best Seller" },
  { title: "Brown Floral Bedsheet", image: "/images/bedsheet-brown-floral.jpg", count: "In Stock" },
  { title: "Colorful Floral Bedsheet", image: "/images/bedsheet-colorful-floral.jpg", count: "Trending" },
  { title: "Classic Floral", image: "/images/bedsheet-floral.jpg", count: "In Stock" },
  { title: "Grey Floral Bedsheet", image: "/images/bedsheet-grey-floral.jpg", count: "New" },
  { title: "Grey Leaf Design", image: "/images/bedsheet-grey-leaf.jpg", count: "In Stock" },
  { title: "Grey Set Bedsheet", image: "/images/bedsheet-grey-set.jpg", count: "Premium" },
  { title: "Light Grey Floral", image: "/images/bedsheet-light-grey.jpg", count: "In Stock" },
  { title: "Paisley Print Bedsheet", image: "/images/bedsheet-paisley.jpg", count: "New" },
  { title: "Pink Floral Bedsheet", image: "/images/bedsheet-pink-floral.jpg", count: "Trending" },
  { title: "Pink Leaf Bedsheet", image: "/images/bedsheet-pink-leaf.jpg", count: "In Stock" },
  { title: "Taupe Floral Bedsheet", image: "/images/bedsheet-taupe-floral.jpg", count: "Premium" },
  { title: "Premium Cotton Nighties", image: "/images/cotton-nighties.jpg", count: "200+ Designs" },
  { title: "Designer Kaftans", image: "/images/kaftans.jpg", count: "New Collection" }
];
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Wholesale Bedsheets & Nighties
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Premium quality cotton nighties and bedsheet sets at wholesale rates. Best collection for your retail store.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href="#contact"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="text-sm opacity-80 mb-1">{product.count}</p>
                  <h3 className="font-serif text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{product.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
