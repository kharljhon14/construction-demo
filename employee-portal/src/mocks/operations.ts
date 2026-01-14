export const timesheets = [
  {
    id: 'TS-2401',
    employee: 'Engr. Paolo Santos',
    role: 'Site Engineer',
    site: 'Skyline Tower',
    week: 'Jan 12 - Jan 18, 2026',
    hours: 46,
    overtime: 6,
    status: 'Submitted',
  },
  {
    id: 'TS-2394',
    employee: 'Jessa Lim',
    role: 'Safety Officer',
    site: 'Harbor Residences',
    week: 'Jan 12 - Jan 18, 2026',
    hours: 42,
    overtime: 2,
    status: 'Pending',
  },
  {
    id: 'TS-2388',
    employee: 'Miguel Reyes',
    role: 'Project Controls',
    site: 'Metro Warehouse',
    week: 'Jan 12 - Jan 18, 2026',
    hours: 40,
    overtime: 0,
    status: 'Approved',
  },
]

export const adminLogs = [
  {
    id: 'LOG-9034',
    action: 'Approved materials payment request SR-204',
    by: 'Engr. Lorna Cruz',
    time: 'Today, 9:32 AM',
    type: 'Approval',
  },
  {
    id: 'LOG-9026',
    action: 'Updated project budget for Skyline Tower',
    by: 'Miguel Reyes',
    time: 'Yesterday, 4:18 PM',
    type: 'Budget',
  },
  {
    id: 'LOG-9019',
    action: 'Issued site safety reminder for Harbor Residences',
    by: 'Jessa Lim',
    time: 'Yesterday, 2:05 PM',
    type: 'Safety',
  },
  {
    id: 'LOG-9014',
    action: 'Generated payslip batch for Jan 1-15',
    by: 'Catherine Dizon',
    time: 'Jan 13, 2026',
    type: 'Payroll',
  },
]

export const contacts = [
  {
    category: 'Hardware Suppliers',
    items: [
      {
        name: 'Pacific Steel & Hardware',
        contact: 'Mark Dela Cruz',
        phone: '+63 917 222 0101',
        email: 'orders@pacificsteel.ph',
        address: 'Mindanao Ave, Quezon City',
        notes: 'Primary steel supplier for Skyline Tower.',
      },
      {
        name: 'Makati Lumber Depot',
        contact: 'Grace Lim',
        phone: '+63 905 770 8899',
        email: 'sales@makatilumber.ph',
        address: 'Evangelista St, Makati City',
        notes: 'Preferred vendor for formworks.',
      },
    ],
  },
  {
    category: 'Equipment Rental',
    items: [
      {
        name: 'LiftPro Rentals',
        contact: 'Joseph Tan',
        phone: '+63 912 334 5522',
        email: 'dispatch@liftpro.ph',
        address: 'C5 Service Rd, Taguig City',
        notes: 'Mobile crane partner.',
      },
      {
        name: 'Metro Scaffolding',
        contact: 'Ana Ramos',
        phone: '+63 923 881 1200',
        email: 'rentals@metroscaffold.ph',
        address: 'Mandaue City, Cebu',
        notes: 'Scaffold and safety rails.',
      },
    ],
  },
  {
    category: 'Utilities & Others',
    items: [
      {
        name: 'PowerGrid Testing',
        contact: 'Ryan Bautista',
        phone: '+63 917 445 3312',
        email: 'support@powergrid.ph',
        address: 'BGC, Taguig City',
        notes: 'Electrical load testing.',
      },
      {
        name: 'Hydra Pump Services',
        contact: 'Mia Santos',
        phone: '+63 905 120 7744',
        email: 'service@hydrapump.ph',
        address: 'Cebu City',
        notes: 'Water pump maintenance.',
      },
    ],
  },
]
