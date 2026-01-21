import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'
import { useI18n } from '@/lib/i18n'
import { Check, AlertTriangle, Download, Clock, ChevronRight } from 'lucide-react'

interface PlatformDemoProps {
  className?: string
}

export function PlatformDemo({ className }: PlatformDemoProps) {
  const [step, setStep] = useState(0)
  const { language } = useI18n()

  const isNL = language === 'nl'

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Translations
  const t = {
    newScreening: isNL ? 'Nieuwe screening' : 'New screening',
    resultsIn: isNL ? 'Binnen 48-72 uur resultaat' : 'Results within 48-72 hours',
    candidate: isNL ? 'Kandidaat' : 'Candidate',
    position: isNL ? 'Functie' : 'Position',
    screeningType: isNL ? 'Type screening' : 'Screening type',
    extended: isNL ? 'Uitgebreid' : 'Extended',
    recommended: isNL ? 'Aanbevolen' : 'Recommended',
    startScreening: isNL ? 'Start screening' : 'Start screening',
    inProgress: isNL ? 'In behandeling' : 'In progress',
    progress: isNL ? 'Voortgang' : 'Progress',
    identityVerified: isNL ? 'Identiteit geverifieerd' : 'Identity verified',
    employersContacted: isNL ? 'Werkgevers gecontacteerd' : 'Employers contacted',
    diplomasVerified: isNL ? "Diploma's geverifieerd" : 'Diplomas verified',
    referencesCollected: isNL ? 'Referenties verzameld' : 'References collected',
    compilingReport: isNL ? 'Rapport opstellen' : 'Compiling report',
    screeningReport: isNL ? 'Screeningsrapport' : 'Screening report',
    riskAssessment: isNL ? 'Risicobeoordeling' : 'Risk assessment',
    lowRisk: isNL ? 'Laag risico' : 'Low risk',
    findings: isNL ? 'BEVINDINGEN' : 'FINDINGS',
    finding1: isNL ? 'Identiteit bevestigd via officiële documenten' : 'Identity confirmed via official documents',
    finding2: isNL ? 'Werkervaring bij 3 werkgevers geverifieerd' : 'Employment at 3 employers verified',
    finding3: isNL ? 'HBO diploma Accountancy bevestigd' : 'Bachelor degree Accountancy confirmed',
    finding4: isNL ? '1 referentie niet bereikbaar (zie details)' : '1 reference unreachable (see details)',
    verified: isNL ? 'Geverifieerd' : 'Verified',
    note: isNL ? 'Opmerking' : 'Note',
    issues: isNL ? 'Problemen' : 'Issues',
    request: isNL ? 'Aanvraag' : 'Request',
    status: isNL ? 'Status' : 'Status',
    report: isNL ? 'Rapport' : 'Report',
  }

  const statusSteps = [
    { label: t.identityVerified, done: true },
    { label: t.employersContacted, done: true },
    { label: t.diplomasVerified, done: true },
    { label: t.referencesCollected, done: false, active: true },
    { label: t.compilingReport, done: false },
  ]

  return (
    <div className={cn('relative w-full max-w-lg mx-auto', className)}>
      {/* Browser frame */}
      <div className="bg-neutral-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-neutral-600" />
            <div className="w-3 h-3 rounded-full bg-neutral-600" />
            <div className="w-3 h-3 rounded-full bg-neutral-600" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-neutral-700 rounded-md px-3 py-1 text-xs text-neutral-400 text-center">
              app.novumi.nl
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="bg-white p-4 min-h-[320px]">
          {/* Screen content based on step */}
          <div className="relative">

            {/* Step 0: Quick screening request */}
            <div className={cn(
              'transition-all duration-500',
              step === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            )}>
              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-neutral-900">{t.newScreening}</div>
                <div className="text-sm text-neutral-500">{t.resultsIn}</div>
              </div>

              <div className="space-y-3">
                <div className="bg-neutral-50 rounded-lg p-3">
                  <div className="text-xs text-neutral-500 mb-1">{t.candidate}</div>
                  <div className="font-medium text-neutral-900">Anna Jansen</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3">
                  <div className="text-xs text-neutral-500 mb-1">{t.position}</div>
                  <div className="font-medium text-neutral-900">Financial Controller</div>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3">
                  <div className="text-xs text-neutral-500 mb-1">{t.screeningType}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">{t.extended}</span>
                    <span className="text-xs bg-accent-100 text-accent-700 px-2 py-0.5 rounded-full">{t.recommended}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                {t.startScreening}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Step 1: Status tracking */}
            <div className={cn(
              'transition-all duration-500',
              step === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            )}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-semibold text-neutral-900">Anna Jansen</div>
                  <div className="text-sm text-neutral-500">Financial Controller</div>
                </div>
                <div className="flex items-center gap-2 text-accent-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{t.inProgress}</span>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600">{t.progress}</span>
                  <span className="font-medium text-neutral-900">75%</span>
                </div>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-500 rounded-full w-3/4 transition-all duration-1000" />
                </div>
              </div>

              <div className="space-y-2">
                {statusSteps.map(({ label, done, active }, i) => (
                  <div key={i} className="flex items-center gap-3 py-1.5">
                    <div className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                      done ? 'bg-accent-500' : active ? 'bg-accent-100 border-2 border-accent-500' : 'bg-neutral-200'
                    )}>
                      {done && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className={cn(
                      'text-sm',
                      done ? 'text-neutral-900' : active ? 'text-accent-600 font-medium' : 'text-neutral-400'
                    )}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Report view - THE MAIN EVENT */}
            <div className={cn(
              'transition-all duration-500',
              step === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            )}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-semibold text-neutral-900">{t.screeningReport}</div>
                  <div className="text-xs text-neutral-500">Anna Jansen • Financial Controller</div>
                </div>
                <button className="flex items-center gap-1 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2 py-1 rounded transition-colors">
                  <Download className="w-3 h-3" />
                  PDF
                </button>
              </div>

              {/* Risk indicator - prominent */}
              <div className="bg-accent-50 border border-accent-200 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">{t.riskAssessment}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    <span className="font-semibold text-accent-700">{t.lowRisk}</span>
                  </div>
                </div>
              </div>

              {/* Key findings */}
              <div className="text-xs font-semibold text-neutral-500 mb-2">{t.findings}</div>
              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{t.finding1}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{t.finding2}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{t.finding3}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{t.finding4}</span>
                </div>
              </div>

              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-neutral-50 rounded p-2">
                  <div className="text-lg font-bold text-neutral-900">12</div>
                  <div className="text-xs text-neutral-500">{t.verified}</div>
                </div>
                <div className="bg-neutral-50 rounded p-2">
                  <div className="text-lg font-bold text-amber-500">1</div>
                  <div className="text-xs text-neutral-500">{t.note}</div>
                </div>
                <div className="bg-neutral-50 rounded p-2">
                  <div className="text-lg font-bold text-neutral-900">0</div>
                  <div className="text-xs text-neutral-500">{t.issues}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {[t.request, t.status, t.report].map((label, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={cn(
              'px-3 py-1 text-xs rounded-full transition-all',
              step === i
                ? 'bg-accent-600 text-white'
                : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
