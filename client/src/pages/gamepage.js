import { Link, Text, Flex } from '@chakra-ui/react'
import Checkersboard from "../components/Checkersboard";
import StickyNotes from '../components/StickyNotes';

export default function Gamepage(){
  return (
  <Flex>
    <div>
    <Checkersboard/>
    <Text>
      {' '}
      <Link href='./game'>
      Restart Game
      </Link>
    </Text>
    </div>
    <StickyNotes />
  </Flex>
  )
}