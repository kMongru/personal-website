import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Toggle from 'react-toggle';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';

//icon imports
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

//styling
import './header.css';
import 'react-toggle/style.css';

const Menu = ({ isOpen }) => {
  return (
    <div className={'menu-' + isOpen}>
      <h3>
        <Link to='/projects'>Projects</Link>
      </h3>
      <h3>
        <Link to='/about'>About Me</Link>
      </h3>
      <h3>
        <Link to='/contact'>Contact</Link>
      </h3>
    </div>
  );
};

const Header = ({ switchTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className='header'>
        <div className='header-links'>
          <div className='header-links-toggle'>
            <label>
              <Switch
                checked={checked}
                onChange={() => {
                  setChecked((prev) => !prev);
                  switchTheme();
                }}
                onColor='#86d3ff'
                onHandleColor='#2693e6'
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                height={20}
                width={48}
                className='react-switch'
                id='material-switch'
              />
            </label>
          </div>

          <div className='header-links-name'>
            <h1>KEEGAN MONGRU</h1>
          </div>

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
