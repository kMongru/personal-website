import React from 'react';

import Wrapper from '../Wrapper';
import { Timeline, TextCard } from '../../components';
import data from '../../data/timeline.json';
import headshot from '../../assets/headshot.JPG';

//styling
import './aboutPage.css';

const AboutPage = () => {
  return (
    <Wrapper>
      <div className='about-row'>
        <div className='about-column'>
          <h3>Welcome!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            proin gravida hendrerit lectus a. Nunc sed augue lacus viverra vitae
            congue eu. Elit at imperdiet dui accumsan sit amet nulla facilisi
            morbi.
          </p>
          <div className='about-row'>
            <TextCard
              title='Languages'
              content='Java
            Javascript
            Python
            C#'
            />
            <TextCard
              title='Tools & Frameworks'
              content='React
            React Native
            Figma
            GitHub'
            />
          </div>
        </div>
        <img src={headshot} alt='headshot' />
      </div>
      <h3>Timeline</h3>
      <div className='timeline_container'>
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
};

export default AboutPage;
