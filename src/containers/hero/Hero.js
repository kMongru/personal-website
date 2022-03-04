import React from 'react';

//styling
import './hero.css';

//custom components
import { Button, TextCard } from '../../components';

//images
import hand from '../../assets/Waving Hand.svg';
import timer from '../../assets/Stopwatch.svg';
import breifcase from '../../assets/Briefcase.svg';
import education from '../../assets/Graduation Cap.svg';
import hobby from '../../assets/Hobby.svg';

//resume
import resume from '../../assets/documents/Keegan Mongru Software Resume.pdf';

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
          <TextCard
            icon={education}
            title='Education'
            content={
              <p>
                A 3.9 GPA student taking Honors Business Administration (HBA) at
                Ivey Business School & planning to continue Software Enginering
                (BESc) at Western University.
              </p>
            }
          />
          <TextCard
            icon={breifcase}
            title='Experience'
            content={
              <p>
                For the past summer I worked as an undergraduate researcher at
                Western University. During this time, I developed a React Native
                collection tool to help digitalize the collection of field
                sample information.
              </p>
            }
          />
          <TextCard
            icon={hobby}
            title='Hobbies'
            content={
              <p>
                For the past 15 years of my life I have competed in provinical,
                national and international golf tournments. I also enjoy
                listening to music (red hot chili peppers) and snowboarding.{' '}
              </p>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
