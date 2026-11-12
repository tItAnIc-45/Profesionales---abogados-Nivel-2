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
<<<<<<< HEAD
      nombre: "MATEO ALEJANDRO VALDIVIA RIVERA",
      cargo: isEnglish ? "FOUNDING PARTNER" : "SOCIO FUNDADOR",
      email: "mateo.valdivia@angulo.com.pe",
      img: "/assets/team-1.jpg",
      formacion: [
        "Abogado especialista en Derecho Corporativo y Fusiones y Adquisiciones por la Universidad del Pacífico (2012).",
        "Estudios concluidos en la Maestría en Derecho de la Empresa de la Universidad de Lima (2016).",
        "Magíster en Derecho con especialización en Litigación Oral (LL.M.) por la California Western School of Law (2016).",
        "Especialización en Gobierno Corporativo y Compliance por IE Business School, Madrid, España (2022)."
      ],
      experiencia: [
        "Su actividad profesional y trayectoria le han permitido intervenir en litigios penales de gran relevancia. Posee una amplia experiencia fundamentada en el ámbito dogmático y en el conocimiento preciso del funcionamiento del sistema judicial penal.",
        "Actualmente se desempeña como Socio Principal de Angulo Abogados, liderando el departamento de derecho corporativo desde el año 2015."
      ],
      publicaciones: [
        'Los pactos de accionistas y su oponibilidad en el derecho societario peruano.” Revista Themis N.° 65, 2017.',
        'Gobierno corporativo en empresas familiares: retos y perspectivas para el mercado andino.',
        'La responsabilidad de los administradores en operaciones de M&A.” En Anuario de Derecho Mercantil, 2021.'
      ],
      membresias: [
        "Instituto Peruano de Derecho Mercantil (IPDM)",
        "Comité Legal de la Cámara de Comercio de Lima.",
        "Colegio de Abogados de Lima."
      ],
      docencia: [
        "2019-Presente: Docente del curso de Derecho Societario en la Universidad del Pacífico."
      ],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 2,
      nombre: "MARTÍN ALONSO PAREDES ROJAS",
      cargo: isEnglish ? "PARTNER" : "SOCIO",
      email: "martin.paredes@angulo.com.pe",
      img: "/assets/team-2.jpg",
      formacion: [
        "Abogado titulado con tercio superior, especialista en Derecho Tributario y planeamiento fiscal estratégico."
      ],
    experiencia: [
      "Socio líder en consultoría tributaria nacional e internacional, y defensa en controversias fiscales complejas."
      ],
    publicaciones: [
      'Los precios de transferencia y su impacto en las reestructuraciones empresariales.” Revista Themis N.° 71, 2020.'
      ],
    membresias: ["Colegio de Abogados de Lima.", "Instituto Peruano de Derecho Tributario (IPDT)."],
    docencia: ["Profesor adjunto de Tributación Internacional en la Universidad del Pacífico."],
    idiomas: ["Español", "Inglés"]
    },
    {
      id: 3,
      nombre: "SOFÍA VALERIA CAMPOS HUAMÁN",
      cargo: isEnglish ? "PRINCIPAL ASSOCIATE" : "ASOCIADA PRINCIPAL",
      email: "sofia.campos@angulo.com.pe",
      img: "/assets/team-3.jpg",
      formacion: [
      "Abogada especialista en Propiedad Intelectual, Nuevas Tecnologías y Protección de Datos."
    ],
      experiencia: [
      "Asesora legal senior encargada del registro de marcas, patentes y cumplimiento regulatorio tecnológico."
    ],
      membresias: ["Colegio de Abogados de Lima.", "Asociación Interamericana de la Propiedad Intelectual (ASIPI)."],
      docencia: [],
      idiomas: ["Español", "Inglés", "Portugués"]
    },
    {
      id: 4,
      nombre: "DIEGO ARMANDO SILVA GUEVARA",
      cargo: isEnglish ? "SENIOR ASSOCIATE" : "ASOCIADO SENIOR",
      email: "diego.silva@angulo.com.pe",
      img: "/assets/team-1.jpg",
      formacion: [
        "Especialista en Derecho Financiero, Mercado de Valores y Banca."
      ],
      experiencia: [
        "Amplia trayectoria en estructuración de financiamientos corporativos y emisión de valores."
      ],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 5,
      nombre: "ANDREA LUCÍA MENDOZA SALAZAR",
      cargo: isEnglish ? "ASSOCIATE" : "ASOCIADA",
      email: "andrea.mendoza@angulo.com.pe",
      img: "/assets/team-3.jpg",
      formacion: [
        "Abogada especialista en Derecho Ambiental y Regulación de Recursos Naturales."
      ],
      experiencia: [
        "Consultora en auditorías de cumplimiento socioambiental y obtención de permisos sectoriales."
      ],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
    },
    {
      id: 6,
      nombre: "GABRIEL IGNACIO ROJAS NAVARRO",
      cargo: isEnglish ? "JUNIOR CONSULTANT" : "CONSULTOR JUNIOR",
      email: "gabriel.rojas@angulo.com.pe",
      img: "/assets/team-2.jpg",
      formacion: [
        "Especialista en Derecho de la Competencia y Protección al Consumidor."
      ],
      experiencia: [
        "Asistencia legal en procedimientos ante el INDECOPI y análisis de concentraciones empresariales."
      ],
      membresias: ["Colegio de Abogados de Lima."],
      docencia: [],
      idiomas: ["Español", "Inglés"]
=======
    nombre: "MATEO ALEJANDRO VALDIVIA RIVERA",
    cargo: isEnglish ? "FOUNDING PARTNER" : "SOCIO FUNDADOR",
    email: "mateo.valdivia@angulo.com.pe",
    img: "/assets/team-1.jpg",
    formacion: [
      "Abogado especialista en Derecho Corporativo y Fusiones y Adquisiciones por la Universidad del Pacífico (2012).",
      "Estudios concluidos en la Maestría en Derecho de la Empresa de la Universidad de Lima (2016).",
      "Master in Corporate Law (LL.M.) por Columbia Law School (2018).",
      "Especialización en Gobierno Corporativo y Compliance por IE Business School, Madrid, España (2022)."
    ],
    experiencia: [
      "Su práctica profesional se concentra en asesoría corporativa compleja, transacciones comerciales transfronterizas y estructuración de proyectos de inversión.",
      "Actualmente se desempeña como Socio Principal en Angulo Abogados, liderando el departamento de derecho corporativo desde el año 2015."
    ],
    publicaciones: [
      'Los pactos de accionistas y su oponibilidad en el derecho societario peruano.'/ "Revista Themis N.° 65, 2017.",
      'Gobierno corporativo en empresas familiares: retos y perspectivas para el mercado andino.',
      'La responsabilidad de los administradores en operaciones de M&A.\" En Anuario de Derecho Mercantil, 2021.'
    ],
    membresias: [
      "Instituto Peruano de Derecho Mercantil (IPDM).",
      "Comité Legal de la Cámara de Comercio de Lima.",
      "Colegio de Abogados de Lima."
    ],
    docencia: [
      "2019-Presente: Docente del curso de Derecho Societario en la Universidad del Pacífico."
    ],
    idiomas: ["Español", "Inglés", "Francés"]
  },
  {
    id: 2,
    nombre: "MARTÍN ALONSO PAREDES ROJAS",
    cargo: isEnglish ? "PARTNER" : "SOCIO",
    email: "martin.paredes@angulo.com.pe",
    img: "/assets/team-2.jpg",
    formacion: [
      "Abogado titulado con tercio superior, especialista en Derecho Tributario y planeamiento fiscal estratégico."
    ],
    experiencia: [
      "Socio líder en consultoría tributaria nacional e internacional, y defensa en controversias fiscales complejas."
    ],
    publicaciones: [
      'Los precios de transferencia y su impacto en las reestructuraciones empresariales.'/"Revista Themis N.° 71, 2020."
    ],
    membresias: ["Colegio de Abogados de Lima.", "Instituto Peruano de Derecho Tributario (IPDT)."],
    docencia: ["Profesor adjunto de Tributación Internacional en la Universidad del Pacífico."],
    idiomas: ["Español", "Inglés"]
  },
  {
    id: 3,
    nombre: "SOFÍA VALERIA CAMPOS HUAMÁN",
    cargo: isEnglish ? "PRINCIPAL ASSOCIATE" : "ASOCIADA PRINCIPAL",
    email: "sofia.campos@angulo.com.pe",
    img: "/assets/team-3.jpg",
    formacion: [
      "Abogada especialista en Propiedad Intelectual, Nuevas Tecnologías y Protección de Datos."
    ],
    experiencia: [
      "Asesora legal senior encargada del registro de marcas, patentes y cumplimiento regulatorio tecnológico."
    ],
    membresias: ["Colegio de Abogados de Lima.", "Asociación Interamericana de la Propiedad Intelectual (ASIPI)."],
    docencia: [],
    idiomas: ["Español", "Inglés", "Portugués"]
  },
  {
    id: 4,
    nombre: "DIEGO ARMANDO SILVA GUEVARA",
    cargo: isEnglish ? "SENIOR ASSOCIATE" : "ASOCIADO SENIOR",
    email: "diego.silva@angulo.com.pe",
    img: "/assets/team-1.jpg",
    formacion: [
      "Especialista en Derecho Financiero, Mercado de Valores y Banca."
    ],
    experiencia: [
      "Amplia trayectoria en estructuración de financiamientos corporativos y emisión de valores."
    ],
    membresias: ["Colegio de Abogados de Lima."],
    docencia: [],
    idiomas: ["Español", "Inglés"]
  },
  {
    id: 5,
    nombre: "ANDREA LUCÍA MENDOZA SALAZAR",
    cargo: isEnglish ? "ASSOCIATE" : "ASOCIADA",
    email: "andrea.mendoza@angulo.com.pe",
    img: "/assets/team-3.jpg",
    formacion: [
      "Abogada especialista en Derecho Ambiental y Regulación de Recursos Naturales."
    ],
    experiencia: [
      "Consultora en auditorías de cumplimiento socioambiental y obtención de permisos sectoriales."
    ],
    membresias: ["Colegio de Abogados de Lima."],
    docencia: [],
    idiomas: ["Español", "Inglés"]
  },
  {
    id: 6,
    nombre: "GABRIEL IGNACIO ROJAS NAVARRO",
    cargo: isEnglish ? "JUNIOR CONSULTANT" : "CONSULTOR JUNIOR",
    email: "gabriel.rojas@angulo.com.pe",
    img: "/assets/team-2.jpg",
    formacion: [
      "Especialista en Derecho de la Competencia y Protección al Consumidor."
    ],
    experiencia: [
      "Asistencia legal en procedimientos ante el INDECOPI y análisis de concentraciones empresariales."
    ],
    membresias: ["Colegio de Abogados de Lima."],
    docencia: [],
    idiomas: ["Español", "Inglés"]
>>>>>>> Luis/Rama
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