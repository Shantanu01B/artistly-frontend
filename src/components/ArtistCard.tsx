import React from "react"

interface ArtistProps {
  name: string
  category: string
  location: string
  price: string
}

export default function ArtistCard({
  name,
  category,
  location,
  price,
}: ArtistProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-100 dark:hover:border-indigo-900">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">
              {name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
              {name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                {category}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                {location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {price}
          </span>
          <button className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md transform group-hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}