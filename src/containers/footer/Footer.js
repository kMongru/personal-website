import React from 'react';
import PropTypes from 'prop-types';

//styling
import './footer.css';

const Footer = (props) => {
  return (
    <div className='footer_container'>
      <p>
        @2022 Keegan Mongru -
        <a href='https://www.linkedin.com/in/keegan-mongru/' target='_blank'>
          LinkedIn
        </a>
        -
        <a href='https://github.com/kMongru' target='_blank'>
          Github
        </a>{' '}
        -<a href='/'>Email</a>
      </p>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
