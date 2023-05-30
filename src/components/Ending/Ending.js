import React from 'react'
import './_ending.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Ending = () => {

    return(
        <section>
            <div className='contenedorFinal'>
                <div className='contenedorTitulo'>
                    <div className='interiorTitulo'>
                        <h3>VISIT ME ON INSTAGRAM <br/>
                            <span className='marron'>@deft_ink</span>
                        </h3>
                    </div>
                </div>
                <div className='contenedorIcono'>
                    <div className='circuloIcono'>
                        <FontAwesomeIcon className='instagram' icon={ faInstagram }></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </section>
    )

}
