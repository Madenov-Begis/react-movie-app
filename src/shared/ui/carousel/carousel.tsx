import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/autoplay'
import styles from './carousel.module.css'
import { http } from '../../config/http/http'
import { Skeleton } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Carousel = () => {
  const [isloading, setIsloading] = useState(false)
  const [slides, setSlides] = useState([])
  console.log(slides)

  useEffect(() => {
    setIsloading(true)
    http('/movie/popular?language=ru-Ru&page=1')
      .then(({ data }) => {
        setSlides(data.results)
      })
      .catch((err) => console.error('error:' + err))
      .finally(() => setIsloading(false))
  }, [])

  return (
    <>
      {!isloading && (
        <Swiper
          style={{ height: '400px', marginTop: '20px' }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((item: any) => {
            return (
              <SwiperSlide>
                <div className={styles.carouselItem}>
                  <img
                    className={styles.carouselImages}
                    style={{ width: '100%' }}
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                    alt="image"
                  />
                  <div className={styles.title}>{item.title}</div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}

      {isloading && (
        <Skeleton
          variant="rectangular"
          height="400px"
          sx={{ marginTop: '20px' }}
        />
      )}
    </>
  )
}

export default Carousel
