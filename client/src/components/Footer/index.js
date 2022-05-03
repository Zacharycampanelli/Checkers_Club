import React from "react";
import { Image, Stack, Text, Flex, Link} from '@chakra-ui/react'
import Calendar from '../../assets/calendar.png'
import Email from '../../assets/email.png'
import GitHub from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'


const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container">
        <Flex direction="row"  alignItems='center' justifyContent="space-between">
        <Text fontSize="lg" mr="2vw"  float='left'>
          &copy;{new Date().getFullYear()} &nbsp;
           <br/>Zachary Campanelli &nbsp;
           Joeseph Campbell &nbsp;
           <br />Teresa Campbell &nbsp;
           Tresha Gaye
        </Text> 
        <Flex justifyContent="right">
        {/* <Image src={Calendar} boxSize='5vw' mr="2vw"/> */}
        <Link href="mailto:mail@mail.com"><Image src={Email} boxSize='5vw' mr="2vw"/></Link>
        <Link href="https://github.com"><Image src={GitHub} boxSize='5vw' mr="2vw"/></Link>
        <Link href="https://linkedin.com"><Image src={LinkedIn} boxSize='5vw' /></Link>
        </Flex></Flex>
      </div>
    </footer>
  );
};

export default Footer;
