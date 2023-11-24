import {
  Alert,
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import Cookies from 'js-cookie'

import { useAuth } from '../hooks/use-auth'
import { useState } from 'react'

interface IFormInput {
  username: string
  password: string
}

export const LoginForm = () => {
  const [isError, setIsError] = useState<string>('')
  const { login } = useAuth()
  console.log(useAuth())

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await login({
        username: data.username,
        password: data.password,
        request_token: Cookies.get('reqToken'),
      })
      console.log(res)
    } catch (error) {
      const err = error as any
      setIsError(err.response.data.status_message)
    }
  }

  return (
    <Box
      sx={{
        maxWidth: '500px',
        m: '0 auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Войти
      </Typography>
      {isError && <Alert severity="error">{isError}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={{
            minLength: 5,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Имя пользователя"
              fullWidth
              required
              margin="normal"
              variant="filled"
              error={errors?.username ? true : false}
              helperText={
                errors?.username
                  ? 'Имя пользователя должно быть мининум 5 символов'
                  : null
              }
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            minLength: 5,
          }}
          render={({ field }) => (
            <TextField
              type="password"
              {...field}
              label="Пароль"
              fullWidth
              margin="normal"
              required
              variant="filled"
              error={errors?.password ? true : false}
              helperText={
                errors?.password
                  ? 'Пароль должна быть мининум 5 символов'
                  : null
              }
            />
          )}
        />

        <Button
          color="primary"
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Войти
        </Button>
      </form>
    </Box>
  )
}
