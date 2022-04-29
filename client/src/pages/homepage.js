import React from 'react';
import Auth from '../utils/auth';
import Login from './login';
import Signup from './signup';
import Board from '../components/Board';

const Homepage = () => {
 
  const loggedIn = Auth.loggedIn();

  return (
    <main>
 <Board />
</main>
  );
};

export default Homepage;
