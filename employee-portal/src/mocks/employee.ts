export const employeeSummary = [
  {
    label: 'Pending Site Requests',
    value: '3',
    detail: '2 waiting for approval',
    accent: 'orange',
  },
  {
    label: 'Approved',
    value: '12',
    detail: '4 approved this month',
    accent: 'green',
  },
  {
    label: 'Rejected',
    value: '1',
    detail: 'Last rejected 2 weeks ago',
    accent: 'red',
  },
  {
    label: 'Site Reports Submitted',
    value: '9',
    detail: '1 due this Friday',
    accent: 'blue',
  },
]

export const employeeActivity = [
  {
    title: 'Site Request #SR-204',
    description: 'Payment of materials submitted',
    status: 'Pending',
    time: '2 hours ago',
  },
  {
    title: 'Weekly Site Report • Skyline Tower',
    description: 'Progress updated to 78% on facade work',
    status: 'Approved',
    time: 'Yesterday',
  },
  {
    title: 'Petty Cash • Site Fuel',
    description: '₱2,450 submitted for generator fuel',
    status: 'Approved',
    time: 'Jan 12, 2026',
  },
]

export const employeeStatusRequests = [
  {
    id: 'REQ-1043',
    type: 'Payment of Materials',
    submitted: 'Jan 12, 2026',
    status: 'Pending',
    updated: '2 hours ago',
  },
  {
    id: 'REQ-1039',
    type: 'Leave',
    submitted: 'Jan 08, 2026',
    status: 'Approved',
    updated: 'Jan 09, 2026',
  },
  {
    id: 'REQ-1033',
    type: 'Overtime',
    submitted: 'Jan 02, 2026',
    status: 'Rejected',
    updated: 'Jan 03, 2026',
  },
]

export const employeeStatusReports = [
  {
    id: 'REP-223',
    type: 'Weekly Site Report',
    submitted: 'Jan 10, 2026',
    status: 'Approved',
    updated: 'Jan 11, 2026',
  },
  {
    id: 'REP-219',
    type: 'Weekly Site Report',
    submitted: 'Jan 03, 2026',
    status: 'Pending',
    updated: 'Jan 04, 2026',
  },
]

export const employeeReports = [
  {
    id: 'rep-1',
    project: 'Skyline Tower',
    week: 'Jan 12, 2026',
    status: 'Approved',
    progress: 78,
    notes:
      'Completed rebar inspection, cleared safety checklist, and prepared pour schedule.',
    photos: ['https://images.unsplash.com/photo-1545239351-1141bd82e8a6'],
  },
  {
    id: 'rep-2',
    project: 'Harbor Residences',
    week: 'Jan 05, 2026',
    status: 'Pending',
    progress: 62,
    notes: 'Finished drywall installs and waiting on elevator vendor inspection.',
    photos: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f'],
  },
  {
    id: 'rep-3',
    project: 'Metro Warehouse',
    week: 'Dec 29, 2025',
    status: 'Approved',
    progress: 85,
    notes: 'Finished site clearing, verified drainage layout, and approved soil report.',
    photos: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d'],
  },
]
