import React from 'react';
import PropTypes from 'prop-types';

//Styling

//Props

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h2>KEEGAN MONGRU</h2>
      </div>
      <nav className='menu-container'>
        <ul>
          <li>
            <a href='/'>Projects</a>
          </li>
          <li>
            <a href='/'>About Me</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
        <button>CTA-Page</button>
      </nav>
      <div className='header-content-toggle'></div>
    </header>
  );
};

Header.propTypes = {
  centerText: PropTypes.string,
};

export default Header;
