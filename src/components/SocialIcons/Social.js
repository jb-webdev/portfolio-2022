/**
 * Compo Social Icons
 * Author Jean-Jacques Boero
 * Février 2022
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
/* ===== import data ===== */
import { socialData } from "../../assets/data/socialData";


const Social = () => {
    return (
        <div className="social-icons">
            { socialData.map((SOCIALDATA) => {
            return (
                <Link to={SOCIALDATA.link} key={SOCIALDATA.id}>
                <i className={SOCIALDATA.icon}></i>
                </Link>
            )
            })}
        </div>
    )
}

export default Social