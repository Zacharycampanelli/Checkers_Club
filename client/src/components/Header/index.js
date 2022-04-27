import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link to="/">
          <h1>Checkers_Club</h1>
        </Link>

        <nav className="">
        {Auth.loggedIn() ? (
            <>
            
              <a href="/" onClick={logout}>
                Logout
              </a>
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

const logout = event => {
  event.preventDefault();
  Auth.logout();
};

export default Header;