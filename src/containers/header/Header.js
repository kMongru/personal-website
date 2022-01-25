import React, { useState } from 'react';
import PropTypes from 'prop-types';

//icon imports
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import toggle from '../../assets/Light Toggle.svg';

//styling
import './header.css';

const Menu = ({ isOpen }) => {
  return (
    <div className={'menu-' + isOpen}>
      <h3>
        <a href='/'>Projects</a>
      </h3>
      <h3>
        <a href='/'>About Me</a>
      </h3>
      <h3>
        <a href='/'>Contact</a>
      </h3>
    </div>
  );
};

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className='header'>
        <div className='header-links'>
          {/*Temp Light Dark Img*/}
          <div className='header-links-toggle'>
            <img src={toggle} alt='toggle' />
          </div>
          {/* Name */}
          <div className='header-links-name'>
            <h1>KEEGAN MONGRU</h1>
          </div>
          {/* Menu Container*/}
          <div className='header-links-container'>
            <Menu isOpen={toggleMenu} />
          </div>
        </div>
        {/* Menu, change to modal here! */}
        <div className='header-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#000'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color='#000'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className='header-menu-modal'>
          <div className='header-menu-modal-container'>
            <Menu isOpen={toggleMenu} />
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {};

export default Header;
