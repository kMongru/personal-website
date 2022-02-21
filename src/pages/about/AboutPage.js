import React from 'react';
import PropTypes from 'prop-types';

import wip_animation from '../../assets/wip_animation.gif';
import Wrapper from '../Wrapper';

import './aboutPage.css';

const AboutPage = (props) => {
  return (
    <Wrapper full='full'>
      <div className='about-flex'>
        <h1>The About Page</h1>
        <img src={wip_animation} alt='Work in Progress' />
      </div>
    </Wrapper>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
