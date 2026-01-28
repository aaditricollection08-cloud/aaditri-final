import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* =======================
   BEDSHEETS (12 PCS)
======================= */
const bedsheets = [
  "bedsheet-beige-floral.jpg",
  "bedsheet-blue-floral.jpg",
  "bedsheet-brown-floral.jpg",
  "bedsheet-colorful-floral.jpg",
  "bedsheet-floral.jpg",
  "bedsheet-grey-floral.jpg",
  "bedsheet-grey-leaf.jpg",
  "bedsheet-grey-set.jpg",
  "bedsheet-light-grey.jpg",
  "bedsheet-paisley.jpg",
  "bedsheet-pink-floral.jpg",
  "bedsheet-pink-leaf.jpg",
];

/* =======================
   NIGHTY / NIGHTWEAR
   (ALL WHATSAPP IMAGES)
======================= */
const nightyFiles = [
  "WhatsApp Image 2025-11-29 at 12.09.43_9730bcf0.jpg",
  "WhatsApp Image 2025-11-29 at 12.09.51_7c16817d.jpg",
  "WhatsApp Image 2025-11-29 at 12.09.58_622bdb00.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.07_8c37fe39.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.17_09ee1f3e.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.32_7533c396.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.40_22aefd63.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.50_c1b408b9.jpg",
  "WhatsApp Image 2025-11-29 at 12.10.59_e1eb53a4.jpg",

  "WhatsApp Image 2025-12-16 at 11.32.38_1bde137d.jpg",
  "WhatsApp Image 2025-12-16 at 11.33.01_b8c59869.jpg",
  "WhatsApp Image 2025-12-16 at 11.33.21_51adeae5.jpg",
  "WhatsApp Image 2025-12-16 at 11.33.41_c96fc166.jpg",
  "WhatsApp Image 2025-12-16 at 11.34.01_e40d79b6.jpg",
  "WhatsApp Image 2025-12-16 at 11.34.21_9bff7eae.jpg",
  "WhatsApp Image 2025-12-16 at 11.34.49_01952025.jpg",
  "WhatsApp Image 2025-12-16 at 11.35.01_e6f6db44.jpg",
  "WhatsApp Image 2025-12-16 at 11.35.21_36dcc250.jpg",
  "WhatsApp Image 2025-12-16 at 11.35.44_661dc02c.jpg",
  "WhatsApp Image 2025-12-16 at 11.36.04_c8352682.jpg",
  "WhatsApp Image 2025-12-16 at 11.36.21_57b70b0c.jpg",
  "WhatsApp Image 2025-12-16 at 11.36.34_0d9d7a3f.jpg",
  "WhatsApp Image 2025-12-16 at 11.36.54_6d8e753f.jpg",
  "WhatsApp Image 2025-12-16 at 11.37.08_6a1efb33.jpg",
  "WhatsApp Image 2025-12-16 at 11.37.27_ea14db67.jpg",
  "WhatsApp Image 2025-12-16 at 11.37.39_38879919.jpg",
  "WhatsApp Image 2025-12-16 at 11.38.08_544b8395.jpg",
  "WhatsApp Image 2025-12-16 at 11.38.25_eb6fda41.jpg",
  "WhatsApp Image 2025-12-16 at 11.38.37_023be984.jpg",
  "WhatsApp Image 2025-12-16 at 11.38.49_613ca3eb.jpg",
  "WhatsApp Image 2025-12-16 at 11.39.01_bbbca626.jpg",
  "WhatsApp Image 2025-12-16 at 11.39.13_ffc4c739.jpg",

  "WhatsApp Image 2025-12-18 at 17.03.31_2e8d3f31.jpg",
  "WhatsApp Image 2025-12-18 at 17.03.45_25e9a157.jpg",
  "WhatsApp Image 2025-12-18 at 17.03.59_fbee7f2d.jpg",
  "WhatsApp Image 2025-12-18 at 17.04.16_e6a9de34.jpg",
  "WhatsApp Image 2025-12-18 at 17.04.35_6e5d7c9e.jpg",
  "WhatsApp Image 2025-12-18 at 17.04.53_0a349f61.jpg",
  "WhatsApp Image 2025-12-18 at 17.05.10_6bf04277.jpg",
  "WhatsApp Image 2025-12-18 at 17.05.26_4bd1ffee.jpg",
  "WhatsApp Image 2025-12-18 at 17.05.45_10753c5b.jpg",
  "WhatsApp Image 2025-12-18 at 17.06.02_f0a6c69b.jpg",
  "WhatsApp Image 2025-12-18 at 17.06.17_0d58ee3c.jpg",
  "WhatsApp Image 2025-12-18 at 17.06.34_eaccfb35.jpg",
  "WhatsApp Image 2025-12-18 at 17.06.51_fede9caa.jpg",
  "WhatsApp Image 2025-12-18 at 17.07.08_acd7074f - Copy.jpg",

  "WhatsApp Image 2026-01-10 at 12.26.42 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.26.55 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.27.12 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.27.27 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.28.09 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.28.24 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.29.00 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.29.13 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.29.35 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.29.53 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 12.30.17 PM (2).jpeg",
  "WhatsApp Image 2026-01-10 at 12.30.33 PM.jpeg",

  "WhatsApp Image 2026-01-10 at 3.03.34 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.03.52 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.04.08 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.04.27 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.04.48 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.05.04 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.05.20 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.05.37 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.10.49 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.11.06 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.11.30 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.11.46 PM (2).jpeg",
  "WhatsApp Image 2026-01-10 at 3.12.04 PM (2).jpeg",
  "WhatsApp Image 2026-01-10 at 3.12.27 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.13.12 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.13.34 PM.jpeg",
  "WhatsApp Image 2026-01-10 at 3.13.52 PM.jpeg",

  "WhatsApp Image 2026-01-12 at 4.53.54 PM (1).jpeg",
  "WhatsApp Image 2026-01-12 at 4.54.24 PM (1).jpeg",
  "WhatsApp Image 2026-01-12 at 4.54.42 PM.jpeg",
  "WhatsApp Image 2026-01-12 at 4.55.04 PM (1).jpeg",
  "WhatsApp Image 2026-01-12 at 4.55.20 PM (1).jpeg",
  "WhatsApp Image 2026-01-12 at 4.55.42 PM (1).jpeg",
  "WhatsApp Image 2026-01-12 at 4.55.58 PM (1).jpeg",

  "WhatsApp Image 2026-01-13 at 10.14.29 AM.jpeg",
  "WhatsApp Image 2026-01-13 at 10.14.57 AM.jpeg",
  "WhatsApp Image 2026-01-13 at 10.15.20 AM.jpeg",
  "WhatsApp Image 2026-01-13 at 10.15.38 AM (2).jpeg",
  "WhatsApp Image 2026-01-13 at 10.15.59 AM.jpeg",
];

/* =======================
   COMPONENT
======================= */
export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">
          Bedsheets ({bedsheets.length})
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {bedsheets.map((img, i) => (
            <ProductCard
              key={i}
              img={`/images/${img}`}
              title={`Bedsheet Design ${i + 1}`}
            />
          ))}
        </div>

        <h2 className="text-3xl font-serif font-bold mb-10 border-b pb-4">
          Nightwear Collection ({nightyFiles.length})
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nightyFiles.map((file, i) => (
            <ProductCard
              key={i}
              img={`/images/${file}`}
              title={`Nighty ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="group bg-background rounded-xl overflow-hidden border shadow-sm">
      <div className="aspect-[3/4] relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex justify-between items-center">
        <span className="text-sm font-medium">{title}</span>
        <Link href="#contact" className="text-accent">
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
