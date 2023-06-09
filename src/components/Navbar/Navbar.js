import React from 'react'
import './_navbarIpad.scss'
import './_navbarMobile.scss'
import './_navbarDesktop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import  italia  from "../../assets/img/italia.png"
import  reinoUnido  from "../../assets/img/reinoUnido.png"
import { useContext } from 'react'
import { LenguajeContext } from "../../context/LenguajeContext/LenguajeContext"

export const Navbar = () => {

    const { idioma, handleClickModal, handleClickIngles, handleClickItaliano, inglesElegido } = useContext(LenguajeContext)

    return(
       <div className='contenedorNavbar'>
            <div className='contenedorInternoNavbar'>
                <div className='contenedorBarras'>
                    <FontAwesomeIcon className='barras' icon={faBars}></FontAwesomeIcon>
                    <div className='contenedorLogoDesktop'></div>
                </div>
                <div className='contenedorMedio'>
                    <div className='contenedorLogoMobile'>

                    </div>
                    <div className='contenedorNavbarDesktop'>
                        <div className='contenedorNavbarInteriorDesktop'>
                            <nav>
                                <ul>
                                    {
                                        inglesElegido ?  <li>BLACK & GRAY</li>
                                                    :  <li>NERO E GRIGIO</li>
                                    }
                                    {
                                        inglesElegido ? <li>LETTERING</li>
                                                    :  <li>SCRITTURA</li>
                                    }
                                    {
                                        inglesElegido ? <li>COMMISSIONED ART</li>
                                                    :  <li>COMMISSIONE ART</li>
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='contenedorIdioma'>
                    <div onClick={handleClickModal} className='contenedorInternoElementosIdioma'>
                        <div className='contenedorImg'>
                            <div className='contenedorInternoImg'>
                                {
                                    inglesElegido ?  <img className='imagenReinoUnidoElegida' src={reinoUnido} alt="lenguajeImg"></img>
                                                : <img src={italia} alt="lenguajeImg"></img>
                                }
                            </div>
                        </div>
                        {
                            inglesElegido ? <span className='btnIdioma'>ENG </span>
                                        : <span className='btnIdioma'> ITA </span> 
                        }
                        {
                            idioma ? <FontAwesomeIcon className='anguloRotado' icon={faAngleRight}></FontAwesomeIcon> 
                                : <FontAwesomeIcon className='anguloDerecho' icon={faAngleRight}></FontAwesomeIcon> 
                        }
                    </div>
                </div>
            </div>
            <div className='contenedorAbsoluto'>
                <div className='contenedorInteriorAbsoluto'>
                    <div className='contenedorBarras'></div>
                    <div className='contenedorMedio'></div>
                    <div className='contenedorIdioma'>
                    {
                        idioma ? <div className='selectorIdioma'>
                                    <div className='contenedorInternoIdiomas'>
                                        <div onClick={handleClickItaliano}  className='contenedorITA'>
                                            <div className='contenedorNombre'>
                                                ITA
                                            </div>
                                            <div className='contenedorBandera'>
                                                <div className='contenedorInternoBandera'>
                                                    <img src={italia} alt="lenguajeImg"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={handleClickIngles} className='contenedorENG'>
                                            <div className='contenedorNombre'>
                                                ENG
                                            </div>
                                            <div className='contenedorBandera'>
                                                <div className='contenedorInternoBandera'>
                                                    <img src={reinoUnido} alt="lenguajeImg"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div></div>
                    }
                    </div>
                </div>
            </div>
       </div>
    )

}


