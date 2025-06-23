'use client'

import { createContext, useContext, useState, ReactNode } from "react"

type FilterState = {
  category: string
  location: string
}

type FilterContextType = {
  filter: FilterState
  setFilter: (value: FilterState) => void
}

const defaultState: FilterContextType = {
  filter: { category: "", location: "" },
  setFilter: () => {},
}

const FilterContext = createContext<FilterContextType>(defaultState)

export const useFilter = () => useContext(FilterContext)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterState>({
    category: "",
    location: "",
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
