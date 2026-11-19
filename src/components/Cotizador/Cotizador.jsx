import './Cotizador.css';

const cotizadorMarkup = `<section id="cotizador">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_tariffs">Transparencia de Tarifas</span>
<h2 class="section-title" data-lang="calc_title">Calculadora de Servicios Legales</h2>
<p class="section-desc" data-lang="calc_desc">Estime los honorarios profesionales aproximados para su caso en pocos pasos.</p>
</div>
<div class="calculator-container">
<div class="calc-grid">
<div>
<div class="form-group">
<label data-lang="calc_label1" for="calc-area">Área Legal Requerida</label>
<select class="form-control" id="calc-area" onchange="calculateFee()">
<option data-lang="opt_corp" value="300">Derecho Corporativo / Asesoría</option>
<option data-lang="opt_lit" value="450">Litigios Civiles o Comerciales</option>
<option data-lang="opt_pen" value="500">Penal Económico &amp; Compliance</option>
<option data-lang="opt_inm" value="350">Derecho Inmobiliario / Saneamiento</option>
</select>
</div>
<div class="form-group">
<label data-lang="calc_label2" for="calc-complexity">Complejidad del Caso</label>
<select class="form-control" id="calc-complexity" onchange="calculateFee()">
<option data-lang="comp_std" value="1">Estándar (Revisión/Redacción)</option>
<option data-lang="comp_int" value="1.5">Intermedia (Audiencias/Negociación)</option>
<option data-lang="comp_high" value="2.2">Alta (Proceso Complejo/Arbitraje)</option>
</select>
</div>
<div class="form-group">
<label for="calc-hours"><span data-lang="calc_label3">Horas Estimadas de Patrocinio:</span> <span class="gold-text" id="hours-val">10h</span></label>
<input class="form-control" id="calc-hours" max="80" min="5" oninput="calculateFee()" type="range" value="10"/>
</div>
</div>
<div class="calc-result">
<span class="calc-result-title" data-lang="calc_est">Honorarios Estimados</span>
<div class="calc-amount" id="total-fee">S/ 3,000</div>
<p class="calc-disclaimer" data-lang="calc_disc">*Monto de referencia sujeto a revisión tras primera evaluación documental.</p>
<a class="btn-gold btn-full" data-lang="calc_btn" href="/contacto">Solicitar Propuesta Formal</a>
</div>
</div>
</div>
</div>
</section>`;

export default function Cotizador() {
  return <div dangerouslySetInnerHTML={{ __html: cotizadorMarkup }} />;
}
