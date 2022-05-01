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
        <Text className="title" color="black" textAlign="center" fontSize="7em">
          Extreme Checkers
        </Text>
        <Button size='xl' mt="20vh" w="30vw" variant="outline" border="10px" borderColor="black">
          Start Game!
        </Button>
      </Stack>
      <Image src={checkerpieces} boxSize="42em" />
    </main>
  );
};

export default Homepage;
