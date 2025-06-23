import { FC } from 'react'

interface CategoryCardProps {
  title: string
  image: string
  className?: string
}

const CategoryCard: FC<CategoryCardProps> = ({ title, image, className = '' }) => {
  return (
    <div className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-900 ${className}`}>
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-indigo-200 transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-2">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-indigo-100 bg-indigo-600/90 rounded-full">
            Explore
          </span>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard