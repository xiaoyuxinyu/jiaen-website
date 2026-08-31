import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Who We Are"
          title="About Jiaen"
          description="Founded in Shenzhen, Jiaen focuses on new energy electromechanical engineering for industrial and global markets."
        />

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-balance">
                Trusted clean energy systems for global industries
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded in Shenzhen, Jiaen focuses on new energy electromechanical engineering. Our professional team has rich experience in global new energy projects.
                </p>
                <p>
                  We adhere to reliable quality and long‑term cooperation, helping customers achieve energy saving and carbon reduction goals.
                </p>
              </div>
              <div className="mt-8 rounded-md border border-accent/30 bg-accent/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Our Mission
                </p>
                <p className="mt-2 text-lg font-medium text-primary text-balance">
                  Deliver trusted clean energy systems for global industries.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
              <Image
                src="/images/project-solar.png"
                alt="Rooftop solar installation delivered by Jiaen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}