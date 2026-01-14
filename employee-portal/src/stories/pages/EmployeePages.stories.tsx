import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import {
  CalendarCheck,
  ClipboardList,
  Clock,
  FileText,
  LayoutDashboard,
  ListChecks,
  KanbanSquare,
  UserCircle,
} from 'lucide-react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AppShell, type NavItem } from '../../components/layout/AppShell'
import { RoleProvider } from '../../context/RoleContext'
import { EmployeeDashboard } from '../../pages/employee/Dashboard'
import { EmployeeProfile } from '../../pages/employee/Profile'
import { EmployeeRequestNew } from '../../pages/employee/RequestNew'
import { EmployeeWeeklyReport } from '../../pages/employee/WeeklyReport'
import { EmployeeStatus } from '../../pages/employee/Status'
import { EmployeeReports } from '../../pages/employee/Reports'
import { EmployeeReportDetail } from '../../pages/employee/ReportDetail'
import { EmployeeProjects } from '../../pages/employee/Projects'
import { EmployeeProjectDetail } from '../../pages/employee/ProjectDetail'
import { EmployeeTimeAttendance } from '../../pages/employee/TimeAttendance'

const employeeNav: NavItem[] = [
  { label: 'Time In & Out', to: '/employee/time', icon: Clock },
  { label: 'Dashboard', to: '/employee/dashboard', icon: LayoutDashboard },
  { label: 'Projects', to: '/employee/projects', icon: KanbanSquare },
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
  { label: 'Track Status', to: '/employee/status', icon: ListChecks },
  { label: 'Site Reports', to: '/employee/reports', icon: FileText },
  { label: 'Update Profile', to: '/employee/profile', icon: UserCircle },
]

const meta: Meta = {
  title: 'Pages/Employee',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const EmployeeShell = ({ path, children }: { path: string; children: ReactNode }) => (
  <MemoryRouter initialEntries={[path]}>
    <RoleProvider>
      <AppShell items={employeeNav}>{children}</AppShell>
    </RoleProvider>
  </MemoryRouter>
)

const EmployeeShellRoute = ({
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
          element={<AppShell items={employeeNav}>{element}</AppShell>}
        />
      </Routes>
    </RoleProvider>
  </MemoryRouter>
)

export const Dashboard: Story = {
  render: () => (
    <EmployeeShell path="/employee/dashboard">
      <EmployeeDashboard />
    </EmployeeShell>
  ),
}

export const UpdateProfile: Story = {
  render: () => (
    <EmployeeShell path="/employee/profile">
      <EmployeeProfile />
    </EmployeeShell>
  ),
}

export const SubmitRequest: Story = {
  render: () => (
    <EmployeeShell path="/employee/requests/new">
      <EmployeeRequestNew />
    </EmployeeShell>
  ),
}

export const WeeklyReport: Story = {
  render: () => (
    <EmployeeShell path="/employee/reports/weekly">
      <EmployeeWeeklyReport />
    </EmployeeShell>
  ),
}

export const TrackStatus: Story = {
  render: () => (
    <EmployeeShell path="/employee/status">
      <EmployeeStatus />
    </EmployeeShell>
  ),
}

export const ViewReports: Story = {
  render: () => (
    <EmployeeShell path="/employee/reports">
      <EmployeeReports />
    </EmployeeShell>
  ),
}

export const ReportDetail: Story = {
  render: () => (
    <EmployeeShellRoute
      initialEntry="/employee/reports/rep-1"
      routePath="/employee/reports/:id"
      element={<EmployeeReportDetail />}
    />
  ),
}

export const Projects: Story = {
  render: () => (
    <EmployeeShell path="/employee/projects">
      <EmployeeProjects />
    </EmployeeShell>
  ),
}

export const ProjectDetail: Story = {
  render: () => (
    <EmployeeShellRoute
      initialEntry="/employee/projects/skyline"
      routePath="/employee/projects/:id"
      element={<EmployeeProjectDetail />}
    />
  ),
}

export const TimeInOut: Story = {
  render: () => (
    <EmployeeShell path="/employee/time">
      <EmployeeTimeAttendance />
    </EmployeeShell>
  ),
}
