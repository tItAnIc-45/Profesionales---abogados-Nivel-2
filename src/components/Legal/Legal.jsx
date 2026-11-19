import { useEffect } from 'react';

const legalMarkup = `<section class="section-secondary legal-section" id="terminos" style="padding: 4rem 0; scroll-margin-top: 90px;">
<div class="container">
<div class="section-header">
<span class="section-tag" data-en="Legal Framework" data-es="Marco Legal">Marco Legal</span>
<h2 class="section-title"><span data-en="Terms of " data-es="Términos de ">Términos de </span><span class="gold-text" data-en="Service" data-es="Servicio">Servicio</span></h2>
<p class="section-desc" data-en="General terms and conditions for using our legal services." data-es="Condiciones generales para la utilización de nuestros servicios jurídicos.">Condiciones generales para la utilización de nuestros servicios jurídicos.</p>
</div>
<div class="legal-content" style="max-width: 800px; margin: 0 auto; color: var(--text-muted); line-height: 1.8;">
<p data-en="Welcome to TuPlus Abogados. By accessing our website and using our corporate, civil, and criminal legal advisory services, you agree to comply with these terms and conditions." data-es="Bienvenido a TuPlus Abogados. Al acceder a nuestro sitio web y utilizar nuestros servicios de asesoría jurídica corporativa, civil y penal, usted acepta cumplir con los presentes términos y condiciones de uso." style="margin-bottom: 1.5rem;">Bienvenido a TuPlus Abogados. Al acceder a nuestro sitio web y utilizar nuestros servicios de asesoría jurídica corporativa, civil y penal, usted acepta cumplir con los presentes términos y condiciones de uso.</p>
<h3 data-en="1. Scope of Counseling" data-es="1. Alcance de la Asesoría" style="color: var(--text-light); margin-bottom: 0.5rem; font-size: 1.2rem;">1. Alcance de la Asesoría</h3>
<p data-en="The information provided on this website is for informational purposes only and does not constitute formal legal advice until a professional services contract is signed." data-es="La información proporcionada en este sitio web tiene fines meramente informativos y no constituye una asesoría legal formal hasta que se suscriba un contrato de prestación de servicios profesionales entre las partes." style="margin-bottom: 1.5rem;">La información proporcionada en este sitio web tiene fines meramente informativos y no constituye una asesoría legal formal hasta que se suscriba un contrato de prestación de servicios profesionales entre las partes.</p>
<h3 data-en="2. Intellectual Property" data-es="2. Propiedad Intelectual" style="color: var(--text-light); margin-bottom: 0.5rem; font-size: 1.2rem;">2. Propiedad Intelectual</h3>
<p data-en="All content, logos (including the hummingbird emblem), designs, text, and source code are the exclusive property of TuPlus Abogados." data-es="Todo el contenido, logotipos (incluyendo el emblema del colibrí), diseños, textos y código fuente son propiedad exclusiva de TuPlus Abogados." style="margin-bottom: 1.5rem;">Todo el contenido, logotipos (incluyendo el emblema del colibrí), diseños, textos y código fuente son propiedad exclusiva de TuPlus Abogados.</p>
<a class="btn-outline" data-en="Close / Back" data-es="Cerrar / Volver" href="/" style="margin-top: 1rem; display: inline-block;">Cerrar / Volver</a>
</div>
</div>
</section>
<section class="section-secondary legal-section" id="privacidad" style="padding: 4rem 0; scroll-margin-top: 90px;">
<div class="container">
<div class="section-header">
<span class="section-tag" data-en="Confidentiality" data-es="Confidencialidad">Confidencialidad</span>
<h2 class="section-title"><span data-en="Privacy " data-es="Política de ">Política de </span><span class="gold-text" data-en="Policy" data-es="Privacidad">Privacidad</span></h2>
<p class="section-desc" data-en="Absolute commitment to protecting your personal and corporate data." data-es="Compromiso absoluto con la protección de sus datos personales y corporativos.">Compromiso absoluto con la protección de sus datos personales y corporativos.</p>
</div>
<div class="legal-content" style="max-width: 800px; margin: 0 auto; color: var(--text-muted); line-height: 1.8;">
<p data-en="At TuPlus Abogados we value and respect your privacy. Data provided through our contact forms or fee calculator are handled under strict confidentiality standards." data-es="En TuPlus Abogados valoramos y respetamos su privacidad. Los datos proporcionados a través de nuestros formularios de contacto o calculadora de honorarios son tratados bajo rigurosos estándares de confidencialidad y secreto profesional." style="margin-bottom: 1.5rem;">En TuPlus Abogados valoramos y respetamos su privacidad. Los datos proporcionados a través de nuestros formularios de contacto o calculadora de honorarios son tratados bajo rigurosos estándares de confidencialidad y secreto profesional.</p>
<a class="btn-outline" data-en="Close / Back" data-es="Cerrar / Volver" href="/" style="margin-top: 1rem; display: inline-block;">Cerrar / Volver</a>
</div>
</div>
</section>
<section class="section-secondary legal-section" id="etica" style="padding: 4rem 0; scroll-margin-top: 90px;">
<div class="container">
<div class="section-header">
<span class="section-tag" data-en="Corporate Values" data-es="Valores Corporativos">Valores Corporativos</span>
<h2 class="section-title"><span data-en="Code of " data-es="Código de ">Código de </span><span class="gold-text" data-en="Ethics" data-es="Ética">Ética</span></h2>
<p class="section-desc" data-en="The moral and professional pillars governing our legal practice." data-es="Los pilares morales y profesionales que rigen nuestra práctica jurídica.">Los pilares morales y profesionales que rigen nuestra práctica jurídica.</p>
</div>
<div class="legal-content" style="max-width: 800px; margin: 0 auto; color: var(--text-muted); line-height: 1.8;">
<p data-en="Our legal professionals act under strict principles of integrity, loyalty, independence, and professional secrecy, ensuring an ethical defense of our clients' interests." data-es="Nuestros profesionales del derecho actúan bajo estrictos principios de probidad, lealtad, independencia y secreto profesional, garantizando una defensa ética y rigurosa de los intereses de nuestros clientes." style="margin-bottom: 1.5rem;">Nuestros profesionales del derecho actúan bajo estrictos principios de probidad, lealtad, independencia y secreto profesional, garantizando una defensa ética y rigurosa de los intereses de nuestros clientes.</p>
<a class="btn-outline" data-en="Close / Back" data-es="Cerrar / Volver" href="/" style="margin-top: 1rem; display: inline-block;">Cerrar / Volver</a>
</div>
</div>
</section>`;

export default function Legal() {
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: legalMarkup }} />;
}
