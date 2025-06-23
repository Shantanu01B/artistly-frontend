'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 hover:opacity-90 transition-opacity"
        >
          Artistly
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/artists" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
          >
            Browse Artists
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/onboarding" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
          >
            Onboard Artist
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/dashboard" 
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
          >
            Manager Dashboard
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-6 py-4 space-y-4 border-t border-gray-100 dark:border-gray-800 animate-fade-in">
          <Link 
            href="/artists" 
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Artists
          </Link>
          <Link 
            href="/onboarding" 
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Onboard Artist
          </Link>
          <Link 
            href="/dashboard" 
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Manager Dashboard
          </Link>
        </div>
      )}
    </header>
  )
}