import React from 'react';

//styling
import './styles/app.css';

//custom imports
import { Header, Footer, Hero, Projects } from './containers';
import { CTA, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Navbar />
      </div>
      <section className='hero'>
        <Hero />
      </section>
      {/* <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
