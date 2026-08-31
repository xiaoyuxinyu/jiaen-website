import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function QuoteCta() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
            Ready to power your business with clean energy?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Tell us about your project and our engineering team will prepare a
            tailored, cost-effective solution for you.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          render={<Link href="/contact" className="flex items-center gap-2" />}
        >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
