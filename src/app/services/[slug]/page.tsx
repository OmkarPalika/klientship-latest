import { initialCards } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = initialCards.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );
  return {
    title: service ? `${service.title} | Service Details` : "Service Not Found",
    description: service ? service.description : undefined,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = initialCards.find(
    s => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );
  if (!service) return notFound();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 flex items-center gap-3">
          {service.title}
          {service.highlighted && (
            <span className="ml-2 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">Most Popular</span>
          )}
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">{service.price}</h2>
        <p className="mb-6 text-lg text-gray-600 leading-relaxed border-l-4 border-black pl-4 italic">{service.description}</p>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Key Features</h3>
          <ul className="list-none space-y-2">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href={`https://wa.me/+919876543210?text=${encodeURIComponent(`Hi, I'm interested in the ${service.title} for Shopify development services.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition"
          >
            WhatsApp Now
          </a>
          <a
            href="/contact"
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg text-center transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
