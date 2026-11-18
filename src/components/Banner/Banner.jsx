import { useState, useEffect } from "react";
import "./Banner.css";

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const totalSlides = 3;

  // Cambio automático cada 6 segundos (se pausa al pasar el mouse)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`hero hero-slide-${current}`} id="inicio">
      {/* Contenido de los Slides */}
      <div className="container">
        {current === 0 && (
          <div className="hero-content fade-slide">
            <span className="hero-subtitle" data-lang="hero_subtitle">Excelencia &amp; Compromiso Jurídico</span>
            <h1 className="hero-title" data-lang="hero_title">Defendemos sus Intereses con Rigor Estratégico y Ética</h1>
            <p className="hero-desc" data-lang="hero_desc">Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio.</p>
            <div className="hero-actions">
              <a className="btn-gold" href="/contacto"><span data-lang="hero_btn1">Agendar Cita Presencial</span> <i className="fa-solid fa-arrow-right"></i></a>
              <a className="btn-outline" data-lang="hero_btn2" href="/la-firma">Conocer La Firma</a>
            </div>
          </div>
        )}

        {current === 1 && (
          <div className="hero-content fade-slide">
            <span className="hero-subtitle" data-lang="hero_subtitle_2">Asesoría Corporativa Integral</span>
            <h1 className="hero-title" data-lang="hero_title_2">Soluciones Legales Preventivas para el Crecimiento Empresarial</h1>
            <p className="hero-desc" data-lang="hero_desc_2">Acompañamiento estratégico en contratos, fusiones, cumplimiento normativo y gobierno corporativo.</p>
            <div className="hero-actions">
              <a className="btn-gold" href="/contacto"><span data-lang="hero_btn1_2">Agendar Cita Presencial</span> <i className="fa-solid fa-arrow-right"></i></a>
              <a className="btn-outline" data-lang="hero_btn2_2" href="/areas">Áreas de Práctica</a>
            </div>
          </div>
        )}

        {current === 2 && (
          <div className="hero-content fade-slide">
            <span className="hero-subtitle" data-lang="hero_subtitle_3">Litigios y Defensa Especializada</span>
            <h1 className="hero-title" data-lang="hero_title_3">Representación Sólida ante Instancias Judiciales y Arbitrales</h1>
            <p className="hero-desc" data-lang="hero_desc_3">Estrategias procesales diseñadas a medida con absoluta confidencialidad y respaldo técnico.</p>
            <div className="hero-actions">
              <a className="btn-gold" href="/contacto"><span data-lang="hero_btn1_3">Consulta Legal</span> <i className="fa-solid fa-arrow-right"></i></a>
              <a className="btn-outline" data-lang="hero_btn2_3" href="/equipo">Nuestro Equipo</a>
            </div>
          </div>
        )}
      </div>

      {/* Controles: Flechas */}
      <button className="hero-arrow hero-prev" onClick={() => setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="hero-arrow hero-next" onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Controles: Puntos indicadores */}
      <div className="hero-dots">
        {[...Array(totalSlides)].map((_, i) => (
          <button key={i} className={`hero-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}