// Control de Modales, Tema (Claro/Oscuro) e Idioma (Español/Inglés)

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('readmeModal');
    if (event.target === modal) {
        closeModal('readmeModal');
    }
}

// Modo Oscuro / Claro
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
    }
}

// Diccionario de Traducción Español / Inglés
const translations = {
    es: {
        nav_home: "Inicio",
        nav_firm: "La Firma",
        nav_practices: "Áreas de Práctica",
        nav_team: "Equipo",
        nav_calculator: "Cotizador",
        nav_contact: "Contacto",
        btn_consult: "Consulta Legal",
        hero_subtitle: "Excelencia & Compromiso Jurídico",
        hero_title: "Defendemos sus Intereses con Rigor Estratégico y Ética",
        hero_desc: "Firma legal multidisciplinaria especializada en derecho corporativo, civil, penal y regulatorio. Asesoramos a líderes y corporaciones con soluciones efectivas a la medida.",
        hero_btn1: "Agendar Cita Presencial",
        hero_btn2: "Conocer La Firma",
        tag_institutional: "Institucional",
        firm_title: "La Firma & Nuestra Identidad",
        firm_desc: "Trayectoria sólida basada en la confianza, integridad e innovación metodológica.",
        firm_h3: "Más de 20 Años Garantizando Seguridad Jurídica",
        firm_p1: "En TuPlus Abogados combinamos la tradición del ejercicio del derecho con un enfoque contemporáneo y ágil. Inspirados en estándares internacionales de alta exigencia, representamos a empresas nacionales e internacionales, así como a personas naturales en litigios complejos.",
        firm_p2: "El colibrí de nuestro emblema simboliza agilidad, precisión y la capacidad de responder con destreza ante escenarios cambiantes y desafiantes del marco normativo.",
        val1_title: "Rigor Analítico",
        val1_desc: "Examen profundo e individualizado de cada expediente.",
        val2_title: "Confidencialidad",
        val2_desc: "Protocolos estrictos de reserva y ética profesional.",
        val3_title: "Estrategia Directa",
        val3_desc: "Optimización de plazos e instancias de resolución.",
        val4_title: "Compromiso Total",
        val4_desc: "Acompañamiento cercano durante todo el proceso.",
        stat1: "Casos Ganados",
        stat2: "Tasa de Éxito",
        stat3: "Abogados Senior",
        stat4: "Premios Jurídicos",
        tag_specialties: "Especialidades",
        prac_title: "Áreas de Práctica",
        prac_desc: "Cobertura legal integral con equipos altamente especializados por materia.",
        srv1_title: "Derecho Corporativo",
        srv1_desc: "Fusiones, adquisiciones, reestructuración patrimonial, contratos comerciales y gobierno corporativo.",
        srv2_title: "Litigios y Arbitraje",
        srv2_desc: "Defensa estratégica en procesos judiciales civiles, comerciales y arbitrajes institucionales.",
        srv3_title: "Derecho Penal Económico",
        srv3_desc: "Asesoría preventiva y patrocinio en delitos corporativos, compliance y procesos penales complejos.",
        srv4_title: "Derecho Inmobiliario",
        srv4_desc: "Auditoría de predios, saneamiento de propiedades, licencias urbanísticas y desarrollo de proyectos.",
        srv5_title: "Derecho Laboral",
        srv5_desc: "Planeamiento contractual laboral, negociación colectiva, auditorías y procesos judiciales laborales.",
        srv6_title: "Derecho Tributario",
        srv6_desc: "Planificación fiscal estratégica, atención a fiscalizaciones y defensa ante la administración tributaria.",
        learn_more: "Saber más",
        tag_professionals: "Nuestros Profesionales",
        team_title: "Socios y Abogados Senior",
        team_desc: "Un equipo multidisciplinario reconocido por su rigor académico y experiencia procesal.",
        tag_tariffs: "Transparencia de Tarifas",
        calc_title: "Calculadora de Servicios Legales",
        calc_desc: "Estime los honorarios profesionales aproximados para su caso en pocos pasos.",
        calc_label1: "Área Legal Requerida",
        opt_corp: "Derecho Corporativo / Asesoría",
        opt_lit: "Litigios Civiles o Comerciales",
        opt_pen: "Penal Económico & Compliance",
        opt_inm: "Derecho Inmobiliario / Saneamiento",
        calc_label2: "Complejidad del Caso",
        comp_std: "Estándar (Revisión/Redacción)",
        comp_int: "Intermedia (Audiencias/Negociación)",
        comp_high: "Alta (Proceso Complejo/Arbitraje)",
        calc_label3: "Horas Estimadas de Patrocinio:",
        calc_est: "Honorarios Estimados",
        calc_disc: "*Monto de referencia sujeto a revisión tras primera evaluación documental.",
        calc_btn: "Solicitar Propuesta Formal",
        tag_direct: "Contacto Directo",
        contact_title: "Agende una Consulta",
        contact_desc: "Atención presencial en nuestra sede corporativa o virtual a través de videollamada.",
        addr_title: "Dirección Institucional",
        phone_title: "Central Telefónica",
        email_title: "Correo de Atención",
        form_name: "Nombre Completo / Razón Social",
        form_email: "Correo Electrónico",
        form_phone: "Teléfono / WhatsApp",
        form_spec: "Área de Consulta / Especialidad",
        form_msg: "Detalle de la Consulta Legal",
        form_btn: "Enviar Consulta a TuPlus Abogados",
        form_privacy: "Acepto la Política de Privacidad",
        form_privacy_link: "Ver política",
        footer_desc: "Firma legal comprometida con el desarrollo corporativo, la defensa jurídica integral y la excelencia en el patrocinio de nuestros clientes.",
        foot_nav: "Navegación",
        foot_legal: "Legal",
        foot_terms: "Términos de Servicio",
        foot_privacy: "Política de Privacidad",
        foot_ethics: "Código de Ética"
    },
    en: {
        nav_home: "Home",
        nav_firm: "The Firm",
        nav_practices: "Practice Areas",
        nav_team: "Team",
        nav_calculator: "Calculator",
        nav_contact: "Contact",
        btn_consult: "Legal Consultation",
        hero_subtitle: "Excellence & Legal Commitment",
        hero_title: "Defending Your Interests with Strategic Rigor and Ethics",
        hero_desc: "Multidisciplinary law firm specialized in corporate, civil, criminal, and regulatory law. We advise leaders and corporations with tailored, effective solutions.",
        hero_btn1: "Schedule In-Person Meeting",
        hero_btn2: "About The Firm",
        tag_institutional: "Institutional",
        firm_title: "The Firm & Our Identity",
        firm_desc: "Solid track record built on trust, integrity, and methodological innovation.",
        firm_h3: "Over 20 Years Guaranteeing Legal Security",
        firm_p1: "At TuPlus Abogados we combine traditional legal practice with a contemporary, agile approach. Inspired by high international standards, we represent national and international corporations as well as individuals in complex litigation.",
        firm_p2: "The hummingbird in our emblem symbolizes agility, precision, and the ability to respond skillfully to changing and challenging regulatory scenarios.",
        val1_title: "Analytical Rigor",
        val1_desc: "Deep and individualized examination of each case file.",
        val2_title: "Confidentiality",
        val2_desc: "Strict protocols of reserve and professional ethics.",
        val3_title: "Direct Strategy",
        val3_desc: "Optimization of deadlines and resolution instances.",
        val4_title: "Total Commitment",
        val4_desc: "Close accompaniment throughout the entire process.",
        stat1: "Cases Won",
        stat2: "Success Rate",
        stat3: "Senior Lawyers",
        stat4: "Legal Awards",
        tag_specialties: "Specialties",
        prac_title: "Practice Areas",
        prac_desc: "Comprehensive legal coverage with highly specialized teams by subject matter.",
        srv1_title: "Corporate Law",
        srv1_desc: "Mergers, acquisitions, asset restructuring, commercial contracts, and corporate governance.",
        srv2_title: "Litigation & Arbitration",
        srv2_desc: "Strategic defense in civil and commercial judicial proceedings and institutional arbitrations.",
        srv3_title: "Economic Criminal Law",
        srv3_desc: "Preventive counseling and sponsorship in corporate crimes, compliance, and complex criminal proceedings.",
        srv4_title: "Real Estate Law",
        srv4_desc: "Land auditing, property sanitization, urban licenses, and project development.",
        srv5_title: "Labor Law",
        srv5_desc: "Labor contract planning, collective bargaining, audits, and labor lawsuits.",
        srv6_title: "Tax Law",
        srv6_desc: "Strategic tax planning, audit attendance, and defense before the tax administration.",
        learn_more: "Learn more",
        tag_professionals: "Our Professionals",
        team_title: "Partners & Senior Lawyers",
        team_desc: "A multidisciplinary team recognized for academic rigor and procedural expertise.",
        tag_tariffs: "Tariff Transparency",
        calc_title: "Legal Services Calculator",
        calc_desc: "Estimate approximate professional fees for your case in a few steps.",
        calc_label1: "Required Legal Area",
        opt_corp: "Corporate Law / Advisory",
        opt_lit: "Civil or Commercial Litigation",
        opt_pen: "Economic Criminal & Compliance",
        opt_inm: "Real Estate Law / Sanitization",
        calc_label2: "Case Complexity",
        comp_std: "Standard (Review/Drafting)",
        comp_int: "Intermediate (Hearings/Negotiation)",
        comp_high: "High (Complex Process/Arbitrage)",
        calc_label3: "Estimated Sponsorship Hours:",
        calc_est: "Estimated Fees",
        calc_disc: "*Reference amount subject to review after initial document evaluation.",
        calc_btn: "Request Formal Proposal",
        tag_direct: "Direct Contact",
        contact_title: "Schedule a Consultation",
        contact_desc: "In-person attention at our corporate headquarters or virtual via video call.",
        addr_title: "Institutional Address",
        phone_title: "Telephone Exchange",
        email_title: "Support Email",
        form_name: "Full Name / Company Name",
        form_email: "Email Address",
        form_phone: "Phone / WhatsApp",
        form_spec: "Consultation Area / Specialty",
        form_msg: "Details of Legal Inquiry",
        form_btn: "Send Inquiry to TuPlus Abogados",
        form_privacy: "I accept the Privacy Policy",
        form_privacy_link: "View policy",
        footer_desc: "Law firm committed to corporate development, comprehensive legal defense, and excellence in client advocacy.",
        foot_nav: "Navigation",
        foot_legal: "Legal",
        foot_terms: "Terms of Service",
        foot_privacy: "Privacy Policy",
        foot_ethics: "Code of Ethics"
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('langText').innerText = currentLang === 'es' ? 'EN' : 'ES';
    
    // Translate data-lang elements
    const langElements = document.querySelectorAll('[data-lang]');
    langElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Translate data-es / data-en elements
    const attrElements = document.querySelectorAll('[data-es][data-en]');
    attrElements.forEach(el => {
        const newText = el.getAttribute('data-' + currentLang);
        if (newText) {
            el.innerText = newText;
        }
    });
}

function mostrarLegal(idSeccion) {
    document.querySelectorAll('.legal-section').forEach(sec => {
        sec.style.display = 'none';
    });
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.style.display = 'block';
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}

function cerrarLegal() {
    document.querySelectorAll('.legal-section').forEach(sec => {
        sec.style.display = 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Botón Scroll Top Flotante
window.addEventListener('scroll', function() {
    const btnScroll = document.getElementById('btnScrollTop');
    if (btnScroll) {
        if (window.scrollY > 300) {
            btnScroll.classList.add('show');
        } else {
            btnScroll.classList.remove('show');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Compatibilidad con los manejadores inline del HTML original.
Object.assign(window, { openModal, closeModal, toggleTheme, toggleLanguage, mostrarLegal, cerrarLegal, scrollToTop });
