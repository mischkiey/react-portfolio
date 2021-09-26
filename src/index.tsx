// Hooks & Methods
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { ThemeProvider } from '@mui/material/styles';
import App from './components/App/App';

// Instances & Variables
import theme from './theme';

// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      theme={theme}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
