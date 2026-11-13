import './WhatsappFloat.css';

const whatsappFloatMarkup = `<a class="whatsapp-float" href="https://wa.me/51999888777?text=Hola,%20deseo%20agendar%20una%20consulta%20legal%20con%20TuPlus%20Abogados." target="_blank" title="Contáctanos por WhatsApp">
<i class="fa-brands fa-whatsapp"></i>
</a>`;

export default function WhatsappFloat() {
  return <div dangerouslySetInnerHTML={{ __html: whatsappFloatMarkup }} />;
}
