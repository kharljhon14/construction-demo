export type TaskStatus = 'backlog' | 'in-progress' | 'review' | 'done'

export type ProjectDetail = {
  id: string
  name: string
  client: string
  location: string
  phase: string
  status: 'Active' | 'Planning' | 'On Hold' | 'Completed'
  start: string
  end: string
  progress: number
  contact: {
    name: string
    role: string
    email: string
    phone: string
  }
  description: string
  totalBudget: number
  budgetSpent: number
  documents: Array<{ name: string; type: string }>
  team: string[]
  tasksTotal: number
}

export type Task = {
  id: string
  title: string
  project: string
  status: TaskStatus
  owner: string
  due: string
  priority: 'Low' | 'Medium' | 'High'
  summary: string
  tags: string[]
  checklist: Array<{ label: string; done: boolean }>
  activity: string[]
}

export const tasks: Task[] = [
  {
    id: 'TASK-104',
    title: 'Review structural shop drawings',
    project: 'Skyline Tower',
    status: 'in-progress',
    owner: 'Engr. Paolo Santos',
    due: 'Jan 18',
    priority: 'High',
    summary:
      'Validate drawings against approved plans before steel delivery.',
    tags: ['Structure', 'QA'],
    checklist: [
      { label: 'Cross-check slab elevations', done: true },
      { label: 'Confirm rebar schedule', done: false },
      { label: 'Issue RFI for discrepancies', done: false },
    ],
    activity: ['Drawings received', 'QA review ongoing', 'Pending sign-off'],
  },
  {
    id: 'TASK-110',
    title: 'Materials delivery sequence',
    project: 'Harbor Residences',
    status: 'backlog',
    owner: 'Miguel Reyes',
    due: 'Jan 23',
    priority: 'Medium',
    summary:
      'Confirm delivery windows for cement, steel, and scaffolding.',
    tags: ['Logistics'],
    checklist: [
      { label: 'Finalize vendor schedule', done: false },
      { label: 'Assign unloading crews', done: false },
      { label: 'Notify site supervisors', done: false },
    ],
    activity: ['Awaiting vendor confirmations'],
  },
  {
    id: 'TASK-118',
    title: 'Permit compliance checklist',
    project: 'Metro Warehouse',
    status: 'review',
    owner: 'Nina Santos',
    due: 'Jan 16',
    priority: 'High',
    summary:
      'Align safety and environmental requirements with local permits.',
    tags: ['Compliance'],
    checklist: [
      { label: 'Update checklist items', done: true },
      { label: 'Confirm permit dates', done: true },
      { label: 'Share with compliance officer', done: false },
    ],
    activity: ['Checklist updated', 'Compliance review pending'],
  },
  {
    id: 'TASK-122',
    title: 'Concrete pour readiness',
    project: 'Skyline Tower',
    status: 'done',
    owner: 'Engr. Ava Santos',
    due: 'Jan 12',
    priority: 'Low',
    summary:
      'Confirm forms, rebar inspections, and pump schedule.',
    tags: ['Concrete', 'QA'],
    checklist: [
      { label: 'Inspect rebar grid', done: true },
      { label: 'Check formwork alignment', done: true },
      { label: 'Sign pour permit', done: true },
    ],
    activity: ['Pour completed and cured'],
  },
  {
    id: 'TASK-128',
    title: 'Crane maintenance schedule',
    project: 'Harbor Residences',
    status: 'in-progress',
    owner: 'Jessa Lim',
    due: 'Jan 20',
    priority: 'Medium',
    summary:
      'Coordinate crane maintenance with equipment vendor.',
    tags: ['Equipment'],
    checklist: [
      { label: 'Confirm vendor availability', done: true },
      { label: 'Schedule downtime window', done: false },
      { label: 'Notify site team', done: false },
    ],
    activity: ['Vendor confirmed'],
  },
  {
    id: 'TASK-132',
    title: 'Site drainage inspection',
    project: 'Metro Warehouse',
    status: 'backlog',
    owner: 'Miguel Reyes',
    due: 'Jan 28',
    priority: 'Low',
    summary:
      'Inspect drainage lines before earthworks commence.',
    tags: ['Site Prep'],
    checklist: [
      { label: 'Schedule inspection', done: false },
      { label: 'Coordinate with utilities', done: false },
      { label: 'File inspection report', done: false },
    ],
    activity: ['Awaiting site clearance'],
  },
]

export const projectDetails: ProjectDetail[] = [
  {
    id: 'skyline',
    name: 'Skyline Tower',
    client: 'Summit Builders Co.',
    location: 'Makati City',
    phase: 'Structural',
    status: 'Active',
    start: 'Dec 02, 2025',
    end: 'Mar 30, 2026',
    progress: 62,
    contact: {
      name: 'Engr. Lorna Cruz',
      role: 'Project Owner',
      email: 'lorna.cruz@summitbuilders.ph',
      phone: '+63 917 555 8899',
    },
    description:
      'Mixed-use commercial build-out focusing on structural reinforcement and facade updates.',
    totalBudget: 420000,
    budgetSpent: 286000,
    documents: [
      { name: 'Blueprint set v3', type: 'PDF' },
      { name: 'Structural specs', type: 'DOCX' },
      { name: 'Inspection checklist', type: 'PDF' },
    ],
    team: ['Engr. Paolo Santos', 'Jessa Lim', 'Kai Dizon', 'Rina Cruz'],
    tasksTotal: 48,
  },
  {
    id: 'harbor',
    name: 'Harbor Residences',
    client: 'MetroCore Properties',
    location: 'Taguig City',
    phase: 'Finishing',
    status: 'Active',
    start: 'Nov 14, 2025',
    end: 'Feb 20, 2026',
    progress: 74,
    contact: {
      name: 'Engr. Daniel Tan',
      role: 'Site Director',
      email: 'daniel.tan@metrocore.ph',
      phone: '+63 905 332 7788',
    },
    description:
      'Tower fit-out for residential high-rise including interior finishing and utility systems.',
    totalBudget: 520000,
    budgetSpent: 372000,
    documents: [
      { name: 'MEP drawings', type: 'PDF' },
      { name: 'Safety permits', type: 'PDF' },
      { name: 'Subcontractor roster', type: 'XLSX' },
    ],
    team: ['Miguel Reyes', 'Nina Santos', 'Arlo Reyes', 'Bea Santos'],
    tasksTotal: 64,
  },
  {
    id: 'metro',
    name: 'Metro Warehouse',
    client: 'Cebu Harbor Estates',
    location: 'Cebu City',
    phase: 'Planning',
    status: 'Planning',
    start: 'Jan 06, 2026',
    end: 'May 18, 2026',
    progress: 18,
    contact: {
      name: 'Engr. Kyla Reyes',
      role: 'Construction Manager',
      email: 'kyla.reyes@cebuestates.ph',
      phone: '+63 923 665 4411',
    },
    description:
      'Planning phase for a new logistics warehouse with site clearing and permit approvals.',
    totalBudget: 310000,
    budgetSpent: 168000,
    documents: [
      { name: 'Site survey', type: 'PDF' },
      { name: 'Permit tracker', type: 'XLSX' },
      { name: 'Client requirements', type: 'DOCX' },
    ],
    team: ['Nina Santos', 'Engr. Ava Santos', 'Eli Ramos'],
    tasksTotal: 36,
  },
]
