import React from 'react';
import PropTypes from 'prop-types';

//styling
import './textCard.css';

const TextCard = ({ icon, title, content }) => {
  return (
    <div className={'text-card_container'}>
      <div className='text-card-header_container'>
        <div className='text-card-header_container-img'>
          <img src={icon} alt='Emoji' />
        </div>
        <h3>{title}</h3>
      </div>
      <div className='text-card-text_container'>
        <p>{content}</p>
      </div>
    </div>
  );
};

TextCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default TextCard;
