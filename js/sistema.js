/* Contenido del curso  */
var COURSE = [
  { id: 1, tiempo: '15 minutos', titulo: 'Módulo 1 · Despegue: ¿qué es una computadora?', html:
'<h3>Bienvenido, astronauta digital 🧑‍🚀</h3>' +
'<p>Una <strong>computadora</strong> es una máquina que recibe datos (<em>entrada</em>), los procesa siguiendo instrucciones y entrega resultados (<em>salida</em>). Todo equipo moderno —laptop, teléfono, consola o satélite— combina dos mundos: <strong>hardware</strong> y <strong>software</strong>.</p>' +
'<figure>' +
      '<video controls preload="metadata" poster="img/software.svg">' +
      '<source src="video/intro.mp4" type="video/mp4">Tu navegador no soporta video HTML5.</video>' +
      '<figcaption>Video 1 (local): resumen de hardware + software.</figcaption>' +
      '</figure>' +
'<ul>' +
      '<li>' +
      '<strong>Hardware:</strong> las partes físicas que puedes tocar.</li>' +
      '<li>' +
      '<strong>Software:</strong> los programas e instrucciones que le dicen al hardware qué hacer.</li>' +
      '</ul>' +
'<p>Para saber más: <a href="https://www.hpe.com/lamerica/es/what-is/compute.html" target="_blank" rel="noopener">Computadora (Glosario)</a> · <a href="https://www.gestiopolis.com/historia-de-la-computacion-y-la-informatica/" target="_blank" rel="noopener">Historia de la computación</a>.</p>' +
'<h3>Ciclo básico: entrada → proceso → salida</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Etapa</th>' +
      '<th>Ejemplo</th>' +
      '</tr>' +
      '<tr>' +
      '<td>Entrada</td>' +
      '<td>Teclado, ratón, micrófono, cámara</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Proceso</td>' +
      '<td>CPU y memoria</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Salida</td>' +
      '<td>Monitor, bocinas, impresora</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Almacenamiento</td>' +
      '<td>SSD, disco duro, memoria USB</td>' +
      '</tr>' +
      '</table>' },

  { id: 2, tiempo: '25 minutos', titulo: 'Módulo 2 · Hardware: la nave por dentro', html:
'<h3>Componentes principales</h3>' +
'<h3>🧠 CPU (Unidad Central de Procesamiento)</h3>' +
      '<p>Ejecuta instrucciones y realiza cálculos. Se mide en núcleos y frecuencia (GHz). Más información: <a href="https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento" target="_blank" rel="noopener">CPU</a>.</p>' +
      /*imagen*/ 
      '<img src="img/cpu.png" alt="Ilustración de un procesador CPU" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">'+
'<h3>⚡ Memoria RAM</h3>' +
      '<p>Memoria de acceso aleatorio: guarda temporalmente los datos y programas en uso. Es <strong>volátil</strong>: al apagar el equipo, se borra. <a href="https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio" target="_blank" rel="noopener">Leer más</a>.</p>' +
      /*imagen*/ 
      '<img src="img/memram.png" alt="Ilustración de una Memoria Ram" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>💾 Almacenamiento</h3>' +
      '<p>Conserva la información de forma permanente: <strong>HDD</strong> (platos magnéticos) y <strong>SSD</strong> (memoria flash, más rápida y silenciosa).</p>' +
      /*imagen*/ 
      '<img src="img/HDD.jpeg" alt="Ilustración de almacenamiento SSD y HDD" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Otros componentes</h3>' +
      '<ul>' +
      '<li>' +
      '<strong>Placa madre:</strong> conecta todos los componentes.</li>' +
      '<li>' +
      '<strong>Fuente de poder:</strong> entrega la energía.</li>' +
      '<li>' +
      '<strong>GPU:</strong> procesa gráficos.</li>' +
      '<li>' +
      '<strong>Periféricos:</strong> teclado, ratón, monitor, impresora.</li>' +
      '</ul>' +
'<figure>' +
      '<iframe src="https://www.youtube.com/embed/XMPDfxYIj88?si=0ukSCyB4ucqqVsBj" title="La CPU (Crash Course Computer Science)" loading="lazy" allowfullscreen>' +
      '</iframe>' +
      '<figcaption>Video 2: La Unidad Central de Procesamiento. Si no carga, <a href="https://www.youtube.com/watch?v=FZGugFqdr60" target="_blank" rel="noopener">ábrelo en YouTube</a>.</figcaption>' +
      '</figure>' },

  { id: 3, tiempo: '20 minutos', titulo: 'Módulo 3 · Software: el alma de la máquina', html:
'<h3>Concepto de Software</h3>' +
/*imagen*/
      '<img src="img/soft.png" alt="Ilustración de una Memoria Ram" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">'  +
'<ul>' +
      '<li>' +
      '<strong>Sistema operativo (SO):</strong> administra los recursos y sirve de puente entre apps y hardware. Ej.: Windows, Linux, macOS, Android. <a href="https://es.wikipedia.org/wiki/Sistema_operativo" target="_blank" rel="noopener">Más sobre SO</a>.</li>' +
      '<li>' +
      '<strong>Aplicaciones:</strong> navegadores, procesadores de texto, juegos, editores.</li>' +
      '<li>' +
      '<strong>Software de desarrollo:</strong> lenguajes (Java, JavaScript, Python), compiladores e IDEs como <a href="https://netbeans.apache.org/" target="_blank" rel="noopener">Apache NetBeans</a>.</li>' +
      '<li>' +
      '<strong>Controladores (drivers):</strong> permiten al SO hablar con cada dispositivo.</li>' +
      '</ul>' +
'<h3>Licencias</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Tipo</th>' +
      '<th>Descripción</th>' +
      '</tr>' +
      '<tr>' +
      '<td>Libre / Open Source</td>' +
      '<td>Código accesible y modificable (Linux, NetBeans)</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Propietario</td>' +
      '<td>Código cerrado, licencia de uso (Windows)</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Freeware / Shareware</td>' +
      '<td>Gratis o de prueba</td>' +
      '</tr>' +
      '</table>' +
'<figure>' +
      '<iframe src="https://www.youtube.com/embed/fZqYD7D_agk?si=ObX835KMk_fBQ3-K" title="Software" loading="lazy" allowfullscreen>' +
      '</iframe>' +
      '<figcaption>Video 3: Software. <a href="https://www.youtube.com/watch?v=26QPDBe-NB8" target="_blank" rel="noopener">Abrir en YouTube</a>.</figcaption>' +
      '</figure>' },

  { id: 4, tiempo: '20 minutos', titulo: 'Módulo 4 · Juntos en órbita: binario y cooperación', html:
'<h3>El lenguaje del hardware: bits y bytes</h3>' +
      '<p>Las computadoras solo entienden dos estados: <code>0</code> y <code>1</code> (<strong>bit</strong>). Ocho bits forman un <strong>byte</strong>, que puede representar <code>2⁸ = 256</code> valores distintos (0 a 255).</p>' +
'<table>' +
      '<tr>' +
      '<th>Decimal</th>' +
      '<th>Binario (8 bits)</th>' +
      '</tr>' +
      '<tr>' +
      '<td>5</td>' +
      '<td>00000101</td>' +
      '</tr>' +
      '<tr>' +
      '<td>65 (letra "A")</td>' +
      '<td>01000001</td>' +
      '</tr>' +
      '<tr>' +
      '<td>255</td>' +
      '<td>11111111</td>' +
      '</tr>' +
      '</table>' +
'<p>Unidades: 1 KB ≈ 1024 bytes · 1 MB ≈ 1024 KB · 1 GB ≈ 1024 MB. Lectura: <a href="https://es.wikipedia.org/wiki/Sistema_binario" target="_blank" rel="noopener">Sistema binario</a>.</p>' +
'<h3>¿Cómo cooperan?</h3>' +
      '<ol>' +
      '<li>Abres un programa (software) guardado en el SSD.</li>' +
      '<li>El SO lo carga en la RAM.</li>' +
      '<li>La CPU ejecuta sus instrucciones paso a paso.</li>' +
      '<li>El resultado se muestra en el monitor (salida).</li>' +
      '</ol>' +
'<p>' +
      '<strong>Sin software, el hardware es solo metal; sin hardware, el software no tiene dónde ejecutarse.</strong> 🚀</p>' +
'<figure>' +
      '<iframe src="https://www.youtube.com/embed/mi9ZeXVCZOM?si=gb4AmdbYcA4Afou9" title="La ALU (Crash Course Computer Science)" loading="lazy" allowfullscreen>' +
      '</iframe>' +
      '<figcaption>Video 4: Unidad Aritmética Lógica (ALU). <a href="https://www.youtube.com/watch?v=1I5ZMmrOfnA" target="_blank" rel="noopener">Abrir en YouTube</a>.</figcaption>' +
      '</figure>' },
  { id: 5, tiempo: '20 minutos', titulo: 'Módulo 5 · Tipos de Software', html:
'<h3>Programas con diferentes misiones 🛰️</h3>' +
      '<p>Podemos clasificar el software según la función que cumple. Un mismo equipo tiene instalados muchos programas, cada uno con un propósito distinto.</p>' +
'<table>' +
      '<tr>' +
      '<th>Tipo</th>' +
      '<th>Función</th>' +
      '<th>Ejemplos</th>' +
      '</tr>' +
'<tr>' +
      '<td>🪟 Software de sistema</td>' +
      '<td>Administra el equipo y los dispositivos</td>' +
      '<td>Sistemas operativos, controladores (drivers)</td>' +
      '</tr>' +
'<tr>' +
      '<td>📝 Software de aplicación</td>' +
      '<td>Ayuda al usuario a realizar tareas</td>' +
      '<td>Navegadores, editores de texto, reproductores, juegos</td>' +
      '</tr>' +
'<tr>' +
      '<td>🛠️ Software de programación</td>' +
      '<td>Sirve para crear otros programas</td>' +
      '<td>Editores de código, compiladores, depuradores, IDEs como <a href="https://netbeans.apache.org/" target="_blank" rel="noopener">Apache NetBeans</a>' +
      '</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/tipos.jpg" alt="Ilustración de una Memoria Ram" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Según su licencia</h3>' +
      '<ul>' +
      '<li>' +
      '<strong>Libre / Open Source:</strong> código accesible y modificable (Linux, NetBeans).</li>' +
      '<li>' +
      '<strong>Propietario:</strong> código cerrado y licencia de uso.</li>' +
      '<li>' +
      '<strong>Freeware / Shareware:</strong> gratuito o de prueba.</li>' +
      '</ul>' +
'<p>Lee más: <a href="https://www.wolterskluwer.com/es-es/expert-insights/que-tipos-de-software-hay" target="_blank" rel="noopener">Software (Tipos Software)</a>.</p>' +
'<p>🔭 <strong>Pregúntate:</strong> ¿el programa administra el equipo, ayuda al usuario a realizar una tarea o sirve para desarrollar otros programas?</p>' },

  { id: 6, tiempo: '25 minutos', titulo: 'Módulo 6 · Sistemas operativos', html:
'<h3>El coordinador de la computadora 🌌</h3>' +
      '<p>Un <strong>sistema operativo</strong> es software de sistema que administra el hardware y permite que las aplicaciones funcionen.</p>' +
'<ul>' +
      '<li>Gestiona el procesador y la memoria.</li>' +
      '<li>Organiza archivos y carpetas.</li>' +
      '<li>Permite interactuar con el dispositivo (interfaz gráfica o de comandos).</li>' +
      '<li>Coordina los dispositivos conectados mediante controladores.</li>' +
      '</ul>' +
'<table>' +
      '<tr>' +
      '<th>Sistema</th>' +
      '<th>Dónde se usa</th>' +
      '</tr>' +
      '<tr>' +
      '<td>🪟 Windows</td>' +
      '<td>Computadoras de escritorio y laptops</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🐧 Linux</td>' +
      '<td>Servidores, equipos personales y supercomputadoras</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🍎 macOS</td>' +
      '<td>Equipos Apple</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🤖 Android</td>' +
      '<td>Teléfonos y tabletas</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/sist.png" alt="Ilustración de un procesador CPU" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<p>Más información: <a href="https://concepto.de/sistema-operativo/" target="_blank" rel="noopener">Sistema operativo (Conceptos)</a> · <a href="https://www.ibm.com/mx-es/think/topics/operating-systems" target="_blank" rel="noopener">Sistema Operativo (IBM)</a>.</p>' +
'<p>Los sistemas operativos son distintos, pero todos coordinan recursos y programas.</p>' +
'<div class="note">✨ ¡Buen trabajo! Marca el módulo como completado y presenta la evaluación final.</div>' }
];

