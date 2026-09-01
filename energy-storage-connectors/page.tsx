'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function EnergyStorageConnectorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero 标题区 */}
        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl font-bold">Energy‑Storage Connectors</h1>
          </div>
        </section>

        {/* 产品详情 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="relative h‑96 w-full min-h‑80">
                <Image
                  src="/images/connector-detail.png"
                  alt="Energy‑Storage Connectors"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text‑2xl font‑bold mb‑4">Product Overview</h2>
                <p className="mb-6 leading‑relaxed text‑gray‑700">
                  High‑current, waterproof and vibration‑resistant energy‑storage connectors, safe and stable connection solutions for battery packs, energy‑storage cabinets, solar stations and EV‑charging systems. UL & CE compliant.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>High‑current load capacity</li>
                  <li>IP67 waterproof & dust‑proof performance</li>
                  <li>Anti‑vibration & shock‑resistant design</li>
                  <li>Quick‑lock plug‑and‑play connection</li>
                  <li>UL, CE certified, safe & reliable</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-3">Application Fields</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Battery energy‑storage systems</li>
                  <li>Industrial energy‑storage cabinets</li>
                  <li>Solar photovoltaic power plants</li>
                  <li>EV charging pile equipment</li>
                  <li>New‑energy industrial power projects</li>
                </ul>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-6 py-3 rounded hover:opacity‑90 transition‑opacity"
                  >
                    Request A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}