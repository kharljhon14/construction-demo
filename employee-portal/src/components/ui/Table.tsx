import type {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  wrapperClassName?: string
}

export const Table = ({
  className,
  wrapperClassName,
  children,
  ...props
}: TableProps) => {
  return (
    <div
      className={cn(
        'overflow-x-auto rounded-xl border border-slate-200/80 bg-white shadow-sm',
        wrapperClassName,
      )}
    >
      <table
        className={cn('min-w-full text-left text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

export const TableHead = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn('bg-slate-50 text-xs text-slate-500', className)} {...props} />
)

export const TableBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn('divide-y divide-slate-100', className)} {...props} />
)

export const TableRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn('text-slate-700', className)} {...props} />
)

export const TableHeaderCell = ({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={cn('px-4 py-3 font-semibold', className)} {...props} />
)

export const TableCell = ({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn('px-4 py-3', className)} {...props} />
)
