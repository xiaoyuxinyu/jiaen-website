import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { projects } from '@/lib/data'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Completed Projects | Jiaen New Energy',
  description: 'Global new energy engineering cases, including solar PV plants, energy storage projects and EV charging stations overseas.'
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Portfolio"
          title="Completed Global Projects"
          description="We have delivered hundreds of new energy engineering projects across Asia, Southeast Asia and the Middle East, with stable operation and high customer recognition."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-lg border overflow-hidden bg-background shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.location}</p >
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p >
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}