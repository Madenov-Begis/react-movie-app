import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { http } from '../../../../shared/config/http/http'
import { MovieDetail } from '../../types/MovieDetail'
import { Box, CircularProgress } from '@mui/material'

import styles from './movies-detail.module.css'
import { RecomendCarousel } from '../../../../shared/ui'

export const MoviesDetail = () => {
  const { id } = useParams()

  const [isLoading, setIsloading] = useState(false)

  const [detail, setDetail] = useState<MovieDetail | null>(null)
  const [recomend, setRecomend] = useState([])
  console.log(recomend)

  useEffect(() => {
    setIsloading(true)

    http(`/movie/${id}?language=ru-RuS'`)
      .then(({ data }) => setDetail(data))
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false))

    http(`/movie/${id}/recommendations?language=ru-RUS&page=1`)
      .then(({ data }) => setRecomend(data.results))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <>
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.imageDiv}>
            <img
              src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
              alt="image"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{detail?.title}</div>
            <div className={styles.voteaverage}>
              {Math.floor(detail?.vote_average! * 10) / 10}
            </div>
            <div className={styles.vote_count}>{detail?.vote_count} оценок</div>
            <div className={styles.contentRow}>
              <div className={styles.left}>
                <div>Страна:</div>
                <div>Год:</div>
                <div>Жанр:</div>
                <div>Время</div>
              </div>
              <div className={styles.right}>
                <div>{detail?.production_countries[0].name}</div>
                <div>{detail?.release_date.slice(0, 4)}</div>
                <div>
                  {detail?.genres.map((item) => {
                    return (
                      <span className={styles.genre} key={item.id}>
                        {item?.name}
                      </span>
                    )
                  })}
                </div>
                <div>{detail?.runtime} мин.</div>
              </div>
            </div>

            <div className={styles.desc}>{detail?.overview}</div>
          </div>
        </div>
      )}

      {isLoading && (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size="60px" />
        </Box>
      )}
      <RecomendCarousel type="movies" recomend={recomend} />
    </>
  )
}
