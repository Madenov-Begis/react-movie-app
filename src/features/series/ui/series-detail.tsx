import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import { RecomendCarousel } from '../../../shared/ui'

import styles from './series-detail.module.css'
import { http } from '../../../shared/config/http/http'
import { SeriesDetails } from '../types/Series-Detail'

export const SeriesDetail = () => {
  const { id } = useParams()

  const [isLoading, setIsloading] = useState(false)
  const [recomendLoading, setRecomendIsloading] = useState(false)

  const [detail, setDetail] = useState<SeriesDetails | null>(null)
  const [recomend, setRecomend] = useState([])
  console.log(detail)
  console.log(recomend)

  useEffect(() => {
    setIsloading(true)
    setRecomendIsloading(true)
    http(`/tv/${id}?language=ru-RuS'`)
      .then(({ data }) => setDetail(data))
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false))

    http(`/tv/${id}/recommendations?language=ru-RUS&page=1`)
      .then(({ data }) => setRecomend(data.results))
      .catch((err) => console.log(err))
      .finally(() => setRecomendIsloading(false))
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
            <div className={styles.title}>{detail?.name}</div>
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
                <div>{detail?.last_air_date.slice(0, 4)}</div>
                <div>
                  {detail?.genres.map((item) => {
                    return (
                      <span className={styles.genre} key={item.id}>
                        {item.name}
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

      <RecomendCarousel
        recomendLoading={recomendLoading}
        type="tv-series"
        recomend={recomend}
      />
    </>
  )
}
