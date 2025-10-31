"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DiagnosisResult } from "./diagnosis-result"
import { AlertCircle, Loader2 } from "lucide-react"

const SYMPTOMS = [
  { id: "fever", label: "Fever", category: "General" },
  { id: "headache", label: "Headache", category: "General" },
  { id: "cough", label: "Cough", category: "Respiratory" },
  { id: "runny_nose", label: "Runny Nose", category: "Respiratory" },
  { id: "body_pain", label: "Body Pain", category: "General" },
  { id: "chills", label: "Chills", category: "General" },
  { id: "vomiting", label: "Vomiting", category: "Digestive" },
  { id: "stomach_pain", label: "Stomach Pain", category: "Digestive" },
  { id: "excessive_thirst", label: "Excessive Thirst", category: "Metabolic" },
  { id: "frequent_urination", label: "Frequent Urination", category: "Metabolic" },
  { id: "fatigue", label: "Fatigue", category: "General" },
  { id: "itchy_eyes", label: "Itchy Eyes", category: "Allergic" },
  { id: "sore_throat", label: "Sore Throat", category: "Respiratory" },
  { id: "shortness_of_breath", label: "Shortness of Breath", category: "Respiratory" },
  { id: "dizziness", label: "Dizziness", category: "General" },
  { id: "nausea", label: "Nausea", category: "Digestive" },
  { id: "diarrhea", label: "Diarrhea", category: "Digestive" },
  { id: "chest_pain", label: "Chest Pain", category: "Serious" },
]

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

export function DiagnosisForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [diagnosis, setDiagnosis] = useState<DiagnosisData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [useAI, setUseAI] = useState(true)

  const handleSymptomChange = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId) ? prev.filter((id) => id !== symptomId) : [...prev, symptomId],
    )
  }

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      setError("Please select at least one symptom")
      return
    }

    setError(null)
    setLoading(true)

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: selectedSymptoms, useAI }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to get diagnosis. Please try again.")
        return
      }

      setDiagnosis(data)
    } catch (err) {
      setError("Failed to get diagnosis. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedSymptoms([])
    setDiagnosis(null)
    setError(null)
  }

  const toggleAI = () => {
    setUseAI(!useAI)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI-Powered Symptom Checker</CardTitle>
              <CardDescription>
                Select your symptoms and get AI-enhanced medical analysis powered by Gemini
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="ai-toggle" className="text-sm font-medium cursor-pointer">
                AI Enhancement
              </Label>
              <div
                onClick={toggleAI}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  useAI ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    useAI ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Selected: <span className="font-semibold text-blue-600">{selectedSymptoms.length}</span> symptoms
              </p>
              {selectedSymptoms.length > 0 && (
                <button
                  onClick={() => setSelectedSymptoms([])}
                  className="text-sm text-red-600 hover:text-red-700 dark:text-red-400"
                  disabled={loading}
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {SYMPTOMS.map((symptom) => (
                <div
                  key={symptom.id}
                  className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                    selectedSymptoms.includes(symptom.id)
                      ? "bg-blue-50 dark:bg-blue-950 border-blue-300 dark:border-blue-700"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800"
                  }`}
                >
                  <Checkbox
                    id={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onCheckedChange={() => handleSymptomChange(symptom.id)}
                    disabled={loading}
                  />
                  <Label htmlFor={symptom.id} className="cursor-pointer font-normal flex-1">
                    {symptom.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSubmit}
              disabled={loading || selectedSymptoms.length === 0}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {useAI ? "AI Analyzing..." : "Analyzing..."}
                </>
              ) : (
                <>
                  {useAI && "🤖 "}Get AI Diagnosis
                </>
              )}
            </Button>
            {diagnosis && (
              <Button onClick={handleReset} variant="outline">
                Start Over
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {diagnosis && <DiagnosisResult diagnosis={diagnosis} />}
    </div>
  )
}
