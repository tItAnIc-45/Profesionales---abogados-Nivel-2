import { MENU_ID } from './useResponsiveMenu';

/** Botón hamburguesa (a la izquierda del header). Las tres barras se
 *  convierten en una X cuando el menú está abierto (ver responsive.css). */
export default function MenuToggle({ open, label, onClick, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="rm-toggle"
      aria-controls={MENU_ID}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
    >
      <span className="rm-bar" />
      <span className="rm-bar" />
      <span className="rm-bar" />
    </button>
  );
}
