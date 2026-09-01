'use client'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

const productList = [
  {
    title: "Cooling Fans",
    desc: "DC, AC & EC high‑airflow cooling fans, axial fans, blowers, centrifugal fans, waterproof fans and brush‑less motors. Certified by UL, TUV, CE, CCC, ROHS. Suitable for high‑temperature, high‑humidity, dust‑proof and anti‑corrosion harsh‑environment projects.",
    imageUrl:"/images/fan.jpg",
    slug:"cooling-fans"
  },
  {
    title: "Industrial Energy Meters",
    desc: "Complete range of DC & AC smart energy meters, single‑phase, three‑phase meters, MID/CE certified, for solar PV, energy storage and EV charging infrastructure.",
    imageUrl:"/images/meter.jpg",
    slug:"energy-meters"
  },
  {
    title: "Electrical Fuses",
    desc: "High‑performance industrial fuses offering reliable over‑current and short‑circuit protection. Widely used in solar PV, energy‑storage systems, EV charging stations, rail‑transit, marine, aerospace, nuclear‑energy and semiconductor‑equipment projects.",
    imageUrl:"/images/fuse.jpg",
    slug:"electrical-fuses"
  },
  {
    title: "DC Contactors",
    desc: "Heavy‑duty DC contactors with high‑voltage & large‑current switching capability. Designed for battery energy‑storage systems, EV chargers, solar power stations, new‑energy vehicles and industrial power‑control equipment. Stable performance and long service‑life.",
    imageUrl:"/images/contactor.jpg",
    slug:"dc-contactors"
  },
  {
    title: "Energy‑Storage Connectors",
    desc: "High‑current, waterproof and vibration‑resistant energy‑storage connectors, ideal for battery packs, energy‑storage systems and EV‑charging projects.",
    imageUrl:"/images/connector.png",
    slug:"energy-storage-connectors"
  }
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHero title="Our Products" />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {productList.map((product, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-5">{product.desc}</p>
                <Link href={`/products/${product.slug}`}>
                  <button className="bg-blue-800 text-white px-5 py-2 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}