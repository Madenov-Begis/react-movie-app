import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon'

type MenuItem = {
  id: number
  title: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  link: string
}

export const sideBarList: MenuItem[] = [
  {
    id: 1,
    title: 'Фильмы',
    Icon: LocalMoviesIcon,
    link: 'movies',
  },
  {
    id: 2,
    title: 'Сериалы',
    Icon: GroupWorkIcon,
    link: 'tv-series',
  },
]
