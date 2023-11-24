import { ResponsiveMovie } from '../../../movies/types/MovieDetail'
import { Grid, Skeleton, Pagination } from '@mui/material'

import styles from './search-items.module.css'
import { Link } from 'react-router-dom'
import { CardItem } from '../../../../shared/ui/card-item/card-item'

interface ItemsProps {
  films: ResponsiveMovie | null
  isloading: boolean
  setPage: (event: React.ChangeEvent<unknown>, page: number) => void
  currentPage: number
}

export const SearchItems = ({
  films,
  isloading,
  setPage,
  currentPage,
}: ItemsProps) => {
  const film = films?.results

  return (
    <>
      <Grid container spacing={{ xs: 3 }} sx={{ mt: '40px' }}>
        {!isloading &&
          film?.map((movie: any) => (
            <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={movie.id}>
              <CardItem movie={movie} />
            </Grid>
          ))}

        {isloading &&
          [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((item) => {
            return (
              <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={item}>
                <Skeleton
                  sx={{ mb: '10px' }}
                  variant="rectangular"
                  height={350}
                />
                <Skeleton
                  sx={{ mb: '10px' }}
                  variant="rectangular"
                  height={15}
                />
                <Skeleton variant="rectangular" height={15} />
              </Grid>
            )
          })}
      </Grid>
      {film && (
        <Pagination
          count={films.total_pages}
          color="primary"
          size="large"
          onChange={setPage}
          page={currentPage}
          defaultValue={1}
          sx={{
            display: 'flex',
            justifyContent: ' center',
            margin: '30px',
          }}
        />
      )}
    </>
  )
}
