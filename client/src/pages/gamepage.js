import { Link, Text } from '@chakra-ui/react'
import Checkersboard from "../components/Checkersboard";

export default function Gamepage(){
  return (
  <div>
    <Checkersboard/>
    <Text>
      {' '}
      <Link href='./game'>
      Restart Game
      </Link>
    </Text>
  </div>
  )
}