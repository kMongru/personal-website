import React from 'react';
import PropTypes from 'prop-types';
import { DiReact } from 'react-icons/di';

//styling
import './card.css';

/* PROPS
bg - background image of each card
title - the name of the project
img - placeholder image on the card
tools - an array of different languages and frameworks
*/

const Card = ({ bg, title, img, tools }) => {
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
        <h3>some text</h3>
        <DiReact />
        {/* {tools.map((item, i) => {
          import test from '<img src={`react-icons/Di${item}`}'
        })} */}
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
