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
                Ivey Business School & planning to continue Software Engineering
                (BESc) at Western University.
              </p>
            }
          />
          <TextCard
            icon={breifcase}
            title='Experience'
            content={
              <p>
                This past summer I led the front-end development of a
                cross-platform mobile collection tool, which replaced a
                paper-based system used by Western University researchers.
              </p>
            }
          />
          <TextCard
            icon={hobby}
            title='Hobbies'
            content={
              <p>
                For the past 15 years I have competed in provincial, national,
                and international golf tournaments. I also love snowboarding,
                podcasts, and the occasional Netflix binge.
              </p>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
