import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { HStack, Text, Button, ButtonGroup, Image, Stack, Box } from '@chakra-ui/react';
import leftStack from '../assets/leftstack.png'
import rightStack from '../assets/rightstack.png'
const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const [addUser, {error}] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {...formState}
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
      <HStack w="100%" spacing='4vw'>
        <Image src={leftStack} />
         <Box className='card' bg="black" w="70vw">
          <Text className='card-header' fontSize="4xl" color="white" bg="red">Sign Up</Text>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit} display="flex" align="center" justify="center">
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <Button className='btn d-block w-100'  justifySelf="center" type='submit'>
                Submit
              </Button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
          </Box>
        <Image src={rightStack} ml={40}/>
       </HStack>
      </div>
    </main>
  );
};

export default Signup;
