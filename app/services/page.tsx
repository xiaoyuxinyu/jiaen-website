import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { services } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services | Jiaen New Energy',
  description: 'Professional new energy engineering services including solar PV, energy storage, EV charging and electromechanical contracting.'
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="What We Offer"
          title="Our Professional Services"
          description="We provide full-cycle new energy engineering solutions for global commercial and industrial clients, covering design, construction, installation, commissioning and long-term maintenance."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-background p-8 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p >
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}