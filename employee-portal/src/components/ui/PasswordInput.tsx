import { Eye, EyeOff } from 'lucide-react'
import type { InputHTMLAttributes } from 'react'
import { useState } from 'react'
import { cn } from '../../lib/cn'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  error?: string
}

export const PasswordInput = ({
  label,
  hint,
  error,
  className,
  ...props
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <label className="flex w-full flex-col gap-1 text-sm text-slate-700">
      {label && <span className="font-medium text-slate-900">{label}</span>}
      <span className="relative">
        <input
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-10 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100',
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
              : '',
            className,
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          aria-label={visible ? 'Hide password' : 'Show password'}
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </span>
      {hint && !error && <span className="text-xs text-slate-500">{hint}</span>}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
