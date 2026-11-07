import React, { useState } from 'react';
import './Practicas.css';

export default function Practicas() {
  const [modalContent, setModalContent] = useState(null);

  // Información detallada para el modal según cada especialidad
  const modalDetails = {
    srv1: {
      titleKey: "srv1_title",
      defaultTitle: "Derecho Corporativo",
      subtitle: "Área de Especialización",
      descKey: "srv1_desc",
      defaultDesc: "Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.",
      scope: "Ofrecemos asesoría integral a empresas nacionales e internacionales en su constitución, operaciones cotidianas, reestructuraciones societarias, fusiones y adquisiciones (M&A), así como en la prevención de riesgos corporativos y cumplimiento normativo."
    },
    srv2: {
      titleKey: "srv2_title",
      defaultTitle: "Litigios y Arbitraje",
      subtitle: "Área de Especialización",
      descKey: "srv2_desc",
      defaultDesc: "Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.",
      scope: "Representamos a nuestros clientes con rigor técnico y estrategia en litigios complejos ante el Poder Judicial y tribunales arbitrales nacionales e internacionales, protegiendo sus intereses comerciales y patrimoniales."
    },
    srv3: {
      titleKey: "srv3_title",
      defaultTitle: "Derecho Penal Económico",
      subtitle: "Área de Especialización",
      descKey: "srv3_desc",
      defaultDesc: "Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.",
      scope: "Brindamos defensa legal especializada en delitos económicos, tributarios y corporativos, además de la implementación de modelos de prevención (compliance penal) para la persona jurídica."
    },
    srv4: {
      titleKey: "srv4_title",
      defaultTitle: "Derecho Inmobiliario",
      subtitle: "Área de Especialización",
      descKey: "srv4_desc",
      defaultDesc: "Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.",
      scope: "Acompañamos en todas las fases de transacciones inmobiliarias, desde el estudio de títulos y saneamiento legal de predios hasta la estructuración de contratos de construcción y desarrollo urbano."
    },
    srv5: {
      titleKey: "srv5_title",
      defaultTitle: "Derecho Laboral",
      subtitle: "Área de Especialización",
      descKey: "srv5_desc",
      defaultDesc: "Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.",
      scope: "Asesoramos en la gestión integral de recursos humanos, contratación de personal extranjero, prevención de contingencias laborales, procedimientos de cese colectivo y defensa en litigios laborales."
    },
    srv6: {
      titleKey: "srv6_title",
      defaultTitle: "Derecho Tributario",
      subtitle: "Área de Especialización",
      descKey: "srv6_desc",
      defaultDesc: "Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.",
      scope: "Optimizamos la carga tributaria de las operaciones empresariales bajo el marco legal vigente, brindando patrocinio en procedimientos contenciosos tributarios ante SUNAT y el Tribunal Fiscal."
    }
  };

  const handleOpenModal = (key, e) => {
    e.preventDefault();
    setModalContent(modalDetails[key]);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <section id="practicas">
        <div className="container">
          <div className="section-header">
            <span className="section-tag" data-lang="tag_specialties">Especialidades</span>
            <h2 className="section-title" data-lang="prac_title">Áreas de Práctica</h2>
            <p className="section-desc" data-lang="prac_desc">Cobertura legal integral con equipos altamente especializados por materia.</p>
          </div>
          <div className="services-grid">
            
            {/* 1. Derecho Corporativo */}
            <div className="service-card">
              <i className="fa-solid fa-briefcase service-icon"></i>
              <h3 className="service-title" data-lang="srv1_title">Derecho Corporativo</h3>
              <p className="service-desc" data-lang="srv1_desc">Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv1', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 2. Litigios y Arbitraje */}
            <div className="service-card">
              <i className="fa-solid fa-gavel service-icon"></i>
              <h3 className="service-title" data-lang="srv2_title">Litigios y Arbitraje</h3>
              <p className="service-desc" data-lang="srv2_desc">Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv2', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 3. Derecho Penal Económico */}
            <div className="service-card">
              <i className="fa-solid fa-shield-halved service-icon"></i>
              <h3 className="service-title" data-lang="srv3_title">Derecho Penal Económico</h3>
              <p className="service-desc" data-lang="srv3_desc">Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv3', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 4. Derecho Inmobiliario */}
            <div className="service-card">
              <i className="fa-solid fa-house-chimney service-icon"></i>
              <h3 className="service-title" data-lang="srv4_title">Derecho Inmobiliario</h3>
              <p className="service-desc" data-lang="srv4_desc">Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv4', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 5. Derecho Laboral */}
            <div className="service-card">
              <i className="fa-solid fa-users service-icon"></i>
              <h3 className="service-title" data-lang="srv5_title">Derecho Laboral</h3>
              <p className="service-desc" data-lang="srv5_desc">Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv5', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

            {/* 6. Derecho Tributario */}
            <div className="service-card">
              <i className="fa-solid fa-file-invoice-dollar service-icon"></i>
              <h3 className="service-title" data-lang="srv6_title">Derecho Tributario</h3>
              <p className="service-desc" data-lang="srv6_desc">Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.</p>
              <a className="service-link" href="#contacto" onClick={(e) => handleOpenModal('srv6', e)}>
                <span data-lang="learn_more">Saber más</span> <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL EMERGENTE */}
      {modalContent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              &times;
            </button>

            <div className="modal-header">
              <span className="modal-subtitle">{modalContent.subtitle}</span>
              <h2 className="modal-title" data-lang={modalContent.titleKey}>
                {modalContent.defaultTitle}
              </h2>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Descripción General:</h4>
                <p data-lang={modalContent.descKey}>{modalContent.defaultDesc}</p>
              </div>

              <div className="modal-section">
                <h4>Alcance del Servicio:</h4>
                <p>{modalContent.scope}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-cerrar" onClick={handleCloseModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}