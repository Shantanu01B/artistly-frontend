import Navbar from "@/components/Navbar"
import CategoryCard from "@/components/CategoryCard"
import PageWrapper from "@/components/PageWrapper"

export default function HomePage() {
  const categories = [
    { title: "Singers", image: "/images/singer.jpg" },
    { title: "Dancers", image: "/images/dancer.jpg" },
    { title: "Speakers", image: "/images/speaker.jpg" },
    { title: "DJs", image: "/images/dj.jpg" },
  ]

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Discover Exceptional Talent
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Book top-performing artists for unforgettable experiences
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/artists"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Artists
                </a>
                <a
                  href="#categories"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through our curated collection of talented artists
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, index) => (
              <CategoryCard 
                key={index} 
                title={cat.title} 
                image={cat.image} 
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to book your next event?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients who found their perfect artist through our platform
            </p>
            <a
              href="/artists"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}