import React from 'react';
import Marquee from 'react-fast-marquee';

import Wrapper from '../Wrapper';
import { Timeline, TextCard } from '../../components';

import data from '../../data/timeline.json';
import awards from '../../data/awards.json';

import headshot from '../../assets/headshot.JPG';
import bg_green from '../../assets/bg_green.svg';

//styling
import './aboutPage.css';

const AboutPage = () => {
  return (
    <Wrapper>
      <div className='about-row'>
        <div className='about-column about-flex-left'>
          <h2>Here's More About Me!</h2>
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
      <div className='about-banner' style={{ backgroundImage: { bg_green } }}>
        <Marquee gradient={false}>
          {awards.map((item, index) => {
            return (
              <h3 className='about-banner-text-margins' key={item.id}>
                {item.name}
              </h3>
            );
          })}
        </Marquee>
      </div>
      <div className='about-row about-dark-bg'>
        <h2>Timeline</h2>
      </div>
      <div className='timeline_container about-dark-bg'>
        <Timeline data={data} />
      </div>
    </Wrapper>
  );
};

export default AboutPage;
