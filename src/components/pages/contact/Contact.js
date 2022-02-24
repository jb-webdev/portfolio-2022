/**
 * Compo Contact
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */

import React from 'react'

/* import Data */
import { allData } from '../../../assets/data/allData';
/* ===== Import Composants ===== */
import Footer from '../../Footer/Footer';
import Social from '../../SocialIcons/Social';

/* ===== Style CSS ===== */
import './Contact.scss';

const Contact = () => {

  const contactDATA = allData;

  return (
    <main>
      <section className="contact">
      <h2 className='contact-title'>Me contacter ...</h2>

      <div className="contact__list">
        <div className="contact__email">
          <p className='contact-text-one'><i className="fas fa-envelope"></i> Email</p>
          <p className='contact-text-two'>{contactDATA.email}</p>
        </div>
        <div className="contact__phone">
          <p className='contact-text-one'><i className="fas fa-mobile-alt"></i> Portable</p>
          <p className='contact-text-two'>{contactDATA.tel}</p>
        </div>
        <div className="contact__address">
          <p className='contact-text-one'><i className="fas fa-marker-alt"></i> Adresse</p>
          <p className='contact-text-two'>{contactDATA.ville}, {contactDATA.pays}</p>
        </div>
      </div>

      <Social/>
      <Footer />
    </section>
        
    </main>
    );
};
export default Contact;