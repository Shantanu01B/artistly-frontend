import ArtistForm from "@/components/ArtistForm"
import Navbar from "@/components/Navbar"

export default function OnboardingPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-8 sm:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Join Our Creative Community</h1>
              <p className="text-purple-100 max-w-2xl mx-auto">
                Complete your profile to start getting booked for exciting opportunities
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="px-6 py-8 sm:p-10">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Artist Information
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Please provide your details to create your artist profile
                </p>
              </div>
              <ArtistForm />
            </div>
          </div>

          {/* Progress indicator would go here */}
          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Step 1 of 3
              </p>
              <div className="w-1/2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: '33%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}