import React from 'react'
import './Accueil.css'
import { allData } from '../../../assets/data/allData'

const Accueil = () => {
  const ALLDATA = allData;
  return (
    <main>
      <section className='home'>
        <p>Bonjour, je suis</p>
        <h1 className="home__name">
          {ALLDATA.username} <span className="home__name-span">{ALLDATA.name}</span>
        </h1>
        <p>
          {ALLDATA.job}
        </p>
      </section>
    </main>
  )
}

export default Accueil