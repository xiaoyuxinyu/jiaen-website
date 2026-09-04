import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { QuoteCta } from '@/components/quote-cta'
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
                Powering Industry with Clean & Reliable Energy Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
                Dongguan Jiaen focuses on cooling fan, thermal-dissipation components and OEM/ODM custom manufacturing for global industrial customers.
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

        {/* 项目案例板块：标题更新为我们产品服务的项目；卡片仅保留图片 */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Portfolio</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl text-balance">
                  Our Product & Service Projects
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We have delivered hundreds of new‑energy engineering projects across Asia, Southeast Asia and the Middle East, with stable operation and high customer recognition.
                </p>
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
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* 删除全部卡片文字，只留图片 */}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry CTA */}
        <QuoteCta />
      </main>
      <SiteFooter />
    </div>
  )
}