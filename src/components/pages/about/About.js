/**
 * Compo Page About
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */

 import React from 'react';

 import { allData } from "../../../assets/data/allData"

 /* import style css */
 import './About.scss';

 /* ===== Import Composants ===== */
import HeroPages from '../../HeroPages/HeroPages';
import Job from '../../CompoJob/Job';
import Footer from '../../Footer/Footer';
import Social from '../../SocialIcons/Social';

 const About = () => {

   const DATA = allData;

   return (
     <main>
       <section className="about">
         <HeroPages title="About" description={DATA.description}/>
         <Job />
       </section>
       <Social />
       <Footer />
     </main>
     );
 };
 export default About