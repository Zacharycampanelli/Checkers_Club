import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


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


ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}/>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  // </React.StrictMode>


