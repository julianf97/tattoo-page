import React from 'react'
import './_seccionesMobile.scss'
import './_seccionesIpad.scss'
import './_seccionesDesktop.scss'
import Zoom from 'react-reveal/Zoom';


export const SeccionesItaliano = () => {


    return(
        <div className='contenedorPrincipalSecciones'>
            <article className='secciones'>
                <section className='seccion seccion1'>
                    <div className='contenedorSeccion'>
                        <Zoom down>
                            <h3>NERO E GRIGIO</h3>
                        </Zoom>
                    </div>
                </section>
                <section className='seccion seccion2'>
                    <div className='contenedorSeccion'>
                        <Zoom down>
                            <h3>SCRITTURA</h3>
                        </Zoom>
                    </div>
                </section>
                <section className='seccion seccion3'>
                    <div className='contenedorSeccion'>
                        <Zoom down>
                            <h3>COMMISSIONE ART</h3>
                        </Zoom>
                    </div>
                </section>
            </article>
        </div>
    )

}

