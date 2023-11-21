import { TextField } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'

import styles from './search.module.css'

export const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{
            '&.MuiTextField-root': {
              backgroundColor: '#181c25',
            },
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: '10px' }} />,
          }}
        />
      </div>
      <div className={styles.filterIcon}>
        <TuneIcon fontSize="small" />
      </div>
    </div>
  )
}
