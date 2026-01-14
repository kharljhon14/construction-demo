import { useMemo, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { PageHeader } from '../../components/layout/PageHeader'
import { employees } from '../../mocks/employees'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value)

export const AdminPayslip = () => {
  const [employeeId, setEmployeeId] = useState(employees[0].id)
  const [basePay, setBasePay] = useState(employees[0].basePay)
  const [department, setDepartment] = useState(employees[0].department)
  const [allowances, setAllowances] = useState(4500)
  const [overtime, setOvertime] = useState(1800)
  const [sss, setSss] = useState(900)
  const [philhealth, setPhilhealth] = useState(650)
  const [pagibig, setPagibig] = useState(200)
  const [withholdingTax, setWithholdingTax] = useState(4200)

  const employee = employees.find((item) => item.id === employeeId)
  const handleEmployeeChange = (id: string) => {
    setEmployeeId(id)
    const selected = employees.find((item) => item.id === id)
    if (selected) {
      setBasePay(selected.basePay)
      setDepartment(selected.department)
    }
  }

  const totals = useMemo(() => {
    const gross = basePay + allowances + overtime
    const deductions = sss + philhealth + pagibig + withholdingTax
    return {
      gross,
      deductions,
      net: gross - deductions,
    }
  }, [basePay, allowances, overtime, sss, philhealth, pagibig, withholdingTax])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Payslip Generator"
        description="Generate editable payslips with PH statutory deductions."
        action={<Button>Generate payslip</Button>}
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Crew Member & Pay Details">
          <div className="grid gap-4 md:grid-cols-2">
            <Select
              label="Crew Member"
              value={employeeId}
              onChange={(event) => handleEmployeeChange(event.target.value)}
            >
              {employees.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.id})
                </option>
              ))}
            </Select>
            <Input label="Pay period" placeholder="Jan 1 - Jan 15, 2026" />
            <Input
              label="Base pay (PHP)"
              type="number"
              value={basePay}
              onChange={(event) => setBasePay(Number(event.target.value))}
            />
            <Input
              label="Allowances"
              type="number"
              value={allowances}
              onChange={(event) => setAllowances(Number(event.target.value))}
            />
            <Input
              label="Overtime pay"
              type="number"
              value={overtime}
              onChange={(event) => setOvertime(Number(event.target.value))}
            />
            <Input
              label="Department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            />
          </div>
        </Card>

        <Card title="Preview Summary">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Crew Member</p>
              <p className="text-base font-semibold text-slate-900">{employee?.name}</p>
              <p className="text-xs text-slate-500">{employee?.role}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Gross pay</p>
              <p className="text-xl font-semibold text-slate-900">
                {formatCurrency(totals.gross)}
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-3">
              <p className="text-xs text-slate-500">Total deductions</p>
              <p className="text-xl font-semibold text-slate-900">
                {formatCurrency(totals.deductions)}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
              <p className="text-xs text-emerald-700">Net pay</p>
              <p className="text-2xl font-semibold text-emerald-700">
                {formatCurrency(totals.net)}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card
        title="Government Deductions (Editable)"
        description="Update statutory deductions per payroll period."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="SSS contribution"
            type="number"
            value={sss}
            onChange={(event) => setSss(Number(event.target.value))}
          />
          <Input
            label="PhilHealth contribution"
            type="number"
            value={philhealth}
            onChange={(event) => setPhilhealth(Number(event.target.value))}
          />
          <Input
            label="Pag-IBIG contribution"
            type="number"
            value={pagibig}
            onChange={(event) => setPagibig(Number(event.target.value))}
          />
          <Input
            label="Withholding tax"
            type="number"
            value={withholdingTax}
            onChange={(event) => setWithholdingTax(Number(event.target.value))}
          />
        </div>
        <div className="mt-4 text-xs text-slate-500">
          Edit values based on current PH statutory tables and tax brackets.
        </div>
      </Card>
    </div>
  )
}
