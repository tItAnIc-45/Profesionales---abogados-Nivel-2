import './Contacto.css';

const contactoMarkup = `<section class="section-secondary" id="contacto">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_direct">Contacto Directo</span>
<h2 class="section-title" data-lang="contact_title">Agende una Consulta</h2>
<p class="section-desc" data-lang="contact_desc">Atención presencial en nuestra sede corporativa o virtual a través de videollamada.</p>
</div>
<div class="contact-grid">
<div>
<div class="contact-info-card">
<h4><i class="fa-solid fa-location-dot"></i> <span data-lang="addr_title">Dirección Institucional</span></h4>
<p>Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Perú</p>
</div>
<div class="contact-info-card">
<h4><i class="fa-solid fa-phone"></i> <span data-lang="phone_title">Central Telefónica</span></h4>
<p>+51 (1) 555-666 / +51 999 888 777</p>
</div>
<div class="contact-info-card">
<h4><i class="fa-solid fa-envelope"></i> <span data-lang="email_title">Correo de Atención</span></h4>
<p>contacto@tuplusabogados.com.pe</p>
</div>
<div class="map-container">
<iframe allowfullscreen="" height="180" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.968270544158!2d-77.0304!3d-12.0975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzUxLjAiUyA3N8KwMDEnNDkuNCJX!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe" style="border:0; border-radius: 8px;" width="100%">
</iframe>
</div>
</div>
<form action={${import.meta.env.VITE_FORMSPREE_ENDPOINT || ''}} method="POST">
<div class="form-group">
<label data-lang="form_name" for="nombre">Nombre Completo / Razón Social</label>
<input class="form-control" id="nombre" name="nombre" placeholder="Ej: Juan Pérez / Empresa S.A.C." required="" type="text"/>
</div>
<div class="form-group">
<label data-lang="form_email" for="email">Correo Electrónico</label>
<input class="form-control" id="email" name="email" placeholder="correo@empresa.com" required="" type="email"/>
</div>
<div class="form-group">
<label data-lang="form_phone" for="telefono">Teléfono / WhatsApp</label>
<input class="form-control" id="telefono" name="telefono" placeholder="+51 999 888 777" type="tel"/>
</div>
<div class="form-group">
<label data-lang="form_spec" for="especialidad">Área de Consulta / Especialidad</label>
<select class="form-control" id="especialidad" name="especialidad">
<option value="Derecho Corporativo">Derecho Corporativo</option>
<option value="Litigios y Arbitraje">Litigios y Arbitraje</option>
<option value="Derecho Penal Económico">Derecho Penal Económico</option>
<option value="Derecho Inmobiliario">Derecho Inmobiliario</option>
<option value="Derecho Laboral">Derecho Laboral</option>
<option value="Derecho Tributario">Derecho Tributario</option>
<option value="Consulta General">Consulta General</option>
</select>
</div>
<div class="form-group">
<label data-lang="form_msg" for="mensaje">Detalle de la Consulta Legal</label>
<textarea class="form-control" id="mensaje" name="mensaje" placeholder="Describa brevemente su situación jurídica..." required="" rows="4"></textarea>
</div>
<button class="btn-gold btn-full" data-lang="form_btn" type="submit">Enviar Consulta a TuPlus Abogados</button>
</form>
</div>
</div>
</section>`;

export default function Contacto() {
  return <div dangerouslySetInnerHTML={{ __html: contactoMarkup }} />;
}
