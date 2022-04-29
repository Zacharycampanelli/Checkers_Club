import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './pages/homepage';
import Login from './pages/Login';
import Game from './pages/gamepage';
import Highscore from './pages/highscore';
import Signup from './pages/signup';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="/signup" element={<Signup />} exact />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
