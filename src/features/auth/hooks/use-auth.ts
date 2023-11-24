import { useContext } from 'react'
import { AuthContext } from '../hoc/AuthProvider'

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('No auth context')
  }
  return context
}
