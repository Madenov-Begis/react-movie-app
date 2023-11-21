import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import { theme } from './shared/config/index.ts'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyles
        styles={{ a: { textDecoration: 'none', color: 'inherit' } }}
      />
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
