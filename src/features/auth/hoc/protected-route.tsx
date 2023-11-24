import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

interface PropsType {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: PropsType) => {
  const location = useLocation()
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
