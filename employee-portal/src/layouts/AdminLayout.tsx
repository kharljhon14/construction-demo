import {
  BarChart3,
  ClipboardCheck,
  FileSpreadsheet,
  KanbanSquare,
  LayoutDashboard,
  ListChecks,
  NotebookTabs,
  Presentation,
  Receipt,
  UserCircle,
  Users,
  Wallet,
  FileClock,
  HardHat,
} from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { AppShell, type NavItem } from '../components/layout/AppShell'

const adminNav: NavItem[] = [
  {
    label: 'Dashboard',
    to: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Admin Profile',
    to: '/admin/profile',
    icon: UserCircle,
  },
  {
    label: 'Crew Members',
    to: '/admin/employees',
    icon: Users,
  },
  {
    label: 'Projects',
    to: '/admin/projects',
    icon: KanbanSquare,
  },
  {
    label: 'Site Requests',
    to: '/admin/requests',
    icon: ClipboardCheck,
  },
  {
    label: 'Approve/Reject',
    to: '/admin/requests',
    icon: ListChecks,
  },
  {
    label: 'Site Budget Monitoring',
    to: '/admin/budget',
    icon: Wallet,
  },
  {
    label: 'Review Site Reports',
    to: '/admin/weekly-reports',
    icon: FileSpreadsheet,
  },
  {
    label: 'Project Progress Monitoring',
    to: '/admin/progress',
    icon: Presentation,
  },
  {
    label: 'Timesheets',
    to: '/admin/timesheets',
    icon: FileClock,
  },
  {
    label: 'Admin Logs',
    to: '/admin/logs',
    icon: NotebookTabs,
  },
  {
    label: 'Site Contacts',
    to: '/admin/contacts',
    icon: HardHat,
  },
  {
    label: 'Payslip Generator',
    to: '/admin/payslip',
    icon: Receipt,
  },
  {
    label: 'Generate Reports',
    to: '/admin/generate',
    icon: BarChart3,
  },
]

export const AdminLayout = () => {
  return (
    <AppShell items={adminNav}>
      <Outlet />
    </AppShell>
  )
}
