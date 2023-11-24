import axios from 'axios'
import { http } from '../../../shared/config/http/http'

interface BodyType {
  username: string
  password: string
  request_token: string
}

export const AuthService = {
  getReqToken: async () => {
    const response = await http('authentication/token/new')

    return response
  },

  login: async (body: BodyType) => {
    const response = await axios.post(
      'https://api.themoviedb.org/3/authentication/token/validate_with_login',
      body,
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ0NzIxMWM1NzU4OTc1MGRiNTc3ZmYyODE0MmYyOCIsInN1YiI6IjY1NGE4NTRkMzkxYjljMDEzYmEyZjI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2J-irbFyFqHh7VbwNpFPgsXopyHfEaJ4WvXdM9grTaA',
        },
      }
    )

    return response
  },
}
