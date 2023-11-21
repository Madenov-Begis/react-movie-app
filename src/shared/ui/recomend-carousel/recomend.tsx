import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, Grid } from 'swiper/modules'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import styles from './recomend.module.css'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

export const RecomendCarousel = ({ recomend, type, recomendLoading }: any) => {
  return (
    <>
      <div className={styles.recomendFilms}>Похожие Фильмы</div>
      {recomendLoading ? (
        <CircularProgress
          size="50px"
          sx={{ display: 'block', m: '0 auto' }}
        />
      ) : (
        <Swiper
          height={200}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            450: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation, Grid]}
          className="mySwiper"
        >
          {recomend.length > 0 &&
            recomend.map((item: any) => {
              return (
                <SwiperSlide>
                  <Link to={`/${type}/${item.id}`}>
                    <img
                      className={styles.image}
                      src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              )
            })}
        </Swiper>
      )}
    </>
  )
}
