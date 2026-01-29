import Image from "next/image";
import { bedsheets } from "@/data/bedsheets";

export default function ProductsSection() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Bedsheet Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bedsheets.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="rounded-md mb-3"
            />

            <h3 className="font-semibold text-lg">{item.name}</h3>

            <p className="text-sm text-gray-600">
              Material: {item.material}
            </p>
            <p className="text-sm text-gray-600">
              Size: {item.size}
            </p>
            <p className="text-sm text-gray-600">
              Includes: {item.includes}
            </p>

            <p className="mt-2 font-bold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

