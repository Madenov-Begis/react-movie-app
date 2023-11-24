import { Link } from 'react-router-dom'

import styles from './card-item.module.css'

export const CardItem = ({ movie }: any) => {
  return (
    <Link to={`/${movie['name'] ? 'tv-series' : 'movies'}/${movie.id}`}>
      <div className={styles.movieCard}>
        <div className={styles.image}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : '/not-found.png'
            }
            alt="image"
          />
        </div>
        <div className={styles.movieTitle}>
          {movie['name'] ? movie.name : movie.title}
        </div>
        <div className={styles.movieYear}>
          {movie['release_date']
            ? movie.release_date?.slice(0, 4)
            : movie.first_air_date?.slice(0, 4)}
        </div>
      </div>
    </Link>
  )
}
