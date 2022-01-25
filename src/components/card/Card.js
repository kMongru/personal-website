import React from 'react';
import PropTypes from 'prop-types';

//styling
import './card.css';

const Card = (props) => {
  return (
    <div className='card_container'>
      <div>
        <h1>SOME TEXT</h1>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
