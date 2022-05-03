import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  semanticTokens: {
    colors: {
      white: "#fff",
      black: "#000",
      red: "#c41f12",
      grey: "#9c9c9c"

    }
  },
  components: {
    Button: {
      baseStyle: {
        bg: '',
        color: 'black',
        fontWeight: 'bold',
  
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '320px',
        },
      },
    }
  }
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();

reportWebVitals();

  // </React.StrictMode>


