import React from 'react';
import { Flex, Spacer, Box, Text } from '@chakra-ui/react';

const HowTo = () => {
  return (
    <main>
      <Flex>
        <Box>
          <Text>Checkers Rules</Text>
          <Text>
            **Game Pieces and Board** Checkers is a board game played between two people on an 8x8 checked board like
            the one shown below. Each player has 12 pieces that are like flat round disks that fit inside each of the
            boxes on the board. The pieces are placed on every other dark square and then staggered by rows, like shown
            on the board.
            <br />
            Each Checkers player has different colored pieces. Sometimes the pieces are black and red or red and white.
            <br />
            **Taking a Turn** Typically the darker color pieces moves first. Each player takes their turn by moving a
            piece. Pieces are always moved diagonally and can be moved in the following ways:
            <ul>
              <li>Diagonally in the forward direction (towards the opponent) to the next dark square.</li>
              <li>
                If there is one of the opponent's pieces next to a piece and an empty space on the other side, you jump
                your opponent and remove their piece. You can do multiple jumps if they are lined up in the forward
                direction. *** note: if you have a jump, you have no choice but to take it.
              </li>
            </ul>
            <br />
            King Pieces:The last row is called the king row. If you get a piece across the board to the opponent's king
            row, that piece becomes a king. Another piece is placed onto that piece so it is now two pieces high. King
            pieces can move in both directions, forward and backward. Once a piece is kinged, the player must wait until
            the next turn to jump out of the king row.  **Winning the Game** You win the game when the opponent has no
            more pieces or can't move (even if he/she still has pieces). If neither player can move then it is a draw or
            a tie.
          </Text>
        </Box>
        <Spacer />
        <Box>
          <p>hi</p>
        </Box>
      </Flex>
    </main>
  );
};

export default HowTo;
