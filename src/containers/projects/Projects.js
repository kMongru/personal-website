import React from 'react';

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
import white_maze from '../../assets/White_Maze.svg';
import white_trading from '../../assets/White_Trading.svg';

const Projects = (props) => {
  return (
    <div className='projects_wrapper'>
      <div className='projects-title'>
        <h2>My Favourite Projects</h2>
        <img src={bulb} alt='light-bulb' />
      </div>
      <div className='projects-card_container'>
        <Card
          bg={bg_yellow}
          theme={'#FDD888'}
          title='Information Collection Tool'
          img={mobile}
          description={
            'A cross-platform mobile application to collect field sample data for the Grbic research team. Replaced the current paper based collection method and leveraged native devices features (Camera & GPS).'
          }
          code={'https://github.com/kMongru/react-native-field-collection-tool'}
          demo={
            'https://drive.google.com/file/d/1OZXzRnDZ1_5AE-RaDja-asI5yj0y6Ibb/view?usp=sharing'
          }
          logos={[
            <DiJavascript1 size={30} />,
            <DiReact size={30} />,
            <FaFigma size={20} />,
            <SiRedux size={20} />,
          ]}
        />
        <Card
          bg={bg_green}
          theme={'#8cdc94'}
          title='Path Finding Visualization'
          img={white_maze}
          description={
            'A cross-platform mobile application to collect field sample data for the Grbic research team.'
          }
          code={''}
          demo={''}
          logos={[
            <DiJavascript1 size={40} />,
            <DiReact size={40} />,
            <FaFigma size={30} />,
            <SiRedux size={30} />,
          ]}
        />
        <Card
          bg={bg_red}
          theme={'#E98C79'}
          title='Trading Algorithm'
          img={white_trading}
          description={
            'A cross-platform mobile application to collect field sample data for the Grbic research team.'
          }
          code={''}
          demo={''}
          logos={[
            <DiJavascript1 size={40} />,
            <DiReact size={40} />,
            <FaFigma size={30} />,
            <SiRedux size={30} />,
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
