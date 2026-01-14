import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'pending' | 'approved' | 'rejected' | 'neutral'

type BadgeProps = {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  pending: 'bg-amber-100 text-amber-700',
  approved: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-rose-100 text-rose-700',
  neutral: 'bg-slate-100 text-slate-700',
}

export const Badge = ({ variant = 'neutral', children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
