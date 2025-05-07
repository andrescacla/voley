import { useContext } from "react"
import { DataContext } from "../context/data/DataContext"

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext debe usarse dentro de un DataProvider')
  }
  return context
}