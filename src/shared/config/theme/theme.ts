import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1200,
      xl: 1500,
    },
  },
})
