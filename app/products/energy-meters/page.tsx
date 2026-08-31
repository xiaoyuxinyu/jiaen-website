'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'

export default function EnergyMetersDetailPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Details"
        title="Industrial & DC Energy Meters"
        description="High‑precision DC energy meters designed for solar PV, battery energy storage and EV‑charging infrastructure worldwide."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 大图：你这张三款直流电表展示图 */}
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm mb-12">
            <Image
              src="/images/dc-meter-detail.jpg"
              alt="DC Energy Meter Series - DJDF2699‑RS, DJDF2699‑M, DJDF2699‑MT"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>

          {/* 参数文字介绍区 */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-5">Product Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our DC energy meter series provides accurate, reliable energy monitoring for solar power plants, battery‑energy‑storage systems, EV‑charging piles and industrial automation projects. All meters support RS485 Modbus‑RTU communication and carry CE certification for global deployment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-5">Key Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Accuracy Class: 0.5S high‑precision measurement</li>
                <li>• Wide DC voltage coverage: 12V‑600V</li>
                <li>• RS485 / Modbus‑RTU communication interface</li>
                <li>• CE certified, suitable for overseas projects</li>
                <li>• DIN‑rail mounting, easy installation</li>
              </ul>
            </div>
          </div>

          {/* 返回产品列表按钮 */}
          <div className="mt-14">
            <Link
              href="/products"
              className="inline-block border border-primary text-primary px-6 py-2.5 rounded hover:bg-primary hover:text-white transition‑all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}