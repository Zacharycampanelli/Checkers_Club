import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import Auth from '../utils/auth';
import Login from './login';
import Signup from './signup';
import { Text, Button, ButtonGroup, Image, Stack, Link } from '@chakra-ui/react';
import checkerpieces from '../assets/checkerspieces.png';
import checkerpieces2 from '../assets/checkerspieces2.png';

const Homepage = () => {
  // const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Stack direction="column" align="center">
        <Text className="title" mb="8vh" color="black" textAlign="center" fontSize={{base : "2em", sm: "4em", lg: "7em"}}>
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
            fontSize={{base : "1em", sm: "3em", lg: "4em"}}
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
      <br />
      <Image src={checkerpieces2} position="relative" bottom={{base: "30", sm:"100" ,lg: "150"}} float="left" boxSize={{base: "8em", sm: "14em", lg: "20em"}} />
      <Image src={checkerpieces} position="relative" bottom={{base: "30", sm:"100" ,lg: "150"}} float="right" boxSize={{base: "8em", sm: "14em", lg: "20em"}} />
    </main>
  );
};

export default Homepage;
