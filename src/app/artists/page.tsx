'use client'

import { artists as allArtists } from "@/lib/data"
import ArtistCard from "@/components/ArtistCard"
import Navbar from "@/components/Navbar"
import { useFilter } from "@/context/FilterContext"

export default function ArtistListingPage() {
  const { filter, setFilter } = useFilter()

  const filteredArtists = allArtists.filter((artist) => {
    return (
      (filter.category === "" || artist.category === filter.category) &&
      (filter.location === "" || artist.location === filter.location)
    )
  })

  const uniqueCategories = [...new Set(allArtists.map(a => a.category))]
  const uniqueLocations = [...new Set(allArtists.map(a => a.location))]

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Title */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Discover Extraordinary Artists
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the perfect creative professional for your next project
          </p>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="relative w-full sm:w-auto">
            <select
              className="appearance-none border-2 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-5 pr-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm transition-all cursor-pointer"
              value={filter.category}
              onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              className="appearance-none border-2 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-5 pr-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm transition-all cursor-pointer"
              value={filter.location}
              onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No artists found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your filters to find what you're looking for
            </p>
          </div>
        )}
      </main>
    </>
  )
}