import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Contact Us | Jiaen New Energy',
  description: 'Get in touch with Jiaen New Energy for solar PV, energy storage and EV charging engineering projects, WhatsApp & email support available.'
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Get In Touch"
          title="Contact Us"
          description="We provide professional consulting and customized solutions for global new energy engineering projects. Feel free to send us your project requirements."
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            {/* 联系信息板块 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Office</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Add: Shenzhen, Guangdong, China
                </p >
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Email Us</h3>
                <p className="text-muted-foreground">JiaEn888@outlook.com</p >
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                <p className="text-muted-foreground">+86 18802561787</p >
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Working Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 9:00 - 18:00 (GMT+8)</p >
              </div>
            </div>

            {/* 留言表单板块 */}
            <div className="rounded-xl border bg-background p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      placeholder="Your company"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type & Budget</label>
                  <input
                    type="text"
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="PV / Energy Storage / EV Charging, estimated budget"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    placeholder="Detail your project requirements, capacity, location and timeline"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-navy text-white rounded-md py-3 font-medium hover:bg-brand-navy/90 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}