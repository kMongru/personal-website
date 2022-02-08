import React from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from 'use-local-storage';

import { Header, Footer } from '../containers';

import './wrapper.css';

const Wrapper = (props) => {
  //checks the users preference within their brower
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //stateful component tied to localStorage, assigns theme : light or darks depending on preference
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  //swap the theme
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='wrapper_container' data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      {props.children}
      <Footer />
    </div>
  );
};

Wrapper.propTypes = {};

export default Wrapper;
