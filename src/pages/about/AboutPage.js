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
        <div className='about-column about-flex-left'>
          <h2>Welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
            proin gravida hendrerit lectus a. Nunc sed augue lacus viverra vitae
            congue eu. Elit at imperdiet dui accumsan sit amet nulla facilisi
            morbi.
          </p>
          <div className='about-row about-textcard'>
            <TextCard
              title='Languages'
              content={
                <ul>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>C#</li>
                </ul>
              }
            />
            <TextCard
              title='Tools & Frameworks'
              content={
                <ul>
                  <li>React</li>
                  <li>React Native</li>
                  <li>GitHub</li>
                  <li>Figma</li>
                </ul>
              }
            />
          </div>
        </div>
        <div className='about-flex-1'>
          <img src={headshot} alt='headshot' />
        </div>
      </div>
      <div className='about-row'>
        <h2>Timeline</h2>
      </div>
      <div className='timeline_container'>
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
};

export default AboutPage;
