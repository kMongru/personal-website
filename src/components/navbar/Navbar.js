import React, { useState } from 'react';
import PropTypes from 'prop-types';

//icon imports
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import toggle from '../../assets/Light Toggle.svg';

//styling
import './navbar.css';

const Menu = () => {
  return (
    <>
      <h3>
        <a href='/'>Projects</a>
      </h3>
      <h3>
        <a href='/'>About Me</a>
      </h3>
      <h3>
        <a href='/'>Contact</a>
      </h3>
    </>
  );
};

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        {/*Temp Light Dark Img*/}
        <div className='navbar-links-toggle'>
          <img src={toggle} alt='toggle' />
        </div>
        {/* Name */}
        <div className='navbar-links-name'>
          <h1>KEEGAN MONGRU</h1>
        </div>
        {/* Menu Container*/}
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      {/* Menu, change to modal here! */}
      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#000'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#000'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbar-menu-modal'>
            <div className='navbar-menu-modal-container'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
