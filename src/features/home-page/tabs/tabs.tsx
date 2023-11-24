;('')

import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { http } from '../../../shared/config/http/http'
import Grid from '@mui/material/Grid'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import GroupWorkIcon from '@mui/icons-material/GroupWork'

import styles from './tabs.module.css'
import { Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'
import { CardItem } from '../../../shared/ui/card-item/card-item'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function BasicTabs() {
  const [isloading, setIsloading] = useState(false)
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    setIsloading(true)

    http('/trending/movie/week?language=ru-rus')
      .then(({ data }) => {
        setMovies(data.results)
      })
      .catch((err) => console.log(err))

    http('/trending/tv/week?language=ru-rus')
      .then(({ data }) => {
        setSeries(data.results)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false))
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<LocalMoviesIcon />}
            iconPosition="start"
            label="Фильмы"
            {...a11yProps(0)}
          />
          <Tab
            icon={<GroupWorkIcon />}
            iconPosition="start"
            label="Сериалы"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className={styles.row}>
          <div className={styles.lastadded}>Последние загруженные</div>
          <div className={styles.linkTo}>
            <Link to="/movies">смотреть все</Link>
          </div>
        </div>
        <Grid
          container
          spacing={{ xs: 3 }}
          //   columns={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }}
        >
          {!isloading &&
            movies.map((movie: any) => (
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={styles.row}>
          <div className={styles.lastadded}>Последние загруженные</div>
          <div className={styles.linkTo}>
            <Link to="/tv-series">смотреть все</Link>
          </div>
        </div>
        <Grid
          container
          spacing={{ xs: 3 }}
          //   columns={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 12 }}
        >
          {!isloading &&
            series.map((serie: any) => (
              <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={serie.id}>
                <CardItem movie={serie} />
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
      </CustomTabPanel>
    </Box>
  )
}
