import { cn } from '../../lib/cn'

type Tab = {
  label: string
  value: string
  badge?: string
}

type TabsProps = {
  tabs: Tab[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const Tabs = ({ tabs, value, onChange, className }: TabsProps) => {
  return (
    <div className={cn('flex w-full flex-wrap gap-2', className)}>
      {tabs.map((tab) => {
        const active = tab.value === value
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn(
              'inline-flex items-center gap-2 rounded-md border px-4 py-1.5 text-sm font-medium transition',
              active
                ? 'border-slate-200 bg-slate-900 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50',
            )}
          >
            {tab.label}
            {tab.badge && (
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs font-semibold',
                  active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700',
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
