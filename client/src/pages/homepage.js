import React from 'react';

import Auth from '../utils/auth';
import Login from './login';
import Signup from './signup';
import Board from '../components/Board';
import { Text, Button, ButtonGroup, Image } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import checkerpieces from '../assets/checkerspieces.png'

const Homepage = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {/* <NavBar /> */}
      <Text className="title" textAlign="center" fontSize="7em" >
        Extreme Checkers
      </Text>

       <Image src={checkerpieces} boxSize='42em'/>

       <Button>Start Game!</Button>
    </main>
  );
};

export default Homepage;
