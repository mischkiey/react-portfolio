// Components
import { Grid, IconButton } from '@mui/material';

// Icons & Images
import { 
  GitHub,
  Facebook,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

export default function SocialMedia() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-end"
      sx={{columnGap: '1em'}}
    >
      <IconButton
        component="a"
        disableRipple={true}
        href="https://www.facebook.com/Mischkiey/"
        sx={{
          '&:hover, &:hover .MuiSvgIcon-root': {
            backgroundColor: 'transparent',
            fill: '#b71c1c',
          },
        }}
      >
        <Facebook />
      </IconButton>
      <IconButton
        component="a"
        disableRipple={true}
        href="https://github.com/mischkiey"
        sx={{
          '&:hover, &:hover .MuiSvgIcon-root': {
            backgroundColor: 'transparent',
            fill: '#b71c1c',
          },
        }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        component="a"
        disableRipple={true}
        href="https://www.instagram.com/mischkiey/"
        sx={{
          '&:hover, &:hover .MuiSvgIcon-root': {
            backgroundColor: 'transparent',
            fill: '#b71c1c',
          },
        }}
      >
        <Instagram />
      </IconButton>
      <IconButton
        component="a"
        disableRipple={true}
        href="https://www.linkedin.com/in/michellecfrancisco/"
        sx={{
          '&:hover, &:hover .MuiSvgIcon-root': {
            backgroundColor: 'transparent',
            fill: '#b71c1c',
          },
        }}
      >
        <LinkedIn />
      </IconButton>
    </Grid>
  );
}