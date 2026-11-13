import "./Banner.css";

const bannerMarkup = `<section class="hero" id="inicio">
<div class="container">
<div class="hero-content">
<span class="hero-subtitle" data-lang="hero_subtitle">Excelencia &amp; Compromiso Jurídico</span>
<h1 class="hero-title" data-lang="hero_title">Defendemos sus Intereses con Rigor Estratégico y Ética</h1>
<p class="hero-desc" data-lang="hero_desc">Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio. Asesoramos a líderes y corporaciones con soluciones efectivas a la medida.</p>
<div class="hero-actions">
<a class="btn-gold" href="../contacto"><span data-lang="hero_btn1">Agendar Cita Presencial</span> <i class="fa-solid fa-arrow-right"></i></a>
<a class="btn-outline" data-lang="hero_btn2" href="/la-firma">Conocer La Firma</a>
</div>
</div>
</div>
</section>`;

export default function Banner() {
  return <div dangerouslySetInnerHTML={{ __html: bannerMarkup }} />;
}
