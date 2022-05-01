// import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Homepage from './pages/homepage';
import Login from './pages/login';
import Gamepage from './pages/gamepage';
import Signup from './pages/signup';

// import { Box, Link, Image } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'

// import chessboardPattern from './assets/chessboard-pattern-light.png';  
// import "@fontsource/bungee"

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

export default function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <div id='app'>
            <Gamepage/>
          </div>
          <Footer />
        </div>
      </Router>
  )
};