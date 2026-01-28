import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
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

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-background border transition-all hover:shadow-xl">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold">{product.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {product.count}
                  </span>
                </div>
                <Link
                  href="#contact"
                  className="mt-4 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inquiry Now <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
