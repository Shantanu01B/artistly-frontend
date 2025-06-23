'use client'

import { ThemeProvider } from 'next-themes'
import { FilterProvider } from '@/context/FilterContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <FilterProvider>
        {children}
      </FilterProvider>
    </ThemeProvider>
  )
}
