import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
        <img src={logoImg} alt="logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São José do Rio Preto</strong>
          <span>São Paulo</span>
        </div>

          <a href="/" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </a>
     </div>
    </div>
  );
}

export default App;
