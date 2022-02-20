/**
 * Compo Social Icons
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */

import React from 'react'
/* ===== import Data ===== */
import { socialData } from '../../assets/data/socialData';

/* ===== import style css ===== */
import './SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      { socialData.map((SOCIALDATA) => {
        return (
          <a href ={`https://github.com/${ SOCIALDATA.link }`} 
          target = "_blank" 
          rel ='noreferrer'>
            <i className={SOCIALDATA.icon}></i>
          </a>
        )
      })}
    </div>
  )
}

export default SocialIcons