import { useState, useEffect } from 'react';
import './Equipo.css';

export default function Equipo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAbogado, setSelectedAbogado] = useState(null);
  const [isEnglish, setIsEnglish] = useState(false);

  // Detectar idioma
  useEffect(() => {
    const checkLanguage = () => {
      const footerNav = document.querySelector('.footer') || document.body;
      if (footerNav && footerNav.innerText.includes('Practice Areas')) {
        setIsEnglish(true);
      } else {
        setIsEnglish(false);
      }
    };

    checkLanguage();
    const observer = new MutationObserver(checkLanguage);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const t = {
    sub: isEnglish ? "OUR PROFESSIONALS" : "NUESTROS PROFESIONALES",
    title: isEnglish ? "PARTNERS AND SENIOR LAWYERS" : "SOCIOS Y ABOGADOS SENIOR",
    desc: isEnglish 
      ? "A multidisciplinary team recognized for its academic rigor and procedural experience." 
      : "Un equipo multidisciplinario reconocido por su rigor académico y experiencia procesal.",
    searchPlaceholder: isEnglish ? "Search lawyer by name or position..." : "Buscar abogado por nombre o cargo...",
    close: isEnglish ? "Close" : "Cerrar",
    formacion: isEnglish ? "Academic background:" : "Formación académica:",
    experiencia: isEnglish ? "Experience:" : "Experiencia:",
    publicaciones: isEnglish ? "Thesis and publications:" : "Tesis y publicaciones:",
    membresias: isEnglish ? "Memberships:" : "Membresías:",
    docencia: isEnglish ? "Teaching:" : "Docencia:",
    idiomas: isEnglish ? "Languages:" : "Idiomas:",
    noResults: isEnglish ? "No results found for the search." : "No se encontraron resultados para la búsqueda."
  };

  const abogadosList = [
    {
      id: 1,
      nombre: "Pedro Roberto Torres ",
      cargo: isEnglish ? "FOUNDING PARTNER" : "SOCIO FUNDADOR",
      email: "pedro@tuplusAbogados.com",
      img: "/assets/team-1.jpg",
      formacion: [
        "Abogado especialista en Derecho Penal Económico y Derecho Procesal Penal por la Universidad Particular de San Martín de Porres (2000).",
        "Estudios culminados en la Maestría de Derecho Penal de la Pontificia Universidad Católica del Perú (2004) y de Posgrado en Derecho Penal en la Universidad de Salamanca, España (2003).",
        "Magíster en Derecho con especialización en Litigación Oral (LL.M.) por la California Western School of Law (2016).",
        "Máster en Cumplimiento Normativo en Derecho Penal por la Universidad de Castilla – La Mancha, España (2021)."
      ],
      experiencia: [
        "Su actividad profesional y trayectoria le han permitido intervenir en litigios penales de gran relevancia. Posee una amplia experiencia fundamentada en el ámbito dogmático y en el conocimiento preciso del funcionamiento del sistema judicial penal.",
        "Actualmente se desempeña como Socio Director de Angulo Abogados, donde viene ejerciendo profesionalmente desde el año 2007."
      ],
      publicaciones: [
        '“La presunción de inocencia en el Nuevo Código Procesal Penal.” Revista Advocatus N.° 17, Universidad de Lima, 2007.',
        '“Criterios de la legítima defensa: Análisis en torno a un dictamen del Ministerio Público” en Temas de Derecho Penal, Ius et Veritas, Lima, 2012.',
        '“La atribución de responsabilidad penal de las personas jurídicas y los modelos de prevención del delito…” Revista Advocatus N.° 33, 2017.'
      ],
      membresias: [
        "Instituto Peruano de Criminología y Ciencias Penales (INPECCP).",
        "Capacitador de la Reforma Procesal Penal del Centro de Estudios de Justicia de las Américas (CEJA).",
        "Colegio de Abogados de Lima."
      ],
      docencia: [
        "2003: Docente del curso de Derecho Procesal Penal en la Universidad Peruana de Ciencias Aplicadas (UPC)."
      ],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 2,
      nombre: "Ana Lucia Vega ",
      cargo: isEnglish ? "PARTNER" : "SOCIA",
      email: "ana@tuplusAbogados.com",
      img: "/assets/team-2.jpg",
      formacion: [
        "Abogado titulado con mención de honor, especialista en derecho penal corporativo y litigación estratégica."
      ],
      experiencia: [
        "Socio especialista en consultoría y patrocinio judicial en casos de alta complejidad procesal."
      ],
      publicaciones: [
        "“La atribución de responsabilidad penal de las personas jurídicas y los modelos de prevención del delito.” Revista Advocatus N.° 33, 2017."
      ],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: ["Ponente en seminarios de Derecho Procesal Penal."],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 3,
      nombre: "ISABEL ESPEJO CASTILLO",
      cargo: isEnglish ? "PRINCIPAL ASSOCIATE" : "ASOCIADA PRINCIPAL",
      email: "isabel.espejo@angulo.com.pe",
      img: "/assets/team-3.jpg",
      formacion: [
        "Abogada especialista en consultoría corporativa integral y contrataciones con el Estado."
      ],
      experiencia: [
        "Asesora legal senior encargada del área regulatoria y solución de controversias contractuales."
      ],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 4,
      nombre: "CARLOS ALBERTO RIVERA SOTO",
      cargo: isEnglish ? "SENIOR ASSOCIATE" : "ASOCIADO SENIOR",
      email: "carlos.rivera@angulo.com.pe",
      img: "/assets/team-1.jpg",
      formacion: ["Especialista en Derecho Civil Patrimonial y arbitraje comercial."],
      experiencia: ["Amplia trayectoria en litigación arbitral civil y comercial."],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 5,
      nombre: "MARÍA ELENA PAREDES MENDOZA",
      cargo: isEnglish ? "ASSOCIATE" : "ASOCIADA",
      email: "maria.paredes@angulo.com.pe",
      img: "/assets/team-3.jpg",
      formacion: ["Abogada especialista en Derecho Laboral Corporativo."],
      experiencia: ["Consultora en prevención de riesgos laborales y auditorías internas."],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 6,
      nombre: "LUCÍA FERNANDA GÓMEZ RUIZ",
      cargo: isEnglish ? "JUNIOR CONSULTANT" : "CONSULTORA JUNIOR",
      email: "lucia.gomez@angulo.com.pe",
      img: "/assets/team-2.jpg",
      formacion: ["Especialista en Derecho Administrativo y Contrataciones Públicas."],
      experiencia: ["Asistencia legal en procedimientos administrativos sancionadores."],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    }
  ];

  const filteredAbogados = abogadosList.filter(abogado =>
    abogado.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    abogado.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="equipo-section container">
      {/* CABECERA INSTITUCIONAL */}
      <div className="section-header text-center mb-5" style={{ paddingTop: '40px' }}>
        <span className="subtitulo-superior" style={{ color: 'var(--equipo-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: '700', display: 'block', marginBottom: '10px' }}>
          {t.sub}
        </span>
        <h2 className="titulo-principal" style={{ fontFamily: 'serif', fontSize: '2.5rem', color: 'var(--equipo-text-primary)', fontWeight: '700', marginBottom: '15px' }}>
          {t.title}
        </h2>
        <p className="descripcion-seccion" style={{ color: 'var(--equipo-text-secondary)', maxWidth: '700px', margin: '0 auto 25px auto', fontSize: '1rem' }}>
          {t.desc}
        </p>

        {/* BUSCADOR */}
        <div className="equipo-search-box">
          <input
            type="text"
            className="search-input"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="equipo-grid">
        {filteredAbogados.length > 0 ? (
          filteredAbogados.map((abogado) => (
            <div className="abogado-card" key={abogado.id}>
              <div className="abogado-img-wrapper">
                <img 
                  src={abogado.img} 
                  alt={abogado.nombre} 
                  onError={(e) => { e.target.src = '/assets/colibri.png'; }}
                />
              </div>
              <div className="abogado-card-body">
                <span className="socio-tag">{abogado.cargo}</span>
                <h3 className="abogado-name">{abogado.nombre}</h3>
                <div className="email-badge">
                  <span className="icon-mail">✉</span> {abogado.email}
                </div>
                <div className="card-social-actions">
                  <a href="#" className="action-btn social" title="LinkedIn">
                    <span className="icon">in</span>
                  </a>
                  <button
                    className="action-btn bio-btn"
                    onClick={() => setSelectedAbogado(abogado)}
                    title={isEnglish ? "View Detailed Profile" : "Ver Perfil Detallado"}
                  >
                    📄
                  </button>
                  <a href={`mailto:${abogado.email}`} className="action-btn social" title="Email">
                    ✉
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100 py-4" style={{ color: 'var(--equipo-text-primary)' }}>
            <p>{t.noResults}</p>
          </div>
        )}
      </div>

      {/* MODAL DETALLADO */}
      {selectedAbogado && (
        <div className="modal-backdrop" onClick={() => setSelectedAbogado(null)}>
          <div className="modal-custom-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon" onClick={() => setSelectedAbogado(null)}>×</button>

            <div className="modal-custom-header">
              <h2>{selectedAbogado.nombre}</h2>
              <span className="modal-subtag">{selectedAbogado.cargo}</span>
              <div className="modal-email-link">
                ✉ {selectedAbogado.email}
              </div>
            </div>

            <div className="modal-custom-body">
              {selectedAbogado.formacion && selectedAbogado.formacion.length > 0 && (
                <div className="bio-block">
                  <h4>{t.formacion}</h4>
                  {selectedAbogado.formacion.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}

              {selectedAbogado.experiencia && selectedAbogado.experiencia.length > 0 && (
                <div className="bio-block">
                  <h4>{t.experiencia}</h4>
                  {selectedAbogado.experiencia.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}

              {selectedAbogado.publicaciones && selectedAbogado.publicaciones.length > 0 && (
                <div className="bio-block">
                  <h4>{t.publicaciones}</h4>
                  <ul>
                    {selectedAbogado.publicaciones.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedAbogado.membresias && selectedAbogado.membresias.length > 0 && (
                <div className="bio-block">
                  <h4>{t.membresias}</h4>
                  <ul>
                    {selectedAbogado.membresias.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedAbogado.docencia && selectedAbogado.docencia.length > 0 && (
                <div className="bio-block">
                  <h4>{t.docencia}</h4>
                  <ul>
                    {selectedAbogado.docencia.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedAbogado.idiomas && selectedAbogado.idiomas.length > 0 && (
                <div className="bio-block">
                  <h4>{t.idiomas}</h4>
                  <ul>
                    {selectedAbogado.idiomas.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-custom-footer">
              <button className="btn-modal-cerrar" onClick={() => setSelectedAbogado(null)}>
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}