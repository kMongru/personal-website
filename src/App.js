import React from 'react';

//styling
import './styles/app.css';

//custom imports
import { Header, Footer } from './containers';
import { CTA, Navbar } from './components';

//images
import img from './images/Waving Hand.svg';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Navbar />
      </div>
      <section className='hero'>
        <img src={img} alt='Waving Emoji' />
        <p>Intro Text</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
