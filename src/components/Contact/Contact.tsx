// Hooks & Methods
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import { TextField, Button } from '@mui/material'

export default function Contact() {
  const theme = useTheme();
  const isScreenWidthSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <form
      style={{
        borderRadius: '4px',
        columnGap: '3em',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        rowGap: '3em',
        width: '75%',

        ...(isScreenWidthSm && {width: '100%'}),
      }}
    >
      <TextField
        required
        id="name"
        label="Name"
        InputLabelProps={{shrink: true}}
        variant="standard"
        sx={{
          gridColumn: 1,
          width: '100%',
        }}
      />
      <TextField
        required
        id="email"
        label="Email"
        InputLabelProps={{shrink: true}}
        variant="standard"
        sx={{
          gridColumn: 2,
          width: '100%',
        }}
      />
      <TextField
        required
        id="message"
        label="Message"
        InputLabelProps={{shrink: true}}
        multiline={true}
        rows={10}
        // variant="standard"
        sx={{gridColumn: '1 / span 2'}}
      />
      <Button
        variant="contained"
        sx={{
          gridColumn: 1,
          width: '50%',
        }}
      >
        Submit
      </Button>
    </form>
  );
}