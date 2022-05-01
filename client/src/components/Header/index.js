import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/">Checkers</Link>

        <nav className="text-center">
          <Link to="/game">Play Checkers</Link>
          <Link to="/chat">Join A Chatroom</Link>
          <Link to="/scores">Leaterboards</Link>
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
      </div>
    </header>
  );
};

export default Header;
