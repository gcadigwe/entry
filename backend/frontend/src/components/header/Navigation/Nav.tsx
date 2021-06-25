import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav: FC = () => {
  return (
    <div className="Nav__container">
      <div className="Nav__logo">
        <h1>De-Box</h1>
      </div>
      <div className="Nav__links">
        {/* <Link to="/" className="home">
          Home
        </Link>
        <Link to="/how" className="how-it-works">
          How it works
        </Link> */}
        <Link to="/login" className="log-in">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
