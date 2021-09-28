// Components
import { TextField, Button } from '@mui/material'

export default function Contact() {
  return (
    <form
      style={{
        border: '1px solid',
        borderColor: '#e0e0e0',
        borderRadius: '4px',
        columnGap: '3em',
        display: 'grid',
        padding: '3em',
        rowGap: '3em',
        width: '50%',
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