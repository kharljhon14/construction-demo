import { cn } from '../../lib/cn'

export const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={cn('animate-pulse rounded-md bg-slate-200/70', className)}
  />
)

export const SkeletonCard = () => (
  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="mt-4 h-8 w-16" />
    <Skeleton className="mt-4 h-3 w-32" />
  </div>
)

export const SkeletonTable = () => (
  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
    <div className="bg-slate-50 px-4 py-3">
      <Skeleton className="h-3 w-40" />
    </div>
    <div className="space-y-3 px-4 py-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-full" />
      ))}
    </div>
  </div>
)
