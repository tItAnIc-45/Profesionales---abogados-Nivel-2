import './Perfil.css';

const perfilMarkup = `<div class="modal" id="modal-mateo-alejandro">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-mateo-alejandro')">×</button>
<h2 class="profile-modal-name">MATEO ALEJANDRO VALDIVIA RIVERA</h2>
<p class="profile-modal-role" data-en="FOUNDING PARTNER" data-es="SOCIO FUNDADOR">SOCIO FUNDADOR</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> mateo.valdivia@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer specialized in Corporate Law and Mergers & Acquisitions from Universidad del Pacífico (2012). Completed studies in the Master's in Business Law at Universidad de Lima (2016)." data-es="Abogado especialista en Derecho Corporativo y Fusiones y Adquisiciones por la Universidad del Pacífico (2012). Estudios concluidos en la Maestría en Derecho de la Empresa de la Universidad de Lima (2016).">Abogado especialista en Derecho Corporativo y Fusiones y Adquisiciones por la Universidad del Pacífico (2012). Estudios concluidos en la Maestría en Derecho de la Empresa de la Universidad de Lima (2016).</p>
<p data-en="He holds a Master in Corporate Law (LL.M.) from Columbia Law School (2018). Additionally, he has a Specialization in Corporate Governance and Compliance from IE Business School, Madrid, Spain (2022)." data-es="Master in Corporate Law (LL.M.) por Columbia Law School (2018). Asimismo, cuenta con una Especialización en Gobierno Corporativo y Compliance por IE Business School, Madrid, España (2022).">Master in Corporate Law (LL.M.) por Columbia Law School (2018). Asimismo, cuenta con una Especialización en Gobierno Corporativo y Compliance por IE Business School, Madrid, España (2022).</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="His professional practice focuses on complex corporate advisory, cross-border commercial transactions, and the structuring of investment projects." data-es="Su práctica profesional se concentra en asesoría corporativa compleja, transacciones comerciales transfronterizas y estructuración de proyectos de inversión.">Su práctica profesional se concentra en asesoría corporativa compleja, transacciones comerciales transfronterizas y estructuración de proyectos de inversión.</p>
<p data-en="He is the author of various research papers and publications related to Corporate Law and business transactions." data-es="Es autor de diversos trabajos de investigación y publicaciones relacionados al Derecho Corporativo y las transacciones empresariales.">Es autor de diversos trabajos de investigación y publicaciones relacionados al Derecho Corporativo y las transacciones empresariales.</p>
<p data-en="He currently serves as Principal Partner at TuPlus Abogados, leading the corporate law department since 2015." data-es="Actualmente se desempeña como Socio Principal en Tuplus Abogados, liderando el departamento de derecho corporativo desde el año 2015.">Actualmente se desempeña como Socio Principal en Tuplus Abogados, liderando el departamento de derecho corporativo desde el año 2015.</p>
<h3 data-en="Theses and Publications:" data-es="Tesis y publicaciones:">Tesis y publicaciones:</h3>
<ul>
<li data-en="“Shareholders' agreements and their enforceability in Peruvian corporate law.” Themis Magazine No. 65, 2017." data-es="“Los pactos de accionistas y su oponibilidad en el derecho societario peruano.” Revista Themis N.° 65, 2017.">“Los pactos de accionistas y su oponibilidad en el derecho societario peruano.” Revista Themis N.° 65, 2017.</li>
<li data-en="“Corporate governance in family businesses: Challenges and perspectives for the Andean market.”" data-es="“Gobierno corporativo en empresas familiares: retos y perspectivas para el mercado andino.”">“Gobierno corporativo en empresas familiares: retos y perspectivas para el mercado andino.”</li>
<li data-en="“The liability of administrators in M&A operations.” In Commercial Law Yearbook, 2021." data-es="“La responsabilidad de los administradores en operaciones de M&A.” En Anuario de Derecho Mercantil, 2021.">“La responsabilidad de los administradores en operaciones de M&A.” En Anuario de Derecho Mercantil, 2021.</li>
</ul>
<h3 data-en="Memberships:" data-es="Membresías:">Membresías:</h3>
<ul>
<li data-en="Peruvian Institute of Mercantile Law (IPDM)." data-es="Instituto Peruano de Derecho Mercantil (IPDM).">Instituto Peruano de Derecho Mercantil (IPDM).</li>
<li data-en="Legal Committee of the Lima Chamber of Commerce." data-es="Comité Legal de la Cámara de Comercio de Lima.">Comité Legal de la Cámara de Comercio de Lima.</li>
<li data-en="Lima Bar Association." data-es="Colegio de Abogados de Lima.">Colegio de Abogados de Lima.</li>
</ul>
<h3 data-en="Teaching:" data-es="Docencia:">Docencia:</h3>
<ul>
<li data-en="2019-Present: Professor of Corporate Law at Universidad del Pacífico." data-es="2019-Presente: Docente del curso de Derecho Societario en la Universidad del Pacífico.">2019-Presente: Docente del curso de Derecho Societario en la Universidad del Pacífico.</li>
</ul>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
<li data-en="French" data-es="Francés">Francés</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-mateo-alejandro')">Cerrar</button>
</div>
</div>
</div>

<div class="modal" id="modal-martin-alonso">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-martin-alonso')">×</button>
<h2 class="profile-modal-name">MARTÍN ALONSO PAREDES ROJAS</h2>
<p class="profile-modal-role" data-en="PARTNER" data-es="SOCIO">SOCIO</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> martin.paredes@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer graduated in the top third, specialist in Tax Law and strategic fiscal planning." data-es="Abogado titulado con tercio superior, especialista en Derecho Tributario y planeamiento fiscal estratégico.">Abogado titulado con tercio superior, especialista en Derecho Tributario y planeamiento fiscal estratégico.</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="Lead partner in national and international tax consulting, and defense in complex fiscal disputes." data-es="Socio líder en consultoría tributaria nacional e internacional, y defensa en controversias fiscales complejas.">Socio líder en consultoría tributaria nacional e internacional, y defensa en controversias fiscales complejas.</p>
<h3 data-en="Theses and Publications:" data-es="Tesis y publicaciones:">Tesis y publicaciones:</h3>
<ul>
<li data-en="“Transfer pricing and its impact on corporate restructurings.” Themis Magazine No. 71, 2020." data-es="“Los precios de transferencia y su impacto en las reestructuraciones empresariales.” Revista Themis N.° 71, 2020.">“Los precios de transferencia y su impacto en las reestructuraciones empresariales.” Revista Themis N.° 71, 2020.</li>
</ul>
<h3 data-en="Memberships:" data-es="Membresías:">Membresías:</h3>
<ul>
<li data-en="Lima Bar Association." data-es="Colegio de Abogados de Lima.">Colegio de Abogados de Lima.</li>
<li data-en="Peruvian Institute of Tax Law (IPDT)." data-es="Instituto Peruano de Derecho Tributario (IPDT).">Instituto Peruano de Derecho Tributario (IPDT).</li>
</ul>
<h3 data-en="Teaching:" data-es="Docencia:">Docencia:</h3>
<ul>
<li data-en="Adjunct Professor of International Taxation at Universidad del Pacífico." data-es="Profesor adjunto de Tributación Internacional en la Universidad del Pacífico.">Profesor adjunto de Tributación Internacional en la Universidad del Pacífico.</li>
</ul>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-martin-alonso')">Cerrar</button>
</div>
</div>
</div>

<div class="modal" id="modal-sofia-valeria">
<div class="modal-content profile-modal-content">
<button class="modal-close" onclick="closeModal('modal-sofia-valeria')">×</button>
<h2 class="profile-modal-name">SOFÍA VALERIA CAMPOS HUAMÁN</h2>
<p class="profile-modal-role" data-en="PRINCIPAL ASSOCIATE" data-es="ASOCIADA PRINCIPAL">ASOCIADA PRINCIPAL</p>
<hr class="profile-divider"/>
<p class="profile-email"><i class="fa-solid fa-envelope"></i> sofia.campos@tuplusabogados.com.pe</p>
<div class="profile-modal-body">
<h3 data-en="Academic Background:" data-es="Formación académica:">Formación académica:</h3>
<p data-en="Lawyer specialized in Intellectual Property, New Technologies, and Data Protection." data-es="Abogada especialista en Propiedad Intelectual, Nuevas Tecnologías y Protección de Datos.">Abogada especialista en Propiedad Intelectual, Nuevas Tecnologías y Protección de Datos.</p>
<h3 data-en="Experience:" data-es="Experiencia:">Experiencia:</h3>
<p data-en="Senior legal advisor in charge of trademark and patent registration as well as technological regulatory compliance." data-es="Asesora legal senior encargada del registro de marcas, patentes y cumplimiento regulatorio tecnológico.">Asesora legal senior encargada del registro de marcas, patentes y cumplimiento regulatorio tecnológico.</p>
<h3 data-en="Memberships:" data-es="Membresías:">Membresías:</h3>
<ul>
<li data-en="Lima Bar Association." data-es="Colegio de Abogados de Lima.">Colegio de Abogados de Lima.</li>
<li data-en="Inter-American Association of Intellectual Property (ASIPI)." data-es="Asociación Interamericana de la Propiedad Intelectual (ASIPI).">Asociación Interamericana de la Propiedad Intelectual (ASIPI).</li>
</ul>
<h3 data-en="Languages:" data-es="Idiomas:">Idiomas:</h3>
<ul>
<li data-en="Spanish" data-es="Español">Español</li>
<li data-en="English" data-es="Inglés">Inglés</li>
<li data-en="Portuguese" data-es="Portugués">Portugués</li>
</ul>
</div>
<div class="text-right mt-3">
<button class="btn-gold" data-en="Close" data-es="Cerrar" onclick="closeModal('modal-sofia-valeria')">Cerrar</button>
</div>
</div>
</div>`;

export default function Perfil() {
  return <div dangerouslySetInnerHTML={{ __html: perfilMarkup }} />;
}
