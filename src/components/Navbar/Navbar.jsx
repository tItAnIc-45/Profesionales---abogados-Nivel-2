import { NavLink } from 'react-router-dom';
import { MENU_ID, MenuBackdrop, MenuToggle, useResponsiveMenu } from '../../responsive';
import './Navbar.css';

export default function Navbar() {
  const { open, label, menuRef, toggleRef, toggle, close, onMenuClick } = useResponsiveMenu();

  return (
    <header className="navbar-header">
      <div className="container nav-wrapper">
        <MenuToggle open={open} label={label} onClick={toggle} buttonRef={toggleRef} />

        <NavLink to="/" className="logo">
          <i className="fa-solid fa-scale-balanced"></i>
          TUPLUS <span className="gold-text">ABOGADOS</span>
        </NavLink>

        <ul className="nav-links" id={MENU_ID} ref={menuRef} onClick={onMenuClick}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/la-firma" className={({ isActive }) => (isActive ? 'active' : '')}>
              La Firma
            </NavLink>
          </li>
          <li>
            <NavLink to="/areas" className={({ isActive }) => (isActive ? 'active' : '')}>
              Áreas de Práctica
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipo" className={({ isActive }) => (isActive ? 'active' : '')}>
              Equipo
            </NavLink>
          </li>
          <li>
            <NavLink to="/cotizador" className={({ isActive }) => (isActive ? 'active' : '')}>
              Cotizador
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contacto
            </NavLink>
          </li>
          {/* Solo se ve en teléfono, dentro del menú deslizante */}
          <li className="rm-drawer-cta">
            <NavLink to="/contacto" className="btn-gold">
              Consulta Legal
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Selector de Idioma */}
          <button className="btn-lang" id="langToggle" onClick={() => window.toggleLanguage?.()} title="Cambiar Idioma / Change Language">
            <i className="fa-solid fa-globe"></i> <span id="langText">EN</span>
          </button>
          
          {/* Modo Oscuro / Claro */}
          <button className="btn-theme" id="themeToggle" onClick={() => window.toggleTheme?.()} title="Cambiar Tema">
            <i className="fa-solid fa-moon" id="themeIcon"></i>
          </button>

          <NavLink to="/contacto" className="btn-gold">
            Consulta Legal
          </NavLink>
        </div>
      </div>

      <MenuBackdrop onClick={close} />
    </header>
  );
}