/* 8 preguntas, 12.5 puntos c/u. Tipos: radio, checkbox, select, verdadero/falso, texto, listbox múltiple, relacionar, slider */
var BYTE_STOPS = [16, 64, 128, 256, 512, 1024];
var QUESTIONS = [
  { type: 'Opción única (radio)', text: '¿Qué significan las siglas CPU?',
    opts: ['Unidad Central de Procesamiento', 'Computadora Personal Universal', 'Control Principal de Usuario', 'Unidad Central de Programas'], ans: 0,
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? +e.value : null; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Selección múltiple (checkbox)', text: 'Selecciona TODOS los elementos que son hardware:',
    opts: ['Teclado', 'Windows', 'Memoria RAM', 'Navegador web', 'Disco SSD', 'Python'], ans: [0, 2, 4],
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="checkbox" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { return Array.from(f.querySelectorAll('input[name=q' + i + ']:checked')).map(function (e) { return +e.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Lista desplegable (select)', text: '¿Qué software administra los recursos del equipo y permite que las aplicaciones funcionen?',
    opts: ['Hoja de cálculo', 'Sistema operativo', 'Antivirus', 'Navegador'], ans: 1,
    html: function (q, i) { return '<select name="q' + i + '">' +
      '<option value="">-- Elige una opción --</option>' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { var v = f.querySelector('select[name=q' + i + ']').value; return v === '' ? null : +v; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Verdadero / Falso (radio)', text: 'La memoria RAM es volátil: pierde su contenido cuando se apaga el equipo.',
    ans: true,
    html: function (q, i) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="1"> Verdadero</label>' +
      '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="0"> Falso</label>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? e.value === '1' : null; },
    ok: function (q, a) { return a === q.ans; }, show: function () { return 'Verdadero'; } },

  { type: 'Respuesta corta (cuadro de texto)', text: '¿Cuántos bits forman un byte? (escribe el número)',
    html: function (q, i) { return '<input type="text" name="q' + i + '" maxlength="20" placeholder="Tu respuesta" autocomplete="off">'; },
    read: function (f, i) { var v = f.querySelector('input[name=q' + i + ']').value.trim().toLowerCase(); return v === '' ? null : v; },
    ok: function (q, a) { return a === '8' || a === 'ocho'; }, show: function () { return '8'; } },

  { type: 'Lista de selección múltiple (listbox)', text: 'En la lista, selecciona los ejemplos de SOFTWARE (mantén Ctrl/Cmd para elegir varios):',
    opts: ['Linux', 'Monitor', 'Google Chrome', 'Impresora', 'Visual Studio Code', 'Ratón'], ans: [0, 2, 4],
    html: function (q, i) { return '<select multiple size="6" name="q' + i + '">' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { return Array.from(f.querySelector('select[name=q' + i + ']').selectedOptions).map(function (o) { return +o.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Relacionar conceptos (varios select)', text: 'Relaciona cada componente con su función:',
    items: ['CPU', 'RAM', 'SSD'], descs: ['Almacenamiento permanente', 'Ejecuta instrucciones y cálculos', 'Memoria temporal de trabajo'], ans: [1, 2, 0],
    html: function (q, i) { return q.items.map(function (it, k) { return '<label>' + it + '</label>' +
      '<select name="q' + i + '_' + k + '">' +
      '<option value="">-- Función --</option>' + q.descs.map(function (d, j) { return '<option value="' + j + '">' + d + '</option>'; }).join('') + '</select>'; }).join(''); },
    read: function (f, i, q) { return q.items.map(function (_, k) { var v = f.querySelector('select[name=q' + i + '_' + k + ']').value; return v === '' ? null : +v; }); },
    ok: function (q, a) { return a.every(function (v, k) { return v === q.ans[k]; }); },
    has: function (a) { return a.every(function (v) { return v !== null; }); },
    show: function (q) { return q.items.map(function (it, k) { return it + ' → ' + q.descs[q.ans[k]]; }).join('; '); } },

  { type: 'Control deslizante (slider)', text: '¿Cuántos valores distintos puede representar un byte? Mueve el control.',
    html: function (q, i) { return '<input type="range" name="q' + i + '" min="0" max="5" step="1" value="0" data-touched="0" oninput="this.dataset.touched=1;this.nextElementSibling.textContent=BYTE_STOPS[this.value]">' +
      '<output style="font-size:1.6rem;color:var(--gold)">16</output> <small style="color:var(--muted)">(16 · 64 · 128 · 256 · 512 · 1024)</small>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']'); return e.dataset.touched === '1' ? BYTE_STOPS[+e.value] : null; },
    ok: function (q, a) { return a === 256; }, show: function () { return '256'; } }
];
