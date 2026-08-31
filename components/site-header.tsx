'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Zap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-primary">JIAEN</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              New Energy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Button
            nativeButton={false}
            className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href="/contact" />}
          >
            Request a Quote
          </Button>
        </nav>

        <div className="inline-flex h-10 w-10 lg:hidden">
          <Button
            nativeButton={true}
            type="button"
            className="h-full w-full items-center justify-center rounded-sm text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-sm px-3 py-3 text-sm font-medium transition-colors',
                    active ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button
              nativeButton={false}
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
              render={<Link href="/contact" onClick={() => setOpen(false)} />}
            >
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}