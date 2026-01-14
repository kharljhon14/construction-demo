export const adminKpis = [
  { label: 'Pending Site Requests', value: '14', detail: '+4 this week' },
  { label: 'Budget Used', value: '68%', detail: '₱1.2M of ₱1.8M' },
  { label: 'Inspections Overdue', value: '3', detail: '2 teams overdue' },
  { label: 'Avg Completion %', value: '74%', detail: '+6% vs last month' },
]

export const adminAlerts = [
  {
    title: '3 site requests need immediate review',
    detail: 'Materials payments pending beyond 48 hours.',
  },
  {
    title: 'Weekly site reports overdue',
    detail: '2 reports missing for week ending Jan 12.',
  },
]

export const adminRequests = [
  {
    id: 'REQ-2098',
    employee: 'Engr. Paolo Santos',
    type: 'Payment of Materials',
    amount: '₱42,000',
    date: 'Jan 12, 2026',
    status: 'Pending',
  },
  {
    id: 'REQ-2097',
    employee: 'Miguel Reyes',
    type: 'Equipment Rental',
    amount: '₱18,500',
    date: 'Jan 11, 2026',
    status: 'Pending',
  },
  {
    id: 'REQ-2091',
    employee: 'Nina Santos',
    type: 'Overtime',
    amount: '12 hours',
    date: 'Jan 10, 2026',
    status: 'Approved',
  },
]

export const adminBudgets = [
  {
    id: 'skyline',
    name: 'Skyline Tower',
    location: 'Makati Site A',
    phase: 'Structural',
    manager: 'Engr. Paolo Santos',
    start: 'Dec 02, 2025',
    end: 'Mar 30, 2026',
    budget: 420000,
    spent: 286000,
    tasks: 48,
    spendCategories: [
      { label: 'Materials', value: 162000 },
      { label: 'Labor', value: 84000 },
      { label: 'Equipment', value: 40000 },
    ],
  },
  {
    id: 'harbor',
    name: 'Harbor Residences',
    location: 'BGC Tower 3',
    phase: 'Finishing',
    manager: 'Miguel Reyes',
    start: 'Nov 14, 2025',
    end: 'Feb 20, 2026',
    budget: 520000,
    spent: 372000,
    tasks: 64,
    spendCategories: [
      { label: 'Materials', value: 220000 },
      { label: 'Labor', value: 98000 },
      { label: 'Equipment', value: 54000 },
    ],
  },
  {
    id: 'metro',
    name: 'Metro Warehouse',
    location: 'Cebu Hub',
    phase: 'Planning',
    manager: 'Nina Santos',
    start: 'Jan 06, 2026',
    end: 'May 18, 2026',
    budget: 310000,
    spent: 168000,
    tasks: 36,
    spendCategories: [
      { label: 'Materials', value: 74000 },
      { label: 'Labor', value: 62000 },
      { label: 'Equipment', value: 32000 },
    ],
  },
]

export const adminTransactions = [
  {
    id: 'TR-4001',
    vendor: 'Holcim Philippines',
    date: 'Jan 11, 2026',
    amount: '₱38,000',
    category: 'Materials',
  },
  {
    id: 'TR-3997',
    vendor: 'Pioneer Steel',
    date: 'Jan 10, 2026',
    amount: '₱92,000',
    category: 'Materials',
  },
  {
    id: 'TR-3990',
    vendor: 'LiftPro Rentals',
    date: 'Jan 08, 2026',
    amount: '₱45,500',
    category: 'Equipment',
  },
]

export const adminWeeklyReports = [
  {
    id: 'WR-332',
    employee: 'Engr. Paolo Santos',
    project: 'Skyline Tower',
    week: 'Jan 12, 2026',
    progress: 78,
    status: 'Approved',
    notes:
      'Completed rebar inspection and scheduled concrete pour for Level 3.',
    photos: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d'],
  },
  {
    id: 'WR-328',
    employee: 'Miguel Reyes',
    project: 'Harbor Residences',
    week: 'Jan 12, 2026',
    progress: 61,
    status: 'Pending',
    notes: 'Awaiting elevator vendor confirmation and finishing checklist.',
    photos: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f'],
  },
]

export const adminTeamContribution = [
  { team: 'Site Engineering', members: 6, contribution: '24 tasks' },
  { team: 'Field Operations', members: 14, contribution: '46 tasks' },
  { team: 'Safety & QA', members: 4, contribution: '12 tasks' },
]
