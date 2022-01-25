import React from 'react';
import PropTypes from 'prop-types';

//styling
import './footer.css';

const Footer = (props) => {
  return (
    <div className='footer_container'>
      <p>
        Keegan Mongru - <a href='/'>LinkedIn</a> - <a href='/'>Github</a> -
        <a href='/'>Email</a>
      </p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
