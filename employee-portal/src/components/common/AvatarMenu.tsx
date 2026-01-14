import { LogOut, Repeat, UserCircle } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRole } from '../../context/RoleContext'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

export const AvatarMenu = () => {
  const [open, setOpen] = useState(false)
  const { role, setRole } = useRole()
  const navigate = useNavigate()

  const handleSwitch = (nextRole: 'employee' | 'admin') => {
    setRole(nextRole)
    navigate(nextRole === 'admin' ? '/admin/dashboard' : '/employee/dashboard')
    setOpen(false)
  }

  const handleLogout = () => {
    navigate('/login')
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
          PS
        </span>
        <span className="hidden text-left text-xs md:block">
          <span className="block text-slate-900">Engr. Paolo Santos</span>
          <span className="block text-slate-500">
            {role === 'admin' ? 'Site Admin' : 'Site Crew'}
          </span>
        </span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          <div className="border-b border-slate-100 px-3 py-2">
            <p className="text-sm font-semibold text-slate-900">
              Engr. Paolo Santos
            </p>
            <p className="text-xs text-slate-500">paolo.santos@buildcrew.ph</p>
          </div>
          <div className="space-y-1 px-2 py-2">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start',
                role === 'employee' ? 'text-blue-600' : '',
              )}
              onClick={() => handleSwitch('employee')}
            >
              <Repeat size={16} />
              Switch to Crew
            </Button>
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start',
                role === 'admin' ? 'text-blue-600' : '',
              )}
              onClick={() => handleSwitch('admin')}
            >
              <Repeat size={16} />
              Switch to Admin
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <UserCircle size={16} />
              Profile Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-slate-600"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Sign out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
