/**
 * Compo Projets
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */
 import React from 'react';
 import { Link } from 'react-router-dom';
 /* ===== Style CSS ===== */
 import './Projets.scss';
 /* ===== Import Data ===== */
 import { projetData } from '../../../assets/data/projetData';
/* ===== Import Composants ===== */
import Footer from '../../Footer/Footer';
import Social from '../../SocialIcons/Social';

 const Projets = () => {
   return (
     <main>
       <section className="projects">
        <div className="projects__bio-image">
          <h1 className="text-secondary">Mes Réalisations</h1>
        </div>
        <div className="projects__items">
          {projetData.map((PROJET) => {
            return (
                <div className="projects__item">
                  <img src={require(`../../../assets/img/${PROJET.imgWrapper}`)} alt="Mon Project"/>
                  <div className="projects__btns">
                    <Link to={PROJET.link} className="projects__btn">
                      <i className="fas fa-eye"></i> Preview
                    </Link>
                    <a className = "projects__btn"
                        href ={`https://github.com/jb-webdev/${ PROJET.github }`} 
                        target = "_blank" 
                        rel ='noreferrer' 
                      >
                        <i className="fab fa-github"></i> Github
                    </a>
                  </div>
                </div>
              )
          })}   
        </div>
        <Social />
        <Footer />
      </section>
     </main>
     );
 };
export default Projets