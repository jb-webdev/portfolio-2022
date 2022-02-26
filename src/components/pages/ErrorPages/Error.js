import React from 'react'
import {useNavigate} from "react-router-dom";
import './Error.scss';

function Error() {

  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
  }, 3000);

  return (
    <main>
        <section className='s-error'>
            <h1 className="s-error-title">Oups !! La page n'existe pas !</h1>
            <p className="s-error-text">Vous allez être redirigé vers la page d'accueil dans
              <span className="s-error-text-span"> 3 secondes !</span> 
            </p>
            <p className="s-error-text">Merci de votre compréhension !</p>
        </section>
    </main>
  )
}

export default Error
