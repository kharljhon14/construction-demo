import {
  CalendarCheck,
  ClipboardList,
  Clock,
  FileText,
  KanbanSquare,
  LayoutDashboard,
  ListChecks,
  UserCircle,
} from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { AppShell, type NavItem } from '../components/layout/AppShell'

const employeeNav: NavItem[] = [
  {
    label: 'Time In & Out',
    to: '/employee/time',
    icon: Clock,
  },
  {
    label: 'Dashboard',
    to: '/employee/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Projects',
    to: '/employee/projects',
    icon: KanbanSquare,
  },
  {
    label: 'Site Request',
    to: '/employee/requests/new',
    icon: ClipboardList,
    accent: 'orange',
  },
  {
    label: 'Weekly Site Report',
    to: '/employee/reports/weekly',
    icon: CalendarCheck,
  },
  {
    label: 'Track Status',
    to: '/employee/status',
    icon: ListChecks,
  },
  {
    label: 'Site Reports',
    to: '/employee/reports',
    icon: FileText,
  },
  {
    label: 'Update Profile',
    to: '/employee/profile',
    icon: UserCircle,
  },
]

export const EmployeeLayout = () => {
  return (
    <AppShell items={employeeNav}>
      <Outlet />
    </AppShell>
  )
}
