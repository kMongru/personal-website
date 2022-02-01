import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

//styling
import './styles/app.css';

//custom imports
import { Header, Footer, Hero, Projects } from './containers';
import { CTA } from './components';

function App() {
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
    <div className='App' data-theme={theme}>
      <section className='hero'>
        <Header switchTheme={switchTheme} />
        <Hero />
      </section>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
