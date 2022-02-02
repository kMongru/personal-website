import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import AboutPage from './pages/about/AboutPage';
import ProjectsPage from './pages/projects/ProjectsPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='projects' element={<ProjectsPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
