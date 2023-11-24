import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search'

import styles from './main-layout.module.css'
import { Outlet, Link, NavLink } from 'react-router-dom'

const drawerWidth = 240

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="logo-image" className={styles.logoImage} />
        </Link>
      </Toolbar>

      <div className={styles.navLinks}>
        <NavLink
          to={'/movies'}
          style={{ display: 'inline-block', marginBottom: '5px' }}
        >
          <ListItemButton disableGutters sx={{ px: '24px', py: '8px' }}>
            <LocalMoviesIcon sx={{ mr: '32px' }} />
            <div>Фильмы</div>
          </ListItemButton>
        </NavLink>
        <NavLink to={'/tv-series'} style={{ display: 'inline-block' }}>
          <ListItemButton disableGutters sx={{ px: '24px', py: '8px' }}>
            <GroupWorkIcon sx={{ mr: '32px' }} />
            <div>Сериалы</div>
          </ListItemButton>
        </NavLink>
      </div>
      <div className={styles.profile} style={{ color: 'white' }}>
        <NavLink to={'/search'} style={{ display: 'inline-block' }}>
          <ListItemButton disableGutters sx={{ px: '24px', py: '8px' }}>
            <SearchIcon sx={{ mr: '32px' }} />
            <div>Поиск</div>
          </ListItemButton>
        </NavLink>
        <NavLink to={'/login'} style={{ display: 'inline-block' }}>
          <ListItemButton disableGutters sx={{ px: '24px', py: '8px' }}>
            <LogoutIcon sx={{ mr: '32px' }} />
            <div>Войти</div>
          </ListItemButton>
        </NavLink>
      </div>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'flex', md: 'none' },
          // width: { md: `calc(100% - ${drawerWidth}px)` },
          // ml: { md: `${drawerWidth}px` },
          backgroundColor: '#181c25 ',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <a href="/" className={styles.logo}>
            <img
              src="/logo.png"
              alt="logo-image"
              className={styles.logoImage}
            />
          </a>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#0e121b',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            padding: 'md',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              display: 'flex',
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#181c25',
              color: '#fff',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          flexGrow: 1,
          p: '16px',
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#0E121B',
          color: '#fff',
        }}
      >
        <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />
        <Outlet />
      </Box>
    </Box>
  )
}
