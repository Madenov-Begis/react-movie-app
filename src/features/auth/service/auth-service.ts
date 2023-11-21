import { http } from '../../../shared/config/http/http'

export const AuthService = {
  getReqToken: async () => {
    const response = await http('authentication/token/new')

    return response
  },
}
