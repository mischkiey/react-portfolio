// Hooks & Methods
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm } from '@formspree/react';

// Components
import { 
  TextField,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

export default function Contact() {
  const theme = useTheme();
  const isScreenWidthSm = useMediaQuery(theme.breakpoints.down('sm'));

  const formspreeHashId = process.env.REACT_APP_FORMSPREE_HASH_ID || '';
  const [ state, handleSubmit ] = useForm(formspreeHashId);

  if (state.submitting) {
    return <CircularProgress />;
  }

  if (state.succeeded) {
    return (
      <Typography
        align="center"
      >
        Your message was sent!
      </Typography>
    );
  }

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
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="name"
        InputLabelProps={{shrink: true}}
        label="Name"
        name="name"
        variant="standard"
        sx={{
          gridColumn: 1,
          width: '100%',
        }}
      />
      <TextField
        required
        id="email"
        InputLabelProps={{shrink: true}}
        label="Email"
        name="email"
        variant="standard"
        sx={{
          gridColumn: 2,
          width: '100%',
        }}
      />
      <TextField
        required
        id="message"
        InputLabelProps={{shrink: true}}
        label="Message"
        multiline={true}
        name="message"
        rows={10}
        // variant="standard"
        sx={{gridColumn: '1 / span 2'}}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          gridColumn: 1,
          width: '50%',

          '&:hover': {
            backgroundColor: '#b71c1c',
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
}