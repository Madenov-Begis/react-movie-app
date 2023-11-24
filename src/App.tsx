// import './App.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import MainLayout from './layouts/main-layout/main-layout.tsx'

import HomePage from './pages/home-page/home-page.tsx'
import { Route, Routes } from 'react-router-dom'
import { Movies, Series } from './pages/index.ts'
import { MoviesDetail } from './features/movies/ui/movie-deatil/movies-detail.tsx'
import { SeriesDetail } from './features/series/ui/series-detail.tsx'
import Login from './pages/auth/login.tsx'
import Search from './pages/search/search.tsx'
import { AuthProvider } from './features/auth/hoc/AuthProvider.tsx'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="search" element={<Search />} />
          <Route path="/movies/:id" element={<MoviesDetail />} />
          <Route path="tv-series" element={<Series />} />
          <Route path="/tv-series/:id" element={<SeriesDetail />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
