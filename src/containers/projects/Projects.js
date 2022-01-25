import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

import { Card } from '../../components/index';

//images
import bulb from '../../assets/Light Bulb.svg';

const Projects = (props) => {
  return (
    <div>
      <div className='projects-title'>
        <h2>My Favourite Projects</h2>
        <img src={bulb} alt='light-bulb' />
      </div>
      <div className='projects-card_container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
