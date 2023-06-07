import React from 'react'
import './_navbarIpad.scss'
import './_navbarMobile.scss'
import './_navbarDesktop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import  italia  from "../../assets/img/italia.png"

export const Navbar = () => {

    const [idioma, setIdioma] = useState(false);


    const handleClickIdioma = () => {
        if( idioma === false ){
            setIdioma(true)
        } else {
            setIdioma(false)
        }

        console.log(idioma)
    }

    return(
       <div className='contenedorNavbar'>
            <div className='contenedorInternoNavbar'>
                <div className='contenedorBarras'>
                    <FontAwesomeIcon className='barras' icon={faBars}></FontAwesomeIcon>
                </div>
                <div className='contenedorMedio'>

                </div>
                <div className='contenedorIdioma'>
                    <div onClick={handleClickIdioma} className='contenedorInternoElementosIdioma'>
                        <div className='contenedorImg'>
                            <div className='contenedorInternoImg'>
                                <img src={italia} alt="lenguajeImg"></img>
                            </div>
                        </div>
                        <span className='btnIdioma'>ITA </span>
                        <FontAwesomeIcon className='anguloDerecho' icon={faAngleRight}></FontAwesomeIcon>  
                    </div>
                </div>
            </div>
       </div>
    )

}

