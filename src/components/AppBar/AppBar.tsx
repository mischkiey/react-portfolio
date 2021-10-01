// Components
import {
  AppBar as MuiAppBar,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import SocialMedia from '../Utils/SocialMedia';

export default function AppBar() {
  function handleScrollIntoView(elementId: string, blockPosition?: ScrollLogicalPosition) {
    document
      ?.getElementById(elementId)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: blockPosition,
        inline: 'center',
      });
  }

  function renderNavButtons(navLinks: string[]) {
    return navLinks.map((navLink, idx) => (
      <Button
        key={idx}
        disableRipple={true}
        variant="text"
        onClick={() => handleScrollIntoView(navLink)}
        sx={{
          fontFamily: 'button.fontFamily',
          fontWeight: 'medium',
          margin: 0,
          minWidth: 'fit-content',
          padding: 0,
          textTransform: 'uppercase',

          '&:hover': {
            backgroundColor: 'transparent',
            color: 'secondary.main',
            fontWeight: 600,
          },
        }}
      >
        {navLink}
      </Button>
    ));
  }

  return (
    <MuiAppBar
      color="transparent"
      elevation={0}
      position="sticky"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        top: '3em',
      }}
    >
      <Grid
        container
        alignItems="center"
        component="nav"
        sx={{columnGap: '1em'}}
      >
        {renderNavButtons([
          'about',
          'skills',
          'projects',
          'contact',
        ])}
      </Grid>
      <SocialMedia />
    </MuiAppBar>
  );
}