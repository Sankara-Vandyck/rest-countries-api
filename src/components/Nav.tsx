import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';
import Toggle from './Toggle';

const Nav = () => {
  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <Link to="/" className="title-link">
        <h1 onClick={handleTitleClick} className="title">
          Where in the world?
        </h1>
      </Link>
      <Toggle />
    </header>
  );
};

export default Nav;
