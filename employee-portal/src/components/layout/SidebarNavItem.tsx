import { NavLink } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

type SidebarNavItemProps = {
  to: string
  label: string
  icon: LucideIcon
  accent?: 'orange' | 'teal'
}

export const SidebarNavItem = ({
  to,
  label,
  icon: Icon,
  accent,
}: SidebarNavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition',
          isActive
            ? 'bg-slate-900 text-white'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
          accent === 'orange' ? 'text-orange-600 hover:text-orange-700' : '',
        )
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  )
}
