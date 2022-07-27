import React from 'react';

//styling
import './styles/app.css';

//custom imports
import { Hero, Projects } from './containers';
import Wrapper from './pages/Wrapper';

//main page layout
function App() {
  // landing page jsx
  return (
    <Wrapper>
      <section className='hero'>
        <Hero />
      </section>
      <Projects />
    </Wrapper>
  );
}

export default App;
