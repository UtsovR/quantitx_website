import type { ReactNode } from 'react'

type SectionLabelProps = { children: ReactNode }

export function SectionLabel({ children }: SectionLabelProps) {
  return <span className="section-label">{children}</span>
}
