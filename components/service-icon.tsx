import { Sun, BatteryCharging, Plug, Wrench, Gauge, type LucideIcon } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  sun: Sun,
  battery: BatteryCharging,
  plug: Plug,
  wrench: Wrench,
  gauge: Gauge,
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sun
  return <Icon className={className} aria-hidden="true" />
}
