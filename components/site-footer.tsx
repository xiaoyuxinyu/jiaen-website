import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">JIAEN</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Shenzhen Jiaen Electromechanical New Energy Co., Ltd. One-stop clean
              energy solutions for industrial and commercial clients worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Solar PV Systems</li>
              <li>Energy Storage</li>
              <li>EV Charging Stations</li>
              <li>Electromechanical Engineering</li>
              <li>O&amp;M Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:JiaEn888@outlook.com" className="hover:text-accent">
                  JiaEn888@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="tel:+8675588888888" className="hover:text-accent">+86 188 0256 1787</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Shenzhen Jiaen Electromechanical New Energy Co., Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}
