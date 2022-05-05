import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Box, Text} from '@chakra-ui/react';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className=" mb-4 py-2 flex-row">
      <Box className="container flex-row justify-space-between-lg " alignContent="end" mb={2}>
      <Link to="/">
      <Text fontSize="3xl" >
        Extreme Checkers
        </Text>
      </Link>

      <Box justifyContent="end" mt={2} >
        <nav>
          {Auth.loggedIn() ? (<>
          <Link to="/game">Play Checkers</Link>
          </>) : (null)}
          <Link to="/chat">Join A Chatroom</Link>
          <Link to="/scores">Leaderboards</Link>
          <Link to="/howto">How To Play</Link>
          {Auth.loggedIn() ? (
            <>
              {/* <Link to="/profile">Me</Link> */}
              <Link to="/" onClick={logout}>
                Logout
                </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
