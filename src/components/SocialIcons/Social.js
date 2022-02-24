/**
 * Compo Social Icons
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */
import React from 'react';
/* ===== import data ===== */
import { socialData } from "../../assets/data/socialData";

import './Social.scss';


const Social = () => {
    return (
        <div className="social-icons">
            { socialData.map((SOCIALDATA) => {
            return (
                <a href ={SOCIALDATA.link} 
                    target = "_blank" 
                    rel ='noreferrer' 
                    key={SOCIALDATA.id}>
                <i className={SOCIALDATA.icon}></i>
                </a>
            )
            })}
        </div>
    )
}

export default Social