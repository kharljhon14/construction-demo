import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import {
  BarChart3,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutDashboard,
  ListChecks,
  KanbanSquare,
  NotebookTabs,
  Presentation,
  Receipt,
  UserCircle,
  Wallet,
  Users,
  FileClock,
  HardHat,
} from 'lucide-react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AppShell, type NavItem } from '../../components/layout/AppShell'
import { RoleProvider } from '../../context/RoleContext'
import { AdminDashboard } from '../../pages/admin/Dashboard'
import { AdminRequests } from '../../pages/admin/Requests'
import { AdminBudget } from '../../pages/admin/Budget'
import { AdminBudgetDetail } from '../../pages/admin/BudgetDetail'
import { AdminWeeklyReports } from '../../pages/admin/WeeklyReports'
import { AdminProgress } from '../../pages/admin/Progress'
import { AdminGenerate } from '../../pages/admin/Generate'
import { AdminProfile } from '../../pages/admin/Profile'
import { AdminProjects } from '../../pages/admin/Projects'
import { AdminProjectDetail } from '../../pages/admin/ProjectDetail'
import { AdminEmployees } from '../../pages/admin/Employees'
import { AdminPayslip } from '../../pages/admin/Payslip'
import { AdminTimesheets } from '../../pages/admin/Timesheets'
import { AdminTimesheetDetail } from '../../pages/admin/TimesheetDetail'
import { AdminLogs } from '../../pages/admin/Logs'
import { AdminContacts } from '../../pages/admin/Contacts'

const adminNav: NavItem[] = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Admin Profile', to: '/admin/profile', icon: UserCircle },
  { label: 'Projects', to: '/admin/projects', icon: KanbanSquare },
  { label: 'Crew Members', to: '/admin/employees', icon: Users },
  { label: 'Site Requests', to: '/admin/requests', icon: ClipboardCheck },
  { label: 'Approve/Reject', to: '/admin/requests', icon: ListChecks },
  { label: 'Site Budget Monitoring', to: '/admin/budget', icon: Wallet },
  { label: 'Review Site Reports', to: '/admin/weekly-reports', icon: FileSpreadsheet },
  {
    label: 'Project Progress Monitoring',
    to: '/admin/progress',
    icon: Presentation,
  },
  { label: 'Timesheets', to: '/admin/timesheets', icon: FileClock },
  { label: 'Admin Logs', to: '/admin/logs', icon: NotebookTabs },
  { label: 'Site Contacts', to: '/admin/contacts', icon: HardHat },
  { label: 'Payslip Generator', to: '/admin/payslip', icon: Receipt },
  { label: 'Generate Reports', to: '/admin/generate', icon: BarChart3 },
]

const meta: Meta = {
  title: 'Pages/Admin',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const AdminShell = ({ path, children }: { path: string; children: ReactNode }) => (
  <MemoryRouter initialEntries={[path]}>
    <RoleProvider>
      <AppShell items={adminNav}>{children}</AppShell>
    </RoleProvider>
  </MemoryRouter>
)

const AdminShellRoute = ({
  initialEntry,
  routePath,
  element,
}: {
  initialEntry: string
  routePath: string
  element: ReactNode
}) => (
  <MemoryRouter initialEntries={[initialEntry]}>
    <RoleProvider>
      <Routes>
        <Route
          path={routePath}
          element={<AppShell items={adminNav}>{element}</AppShell>}
        />
      </Routes>
    </RoleProvider>
  </MemoryRouter>
)

export const Dashboard: Story = {
  render: () => (
    <AdminShell path="/admin/dashboard">
      <AdminDashboard />
    </AdminShell>
  ),
}

export const ReviewRequests: Story = {
  render: () => (
    <AdminShell path="/admin/requests">
      <AdminRequests />
    </AdminShell>
  ),
}

export const BudgetMonitoring: Story = {
  render: () => (
    <AdminShell path="/admin/budget">
      <AdminBudget />
    </AdminShell>
  ),
}

export const BudgetDetail: Story = {
  render: () => (
    <AdminShellRoute
      initialEntry="/admin/budget/skyline"
      routePath="/admin/budget/:projectId"
      element={<AdminBudgetDetail />}
    />
  ),
}

export const WeeklyReports: Story = {
  render: () => (
    <AdminShell path="/admin/weekly-reports">
      <AdminWeeklyReports />
    </AdminShell>
  ),
}

export const ProgressMonitoring: Story = {
  render: () => (
    <AdminShell path="/admin/progress">
      <AdminProgress />
    </AdminShell>
  ),
}

export const GenerateReports: Story = {
  render: () => (
    <AdminShell path="/admin/generate">
      <AdminGenerate />
    </AdminShell>
  ),
}

export const AdminProfilePage: Story = {
  render: () => (
    <AdminShell path="/admin/profile">
      <AdminProfile />
    </AdminShell>
  ),
}

export const Projects: Story = {
  render: () => (
    <AdminShell path="/admin/projects">
      <AdminProjects />
    </AdminShell>
  ),
}

export const ProjectDetail: Story = {
  render: () => (
    <AdminShellRoute
      initialEntry="/admin/projects/skyline"
      routePath="/admin/projects/:id"
      element={<AdminProjectDetail />}
    />
  ),
}

export const Employees: Story = {
  render: () => (
    <AdminShell path="/admin/employees">
      <AdminEmployees />
    </AdminShell>
  ),
}

export const PayslipGenerator: Story = {
  render: () => (
    <AdminShell path="/admin/payslip">
      <AdminPayslip />
    </AdminShell>
  ),
}

export const Timesheets: Story = {
  render: () => (
    <AdminShell path="/admin/timesheets">
      <AdminTimesheets />
    </AdminShell>
  ),
}

export const TimesheetDetail: Story = {
  render: () => (
    <AdminShellRoute
      initialEntry="/admin/timesheets/TS-2401"
      routePath="/admin/timesheets/:id"
      element={<AdminTimesheetDetail />}
    />
  ),
}

export const AdminLogsPage: Story = {
  render: () => (
    <AdminShell path="/admin/logs">
      <AdminLogs />
    </AdminShell>
  ),
}

export const SiteContacts: Story = {
  render: () => (
    <AdminShell path="/admin/contacts">
      <AdminContacts />
    </AdminShell>
  ),
}
