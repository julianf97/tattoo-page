import React from "react";
import Zoom from "react-reveal/Zoom";
import "./_seccionesMobile.scss";
import "./_seccionesIpad.scss";
import "./_seccionesDesktop.scss";

export const Secciones = () => {
  return (
    <div className="contenedorPrincipalSecciones">
      <article className="secciones">
        <section className="seccion seccion1">
          <div className="contenedorSeccion">
            <Zoom down>
              <h3>BLACK AND GREY</h3>
            </Zoom>
          </div>
        </section>
        <section className="seccion seccion2">
          <div className="contenedorSeccion">
            <Zoom down>
              <h3>LETTERING</h3>
            </Zoom>
          </div>
        </section>
        <section className="seccion seccion3">
          <div className="contenedorSeccion">
            <Zoom down>
              <h3>COMMISSIONED ART</h3>
            </Zoom>
          </div>
        </section>
      </article>
    </div>
  );
};
