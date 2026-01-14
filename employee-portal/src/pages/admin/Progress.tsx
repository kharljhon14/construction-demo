import { Card } from '../../components/ui/Card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../components/ui/Table'
import { PageHeader } from '../../components/layout/PageHeader'
import { adminBudgets, adminTeamContribution } from '../../mocks/admin'
import { ConstructionPlaceholder } from '../../components/common/ConstructionPlaceholder'

export const AdminProgress = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Project Progress Monitoring"
        description="Charts and team contribution overview."
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card title="Progress Over Time">
          <ConstructionPlaceholder
            className="h-52"
            title="Timeline insight"
            description="Line chart under construction."
          />
        </Card>
        <Card title="Projects Completion">
          <div className="space-y-4">
            {adminBudgets.map((project) => {
              const percentage = Math.round((project.spent / project.budget) * 100)
              return (
                <div key={project.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {project.name}
                    </span>
                    <span className="text-slate-500">{percentage}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      <Card title="Team Contribution">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Team</TableHeaderCell>
              <TableHeaderCell>Members</TableHeaderCell>
              <TableHeaderCell>Contribution</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminTeamContribution.map((team) => (
              <TableRow key={team.team}>
                <TableCell className="font-semibold text-slate-900">
                  {team.team}
                </TableCell>
                <TableCell>{team.members}</TableCell>
                <TableCell>{team.contribution}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
