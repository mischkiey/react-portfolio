// Components
import ScrollAnimation from 'react-animate-on-scroll';
import MuiDivider from '@mui/material/Divider';

// Styles
import './styles.css';

export default function Divider({enableScrollAnimation}: {enableScrollAnimation?: boolean}) {

  if (enableScrollAnimation) {
    return (
      <ScrollAnimation
        animateIn="grow"
        animateOnce={true}
        animateOut="shrink"
        duration={2}
        offset={300}
        style={{gridColumn: '1 / -1'}}
      >
        <MuiDivider
          sx={{border: 1}}
        />
      </ScrollAnimation>
    );
  }

  return (
    <MuiDivider
      sx={{
        border: 1,
        gridColumn: '1 / -1',
      }}
    />
  );
}