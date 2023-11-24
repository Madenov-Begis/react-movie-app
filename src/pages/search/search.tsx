import { Typography } from '@mui/material'
import { SearchForm } from '../../features/search/ui/search-from/search-form'
import { useState } from 'react'
import { SearchItems } from '../../features/search/ui/search-items/search-items'
import { ResponsiveMovie } from '../../features/movies/types/MovieDetail'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchParams] = useSearchParams()

  const page = searchParams.get('page') || 1

  const [currentPage, setCurrentPage] = useState<number>(+page)
  const [films, setFilms] = useState<ResponsiveMovie | null>(null)
  const [isloading, setIsloading] = useState(false)
  const setPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      <Typography color="#d9d9d9" fontSize="28px" fontWeight={700}>
        Поиск
      </Typography>

      <SearchForm
        setFilms={setFilms}
        setIsloading={setIsloading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <SearchItems
        films={films}
        isloading={isloading}
        setPage={setPage}
        currentPage={currentPage}
      />
    </>
  )
}

export default Search
