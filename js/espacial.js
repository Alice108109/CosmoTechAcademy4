/*
 * Curso 3: Sistemas Aeroespaciales e Informática Espacial 
 */
var COURSE_ESPACIAL = [
  { id: 1, tiempo: '25 minutos', titulo: 'Módulo 1 · Computación y sistemas embebidos a bordo', html:
'<h3>La computadora que viaja con la nave 🛰️</h3>' +
'<p>Una nave, un satélite o un rover no se controlan con una PC común: usan <strong>sistemas embebidos</strong>, computadoras diseñadas para una función específica dentro de un sistema mayor. La <strong>computadora de a bordo</strong> (OBC, <em>On-Board Computer</em>) lee sensores, ejecuta órdenes, controla la orientación y administra la energía.</p>' +
'<h3>Arquitectura típica de a bordo</h3>' +
      '<ul>' +
      '<li><strong>Procesador o microcontrolador:</strong> ejecuta el software de vuelo.</li>' +
      '<li><strong>Memoria:</strong> RAM para trabajar y memoria no volátil para guardar el programa y los datos.</li>' +
      '<li><strong>FPGA:</strong> circuitos reconfigurables para tareas rápidas (procesar señales o imágenes).</li>' +
      '<li><strong>Interfaces y buses:</strong> conectan sensores, actuadores y radios (por ejemplo, SpaceWire, CAN o I2C).</li>' +
      '</ul>' +
'<img src="img/on.png" alt="Diagrama de la computadora de a bordo" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Procesadores famosos en el espacio</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Sistema</th>' +
      '<th>Dónde se usó</th>' +
      '<th>Dato curioso</th>' +
      '</tr>' +
      '<tr>' +
      '<td>Apollo Guidance Computer</td>' +
      '<td>Misiones Apollo (años 60 y 70)</td>' +
      '<td>Palabras de 16 bits y apenas unos 2 K de RAM y 36 K de ROM</td>' +
      '</tr>' +
      '<tr>' +
      '<td>RAD750</td>' +
      '<td>Rovers Curiosity y Perseverance</td>' +
      '<td>Basado en PowerPC, resistente a la radiación, hasta 200 MHz</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Familia LEON (SPARC)</td>' +
      '<td>Misiones de la Agencia Espacial Europea (ESA)</td>' +
      '<td>Diseño abierto, pensado para uso espacial</td>' +
      '</tr>' +
      '</table>' +
'<h3>Sistemas operativos de tiempo real (RTOS)</h3>' +
      '<p>Un <strong>RTOS</strong> garantiza que cada tarea responda dentro de un <strong>plazo definido</strong>. No se trata de ser el más rápido, sino de ser <strong>predecible</strong>: si el sistema de orientación llega tarde, la nave puede perder la comunicación o el rumbo.</p>' +
      '<ul>' +
      '<li><strong>VxWorks:</strong> usado en varias misiones a Marte, incluidos Curiosity y Perseverance.</li>' +
      '<li><strong>RTEMS:</strong> libre y común en misiones europeas.</li>' +
      '<li><strong>FreeRTOS:</strong> ligero, frecuente en microcontroladores y CubeSats.</li>' +
      '<li><strong>cFS (core Flight System):</strong> marco de software de vuelo de la NASA.</li>' +
      '</ul>' +
'<h3>Software crítico y tolerante a fallos</h3>' +
      '<p>En el espacio no hay técnico que reinicie el equipo. Por eso el software se diseña para <strong>detectar, contener y recuperarse</strong> de fallas:</p>' +
      '<ul>' +
      '<li><strong>Redundancia:</strong> varias computadoras o copias de un circuito; si una falla, otra continúa.</li>' +
      '<li><strong>Temporizador watchdog:</strong> reinicia el sistema si deja de responder.</li>' +
      '<li><strong>Modo seguro (safe mode):</strong> la nave apaga lo no esencial y espera instrucciones.</li>' +
      '<li><strong>Códigos de corrección de errores (ECC):</strong> reparan bits dañados en la memoria.</li>' +
      '</ul>' +
'<div class="note">📚 <strong>Lecciones reales:</strong> en 1996 el primer vuelo del cohete Ariane 5 se perdió por un desbordamiento al convertir un número de 64 bits a 16 bits. En 1997 la sonda Mars Pathfinder se reiniciaba en Marte por un problema de prioridades entre tareas (inversión de prioridad); los ingenieros lo corrigieron enviando una actualización desde la Tierra.</div>' +
'<p>Más información: <a href="https://es.wikipedia.org/wiki/Sistema_operativo_de_tiempo_real" target="_blank" rel="noopener">Sistema operativo de tiempo real</a> · <a href="https://es.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank" rel="noopener">Apollo Guidance Computer</a>.</p>' +
'<img src="img/apollo.jpg" alt="Apollo Guidance Computer y RAD750" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<figure><iframe src="https://www.youtube.com/embed/xIDAILCAjF4?si=USmB8qB_DGKNbIqz" title="Computadoras de a bordo" loading="lazy" allowfullscreen></iframe><figcaption>Video 1: Computadoras y software de vuelo</figcaption></figure>' },

  { id: 2, tiempo: '25 minutos', titulo: 'Módulo 2 · El entorno espacial y su impacto en el hardware', html:
'<h3>Un ambiente hostil para la electrónica ☢️</h3>' +
'<p>Los circuitos que funcionan perfecto en la Tierra pueden fallar en órbita. La atmósfera y el campo magnético terrestre nos protegen; fuera de ellos, la electrónica enfrenta condiciones extremas.</p>' +
      '<table>' +
      '<tr>' +
      '<th>Factor</th>' +
      '<th>Cómo afecta al hardware</th>' +
      '</tr>' +
      '<tr>' +
      '<td>☢️ Radiación cósmica y solar</td>' +
      '<td>Partículas cargadas alteran o dañan los transistores.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🌡️ Temperaturas extremas</td>' +
      '<td>Entre la luz solar y la sombra, la temperatura cambia cientos de grados; los materiales se dilatan y se fatigan.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🕳️ Vacío</td>' +
      '<td>No hay aire para enfriar: el calor solo sale por conducción y radiación. Algunos materiales liberan gases (desgasificación).</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🚀 Lanzamiento</td>' +
      '<td>Vibraciones y golpes intensos que pueden aflojar o romper componentes.</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/espacio.jpg" alt="Radiación, vacío y temperaturas extremas" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Efectos de la radiación en los chips</h3>' +
      '<ul>' +
      '<li><strong>Dosis total ionizante (TID):</strong> daño acumulado con el tiempo que degrada el chip hasta que falla.</li>' +
      '<li><strong>Evento único (SEE):</strong> una sola partícula provoca un efecto inmediato:' +
      '<ul>' +
      '<li><strong>SEU (<em>Single Event Upset</em>):</strong> cambia un bit de 0 a 1 o viceversa (<em>bit flip</em>).</li>' +
      '<li><strong>SEL (<em>Single Event Latch-up</em>):</strong> un cortocircuito interno que puede quemar el chip si no se apaga a tiempo.</li>' +
      '</ul></li>' +
      '</ul>' +
'<img src="img/error.jpg" alt="Una partícula cambia un bit en memoria" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Endurecimiento contra la radiación (Radiation-Hardening)</h3>' +
      '<ul>' +
      '<li><strong>Por diseño:</strong> triple redundancia modular (TMR: tres copias y vota la mayoría), memorias con ECC y diseños de circuito más robustos.</li>' +
      '<li><strong>Por proceso de fabricación:</strong> materiales y técnicas especiales (por ejemplo, silicio sobre aislante).</li>' +
      '<li><strong>Blindaje:</strong> cubiertas de metal que frenan parte de las partículas.</li>' +
      '<li><strong>Por software:</strong> revisar y reescribir la memoria periódicamente (<em>scrubbing</em>) para corregir errores.</li>' +
      '</ul>' +
'<h3>COTS vs componentes de grado espacial</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Característica</th>' +
      '<th>COTS (comerciales)</th>' +
      '<th>Grado espacial</th>' +
      '</tr>' +
      '<tr><td>Costo</td><td>Bajo</td><td>Muy alto</td></tr>' +
      '<tr><td>Rendimiento</td><td>Muy alto y moderno</td><td>Menor, tecnología más antigua y probada</td></tr>' +
      '<tr><td>Tolerancia a radiación</td><td>Limitada</td><td>Diseñada y certificada</td></tr>' +
      '<tr><td>Uso típico</td><td>CubeSats y misiones cortas</td><td>Misiones largas y de alto riesgo</td></tr>' +
      '</table>' +
'<p>Lee más: <a href="https://www.berthold.com/es/control-de-procesos/base-de-conocimientos/radiacion-cosmica/" target="_blank" rel="noopener">Radiación cósmica</a> · <a href="https://es.wikipedia.org/wiki/Endurecimiento_frente_a_la_radiaci%C3%B3n" target="_blank" rel="noopener">Endurecimiento frente a la radiación</a>.</p>' +
'<figure><iframe src="https://www.youtube.com/embed/hASGEC43Rh4?si=ggD3SX0zVOfjq_OO" title="Radiación y electrónica espacial" loading="lazy" allowfullscreen></iframe><figcaption>Video 2: Radiación y hardware espacial</figcaption></figure>' }, 

  { id: 3, tiempo: '25 minutos', titulo: 'Módulo 3 · Telemetría, seguimiento y control de misiones', html:
'<h3>Hablar con una nave a millones de kilómetros 📡</h3>' +
'<p>Una misión espacial necesita tres funciones de comunicación que se parecen mucho a lo que viste en el curso de Redes:</p>' +
      '<table>' +
      '<tr>' +
      '<th>Función</th>' +
      '<th>Dirección</th>' +
      '<th>Qué hace</th>' +
      '</tr>' +
      '<tr>' +
      '<td>Telemetría (TM)</td>' +
      '<td>Nave → Tierra</td>' +
      '<td>Envía datos científicos y el estado de salud de la nave.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Telecomando (TC)</td>' +
      '<td>Tierra → nave</td>' +
      '<td>Envía órdenes y actualizaciones de software.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Seguimiento (tracking)</td>' +
      '<td>Ambas</td>' +
      '<td>Mide la distancia y la velocidad (efecto Doppler) para conocer la posición.</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/comu.jpeg" alt="Enlace de comunicación nave-Tierra" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Del sensor a la antena</h3>' +
      '<ol>' +
      '<li><strong>Captura:</strong> los sensores miden temperatura, energía, orientación, imágenes…</li>' +
      '<li><strong>Empaquetado:</strong> los datos se organizan en paquetes (estándares CCSDS).</li>' +
      '<li><strong>Codificación:</strong> se agregan códigos de corrección de errores (por ejemplo, Reed-Solomon o LDPC).</li>' +
      '<li><strong>Modulación y transmisión:</strong> la señal viaja por radiofrecuencia (bandas S, X, Ka) o por láser.</li>' +
      '<li><strong>Recepción y decodificación</strong> en una antena en Tierra.</li>' +
      '</ol>' +
'<h3>Deep Space Network (DSN)</h3>' +
      '<p>La DSN de la NASA es una red de grandes antenas en tres complejos separados por unos 120° de longitud: <strong>Goldstone</strong> (California, EE. UU.), <strong>Madrid</strong> (España) y <strong>Canberra</strong> (Australia). Así, mientras la Tierra gira, siempre hay una antena con vista a la nave. La Agencia Espacial Europea tiene una red similar llamada ESTRACK.</p>' +
 '<img src="img/deep.png" alt="Complejos de la Deep Space Network" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Retos: latencia y pérdida de paquetes</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Característica</th>' +
      '<th>Internet en la Tierra</th>' +
      '<th>Espacio profundo</th>' +
      '</tr>' +
      '<tr><td>Retardo (un sentido)</td><td>Milisegundos</td><td>1.3 s a la Luna · de 3 a 22 min a Marte · más de 22 horas a Voyager 1</td></tr>' +
      '<tr><td>Conexión</td><td>Casi siempre disponible</td><td>Intermitente (la nave se oculta tras un planeta o gira)</td></tr>' +
      '<tr><td>Velocidad</td><td>Megabits o gigabits por segundo</td><td>Voyager 1 transmite a unos 160 bits por segundo</td></tr>' +
      '<tr><td>Errores</td><td>Pocos</td><td>Muchos: la señal llega extremadamente débil</td></tr>' +
      '</table>' +
      '<ul>' +
      '<li>Con tanta demora, protocolos como TCP (que esperan confirmaciones) no funcionan bien.</li>' +
      '<li><strong>DTN (<em>Delay/Disruption-Tolerant Networking</em>):</strong> guarda los datos en cada nodo y los reenvía cuando hay enlace (<em>store-and-forward</em>).</li>' +
      '<li><strong>Relevos:</strong> los orbitadores de Marte retransmiten los datos de los rovers hacia la Tierra.</li>' +
      '<li><strong>Comunicación láser:</strong> la demostración DSOC de la NASA, a bordo de la misión Psyche, probó enviar datos con láser a mucha más velocidad que con radio.</li>' +
      '</ul>' +
'<p>Más información: <a href="https://plus.nasa.gov/video/que-es-la-red-de-espacio-profundo-y-donde-se-encuentra-2/" target="_blank" rel="noopener">Red del Espacio Profundo</a> · <a href="https://es.wikipedia.org/wiki/Telemetr%C3%ADa" target="_blank" rel="noopener">Telemetría</a>.</p>' +
'<figure><iframe src="https://www.youtube.com/embed/dZRC6Tf2YEo?si=VHjW6zeZOJfOeaQG" title="Deep Space Network" loading="lazy" allowfullscreen></iframe><figcaption>Video 3: Telemetría y Deep Space Network</figcaption></figure>' },

  { id: 4, tiempo: '25 minutos', titulo: 'Módulo 4 · Teledetección y procesamiento de datos satelitales', html:
'<h3>Ver la Tierra (y el universo) desde arriba 🌍</h3>' +
'<p>La <strong>teledetección</strong> es obtener información de un objeto sin tocarlo, midiendo la energía que refleja o emite. Los satélites llevan sensores que convierten esa energía en datos.</p>' +
'<h3>Tipos de sensores</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Sensor</th>' +
      '<th>Tipo</th>' +
      '<th>Qué mide</th>' +
      '<th>Aplicación</th>' +
      '</tr>' +
      '<tr>' +
      '<td>Cámara multiespectral</td>' +
      '<td>Pasivo</td>' +
      '<td>Luz reflejada en varias bandas (visible e infrarrojo)</td>' +
      '<td>Salud de cultivos y bosques</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Radiómetro infrarrojo térmico</td>' +
      '<td>Pasivo</td>' +
      '<td>Calor emitido</td>' +
      '<td>Incendios, temperatura del mar</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Radar (SAR)</td>' +
      '<td>Activo</td>' +
      '<td>Eco de microondas; funciona de noche y entre nubes</td>' +
      '<td>Relieve, inundaciones, deformación del terreno</td>' +
      '</tr>' +
      '<tr>' +
      '<td>LiDAR / altímetro láser</td>' +
      '<td>Activo</td>' +
      '<td>Tiempo de ida y vuelta de un pulso láser</td>' +
      '<td>Altura de la superficie, bosques y hielo</td>' +
      '</tr>' +
      '</table>' +
'<p><strong>Pasivo:</strong> usa la luz del Sol o el calor del objeto. <strong>Activo:</strong> emite su propia señal y mide el eco.</p>' +
'<img src="img/tele.jpeg" alt="Sensores pasivos y activos" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Del dato crudo a la información útil</h3>' +
      '<ol>' +
      '<li><strong>Recepción:</strong> el satélite envía los datos a una estación terrena.</li>' +
      '<li><strong>Correcciones:</strong> se ajustan errores del sensor y de la atmósfera, y se georreferencian (cada píxel recibe su coordenada).</li>' +
      '<li><strong>Análisis:</strong> se calculan índices, se clasifican superficies o se detectan cambios.</li>' +
      '<li><strong>Visualización:</strong> mapas e imágenes para tomar decisiones.</li>' +
      '</ol>' +
'<h3>Programación aplicada: el índice NDVI</h3>' +
      '<p>El <strong>NDVI</strong> mide qué tan verde y sana está la vegetación usando las bandas del infrarrojo cercano (NIR) y del rojo:</p>' +
      '<pre style="overflow-x:auto;background:rgba(255,255,255,.08);padding:12px;border-radius:10px"><code>import numpy as np\n\n# nir y rojo son matrices (imágenes) del mismo tamaño\nndvi = (nir - rojo) / (nir + rojo)\n\n# Valores cercanos a 1: vegetación densa. Cercanos a 0: suelo. Negativos: agua.</code></pre>' +
      '<p>Herramientas comunes: Python (NumPy, Rasterio, GDAL), formatos como GeoTIFF y NetCDF, y plataformas como Google Earth Engine.</p>' +
'<img src="img/ndvi.png" alt="Mapa de NDVI" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Aplicaciones prácticas</h3>' +
      '<ul>' +
      '<li><strong>Observación de la Tierra:</strong> agricultura, cobertura forestal, crecimiento de ciudades y monitoreo de volcanes (satélites como Landsat y Sentinel-2).</li>' +
      '<li><strong>Meteorología:</strong> seguimiento de huracanes y pronóstico del tiempo (satélites geoestacionarios como GOES).</li>' +
      '<li><strong>Astronomía:</strong> telescopios espaciales como Hubble y James Webb observan sin la distorsión de la atmósfera.</li>' +
      '</ul>' +
'<p>Lee más: <a href="https://es.wikipedia.org/wiki/Teledetecci%C3%B3n" target="_blank" rel="noopener">Teledetección</a> · <a href="https://es.wikipedia.org/wiki/%C3%8Dndice_de_vegetaci%C3%B3n_de_diferencia_normalizada" target="_blank" rel="noopener">NDVI</a>.</p>' +
'<figure><iframe src="https://www.youtube.com/embed/sZzAS4w_RqI?si=WJDKOXDhlsEp7PJn" title="Teledetección satelital" loading="lazy" allowfullscreen></iframe><figcaption>Video 4: Teledetección y observación de la Tierra</figcaption></figure>' },

  { id: 5, tiempo: '20 minutos', titulo: 'Módulo 5 · Futuro de la exploración: autonomía, IA y ciberseguridad', html:
'<h3>Naves que piensan por sí mismas 🤖</h3>' +
'<p>Cuanto más lejos va una misión, menos puede depender de la Tierra: con minutos u horas de retardo, la nave debe <strong>decidir sola</strong>. Este módulo une lo aprendido en los tres cursos.</p>' +
'<h3>Autonomía e inteligencia artificial a bordo</h3>' +
      '<ul>' +
      '<li><strong>Navegación autónoma:</strong> rovers como Perseverance usan visión por computadora para elegir rutas seguras sin esperar órdenes (sistema AutoNav).</li>' +
      '<li><strong>IA en órbita:</strong> el satélite experimental Φsat-1 de la ESA usó aprendizaje automático para descartar imágenes con nubes antes de enviarlas, ahorrando ancho de banda.</li>' +
      '<li><strong>Computación en el borde (<em>edge computing</em>):</strong> procesar los datos en la nave en vez de transmitirlos todos.</li>' +
      '</ul>' +
'<img src="img/rover.jpg" alt="Rover con navegación autónoma" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Ciberseguridad espacial 🛡️</h3>' +
      '<p>Un satélite es una computadora conectada por radio: también puede ser atacada. Las medidas básicas incluyen:</p>' +
      '<ul>' +
      '<li><strong>Cifrado y autenticación</strong> de los telecomandos, para que solo órdenes legítimas sean aceptadas.</li>' +
      '<li><strong>Protección contra interferencia</strong> (<em>jamming</em>) y suplantación de señales GPS (<em>spoofing</em>).</li>' +
      '<li><strong>Segmentos terrestres seguros:</strong> las estaciones y centros de control también son blancos.</li>' +
      '<li><strong>Actualizaciones seguras</strong> del software en órbita.</li>' +
      '</ul>' +
'<p>Ejemplo real: en 2022 un ciberataque afectó los módems de los terminales del servicio satelital KA-SAT, y dejó sin servicio a miles de usuarios en Europa.</p>' +
'<h3>Basura espacial y tráfico orbital</h3>' +
      '<p>Miles de satélites y fragmentos inservibles orbitan la Tierra. Un choque genera más fragmentos, que pueden provocar nuevos choques (el llamado <em>síndrome de Kessler</em>). Por eso se usan software de seguimiento y maniobras automáticas de evasión.</p>' +
'<img src="img/basura.png" alt="Objetos en órbita terrestre" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Tu próxima misión 🚀</h3>' +
      '<ul>' +
      '<li><strong>CubeSats y CanSats:</strong> satélites pequeños, con componentes COTS, ideales para aprender.</li>' +
      '<li><strong>Hardware + Software:</strong> microcontroladores y sensores para construir tu propia sonda.</li>' +
      '<li><strong>Redes:</strong> protocolos y enlaces de radio para comunicarla.</li>' +
      '</ul>' +
'<p>Más información: <a href="https://es.wikipedia.org/wiki/CubeSat" target="_blank" rel="noopener">CubeSat</a> · <a href="https://es.wikipedia.org/wiki/S%C3%ADndrome_de_Kessler" target="_blank" rel="noopener">Síndrome de Kessler</a>.</p>' +
'<figure><iframe src="https://www.youtube.com/embed/d9YIRSwuU-c?si=GlNh1R1mBm7lOFgU" title="Futuro de la exploración espacial" loading="lazy" allowfullscreen></iframe><figcaption>Video 5: Autonomía, IA y ciberseguridad en el espacio</figcaption></figure>' + 
'<div class="note">✨ ¡Buen trabajo! Marca el módulo como completado y presenta la evaluación final.</div>' }
];

