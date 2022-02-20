import React from 'react';

import { useState } from 'react';

import {Link} from 'react-router-dom'
/** style css */
import './Navabar.css';



/* ==== Import Data ==== */
import {navData} from '../../assets/data/navData'



function Navbar() {
    
    const [showLinks, setShowLInks] = useState(false);

    const handleShowLinks = () => {
        setShowLInks(!showLinks)
    }

  return (
    <header>
        <div className="menu-btn" onClick={handleShowLinks}>
            <span className={showLinks ? "menu-btn__burger open" : "menu-btn__burger"}></span>
        </div>

        <nav className={showLinks ? "nav open" : "nav"}>
            <ul className={showLinks ? "menu-nav open" : "menu-nav"}>
                {navData.map((DataNav) => {
                    return (
                        <li className={showLinks ? "menu-nav__item open" : "menu-nav__item"} key={DataNav.id}>
                            <Link to={DataNav.link} 
                                className="menu-nav__link" 
                                onClick={handleShowLinks}
                                >
                                    {DataNav.title}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;