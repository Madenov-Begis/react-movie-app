import { ReactNode, createContext, useState } from 'react'
import { AuthService } from '../service/auth-service'

interface AuthContextProps {
  isAuth: boolean | undefined
  user: boolean | null
  login: (data: any) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | null>(null)

interface AuthProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProps) => {
  const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)
  const [user, setUser] = useState(null)

  const login = async (data: any) => {
    try {
      const res = await AuthService.login(data)
      setIsAuth(true)
      console.log(res)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuth, login }}>
      {children}
    </AuthContext.Provider>
  )
}