/* 8 preguntas, 12.5 puntos c/u. Tipos: radio, checkbox, select, verdadero/falso, texto, listbox múltiple, relacionar, slider */
var ESP_STOPS = [0.1, 0.5, 1.3, 8, 60, 500];
var QUESTIONS_ESPACIAL = [
  { type: 'Opción única (radio)', text: '¿Qué caracteriza a un sistema operativo de tiempo real (RTOS)?',
    opts: ['Garantiza que cada tarea responda dentro de un plazo definido', 'Tiene la interfaz gráfica más completa', 'Solo funciona con conexión a Internet', 'Ejecuta únicamente un programa a la vez'], ans: 0,
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? +e.value : null; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Selección múltiple (checkbox)', text: 'Selecciona TODOS los factores del entorno espacial que pueden afectar a la electrónica:',
    opts: ['Cambios de bits por partículas (SEU)', 'Daño acumulado por radiación (TID)', 'Temperaturas extremas', 'Humedad del ambiente', 'Interferencia del Wi-Fi doméstico', 'Corrosión por agua salada'], ans: [0, 1, 2],
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="checkbox" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { return Array.from(f.querySelectorAll('input[name=q' + i + ']:checked')).map(function (e) { return +e.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Lista desplegable (select)', text: '¿Qué técnica de endurecimiento usa tres copias de un circuito y toma el resultado mayoritario?',
    opts: ['Triple redundancia modular (TMR)', 'Compresión de datos', 'Multiplexación', 'Overclocking'], ans: 0,
    html: function (q, i) { return '<select name="q' + i + '">' +
      '<option value="">-- Elige una opción --</option>' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { var v = f.querySelector('select[name=q' + i + ']').value; return v === '' ? null : +v; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Verdadero / Falso (radio)', text: 'Los componentes comerciales (COTS) siempre resisten mejor la radiación que los de grado espacial.',
    ans: false,
    html: function (q, i) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="1"> Verdadero</label>' +
      '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="0"> Falso</label>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? e.value === '1' : null; },
    ok: function (q, a) { return a === q.ans; }, show: function () { return 'Falso'; } },

  { type: 'Respuesta corta (cuadro de texto)', text: 'La red de antenas de la NASA para comunicarse con misiones del espacio profundo se abrevia ... (escribe las 3 letras)',
    html: function (q, i) { return '<input type="text" name="q' + i + '" maxlength="20" placeholder="Tu respuesta" autocomplete="off">'; },
    read: function (f, i) { var v = f.querySelector('input[name=q' + i + ']').value.trim().toLowerCase(); return v === '' ? null : v; },
    ok: function (q, a) { return a === 'dsn'; }, show: function () { return 'DSN (Deep Space Network)'; } },

  { type: 'Lista de selección múltiple (listbox)', text: 'En la lista, selecciona los sensores ACTIVOS, que emiten su propia señal (mantén Ctrl/Cmd para elegir varios):',
    opts: ['Radar SAR', 'Cámara multiespectral', 'LiDAR', 'Radiómetro infrarrojo térmico', 'Altímetro radar', 'Cámara óptica pancromática'], ans: [0, 2, 4],
    html: function (q, i) { return '<select multiple size="6" name="q' + i + '">' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { return Array.from(f.querySelector('select[name=q' + i + ']').selectedOptions).map(function (o) { return +o.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Relacionar conceptos (varios select)', text: 'Relaciona cada función de comunicación con su descripción:',
    items: ['Telemetría', 'Telecomando', 'Seguimiento (tracking)'], descs: ['Envía órdenes desde la Tierra a la nave', 'Mide la posición y velocidad de la nave', 'Envía datos de la nave hacia la Tierra'], ans: [2, 0, 1],
    html: function (q, i) { return q.items.map(function (it, k) { return '<label>' + it + '</label>' +
      '<select name="q' + i + '_' + k + '">' +
      '<option value="">-- Descripción --</option>' + q.descs.map(function (d, j) { return '<option value="' + j + '">' + d + '</option>'; }).join('') + '</select>'; }).join(''); },
    read: function (f, i, q) { return q.items.map(function (_, k) { var v = f.querySelector('select[name=q' + i + '_' + k + ']').value; return v === '' ? null : +v; }); },
    ok: function (q, a) { return a.every(function (v, k) { return v === q.ans[k]; }); },
    has: function (a) { return a.every(function (v) { return v !== null; }); },
    show: function (q) { return q.items.map(function (it, k) { return it + ' → ' + q.descs[q.ans[k]]; }).join('; '); } },

  { type: 'Control deslizante (slider)', text: '¿Cuántos segundos tarda aproximadamente una señal de radio en viajar de la Tierra a la Luna? Mueve el control.',
    html: function (q, i) { return '<input type="range" name="q' + i + '" min="0" max="5" step="1" value="0" data-touched="0" oninput="this.dataset.touched=1;this.nextElementSibling.textContent=ESP_STOPS[this.value]+\' s\'">' +
      '<output style="font-size:1.6rem;color:var(--gold)">0.1 s</output> <small style="color:var(--muted)">(0.1 · 0.5 · 1.3 · 8 · 60 · 500 segundos)</small>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']'); return e.dataset.touched === '1' ? ESP_STOPS[+e.value] : null; },
    ok: function (q, a) { return a === 1.3; }, show: function () { return '1.3 segundos'; } }
];


