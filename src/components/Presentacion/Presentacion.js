import React, { useEffect, useState, forwardRef } from "react";
import "./_presentacionMobile.scss";
import "./_presentacionIpad.scss";
import "./_presentacionDesktop.scss";

const CANTIDAD_DE_PRESENTACIONES = 2;

export const Presentacion = forwardRef((props, ref) => {
  const [presentacionIndex, setPresentacionIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresentacionIndex((presentacionIndex) =>
        presentacionIndex === CANTIDAD_DE_PRESENTACIONES
          ? 1
          : presentacionIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className={`contenedorGeneral presentacion${presentacionIndex}`}
    >
      <div className="contenedorTituloyBtn">
        <div className="contenedorInternoTituloyBtn">
          <div className="contenedorTitulo">
            <h1>Deft Ink</h1>
            <div className="contenedorSubTitulo">San Diego Tattoo Artist</div>
          </div>
          <div className="contenedorBtn">
            <button className="btn">MAKE ME AN APPOINTMENT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
});
