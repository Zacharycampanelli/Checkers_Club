// import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './Components/Header'
import Footer from './Components/Footer';

import Homepage from './pages/homepage';
import Login from './pages/login';
import Game from './pages/gamepage';
// import Highscore from './pages/highscore';
import Signup from './pages/signup';

 import { Box, Link, Image } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'

// import chessboardPattern from './assets/chessboard-pattern-light.png'
// import "@fontsource/bungee"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Box className="maincontainer" 
    // backgroundImage={chessboardPattern}
    >
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />}  />
              {/* <Route path="/game" element={} exact/> */}
              {/* <Route path="/chat" element={} exact/> */}
              {/* <Route path="/scores" element={} exact/> */}
              {/* <Route path="/howto" element={} exact/> */}
              <Route path="/login" element={<Login />}  />
              <Route path="/signup" element={<Signup />}  />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider></Box>
  )
};