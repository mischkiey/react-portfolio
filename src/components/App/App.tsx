// Hooks & Methods
import React from 'react';

// Components
import { 
  AppBar,
  Grid,
  Box,
  Link,
  IconButton,
} from '@mui/material';

// Images & SVGs
import { 
  GitHub,
  Facebook,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

export default function App() {
  return (
   <Grid
    container
    flexDirection="column"
    sx={{
      border: '1px dashed red',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto)', // repeat(2, 1fr)
      minHeight: '100vh',
      padding: '1em',
      rowGap: '1em',
    }}
   >
    <AppBar
      color="inherit"
      sx={{
        border: '1px dashed orange',
        display: 'inherit',
        gridTemplateColumns: 'inherit',
        gridColumn: 1,
        gridRow: 1,
        padding: 'inherit',
      }}
    >
      <Grid
        container
        alignItems="center"
        component="nav"
        sx={{
          border: '1px dashed yellow',
          columnGap: '1em',
          gridColumn: 1,
        }}
      >
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          ABOUT
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          SKILLS
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          PROJECTS
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          CONTACT
        </Link>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          border: '1px dashed yellow',
          columnGap: '1em',
          gridColumn: 2,
        }}
      >
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Grid>
    </AppBar>
  </Grid>
  );
}