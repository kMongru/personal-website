import React from 'react';
import PropTypes from 'prop-types';

//styling
import './button.css';

/*
PROPS
text -> the text inside the button
status -> disabled or enabled 
onClick -> the function called from the button
*/

const Button = ({ text, status = 'enabled', onClick, link }) => {
  return (
    <a href={link} target='_blank'>
      <button
        className='btn'
        onClick={onClick}
        disabled={status == 'disabled' ? true : false}
      >
        {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
