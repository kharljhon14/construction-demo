import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  hint?: string
  error?: string
}

export const Textarea = ({
  label,
  hint,
  error,
  className,
  ...props
}: TextareaProps) => {
  return (
    <label className="flex w-full flex-col gap-1 text-sm text-slate-700">
      {label && <span className="font-medium text-slate-900">{label}</span>}
      <textarea
        className={cn(
          'w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500 disabled:shadow-none',
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : '',
          className,
        )}
        {...props}
      />
      {hint && !error && <span className="text-xs text-slate-500">{hint}</span>}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
