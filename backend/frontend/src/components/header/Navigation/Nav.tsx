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
        <Link to="/" className="home">
          Home
        </Link>
        <a href="#" className="how-it-works">
          How it works
        </a>
        <a href="#" className="log-in">
          Log in
        </a>
      </div>
    </div>
  );
};

export default Nav;
