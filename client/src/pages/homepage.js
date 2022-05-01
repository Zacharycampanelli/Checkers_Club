import React from 'react';

import Auth from '../utils/auth';
import Login from './login';
import Signup from './signup';
import { Text, Button, ButtonGroup, Image, Stack } from '@chakra-ui/react';
// import NavBar from '../components/NavBar';
import checkerpieces from '../assets/checkerspieces.png';

const Homepage = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Stack direction="column" align="center">
        {/* <NavBar /> */}
        <Text className="title" mb="8vh" color="black" textAlign="center" fontSize="7em">
          Extreme Checkers
        </Text>
        <Button position="relative" left="10" fontSize='4xl'  w="25vw" h="8vh"  variant="outline" border="10px" borderColor="black">
          START GAME!
        </Button>
      </Stack>
      <Image src={checkerpieces} position="relative"  bottom="150" float="right" boxSize="20em" />
    </main>
  );
};

export default Homepage;
