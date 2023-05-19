import React from 'react'
import './_navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import  italia  from "../../assets/img/italia.png"

export const Navbar = () => {

    return(
       <div className='contenedorNavbar'>
            <div className='contenedorInternoNavbar'>
                <div className='contenedorBarras'>
                    <FontAwesomeIcon className='barras' icon={faBars}></FontAwesomeIcon>
                </div>
                <div className='contenedorMedio'>

                </div>
                <div className='contenedorIdioma'>
                    <div className='contenedorImg'>
                        <div className='contenedorInternoImg'>
                            <img src={italia} alt="lenguajeImg"></img>
                        </div>
                    </div>
                    <span className='btnIdioma'>ITA <FontAwesomeIcon className='anguloDerecho' icon={faAngleRight}></FontAwesomeIcon>  </span> 
                </div>
            </div>
       </div>
    )

}

