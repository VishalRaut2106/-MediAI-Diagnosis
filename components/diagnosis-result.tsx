import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle2, Info, AlertCircle, Brain, Clock, Utensils, Activity, Shield } from "lucide-react"

interface DiagnosisData {
  disease: string
  explanation: string
  precautions: string[]
  recommendations: string[]
  aiEnhanced?: boolean
  aiExplanation?: string
  severity?: string
  whenToSeekHelp?: string
  lifestyle?: string[]
  diet?: string[]
  duration?: string
  prevention?: string[]
}

const getSeverityColor = (severity?: string) => {
  switch (severity?.toLowerCase()) {
    case "mild": return "text-green-600 dark:text-green-400"
    case "moderate": return "text-amber-600 dark:text-amber-400"
    case "severe": return "text-red-600 dark:text-red-400"
    default: return "text-blue-600 dark:text-blue-400"
  }
}

export function DiagnosisResult({ diagnosis }: { diagnosis: DiagnosisData }) {
  return (
    <div className="space-y-4">
      <Card className="border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <CheckCircle2 className="h-6 w-6" />
            Possible Diagnosis
            {diagnosis.aiEnhanced && (
              <span className="ml-auto flex items-center gap-1 text-sm font-normal bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full">
                <Brain className="h-4 w-4" />
                AI Enhanced ⚡
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-3">{diagnosis.disease}</h2>
            {diagnosis.severity && (
              <div className="mb-3">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Severity: </span>
                <span className={`text-sm font-bold uppercase ${getSeverityColor(diagnosis.severity)}`}>
                  {diagnosis.severity}
                </span>
              </div>
            )}
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{diagnosis.explanation}</p>
          </div>
          
          {diagnosis.aiExplanation && (
            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-purple-900 dark:text-purple-100">AI Medical Analysis</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{diagnosis.aiExplanation}</p>
            </div>
          )}

          {diagnosis.duration && (
            <div className="flex items-center gap-2 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div>
                <span className="font-semibold text-blue-900 dark:text-blue-100">Expected Duration: </span>
                <span className="text-slate-700 dark:text-slate-300">{diagnosis.duration}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-amber-200 dark:border-amber-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
            <AlertTriangle className="h-5 w-5" />
            Important Precautions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {diagnosis.precautions.map((precaution, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                <span className="font-bold text-amber-600 dark:text-amber-400 min-w-fit">{idx + 1}.</span>
                <span>{precaution}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-green-200 dark:border-green-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
            <Info className="h-5 w-5" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {diagnosis.recommendations.map((rec, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {diagnosis.whenToSeekHelp && (
        <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
              <AlertCircle className="h-5 w-5" />
              When to Seek Immediate Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{diagnosis.whenToSeekHelp}</p>
          </CardContent>
        </Card>
      )}

      {diagnosis.lifestyle && diagnosis.lifestyle.length > 0 && (
        <Card className="border-indigo-200 dark:border-indigo-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
              <Activity className="h-5 w-5" />
              Lifestyle Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {diagnosis.lifestyle.map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="text-indigo-600 dark:text-indigo-400">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {diagnosis.diet && diagnosis.diet.length > 0 && (
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
              <Utensils className="h-5 w-5" />
              Dietary Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {diagnosis.diet.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="text-orange-600 dark:text-orange-400">🍽️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {diagnosis.prevention && diagnosis.prevention.length > 0 && (
        <Card className="border-teal-200 dark:border-teal-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-teal-900 dark:text-teal-100">
              <Shield className="h-5 w-5" />
              Prevention Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {diagnosis.prevention.map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="text-teal-600 dark:text-teal-400">🛡️</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

    </div>
  )
}
