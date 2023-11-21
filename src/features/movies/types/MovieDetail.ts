export interface MovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: Collections
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Companies[]
  production_countries: Countries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Languages[]
  status: string
  tagline: string
  title: string
  video: false
  vote_average: number  
  vote_count: number
}

interface Collections {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

interface Genres {
  id: number
  name: string
}

interface Companies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface Countries {
  iso_3166_1: string
  name: string
}
interface Languages {
  english_name: string
  iso_639_1: string
  name: string
}
