import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import axios from 'axios'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

const types = [
  {
    id: 'movie',
    title: 'Фильмы',
  },
  {
    id: 'tv',
    title: 'Сериалы',
  },
]

interface IFormInput {
  select: string
  search: string
}

interface SearchFormProps {
  setFilms: Dispatch<SetStateAction<any>>
  setIsloading: Dispatch<SetStateAction<boolean>>
  currentPage: number
  setCurrentPage: (epage: number) => void
}

export const SearchForm = ({
  setFilms,
  setIsloading,
  currentPage,
  setCurrentPage,
}: SearchFormProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchValue = searchParams.get('query') || ''
  const type = searchParams.get('type') || ''

  const { control, handleSubmit } = useForm({
    defaultValues: {
      select: type,
      search: searchValue,
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const query = data.search
    const select = data.select

    setCurrentPage(1)

    setSearchParams({ query: query, type: select, page: String(1) })

    try {
      setIsloading(true)
      const { data: res } = await axios(
        `https://api.themoviedb.org/3/search/${data.select}`,
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ0NzIxMWM1NzU4OTc1MGRiNTc3ZmYyODE0MmYyOCIsInN1YiI6IjY1NGE4NTRkMzkxYjljMDEzYmEyZjI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2J-irbFyFqHh7VbwNpFPgsXopyHfEaJ4WvXdM9grTaA',
          },
          params: {
            include_adult: false,
            language: 'ru-RUS',
            query: data.search,
            page: 1,
          },
        }
      )

      setFilms(res)
    } catch (error) {
      console.log(error)
    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    const getFilms = async () => {
      setSearchParams({
        query: searchValue,
        type: type,
        page: String(currentPage),
      })
      try {
        setIsloading(true)
        const { data: res } = await axios(
          `https://api.themoviedb.org/3/search/${type}`,
          {
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ0NzIxMWM1NzU4OTc1MGRiNTc3ZmYyODE0MmYyOCIsInN1YiI6IjY1NGE4NTRkMzkxYjljMDEzYmEyZjI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2J-irbFyFqHh7VbwNpFPgsXopyHfEaJ4WvXdM9grTaA',
            },
            params: {
              include_adult: false,
              language: 'ru-RUS',
              query: searchValue,
              page: currentPage,
            },
          }
        )
        setFilms(res)
      } catch (error) {
        console.log(error)
      } finally {
        setIsloading(false)
      }
    }
    if (!(searchValue.length == 0 && type.length == 0)) getFilms()
  }, [currentPage])

  return (
    <form
      style={{ marginTop: '30px', marginBottom: '30px' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="select"
            render={({ field: { onChange, value } }) => (
              <FormControl sx={{ minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="filled"
                  fullWidth
                  required
                  label="Тип"
                  size="small"
                  onChange={onChange}
                  value={value}
                >
                  {types.map((item) => {
                    return (
                      <MenuItem value={item.id} key={item.id}>
                        {item.title}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Имя пользователя"
                fullWidth
                required
                variant="filled"
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            size="large"
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            Найти
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
