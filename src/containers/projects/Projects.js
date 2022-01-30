import React from 'react';
import PropTypes from 'prop-types';

//styling
import './projects.css';

//custom imports
import { Card } from '../../components/index';
import { DiJavascript1, DiReact } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

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
          description={
            'A cross-platform mobile application to collect field sample data for the Grbic research team.'
          }
          gitHub={}
          demo={}
          logos={[
            <DiJavascript1 size={40} />,
            <DiReact size={40} />,
            <FaFigma size={30} />,
            <SiRedux size={30} />,
          ]}
        />
        <Card
          bg={bg_green}
          title='Path Finding Visualization'
          img={maze}
          description={
            'A cross-platform mobile application to collect field sample data for the Grbic research team.'
          }
          gitHub={}
          demo={}
          logos={[
            <DiJavascript1 size={40} />,
            <DiReact size={40} />,
            <FaFigma size={30} />,
            <SiRedux size={30} />,
          ]}
        />
        <Card 
          bg={bg_red} 
          title='Trading Algorithum' 
          img={trading} 
          description={
              'A cross-platform mobile application to collect field sample data for the Grbic research team.'
            }
          gitHub={}
          demo={}
          logos={[
            <DiJavascript1 size={40} />,
            <DiReact size={40} />,
            <FaFigma size={30} />,
            <SiRedux size={30} />,
          ]} />
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
