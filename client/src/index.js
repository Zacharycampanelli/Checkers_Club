import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  semanticTokens: {
    colors: {
      white: "#fff",
      black: "#000",
      red: "#c41f12"

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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
