import React, { useState } from "react";
import "./_seccionesMobile.scss";
import "./_seccionesIpad.scss";
import "./_seccionesDesktop.scss";
import Zoom from "react-reveal/Zoom";

const secciones = [
  {
    id: 1,
    title: "NERO E GRIGIO",
  },
  {
    id: 2,
    title: "SCRITTURA",
  },
  {
    id: 3,
    title: "COMMISSIONE ART",
  },
];

export const SeccionesItaliano = () => {
  const [seccionHover, setSeccionHover] = useState();

  return (
    <div className="contenedorPrincipalSecciones">
      <article className="secciones">
        {secciones.map((seccion) => (
          <section
            key={seccion.id}
            className={`seccion seccion${seccion.id}`}
            onMouseEnter={() => setSeccionHover(seccion.id)}
            onMouseLeave={() => setSeccionHover(null)}
          >
            <div className="contenedorSeccion">
              <Zoom down when={seccionHover === seccion.id}>
                <h3>{seccion.title}</h3>
              </Zoom>
            </div>
          </section>
        ))}
      </article>
    </div>
  );
};
