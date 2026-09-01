'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

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
    imageUrl:"/images/products-banner.jpg",
    slug:"energy-meters"
  },
  {
    title: "Electrical Fuses",
    desc: "High‑performance industrial fuses offering reliable over‑current and short‑circuit protection. Widely used in solar PV, energy‑storage systems, EV charging stations, rail‑transit, marine, aerospace, nuclear‑energy and semiconductor‑equipment projects.",
    imageUrl:"/images/fuse.png",
    slug:"electrical-fuses"
  },
  {
    title: "DC Contactors",
    desc: "Heavy‑duty DC contactors with high‑voltage & large‑current switching capability. Designed for battery energy‑storage systems, EV chargers, solar power stations, new‑energy vehicles and industrial power control equipment. Stable performance and long service life.",
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* ----你首页原本所有内容（Hero、服务等，不要删除！！）---- */}


        {/* ==========新增：产品板块 ID锚点 #products ========== */}
        <section id="products" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold">Our Products</h2>
              <p className="mt-3 text-lg text-gray-600">We supply full‑set new‑energy products for global commercial and industrial clients.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {productList.map((item, idx) => (
                <div key={idx} className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-56 relative w-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
                    <Link
                      href={`/products/${item.slug}`}
                      className="inline-block bg-primary text-white px-5 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}