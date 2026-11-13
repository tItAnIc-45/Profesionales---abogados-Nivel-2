import './Footer.css';

const footerMarkup = `<footer>
<div class="container">
<div class="footer-grid">
<div>
<a class="footer-logo" href="#">
<i class="fa-solid fa-scale-balanced gold-text"></i> TUPLUS ABOGADOS
                    </a>
<p class="footer-desc" data-lang="footer_desc">Firma legal comprometida con el desarrollo corporativo, la defensa jurídica integral y la excelencia en el patrocinio de nuestros clientes.</p>
</div>
<div>
<h4 class="footer-title" data-lang="foot_nav">Navegación</h4>
<ul class="footer-links">
<li><a data-lang="nav_firm" href="/la-firma">La Firma</a></li>
<li><a data-lang="nav_practices" href="/practicas">Áreas de Práctica</a></li>
<li><a data-lang="nav_team" href="/equipo">Nuestros Abogados</a></li>
<li><a data-lang="nav_calculator" href="/cotizador">Calculadora Legal</a></li>
</ul>
</div>
<div>
<h4 class="footer-title" data-lang="foot_legal">Legal</h4>
<ul class="footer-links">
<li><a data-en="Terms of Service" data-es="Términos de Servicio" href="#terminos" onclick="mostrarLegal('terminos')">Términos de Servicio</a></li>
<li><a data-en="Privacy Policy" data-es="Política de Privacidad" href="#privacidad" onclick="mostrarLegal('privacidad')">Política de Privacidad</a></li>
<li><a data-en="Code of Ethics" data-es="Código de Ética" href="#etica" onclick="mostrarLegal('etica')">Código de Ética</a></li>
</ul>
</div>

</div>
<div class="footer-bottom">
<div data-en="© 2026 TuPlus Abogados. All rights reserved." data-es="© 2026 TuPlus Abogados. Todos los derechos reservados.">© 2026 TuPlus Abogados. Todos los derechos reservados.</div>
<div data-en="Designed for High-Level Law Firm" data-es="Diseñado para Firma Jurídica de Alto Nivel">Diseñado para Firma Jurídica de Alto Nivel</div>
</div>
</div>
</footer>`;

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: footerMarkup }} />;
}
