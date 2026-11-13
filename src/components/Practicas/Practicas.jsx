import React, { useState } from 'react';
import './Practicas.css';

export default function Practicas() {
  const [modalContent, setModalContent] = useState(null);

  // Información detallada y ampliada para cada especialidad
  const modalDetails = {
    srv1: {
      titleKey: "srv1_title",
      defaultTitle: "Derecho Corporativo",
      subtitle: "Área de Especialización",
      descKey: "srv1_desc",
      defaultDesc: "Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.",
      scope: "Brindamos asesoría integral y estratégica a corporaciones nacionales e internacionales en todas las etapas de su ciclo de vida empresarial. Nuestros servicios abarcan la constitución de sociedades, juntas de accionistas, modificaciones estatutarias, estructuración y negociación de contratos comerciales complejos, procesos de debida diligencia (due diligence), fusiones y adquisiciones (M&A), así como la implementación de buenas prácticas de gobierno corporativo para mitigar riesgos legales y asegurar la continuidad del negocio."
    },
    srv2: {
      titleKey: "srv2_title",
      defaultTitle: "Litigios y Arbitraje",
      subtitle: "Área de Especialización",
      descKey: "srv2_desc",
      defaultDesc: "Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.",
      scope: "Representamos con rigor técnico, firmeza y alta estrategia a nuestros clientes en controversias complejas de índole civil, comercial, contractual y societaria. Actuamos tanto en el fuero judicial ordinario a nivel nacional como en tribunales arbitrales nacionales e internacionales. Diseñamos planes de contingencia para prevenir litigios y buscamos constantemente soluciones eficientes mediante la negociación y la conciliación antes de llegar a estrados."
    },
    srv3: {
      titleKey: "srv3_title",
      defaultTitle: "Derecho Penal Económico",
      subtitle: "Área de Especialización",
      descKey: "srv3_desc",
      defaultDesc: "Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.",
      scope: "Ofrecemos defensa legal especializada y de alta exigencia técnica en investigaciones y procesos penales vinculados a delitos económicos, tributarios, financieros y contra la administración pública. Asimismo, diseñamos e implementamos modelos de prevención y cumplimiento normativo (Compliance Penal y corporativo) orientados a blindar a las personas jurídicas frente a posibles responsabilidades penales de sus directivos o colaboradores."
    },
    srv4: {
      titleKey: "srv4_title",
      defaultTitle: "Derecho Inmobiliario",
      subtitle: "Área de Especialización",
      descKey: "srv4_desc",
      defaultDesc: "Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.",
      scope: "Acompañamos de principio a fin operaciones inmobiliarias de gran envergadura. Nuestros servicios incluyen el estudio exhaustivo de títulos, el saneamiento legal y registral de predios urbanos y rurales, la redacción de contratos de compraventa, arrendamiento y fideicomisos, así como la asesoría integral en la obtención de licencias urbanísticas, habilitaciones urbanas y estructuración jurídica para el desarrollo de proyectos inmobiliarios y comerciales."
    },
    srv5: {
      titleKey: "srv5_title",
      defaultTitle: "Derecho Laboral",
      subtitle: "Área de Especialización",
      descKey: "srv5_desc",
      defaultDesc: "Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.",
      scope: "Asesoramos de manera preventiva y correctiva en la gestión integral del capital humano y las relaciones laborales empresariales. Esto comprende la elaboración de contratos de trabajo especiales, contratación de personal extranjero, diseño de políticas internas, auditorías laborales preventivas, conducción de negociaciones colectivas complejas, procesos de reestructuración de personal o cese colectivo, y patrocinio estratégico en procedimientos inspectivos de SUNAFIL y litigios laborales judiciales."
    },
    srv6: {
      titleKey: "srv6_title",
      defaultTitle: "Derecho Tributario",
      subtitle: "Área de Especialización",
      descKey: "srv6_desc",
      defaultDesc: "Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.",
      scope: "Brindamos consultoría orientada a optimizar de manera legal y eficiente la carga tributaria en las estructuras de negocio de nuestros clientes. Asesoramos en la correcta interpretación de normas fiscales nacionales e internacionales, brindamos patrocinio y defensa especializada durante procedimientos de fiscalización llevados a cabo por la SUNAT, y asumimos la representación legal en etapas contenciosas ante el Tribunal Fiscal y el Poder Judicial."
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