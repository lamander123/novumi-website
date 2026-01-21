import { useI18n } from '@/lib/i18n'

export function DashboardMockup() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-3xl blur-2xl opacity-60" />

      {/* Browser window */}
      <div className="relative bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
        {/* Browser header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 mx-8">
            <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center max-w-xs mx-auto">
              app.novumi.nl
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="flex min-h-[340px]">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50 border-r border-gray-100 p-3 hidden sm:block">
            <div className="flex items-center gap-2 px-2 py-1.5 mb-4">
              <div className="w-6 h-6 rounded bg-gray-900 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">N</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Novumi</span>
            </div>

            <nav className="space-y-0.5">
              <SidebarItem active>{isNL ? 'Screenings' : 'Screenings'}</SidebarItem>
              <SidebarItem>{isNL ? 'Kandidaten' : 'Candidates'}</SidebarItem>
              <SidebarItem>{isNL ? 'Rapporten' : 'Reports'}</SidebarItem>
              <SidebarItem>{isNL ? 'Instellingen' : 'Settings'}</SidebarItem>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">
                {isNL ? 'Actieve screenings' : 'Active screenings'}
              </h2>
              <div className="px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                + {isNL ? 'Nieuw' : 'New'}
              </div>
            </div>

            {/* Screening cards */}
            <div className="space-y-2">
              <ScreeningCard
                name="Emma de Vries"
                role={isNL ? 'Senior Ontwikkelaar' : 'Senior Developer'}
                status="in_progress"
                progress={75}
                tasks={[
                  { name: isNL ? 'Werkervaring' : 'Employment', done: true },
                  { name: isNL ? 'Opleiding' : 'Education', done: true },
                  { name: isNL ? 'Referenties' : 'References', done: true },
                  { name: 'OSINT', done: false },
                ]}
              />
              <ScreeningCard
                name="Thomas Bakker"
                role={isNL ? 'Financieel Manager' : 'Finance Manager'}
                status="completed"
                progress={100}
                tasks={[
                  { name: isNL ? 'Werkervaring' : 'Employment', done: true },
                  { name: isNL ? 'Opleiding' : 'Education', done: true },
                  { name: isNL ? 'Referenties' : 'References', done: true },
                  { name: 'OSINT', done: true },
                ]}
              />
              <ScreeningCard
                name="Lisa Jansen"
                role={isNL ? 'HR Specialist' : 'HR Specialist'}
                status="pending"
                progress={0}
                tasks={[
                  { name: isNL ? 'Wacht op toestemming' : 'Awaiting consent', done: false },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={`px-2 py-1.5 rounded text-xs font-medium ${
        active
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {children}
    </div>
  )
}

function ScreeningCard({
  name,
  role,
  status,
  progress,
  tasks,
}: {
  name: string
  role: string
  status: 'pending' | 'in_progress' | 'completed'
  progress: number
  tasks: { name: string; done: boolean }[]
}) {
  const statusColors = {
    pending: 'bg-gray-100 text-gray-600',
    in_progress: 'bg-amber-50 text-amber-700',
    completed: 'bg-emerald-50 text-emerald-700',
  }

  const statusLabels = {
    pending: 'Pending',
    in_progress: 'In progress',
    completed: 'Completed',
  }

  return (
    <div className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              status === 'completed' ? 'bg-emerald-500' : 'bg-gray-900'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Task indicators */}
      <div className="flex flex-wrap gap-1">
        {tasks.map((task, i) => (
          <span
            key={i}
            className={`px-1.5 py-0.5 text-[10px] rounded ${
              task.done
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-gray-50 text-gray-400'
            }`}
          >
            {task.done ? '✓' : '○'} {task.name}
          </span>
        ))}
      </div>
    </div>
  )
}
