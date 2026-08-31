import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { QuoteCta } from '@/components/quote-cta'
import { ServiceIcon } from '@/components/service-icon'
import { services, projects, stats } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-brand-navy">
          <Image
            src="/images/hero-energy.png"
            alt="Industrial solar photovoltaic power plant at dusk"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Clean & Reliable Energy ; Reliable Energy
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-5xl">
                Powering Industry with Clean & Reliable Energy Solutons
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                Shenzhen Jiaen Electromechanical New Energy Co., Ltd delivers full-cycle new energy engineering services,
                including solar PV systemss, energy storage integration, EV charging infrastructure and
                electromechanical contracting. 
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  render={<Link href="/contact" className="flex items-center gap-2" />}
                >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  render={<Link href="/services" />}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Our Strengths */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Strengths</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                A trusted partner for global energy projects
              </h2>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background px-6 py-8 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Section 2: Core Services */}
        <section className="bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Core Services</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl text-balance">
                  Full-cycle new energy engineering
                </h2>
              </div>
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
              >
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-accent"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/5 text-primary">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Project Cases */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">Project Cases</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl text-balance">
                  Delivered worldwide, built to last
                </h2>
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
              >
                View all projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-md border border-border bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                      <span>{project.location}</span>
                    </div>
                    <h3 className="mt-2 flex items-center gap-1 text-lg font-semibold text-primary">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Inquiry CTA */}
        <QuoteCta />
      </main>
      {/* Section 5: Footer */}
      <SiteFooter />
    </div>
  )
}