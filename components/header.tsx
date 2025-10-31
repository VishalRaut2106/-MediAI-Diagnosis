export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 border-b border-blue-700 dark:border-blue-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">🤖</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              MediAI Diagnosis
            </h1>
            <p className="text-sm text-blue-100">Advanced AI Medical Analysis & Expert System</p>
          </div>
        </div>
      </div>
    </header>
  )
}
