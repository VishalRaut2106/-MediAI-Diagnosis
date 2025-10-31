import { DiagnosisForm } from "@/components/diagnosis-form"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <DiagnosisForm />
      </div>
    </main>
  )
}
