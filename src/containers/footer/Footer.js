import React from 'react';

import {
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';
import { TiPencil } from 'react-icons/ti';

//styling
import './footer.css';

const Footer = (props) => {
  const site = '<Site/>';

  return (
    <div className={`footer_container ${props.fixed}`}>
      <div className='footer-row footer-hidden'>
        <AiOutlineCopyrightCircle size={15} color={'white'} />
        <p className='footer-white footer-margins'>2022 Keegan Mongru</p>
      </div>
      <div className='footer-row'>
        <a
          href='https://www.linkedin.com/in/keegan-mongru/'
          target='_blank'
          className='footer-margins'
        >
          <AiOutlineLinkedin size={30} color={'white'} />
        </a>
        <a
          href='https://github.com/kMongru'
          target='_blank'
          className='footer-margins'
        >
          <AiOutlineGithub size={30} color={'white'} />
        </a>
        <a className='footer-margins'>
          <AiOutlineMail size={30} color={'white'} />
        </a>
      </div>
      <div className='footer-row footer-hidden'>
        <a className='footer-margins footer-white'>{site}</a>
        <p className='footer-white'> & </p>
        <a className='footer-margins'>
          <TiPencil size={30} color={'white'} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
