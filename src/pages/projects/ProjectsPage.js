import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper';
import wip_animation from '../../assets/wip_animation.gif';

import './projectsPage.css';

const ProjectsPage = (props) => {
  return (
    <Wrapper>
      <section className='hero'>
        <h2>The Projects Page</h2>
        <img src={wip_animation} alt='Work in Progress' />
      </section>
    </Wrapper>
  );
};

ProjectsPage.propTypes = {};

export default ProjectsPage;
