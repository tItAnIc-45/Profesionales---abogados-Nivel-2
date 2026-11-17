import { useState, useEffect } from "react";
import "./Banner.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    subtitleKey: "hero_subtitle",
    subtitle: "Excelencia & Compromiso Jurídico",
    titleKey: "hero_title",
    title: "Defendemos sus Intereses con Rigor Estratégico y Ética",
    descKey: "hero_desc",
    desc: "Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio.",
    btn1Key: "hero_btn1",
    btn1Text: "Agendar Cita Presencial",
    btn1Link: "/contacto",
    btn2Key: "hero_btn2",
    btn2Text: "Conocer La Firma",
    btn2Link: "/la-firma",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600",
    subtitleKey: "hero_subtitle_2",
    subtitle: "Asesoría Corporativa Integral",
    titleKey: "hero_title_2",
    title: "Soluciones Legales Preventivas para el Crecimiento Empresarial",
    descKey: "hero_desc_2",
    desc: "Acompañamiento estratégico en contratos, fusiones, cumplimiento normativo y gobierno corporativo.",
    btn1Key: "hero_btn1_2",
    btn1Text: "Agendar Cita Presencial",
    btn1Link: "/contacto",
    btn2Key: "hero_btn2_2",
    btn2Text: "Áreas de Práctica",
    btn2Link: "/servicios",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600",
    subtitleKey: "hero_subtitle_3",
    subtitle: "Litigios y Defensa Especializada",
    titleKey: "hero_title_3",
    title: "Representación Sólida ante Instancias Judiciales y Arbitrales",
    descKey: "hero_desc_3",
    desc: "Estrategias procesales diseñadas a medida con absoluta confidencialidad y respaldo técnico.",
    btn1Key: "hero_btn1_3",
    btn1Text: "Consulta Legal",
    btn1Link: "/contacto",
    btn2Key: "hero_btn2_3",
    btn2Text: "Nuestro Equipo",
    btn2Link: "/equipo",
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const activeSlide = slides[currentIndex];

  return (
    <section
      className="hero"
      id="inicio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundImage: `linear-gradient(rgba(6, 14, 26, 0.85), rgba(6, 14, 26, 0.95)), url('${activeSlide.image}')`,
      }}
    >
      {/* Flecha Anterior */}
      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        onClick={prevSlide}
        aria-label="Diapositiva anterior"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Contenido Principal */}
      <div className="container">
        <div className="hero-content fade-slide" key={activeSlide.id}>
          <span className="hero-subtitle" data-lang={activeSlide.subtitleKey}>
            {activeSlide.subtitle}
          </span>
          <h1 className="hero-title" data-lang={activeSlide.titleKey}>
            {activeSlide.title}
          </h1>
          <p className="hero-desc" data-lang={activeSlide.descKey}>
            {activeSlide.desc}
          </p>
          <div className="hero-actions">
            <a className="btn-gold" href={activeSlide.btn1Link}>
              <span data-lang={activeSlide.btn1Key}>{activeSlide.btn1Text}</span>{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="btn-outline"
              data-lang={activeSlide.btn2Key}
              href={activeSlide.btn2Link}
            >
              {activeSlide.btn2Text}
            </a>
          </div>
        </div>
      </div>

      {/* Flecha Siguiente */}
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        onClick={nextSlide}
        aria-label="Siguiente diapositiva"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Indicadores inferiores (puntos) */}
      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}