import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { EmployeeLayout } from './layouts/EmployeeLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { EmployeeDashboard } from './pages/employee/Dashboard'
import { EmployeeProfile } from './pages/employee/Profile'
import { EmployeeRequestNew } from './pages/employee/RequestNew'
import { EmployeeWeeklyReport } from './pages/employee/WeeklyReport'
import { EmployeeStatus } from './pages/employee/Status'
import { EmployeeReports } from './pages/employee/Reports'
import { EmployeeReportDetail } from './pages/employee/ReportDetail'
import { EmployeeProjects } from './pages/employee/Projects'
import { EmployeeProjectDetail } from './pages/employee/ProjectDetail'
import { EmployeeTimeAttendance } from './pages/employee/TimeAttendance'
import { AdminDashboard } from './pages/admin/Dashboard'
import { AdminRequests } from './pages/admin/Requests'
import { AdminBudget } from './pages/admin/Budget'
import { AdminBudgetDetail } from './pages/admin/BudgetDetail'
import { AdminWeeklyReports } from './pages/admin/WeeklyReports'
import { AdminProgress } from './pages/admin/Progress'
import { AdminGenerate } from './pages/admin/Generate'
import { AdminProfile } from './pages/admin/Profile'
import { AdminProjects } from './pages/admin/Projects'
import { AdminProjectDetail } from './pages/admin/ProjectDetail'
import { AdminEmployees } from './pages/admin/Employees'
import { AdminPayslip } from './pages/admin/Payslip'
import { AdminTimesheets } from './pages/admin/Timesheets'
import { AdminLogs } from './pages/admin/Logs'
import { AdminContacts } from './pages/admin/Contacts'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="profile" element={<EmployeeProfile />} />
          <Route path="projects" element={<EmployeeProjects />} />
          <Route path="projects/:id" element={<EmployeeProjectDetail />} />
          <Route path="requests/new" element={<EmployeeRequestNew />} />
          <Route path="reports/weekly" element={<EmployeeWeeklyReport />} />
          <Route path="time" element={<EmployeeTimeAttendance />} />
          <Route path="status" element={<EmployeeStatus />} />
          <Route path="reports" element={<EmployeeReports />} />
          <Route path="reports/:id" element={<EmployeeReportDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/:id" element={<AdminProjectDetail />} />
          <Route path="employees" element={<AdminEmployees />} />
          <Route path="requests" element={<AdminRequests />} />
          <Route path="budget" element={<AdminBudget />} />
          <Route path="budget/:projectId" element={<AdminBudgetDetail />} />
          <Route path="weekly-reports" element={<AdminWeeklyReports />} />
          <Route path="progress" element={<AdminProgress />} />
          <Route path="payslip" element={<AdminPayslip />} />
          <Route path="timesheets" element={<AdminTimesheets />} />
          <Route path="logs" element={<AdminLogs />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="generate" element={<AdminGenerate />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
