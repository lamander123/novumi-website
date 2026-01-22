import { useI18n } from '@/lib/i18n'
import { CheckCircle, Clock, AlertTriangle, FileText, User, Building, Shield } from 'lucide-react'

export function ProcessMockups() {
  const { language } = useI18n()
  const isNL = language === 'nl'

  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {/* Step 1: Request */}
      <div className="relative">
        <StepIndicator number={1} />
        <MockupCard>
          <MockupHeader title={isNL ? 'Nieuwe screening' : 'New screening'} />
          <div className="p-4 space-y-3">
            {/* Candidate info */}
            <div className="space-y-2">
              <MockupInput
                icon={<User className="w-3.5 h-3.5" />}
                label={isNL ? 'Kandidaat' : 'Candidate'}
                value="Emma de Vries"
              />
              <MockupInput
                icon={<Building className="w-3.5 h-3.5" />}
                label={isNL ? 'Functie' : 'Position'}
                value={isNL ? 'Senior Ontwikkelaar' : 'Senior Developer'}
              />
            </div>

            {/* Screening options */}
            <div className="pt-2">
              <p className="text-[10px] text-gray-500 mb-2">{isNL ? 'Screening type' : 'Screening type'}</p>
              <div className="space-y-1.5">
                <MockupCheckbox checked label={isNL ? 'Werkervaring verificatie' : 'Employment verification'} />
                <MockupCheckbox checked label={isNL ? 'Opleiding verificatie' : 'Education verification'} />
                <MockupCheckbox checked label={isNL ? 'Referentie checks' : 'Reference checks'} />
                <MockupCheckbox checked label={isNL ? 'OSINT analyse' : 'OSINT analysis'} />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <div className="w-full py-2 bg-gray-900 text-white text-xs font-medium rounded text-center">
                {isNL ? 'Aanvraag indienen' : 'Submit request'}
              </div>
            </div>
          </div>
        </MockupCard>
        <StepLabel
          title={isNL ? 'Aanvraag' : 'Request'}
          desc={isNL ? 'Dien een aanvraag in via het portaal' : 'Submit a request via the portal'}
        />
      </div>

      {/* Step 2: Investigation */}
      <div className="relative md:mt-8">
        <StepIndicator number={2} />
        <MockupCard>
          <MockupHeader title={isNL ? 'Verificatie voortgang' : 'Verification progress'} />
          <div className="p-4">
            {/* Progress overview */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-medium text-gray-900">Emma de Vries</p>
                <p className="text-[10px] text-gray-500">3 van 4 taken voltooid</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">75%</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-gray-100 rounded-full mb-4">
              <div className="h-full w-3/4 bg-gray-900 rounded-full" />
            </div>

            {/* Task list */}
            <div className="space-y-2">
              <TaskItem
                status="completed"
                title={isNL ? 'Werkervaring' : 'Employment'}
                detail={isNL ? 'Geverifieerd bij TechCorp B.V.' : 'Verified at TechCorp B.V.'}
              />
              <TaskItem
                status="completed"
                title={isNL ? 'Opleiding' : 'Education'}
                detail={isNL ? 'TU Delft - MSc bevestigd' : 'TU Delft - MSc confirmed'}
              />
              <TaskItem
                status="completed"
                title={isNL ? 'Referenties' : 'References'}
                detail={isNL ? '2/2 positief' : '2/2 positive'}
              />
              <TaskItem
                status="in_progress"
                title={isNL ? 'OSINT analyse' : 'OSINT analysis'}
                detail={isNL ? 'Onderzoek loopt...' : 'Investigation ongoing...'}
              />
            </div>
          </div>
        </MockupCard>
        <StepLabel
          title={isNL ? 'Onderzoek' : 'Investigation'}
          desc={isNL ? 'Verificatie bij primaire bronnen' : 'Verification at primary sources'}
        />
      </div>

      {/* Step 3: Report */}
      <div className="relative md:mt-16">
        <StepIndicator number={3} />
        <MockupCard>
          <MockupHeader title={isNL ? 'Screening rapport' : 'Screening report'} />
          <div className="p-4">
            {/* Report header */}
            <div className="flex items-start justify-between mb-4 pb-3 border-b border-gray-100">
              <div>
                <p className="text-xs font-medium text-gray-900">Emma de Vries</p>
                <p className="text-[10px] text-gray-500">{isNL ? 'Rapport voltooid' : 'Report completed'}</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span className="text-[10px] font-medium text-emerald-700">
                  {isNL ? 'Laag risico' : 'Low risk'}
                </span>
              </div>
            </div>

            {/* Findings summary */}
            <div className="space-y-2 mb-4">
              <FindingRow
                icon={<CheckCircle className="w-3 h-3 text-emerald-500" />}
                label={isNL ? 'Identiteit bevestigd' : 'Identity confirmed'}
              />
              <FindingRow
                icon={<CheckCircle className="w-3 h-3 text-emerald-500" />}
                label={isNL ? 'Werkervaring geverifieerd' : 'Employment verified'}
              />
              <FindingRow
                icon={<CheckCircle className="w-3 h-3 text-emerald-500" />}
                label={isNL ? 'Opleiding geverifieerd' : 'Education verified'}
              />
              <FindingRow
                icon={<AlertTriangle className="w-3 h-3 text-amber-500" />}
                label={isNL ? '1 aandachtspunt gevonden' : '1 attention point found'}
              />
            </div>

            {/* Download button */}
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
              <FileText className="w-4 h-4 text-gray-400" />
              <div className="flex-1">
                <p className="text-[10px] font-medium text-gray-900">rapport_devries.pdf</p>
                <p className="text-[9px] text-gray-500">245 KB</p>
              </div>
              <div className="text-[10px] text-gray-900 font-medium">↓</div>
            </div>
          </div>
        </MockupCard>
        <StepLabel
          title={isNL ? 'Rapport' : 'Report'}
          desc={isNL ? 'Helder rapport binnen 48-72 uur' : 'Clear report within 48-72 hours'}
        />
      </div>
    </div>
  )
}

function StepIndicator({ number }: { number: number }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
        {number}
      </div>
    </div>
  )
}

function StepLabel({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mt-4 text-center">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  )
}

function MockupCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      {children}
    </div>
  )
}

function MockupHeader({ title }: { title: string }) {
  return (
    <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200">
      <p className="text-xs font-medium text-gray-700">{title}</p>
    </div>
  )
}

function MockupInput({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
      <span className="text-gray-400">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] text-gray-400">{label}</p>
        <p className="text-xs text-gray-900 truncate">{value}</p>
      </div>
    </div>
  )
}

function MockupCheckbox({ checked, label }: { checked?: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
        checked ? 'bg-gray-900 border-gray-900' : 'border-gray-300'
      }`}>
        {checked && (
          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-[11px] text-gray-700">{label}</span>
    </div>
  )
}

function TaskItem({ status, title, detail }: { status: 'completed' | 'in_progress' | 'pending'; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-2 p-2 rounded bg-gray-50">
      {status === 'completed' && <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />}
      {status === 'in_progress' && <Clock className="w-4 h-4 text-amber-500 mt-0.5" />}
      {status === 'pending' && <div className="w-4 h-4 rounded-full border-2 border-gray-300 mt-0.5" />}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium text-gray-900">{title}</p>
        <p className="text-[10px] text-gray-500 truncate">{detail}</p>
      </div>
    </div>
  )
}

function FindingRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-[11px] text-gray-700">{label}</span>
    </div>
  )
}
