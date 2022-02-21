/**
 * Compo Page Accueil
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */

import React from 'react';
/* ===== import Style CSS ===== */
import './Accueil.scss';

/* ===== import Data ===== */
import { allData } from '../../../assets/data/allData';

/* ===== import Composant ===== */
import Footer from '../../Footer/Footer';
import Social from '../../SocialIcons/Social';

const Accueil = () => {
  const ALLDATA = allData;
  return (
    <main>
      <section className='s-home'>
        <p>Bonjour, je suis</p>
        <h1 className="home__name">
          {ALLDATA.username} <span className="home__name-span">{ALLDATA.name}</span>
        </h1>
        <p>
          {ALLDATA.job}
        </p>
        <Social />
        <Footer />
      </section>
    </main>
  )
}

export default Accueil