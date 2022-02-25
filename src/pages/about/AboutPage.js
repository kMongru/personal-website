import React from 'react';

import wip_animation from '../../assets/wip_animation.gif';
import Wrapper from '../Wrapper';
import { Timeline } from '../../components';
import data from '../../data/timeline.json';

import './aboutPage.css';

const AboutPage = (props) => {
  return (
    <Wrapper>
      <div className='about-flex'>
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
};

export default AboutPage;
