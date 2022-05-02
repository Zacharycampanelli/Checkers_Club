import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { HStack, Text, Button, Image, Box } from '@chakra-ui/react';
import leftStack from '../assets/leftstack.png'
import rightStack from '../assets/rightstack.png'
const Signup = () => {
 // set initial form state
 const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
 // set state for form validation
//  const [validated] = useState(false);
 // set state for alert
 const [showAlert, setShowAlert] = useState(false);
 const [addUser, { error }] = useMutation(ADD_USER);;

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...userFormData }, });
      console.log(data)
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
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
                value={userFormData.username}
                onChange={handleInputChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={userFormData.email}
                onChange={handleInputChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={userFormData.password}
                onChange={handleInputChange}
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
