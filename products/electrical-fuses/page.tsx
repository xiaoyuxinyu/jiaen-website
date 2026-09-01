import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export default function ElectricalFusesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Details"
        title="Industrial High Performance Electrical Fuses"
        description="Reliable overcurrent and short-circuit protection for new energy power systems"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 产品大图区域 */}
            <div className="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src="/images/fuse.jpg"
                alt="Industrial Electrical Fuses"
                fill
                className="object-contain"
              />
            </div>

            {/* 产品文字介绍 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our industrial electrical fuses are engineered to deliver fast, reliable over-current and short-circuit protection for critical power circuits. Designed for harsh industrial environments, they effectively safeguard solar photovoltaic systems, battery energy storage cabinets, EV charging stations, rail transit equipment, marine power systems, aerospace facilities, nuclear energy installations and semiconductor manufacturing equipment from overload and short circuit damage.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Fast arc extinguishing and precise breaking performance</li>
                <li>• Wide range of voltage and current ratings for diverse application scenarios</li>
                <li>• High temperature resistance, vibration tolerance and long service life</li>
                <li>• Compliant with international safety standards, CE & UL certified</li>
                <li>• Adaptable to high temperature, humid and dusty harsh working conditions</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Application Fields</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Solar photovoltaic power generation systems</li>
                <li>• Battery energy storage integration systems</li>
                <li>• Electric vehicle charging infrastructure</li>
                <li>• Rail transit and marine power equipment</li>
                <li>• Aerospace, nuclear energy and semiconductor industry</li>
              </ul>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Request A Quote
                </Link>
                <Link
                  href="/products"
                  className="border border-primary text-primary px-5 py-3 rounded hover:bg-primary hover:text-white transition-colors"
                >
                  Back To Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}