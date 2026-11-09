import { createPortal } from 'react-dom';

/** Fondo que oscurece la página mientras el menú está abierto.
 *  Se dibuja en <body> (portal) para quedar por debajo del header y por
 *  encima del contenido; si estuviera dentro del header taparía el menú. */
export default function MenuBackdrop({ onClick }) {
  return createPortal(<div className="rm-backdrop" aria-hidden="true" onClick={onClick} />, document.body);
}
