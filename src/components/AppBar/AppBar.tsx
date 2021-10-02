// Hooks & Methods
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Components
import {
  AppBar as MuiAppBar,
  Grid,
  Button,
} from '@mui/material';
import SocialMedia from '../Utils/SocialMedia';

export default function AppBar() {
  const theme = useTheme();
  const isScreenWidthSm = useMediaQuery(theme.breakpoints.down('sm'));

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
      position="relative"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(auto, 1fr))',
        top: '3em',
      }}
    >
      <Grid
        container
        alignItems="center"
        flexWrap="nowrap"
        component="nav"
        sx={{
          columnGap: '1em',
          ...(isScreenWidthSm && {
            gridColumn: '1 / -1',
            justifyContent: 'center',
          }),
        }}
      >
        {renderNavButtons([
          'about',
          'skills',
          'projects',
          'contact',
        ])}
      </Grid>
      {!isScreenWidthSm && <SocialMedia />}
    </MuiAppBar>
  );
}