export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Next Build - Simple Test
        </h1>
      </header>
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Professional Computer Building Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Custom PCs, Gaming Rigs, and Workstations built to perfection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Gaming PCs
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                High-performance gaming rigs optimized for the latest games.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Workstations
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional workstations for content creation and intensive computing.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
