/**
 * Compo APP
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */
import React from 'react';
/* ==== Import Router ==== */
import {Routes, Route} from 'react-router-dom';

/**import composant page */
import Accueil from './components/pages/accueil/Accueil';
import About from './components/pages/about/About';
import Projets from './components/pages/projets/Projets';
import Cv from './components/pages/cv/Cv';
import Contact from './components/pages/contact/Contact';
import Navbar from './components/navabar/Navbar';
import Error from './components/pages/ErrorPages/Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/about' element={<About />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
