import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'

type DrawerProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  position?: 'left' | 'right'
  widthClassName?: string
}

export const Drawer = ({
  open,
  onClose,
  title,
  children,
  position = 'right',
  widthClassName,
}: DrawerProps) => {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-40 flex">
      <button
        className="absolute inset-0 bg-slate-900/40 motion-safe:animate-fade-in"
        onClick={onClose}
        aria-label="Close drawer"
      />
      <div
        className={cn(
          'relative ml-auto h-full w-full max-w-md bg-white shadow-xl motion-safe:animate-fade-up',
          position === 'left' ? 'mr-auto ml-0' : 'ml-auto',
          widthClassName,
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-semibold text-slate-900">
            {title ?? 'Details'}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="h-full overflow-y-auto px-6 py-4">{children}</div>
      </div>
    </div>
  )
}
