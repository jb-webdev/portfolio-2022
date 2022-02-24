import React from 'react'
/** import style css */
import './HeroPages.scss';

const HeroPages = (props) => {
  return (
    <div className="heroPages__bio-image">
      <div className='heroPages-bio'>
        <h1 className="heroPages-title">{props.title}</h1>
        <p className="heroPages-text">{props.description}</p>
      </div>
    </div>
  )
}

export default HeroPages