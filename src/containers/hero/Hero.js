import React from 'react';
import PropTypes from 'prop-types';

//styling
import './hero.css';

//custom components
import { Button } from '../../components';
import { Link } from 'react-router-dom';

//images
import hand from '../../assets/Waving Hand.svg';
import timer from '../../assets/Stopwatch.svg';
import breifcase from '../../assets/Briefcase.svg';
import education from '../../assets/Graduation Cap.svg';
import hobby from '../../assets/Hobby.svg';
import arrow from '../../assets/Down Arrow.svg';

//resume
import resume from '../../assets/documents/Keegan Mongru Software Resume.pdf';

const TextItem = ({ emoji, title, text }) => {
  return (
    <div className={'TLDR-container-item-' + title}>
      <div className='item-titles'>
        <img src={emoji} alt='Waving Emoji' />
        <h3>{title}</h3>
      </div>
      <div className='item-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Hero = (props) => {
  return (
    <>
      <div className='intro'>
        <div className='intro-greeting'>
          <h2>Hi!</h2>
          <img src={hand} alt='Waving Emoji' />
        </div>
        <div className='intro-text'>
          <h4>
            Allow me to introduce myself: my name is <span>Keegan Mongru</span>,
            a dual degree student interested in exploring the intersection of
            <span> finance</span> and
            <span> technology</span>.
          </h4>
        </div>
      </div>
      <div className='button-container'>
        <Button text='Contact Me' onClick={() => {}} />
        <Button text='PDF Resume' onClick={() => {}} link={resume} />
      </div>
      <div className='TLDR'>
        <div className='TLDR-title'>
          <h2>TL:DR</h2>
          <img src={timer} alt='Timer Emoji' />
        </div>
        <div className='TLDR-container'>
          <TextItem
            emoji={education}
            title='Education'
            text='A 3.9 GPA student taking Honors Business Administration (HBA) at the Ivey Business School & planning to continue Software Enginering (BESc) at Western University.'
          />
          <TextItem
            emoji={breifcase}
            title='Past Work Experience'
            text='For the past summer I worked as an undergraduate researcher at Western University. During this time, I developed a React Native collection tool to help digitalize the collection of field sample information.'
          />
          <TextItem
            emoji={hobby}
            title='Hobbies'
            text='For the past 15 years of my life I have competed in provinical, national and international golf tournments. I also enjoy listening to music (red hot chili peppers) and snowboarding. '
          />
        </div>
        <div className='centered-div'>
          <img src={arrow} alt='down-arrow' />
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {};

export default Hero;
