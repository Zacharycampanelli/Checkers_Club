import React from 'react';
import { Flex, Spacer, Box, Text, Image } from '@chakra-ui/react';
import playCheckers from '../assets/play-checkers.jpeg'

const HowTo = () => {
  return (
    <main>
        <Flex direction="column">
      <Flex direction="row">
        <Box width="100%">
          <Text fontSize='6xl'>Checkers Rules</Text>
          <Text>
            **Game Pieces and Board** Checkers is a board game played between two people on an 8x8 checked board like
            the one shown below. Each player has 12 pieces that are like flat round disks that fit inside each of the
            boxes on the board. The pieces are placed on every other dark square and then staggered by rows, like shown
            on the board.
            <br />
            Each Checkers player has different colored pieces. Sometimes the pieces are black and red or red and white.
            <br /><br />
            **Taking a Turn** Typically the darker color pieces moves first. Each player takes their turn by moving a
            piece. Pieces are always moved diagonally and can be moved in the following ways:
            <br /><br />
              <li>Diagonally in the forward direction (towards the opponent) to the next dark square.</li>
              <li>
                If there is one of the opponent's pieces next to a piece and an empty space on the other side, you jump
                your opponent and remove their piece. You can do multiple jumps if they are lined up in the forward
                direction. *** note: if you have a jump, you have no choice but to take it.
              </li>
       
            <br />
            King Pieces:The last row is called the king row. If you get a piece across the board to the opponent's king
            row, that piece becomes a king. Another piece is placed onto that piece so it is now two pieces high. King
            pieces can move in both directions, forward and backward. Once a piece is kinged, the player must wait until
            the next turn to jump out of the king row.  **Winning the Game** You win the game when the opponent has no
            more pieces or can't move (even if he/she still has pieces). If neither player can move then it is a draw or
            a tie.
          </Text>
        </Box>
        <Box w="100%" mt="20" >
            <Image src={playCheckers} />
        </Box>
        </Flex>
        <br />
        <Flex>
        <Box>
        <Text fontSize="3xl">
        Checkers Strategy and Tips
        </Text>
        <Text>
         
                <li>Sacrifice 1 piece for 2: you can sometimes bait or force the opponent to take one of your pieces enabling you to then take 2 of their pieces.</li>
                <li>Pieces on the sides are valuable because they can't be jumped.</li>
                <li>Don't bunch all your pieces in the middle or you may not be able to move, and then you will lose.</li>
                <li>Try to keep your pieces on the back row or king row for as long as possible, to keep the other player from gaining a king.</li>
                <li>Plan ahead and try to look at every possible move before you take your turn.</li>
                <li>Practice: if you play a lot against a lot of different players, you will get better.</li>
        </Text>
        </Box>
        </Flex>
        <br />
        <Flex>
        <Box>
        <Text fontSize='3xl'>
                Looking to go Pro?
            </Text>
            <Text>
                <li>In official games, five minutes are allowed for each move. In the case where there is only one possible jump available, the player has only one minute in which to make it.</li>
                <li>If the player whose move it is touches a piece that can be played, the player must move that piece or forfeit the game.</li>
                <li>If during 20 moves (10 by each player), only kings have changed position and there appear to be repeating movements, then a referee will step in to determine the winner according to who holds the strongest position.</li>
                <li>It is prohibited to annoy or distract your opponent. This includes making signs or sounds, pointing or hovering over the board with your hands or other body parts, needlessly delaying your moves, blowing smoke in your opponent's face, or appearing at the table dressed in a provocative manner</li>
            </Text>
        </Box>
      </Flex>
      </Flex>
    </main>
  );
};

export default HowTo;
