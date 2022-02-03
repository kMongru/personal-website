import React from 'react';
import PropTypes from 'prop-types';

//styling
import './card.css';

/* PROPS
bg - background image of each card
title - the name of the project
img - placeholder image on the card
description - brief description of the project
gitHub - link to gitHub
demo - link to demo
logos - an array of different icons (languages and frameworks)
*/

const Card = ({ bg, title, img, description, code, demo, logos, theme }) => {
  return (
    <div className='card_container' style={{ backgroundImage: `url(${bg})` }}>
      <div className='placeholder'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='img_container'>
          <img src={img} alt='img' />
        </div>
      </div>
      <div className='info'>
        <div className='info-description_container'>
          <h3 style={{ color: theme }}>Description</h3>
          <p>{description}</p>
        </div>
        <div className='info-links'>
          <a href={demo} target='_blank' style={{ color: theme }}>
            demo
          </a>
          <a href={code} target='_blank' style={{ color: theme }}>
            code
          </a>
        </div>
        <div className='info-icons'>
          {logos.map((item, i) => {
            return <span>{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
