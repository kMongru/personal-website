import React from 'react';
import PropTypes from 'prop-types';
import './projects.css';

import { Card } from '../../components/index';

//images
import bulb from '../../assets/Light Bulb.svg';

import bg_yellow from '../../assets/bg_yellow.svg';
import bg_green from '../../assets/bg_green.svg';
import bg_red from '../../assets/bg_red.svg';

import mobile from '../../assets/Mobile Phone.svg';
import maze from '../../assets/Maze.svg';
import trading from '../../assets/Trading.svg';

const Projects = (props) => {
  return (
    <div>
      <div className='projects-title'>
        <h2>My Favourite Projects</h2>
        <img src={bulb} alt='light-bulb' />
      </div>
      <div className='projects-card_container'>
        <Card
          bg={bg_yellow}
          title='Information Collection Tool'
          img={mobile}
          tools={['React', 'Javascript']}
        />
        <Card
          bg={bg_green}
          title='Path Finding Visualization'
          img={maze}
          tools={['React', 'Javascript']}
        />
        <Card
          bg={bg_red}
          title='Trading Algorithum'
          img={trading}
          tools={['React', 'Javascript']}
        />
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
