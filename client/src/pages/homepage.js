import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import Auth from '../utils/auth';
import Login from './login';
import Signup from './signup';
import { Text, Button, ButtonGroup, Image, Stack, Link } from '@chakra-ui/react';
import checkerpieces from '../assets/checkerspieces.png';

const Homepage = () => {
  // const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Stack direction="column" align="center">
        <Text className="title" mb="8vh" color="black" textAlign="center" fontSize="7em">
          Extreme Checkers
        </Text>
        {Auth.loggedIn() ? (
          <>
            <Link
              as={ReachLink}
              to="/game"
              // className="homeGameButton"
            // href="/game"
            color="white"
            >
              START GAME!
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </Stack>
      <Image src={checkerpieces} position="relative" bottom="150" float="right" boxSize="20em" />
    </main>
  );
};

export default Homepage;
