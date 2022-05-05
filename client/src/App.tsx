import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './pages/homepage';
import Login from './pages/login';
import Signup from './pages/signup';
import Chatroom from './pages/chatroom';
import HowTo from './pages/howto';
import Leaderboard from './pages/leaderboard';
import { Box } from '@chakra-ui/react';
import '@fontsource/bungee';
import Gamepage from './pages/gamepage';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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
    <Box
      className="maincontainer"
    >
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/game" element={<Gamepage />} />
                <Route path="/chat" element={<Chatroom />} />
                <Route path="/scores" element={<Leaderboard />} />
                <Route path="/howto" element={<HowTo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </Box>
  );
}
