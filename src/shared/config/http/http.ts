import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ0NzIxMWM1NzU4OTc1MGRiNTc3ZmYyODE0MmYyOCIsInN1YiI6IjY1NGE4NTRkMzkxYjljMDEzYmEyZjI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2J-irbFyFqHh7VbwNpFPgsXopyHfEaJ4WvXdM9grTaA',
  },
})
