import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export default function DCContactorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Details"
        title="Heavy Duty DC Contactors"
        description="High voltage DC power switching components for new energy systems"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 产品大图区域 */}
            <div className="relative h-[400px] bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src="/images/contactor-detail.jpg"
                alt="Heavy Duty DC Contactors"
                fill
                className="object-contain"
              />
            </div>

            {/* 产品文字介绍 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our heavy‑duty DC contactors are designed for high‑voltage, large‑current direct current power control scenarios. With stable contact performance and strong arc suppression capability, they are widely applied in battery energy storage systems, EV charging piles, solar photovoltaic inverters, new energy vehicles, industrial DC power supply equipment and rail transit power control units, ensuring safe and reliable circuit switching under long‑term heavy load conditions.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• High voltage resistance and large current carrying capacity</li>
                <li>• Excellent arc extinguishing design, safe breaking operation</li>
                <li>• Low contact resistance, low power consumption and long service life</li>
                <li>• Shock and vibration resistant, suitable for harsh working environments</li>
                <li>• CE certified, compliant with global new energy industry standards</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Application Fields</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Battery energy storage power stations</li>
                <li>• Electric vehicle charging infrastructure</li>
                <li>• Solar PV power generation systems</li>
                <li>• New energy vehicle power control systems</li>
                <li>• Industrial DC power control and rail transit equipment</li>
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