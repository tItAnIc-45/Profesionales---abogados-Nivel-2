import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import LaFirma from './components/LaFirma/LaFirma';
import Practicas from './components/Practicas/Practicas';
import Equipo from './components/Equipo/Equipo';
import Cotizador from './components/Cotizador/Cotizador';
import Contacto from './components/Contacto/Contacto';
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat';
import ReadmeModal from './components/ReadmeModal/ReadmeModal';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';
import Perfil from './components/Perfil/Perfil';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './responsive/responsive.css'; // debe ir después de los CSS de los componentes
import './scripts/main.js';
import './scripts/calculator.js';

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'es';
    document.documentElement.dataset.theme ||= 'dark';
  }, []);

  return (
    <>
      {/* Elementos fijos globales que se ven en todas las rutas */}
      <Navbar />
      <WhatsappFloat />
      <ReadmeModal />
      <ScrollTop />

      {/* Aquí manejamos las rutas para que cada sección sea una vista independiente */}
      <main>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/la-firma" element={<LaFirma />} />
          <Route path="/areas" element={<Practicas />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/cotizador" element={<Cotizador />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>

      {/* Footer al final de todas las páginas */}
      <Footer />
    </>
  );
}