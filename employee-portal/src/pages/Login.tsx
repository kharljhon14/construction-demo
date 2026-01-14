import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tabs } from '../components/ui/Tabs'
import { Input } from '../components/ui/Input'
import { PasswordInput } from '../components/ui/PasswordInput'
import { Button } from '../components/ui/Button'
import { useRole } from '../context/RoleContext'

export const Login = () => {
  const navigate = useNavigate()
  const { role, setRole } = useRole()
  const [localRole, setLocalRole] = useState(role)

  const handleSignIn = () => {
    setRole(localRole)
    navigate(localRole === 'admin' ? '/admin/dashboard' : '/employee/dashboard')
  }

  return (
    <div className="app-shell-gradient flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-100 bg-white p-6 shadow-xl motion-safe:animate-pop sm:p-8">
        <div className="mb-6 text-center">
          <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white">
            BC
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            BuildCrew Portal
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to manage site requests, time logs, and reports.
          </p>
        </div>

        <div className="mb-5">
          <Tabs
            tabs={[
              { label: 'Crew', value: 'employee' },
              { label: 'Site Admin', value: 'admin' },
            ]}
            value={localRole}
            onChange={(value) => setLocalRole(value as 'employee' | 'admin')}
          />
        </div>

        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="you@buildcrew.ph" />
          <PasswordInput label="Password" placeholder="Enter your password" />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-slate-300" />
            Keep me signed in
          </label>
          <button className="text-blue-600 hover:text-blue-700">
            Forgot password?
          </button>
        </div>

        <Button className="mt-6 w-full" onClick={handleSignIn}>
          Sign in
        </Button>

        <p className="mt-6 text-center text-xs text-slate-500">
          Need access? Contact the site office for provisioning.
        </p>
      </div>
    </div>
  )
}
