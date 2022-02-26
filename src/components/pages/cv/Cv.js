/**
 * Compo CV
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */

import React from 'react';

import {useNavigate} from "react-router-dom";

import './Cv.scss';

function Cv () {

  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
  }, 1500);


  return (
    <>
      <main>
        <section className='s-cv'>
          <h1 className='s-cv-title'>Page en construction</h1>
        </section>
      </main>
    </>
  )
}

export default Cv