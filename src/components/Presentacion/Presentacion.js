import React from 'react'
import './_presentacionMobile.scss'
import './_presentacionIpad.scss'
import './_presentacionDesktop.scss'


export const Presentacion = () => {

    return(
        <div className='contenedorGeneral'>
            <div className='contenedorTituloyBtn'>
                <div className='contenedorInternoTituloyBtn'>
                    <div className='contenedorTitulo'>
                        <h1>Deft Ink</h1>
                        <div className='contenedorSubTitulo'>
                            San Diego Tattoo Artist
                        </div>
                    </div>
                    <div className='contenedorBtn'>
                        <button className='btn'>   
                            MAKE ME AN APPOINTMENT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

