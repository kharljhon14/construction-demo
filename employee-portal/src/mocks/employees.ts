export type EmployeeRecord = {
  id: string
  name: string
  department: string
  role: string
  status: 'Active' | 'On Leave'
  email: string
  phone: string
  sss: string
  philhealth: string
  pagibig: string
  tin: string
  basePay: number
}

export const employees: EmployeeRecord[] = [
  {
    id: 'EMP-00123',
    name: 'Engr. Paolo Santos',
    department: 'Site Engineering',
    role: 'Site Engineer',
    status: 'Active',
    email: 'paolo.santos@buildcrew.ph',
    phone: '+63 912 345 6789',
    sss: '03-1234567-8',
    philhealth: '12-345678901-2',
    pagibig: '1234-5678-9012',
    tin: '123-456-789-000',
    basePay: 58000,
  },
  {
    id: 'EMP-00451',
    name: 'Miguel Reyes',
    department: 'Project Controls',
    role: 'Cost Engineer',
    status: 'Active',
    email: 'miguel.reyes@buildcrew.ph',
    phone: '+63 917 987 3421',
    sss: '12-7654321-0',
    philhealth: '11-223344556-7',
    pagibig: '2222-3344-5566',
    tin: '189-654-321-000',
    basePay: 78000,
  },
  {
    id: 'EMP-00872',
    name: 'Nina Santos',
    department: 'Safety & QA',
    role: 'Safety Officer',
    status: 'On Leave',
    email: 'nina.santos@buildcrew.ph',
    phone: '+63 905 112 9090',
    sss: '34-0987654-2',
    philhealth: '13-445566778-9',
    pagibig: '4455-6677-8899',
    tin: '144-122-111-000',
    basePay: 54000,
  },
  {
    id: 'EMP-01001',
    name: 'Jessa Lim',
    department: 'Site Operations',
    role: 'Field Supervisor',
    status: 'Active',
    email: 'jessa.lim@buildcrew.ph',
    phone: '+63 923 556 1122',
    sss: '08-5511223-4',
    philhealth: '15-998877665-4',
    pagibig: '7788-9900-1122',
    tin: '165-009-008-000',
    basePay: 64000,
  },
]
