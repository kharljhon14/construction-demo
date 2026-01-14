import { Wrench } from 'lucide-react'
import { cn } from '../../lib/cn'

type ConstructionPlaceholderProps = {
  title?: string
  description?: string
  className?: string
}

export const ConstructionPlaceholder = ({
  title = 'Under construction',
  description = 'We are polishing this view for release.',
  className,
}: ConstructionPlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center text-slate-500',
        className,
      )}
    >
      <span className="rounded-full bg-white p-2 text-blue-600 shadow-sm">
        <Wrench size={18} />
      </span>
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  )
}
