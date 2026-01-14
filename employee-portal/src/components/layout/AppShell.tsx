import type { ReactNode } from 'react'
import { Bell, Menu } from 'lucide-react'
import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AvatarMenu } from '../common/AvatarMenu'
import { SearchInput } from '../common/SearchInput'
import { Button } from '../ui/Button'
import { Drawer } from '../ui/Drawer'
import { SidebarNavItem } from './SidebarNavItem'

export type NavItem = {
  label: string
  to: string
  icon: LucideIcon
  accent?: 'orange' | 'teal'
}

type AppShellProps = {
  items: NavItem[]
  children: ReactNode
}

export const AppShell = ({ items, children }: AppShellProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-100 bg-white px-4 py-6 md:flex">
          <div className="mb-8 flex items-center gap-2 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              BC
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">BuildCrew Portal</p>
              <p className="text-xs text-slate-500">Construction ops</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {items.map((item) => (
              <SidebarNavItem key={item.to} {...item} />
            ))}
          </nav>
          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Need help?</p>
            <p className="mt-2">Review site policies or contact the project office.</p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-slate-100 bg-white/90 px-4 py-4 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={18} />
              </Button>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white md:hidden">
                  BC
                </span>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-slate-900">
                    BuildCrew Portal
                  </p>
                  <p className="text-xs text-slate-500">
                    Construction workforce hub
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden w-96 md:block">
              <SearchInput />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm hover:bg-slate-50">
                <Bell size={18} />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-teal-500" />
              </button>
              <AvatarMenu />
            </div>
          </header>
          <div className="px-4 pb-4 md:hidden">
            <SearchInput />
          </div>

          <main className={cn('flex-1 bg-slate-50/60 px-3 py-4 md:px-6 md:py-6')}>
            <div className="app-shell-gradient mx-auto max-w-6xl rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm motion-safe:animate-fade-up md:rounded-3xl md:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        title="Navigation"
        position="left"
        widthClassName="max-w-xs"
      >
        <nav className="flex flex-col gap-1">
          {items.map((item) => (
            <SidebarNavItem key={item.to} {...item} />
          ))}
        </nav>
      </Drawer>
    </div>
  )
}
