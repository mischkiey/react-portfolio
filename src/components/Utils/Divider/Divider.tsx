// Components
import ScrollAnimation from 'react-animate-on-scroll';
import MuiDivider, { DividerProps as MuiDividerProps } from '@mui/material/Divider';

// Styles
import './styles.css';

export default function Divider({enableScrollAnimation, ...props}: {enableScrollAnimation?: boolean; id?: string} & MuiDividerProps) {

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
          {...props}
        />
      </ScrollAnimation>
    );
  }

  return (
    <MuiDivider
      {...props}
      sx={{gridColumn: '1 / -1'}}
    />
  );
}