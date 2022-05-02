import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Box } from '@chakra-ui/react';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className=" mb-4 py-2 flex-row align-center">
      <Box className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/">Checkers</Link>

        <nav className="text-center align-text-bottom">
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
    </header>
  );
};

export default Header;
