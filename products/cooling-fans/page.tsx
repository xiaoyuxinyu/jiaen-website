'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'

export default function CoolingFansDetailPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Details"
        title="Cooling Fans Series"
        description="Wide‑range axial fans, blowers and centrifugal cooling fans for industrial, new‑energy and harsh‑environment applications."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm mb-8">
            <Image
              src="/images/fan-detail.jpg"
              alt="Complete cooling fan product series, axial fans and centrifugal blowers"
              width={2100}
              height={920}
              className="w-full h-auto"
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-5">Product Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive cooling‑fan product range includes axial fans, centrifugal blowers, DC, AC and EC brush‑less cooling solutions.
                Available sizes cover 40mm‑400mm, delivering airflow from 0.75CFM up to 2300CFM.
                Waterproof, dust‑proof and anti‑corrosion options are ready for harsh‑condition deployment.
                Widely applied for energy‑storage cabinets, EV‑charging stations, solar equipment, industrial control cabinets and automated machinery.
                All products are certified to UL, TUV, CE, CCC and RoHS standards, stable and reliable for global overseas projects.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-5">Key Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Wide‑size portfolio: 40mm‑400mm multiple specifications available</li>
                <li>• DC / AC / EC power supply options, long‑life brush‑less motor</li>
                <li>• High airflow & low‑noise operation</li>
                <li>• IP‑rated waterproof, dust‑proof and anti‑corrosion customized models</li>
                <li>• Full global certifications: UL, TUV, CE, CCC, RoHS</li>
                <li>• Custom‑design service available to match your project requirements</li>
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <Link
              href="/products"
              className="inline-block border border-primary text-primary px-6 py-2.5 rounded hover:bg-primary hover:text-white transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}