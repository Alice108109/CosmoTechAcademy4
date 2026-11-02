
var COURSE_REDES = [
  { id: 1, tiempo: '20 minutos', titulo: 'Módulo 1 · Primer contacto: ¿qué es una red?', html:
'<h3>Conectando mundos 🌐</h3>' +
'<p>Una <strong>red de computadoras</strong> es un conjunto de dispositivos conectados entre sí que intercambian datos y comparten recursos como archivos, impresoras y acceso a Internet.</p>' +
'<ul>' +
      '<li><strong>Emisor:</strong> quien envía la información.</li>' +
      '<li><strong>Receptor:</strong> quien la recibe.</li>' +
      '<li><strong>Medio:</strong> el canal por el que viaja (cable, fibra, ondas de radio).</li>' +
      '<li><strong>Protocolo:</strong> las reglas que ambos acuerdan para entenderse.</li>' +
      '</ul>' +
'<img src="img/redes.png" alt="Esquema básico de una red" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Tipos de red según su alcance</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Tipo</th>' +
      '<th>Alcance</th>' +
      '<th>Ejemplo</th>' +
      '</tr>' +
      '<tr>' +
      '<td>PAN</td>' +
      '<td>Personal (pocos metros)</td>' +
      '<td>Bluetooth entre teléfono y audífonos</td>' +
      '</tr>' +
      '<tr>' +
      '<td>LAN</td>' +
      '<td>Local (casa, oficina, escuela)</td>' +
      '<td>Red Wi-Fi de tu casa</td>' +
      '</tr>' +
      '<tr>' +
      '<td>MAN</td>' +
      '<td>Metropolitana (una ciudad)</td>' +
      '<td>Red de una universidad con varias sedes</td>' +
      '</tr>' +
      '<tr>' +
      '<td>WAN</td>' +
      '<td>Extensa (países y continentes)</td>' +
      '<td>Internet</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/redesss.png" alt="Tipos de redes PAN, LAN, MAN y WAN" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
/* ojoo */
'<div class="note">✨ Para saber más: <a href="https://concepto.de/red-de-computadoras/" target="_blank" rel="noopener">Red de computadoras (Concepto)</a></div>' +
 '<figure><iframe src="https://www.youtube.com/embed/_JNPvSxG6oM?si=wZGwIKrNetL2lEkl" title="¿Qué es una red?" loading="lazy" allowfullscreen></iframe><figcaption>Video 1: ¿Qué es una red de computadoras?</figcaption></figure>' },

  { id: 2, tiempo: '25 minutos', titulo: 'Módulo 2 · Equipos y medios: la infraestructura', html:
'<h3>Dispositivos de red 📡</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Dispositivo</th>' +
      '<th>Función</th>' +
      '</tr>' +
      '<tr>' +
      '<td>🔌 Tarjeta de red (NIC)</td>' +
      '<td>Permite que un equipo se conecte a la red (por cable o Wi-Fi).</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🔀 Switch</td>' +
      '<td>Conecta equipos de una misma red local y envía los datos solo al destino correcto.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>🧭 Router</td>' +
      '<td>Conecta redes distintas (por ejemplo, tu casa con Internet) y decide la mejor ruta.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>📶 Punto de acceso (AP)</td>' +
      '<td>Ofrece conexión inalámbrica Wi-Fi a la red cableada.</td>' +
      '</tr>' +
      '<tr>' +
      '<td>📞 Módem</td>' +
      '<td>Convierte la señal del proveedor de Internet en datos que entiende tu red.</td>' +
      '</tr>' +
      '</table>' +
'<img src="img/tiposR.png" alt="Router, switch y punto de acceso" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<p>Más información: <a href="https://www.cisco.com/c/es_mx/solutions/small-business/resource-center/networking/what-is-a-router.html" target="_blank" rel="noopener">Router</a> · <a href="https://intercompras.com/blog/que-es-un-switch-de-red/?srsltid=AYCX9vIHuj1oHv_eMkuvWXz5uvbPXL-21VHo_arLA5pCAq3-tf4fBMOB" target="_blank" rel="noopener">Switch</a>.</p>' +
'<h3>Medios de transmisión</h3>' +
      '<ul>' +
      '<li><strong>Cable de par trenzado (UTP):</strong> el cable Ethernet común en casas y oficinas.</li>' +
      '<li><strong>Fibra óptica:</strong> transmite luz; muy rápida y de larga distancia.</li>' +
      '<li><strong>Inalámbrico:</strong> ondas de radio (Wi-Fi, Bluetooth, redes móviles).</li>' +
      '</ul>' +
'<img src="img/cables.jpg" alt="Cable UTP, fibra óptica y Wi-Fi" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<figure><iframe src="https://www.youtube.com/embed/Gky8-OVYmT4?si=E0A77WDH0f_S4IJY" title="Dispositivos de red" loading="lazy" allowfullscreen></iframe><figcaption>Video 2: Dispositivos y medios de red</figcaption></figure>' },

  { id: 3, tiempo: '25 minutos', titulo: 'Módulo 3 · Modelos de red: OSI y TCP/IP', html:
'<h3>¿Por qué usar modelos?</h3>' +
      '<p>Enviar datos por una red es complejo. Los <strong>modelos de capas</strong> dividen el trabajo en etapas; cada capa resuelve un problema y se comunica con la de arriba y la de abajo.</p>' +
'<h3>Modelo OSI (7 capas)</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Capa</th>' +
      '<th>Nombre</th>' +
      '<th>Ejemplo</th>' +
      '</tr>' +
      '<tr><td>7</td><td>Aplicación</td><td>HTTP, correo, DNS</td></tr>' +
      '<tr><td>6</td><td>Presentación</td><td>Cifrado y formato de datos</td></tr>' +
      '<tr><td>5</td><td>Sesión</td><td>Inicio y cierre de comunicaciones</td></tr>' +
      '<tr><td>4</td><td>Transporte</td><td>TCP y UDP</td></tr>' +
      '<tr><td>3</td><td>Red</td><td>IP y routers</td></tr>' +
      '<tr><td>2</td><td>Enlace de datos</td><td>Ethernet, MAC, switches</td></tr>' +
      '<tr><td>1</td><td>Física</td><td>Cables, señales, Wi-Fi</td></tr>' +
      '</table>' +
'<img src="img/osi.png" alt="Capas del modelo OSI" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Modelo TCP/IP (4 capas)</h3>' +
      '<p>Es el modelo que realmente usa Internet: <strong>Aplicación</strong>, <strong>Transporte</strong>, <strong>Internet</strong> y <strong>Acceso a red</strong>.</p>' +
      '<ul>' +
      '<li><strong>TCP:</strong> entrega confiable y ordenada (páginas web, correo).</li>' +
      '<li><strong>UDP:</strong> entrega rápida sin garantías (videollamadas, juegos).</li>' +
      '</ul>' +
'<img src="img/osi2.png" alt="Comparación OSI y TCP/IP" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<div class="note">✨ Lee más: <a href="https://es.wikipedia.org/wiki/Modelo_OSI" target="_blank" rel="noopener">Modelo OSI</a> · <a href="https://es.wikipedia.org/wiki/Modelo_TCP/IP" target="_blank" rel="noopener">Modelo TCP/IP</a></div>' +
'<figure><iframe src="https://www.youtube.com/embed/-QTNJws7PRg?si=4tk-Y7gUoax55Vag" title="Modelo OSI" loading="lazy" allowfullscreen></iframe><figcaption>Video 3: Modelo OSI y TCP/IP</figcaption></figure>' },

  { id: 4, tiempo: '25 minutos', titulo: 'Módulo 4 · Direcciones: IP, MAC y DNS', html:
'<h3>¿Cómo se encuentran los equipos?</h3>' +
      '<p>Cada dispositivo necesita identificarse. Existen dos direcciones principales:</p>' +
      '<ul>' +
      '<li><strong>Dirección MAC:</strong> identificador físico único de la tarjeta de red (ej. <code>00:1A:2B:3C:4D:5E</code>).</li>' +
      '<li><strong>Dirección IP:</strong> identificador lógico dentro de la red (ej. <code>192.168.1.10</code>).</li>' +
      '</ul>' +
'<h3>IPv4 e IPv6</h3>' +
      '<p>Una dirección <strong>IPv4</strong> tiene 32 bits, escritos en 4 grupos de 0 a 255. <strong>IPv6</strong> usa 128 bits y permite muchísimas más direcciones.</p>' +
      '<table>' +
      '<tr>' +
      '<th>Dato</th>' +
      '<th>Ejemplo</th>' +
      '</tr>' +
      '<tr><td>Dirección IP</td><td>192.168.1.10</td></tr>' +
      '<tr><td>Máscara de subred</td><td>255.255.255.0</td></tr>' +
      '<tr><td>Puerta de enlace (router)</td><td>192.168.1.1</td></tr>' +
      '<tr><td>Rangos privados</td><td>10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16</td></tr>' +
      '</table>' +
 '<img src="img/ip.png" alt="Partes de una dirección IPv4" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<h3>Servicios que facilitan la conexión</h3>' +
      '<ul>' +
      '<li><strong>DHCP:</strong> asigna direcciones IP automáticamente a los equipos.</li>' +
      '<li><strong>DNS:</strong> traduce nombres (<code>ejemplo.com</code>) a direcciones IP, como una agenda de contactos.</li>' +
      '</ul>' +
'<img src="img/dns.png" alt="Funcionamiento de DNS" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' + 
'<p>Más información: <a href="https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP" target="_blank" rel="noopener">Dirección IP</a> · <a href="https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio" target="_blank" rel="noopener">DNS</a>.</p>' +
'<figure><iframe src="https://www.youtube.com/embed/QN_hlEUxvHg?si=unyix8BCMjBkBv2w" title="Direcciones IP y DNS" loading="lazy" allowfullscreen></iframe><figcaption>Video 4: Direcciones IP, DHCP y DNS</figcaption></figure>' },

  { id: 5, tiempo: '20 minutos', titulo: 'Módulo 5 · Protocolos, servicios y seguridad', html:
'<h3>Protocolos de aplicación más comunes</h3>' +
      '<table>' +
      '<tr>' +
      '<th>Protocolo</th>' +
      '<th>Uso</th>' +
      '<th>Puerto</th>' +
      '</tr>' +
      '<tr><td>HTTP / HTTPS</td><td>Páginas web (HTTPS cifra la comunicación)</td><td>80 / 443</td></tr>' +
      '<tr><td>FTP</td><td>Transferencia de archivos</td><td>21</td></tr>' +
      '<tr><td>SMTP</td><td>Envío de correo</td><td>25</td></tr>' +
      '<tr><td>IMAP / POP3</td><td>Recepción de correo</td><td>143 / 110</td></tr>' +
      '<tr><td>SSH</td><td>Acceso remoto seguro</td><td>22</td></tr>' +
      '<tr><td>DNS</td><td>Resolución de nombres</td><td>53</td></tr>' +
      '</table>' +
'<img src="img/serv.png" alt="Cliente y servidor" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
'<h3>Seguridad básica en redes 🛡️</h3>' +
      '<ul>' +
      '<li><strong>Contraseñas robustas</strong> y cambio de las que vienen de fábrica en el router.</li>' +
      '<li><strong>Cifrado Wi-Fi:</strong> usar WPA2 o WPA3 (evitar redes abiertas o WEP).</li>' +
      '<li><strong>Firewall:</strong> filtra el tráfico permitido y bloquea el sospechoso.</li>' +
      '<li><strong>VPN:</strong> crea un túnel cifrado para conexiones en redes públicas.</li>' +
      '<li><strong>Actualizaciones:</strong> mantener equipos y router al día.</li>' +
      '</ul>' +
 '<img src="img/fire.png" alt="Firewall y VPN" style="display: block; margin: 20px auto; max-width: 100%; width: 600px; height: auto;">' +
 '<div class="note">✨ Lee más: <a href="https://virmar.mx/blog/seguridad-cibernetica/que-es-un-firewall-y-como-funciona/" target="_blank" rel="noopener">Firewall</a> · <a href="https://www.eset.com/latam/blog/cultura-y-seguridad-digital/vpn-proxy-guia-definitiva-seguridad-privacidad-digital/" target="_blank" rel="noopener">VPN vs. Proxy</a></div>' +
'<figure><iframe src="https://www.youtube.com/embed/Z6j3ZsqJMKg?si=sk8emNhrewhTY_Eh" title="Seguridad en redes" loading="lazy" allowfullscreen></iframe><figcaption>Video 5: Protocolos y seguridad en redes</figcaption></figure>' + 
'<div class="note">✨ ¡Buen trabajo! Marca el módulo como completado y presenta la evaluación final.</div>' }
];

/* 8 preguntas, 12.5 puntos c/u. Tipos: radio, checkbox, select, verdadero/falso, texto, listbox múltiple, relacionar, slider */
var OSI_STOPS = [3, 4, 5, 7, 9, 12];
var QUESTIONS_REDES = [
  { type: 'Opción única (radio)', text: '¿Qué significan las siglas LAN?',
    opts: ['Red de Área Local', 'Red de Acceso Lento', 'Línea de Acceso Nacional', 'Red de Alcance Largo'], ans: 0,
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? +e.value : null; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Selección múltiple (checkbox)', text: 'Selecciona TODOS los elementos que son dispositivos de red:',
    opts: ['Router', 'Teclado', 'Switch', 'Monitor', 'Punto de acceso (Access Point)', 'Memoria RAM'], ans: [0, 2, 4],
    html: function (q, i) { return q.opts.map(function (o, k) { return '<label class="check">' +
      '<input type="checkbox" name="q' + i + '" value="' + k + '"> ' + o + '</label>'; }).join(''); },
    read: function (f, i) { return Array.from(f.querySelectorAll('input[name=q' + i + ']:checked')).map(function (e) { return +e.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Lista desplegable (select)', text: '¿Qué dispositivo conecta tu red local con otras redes (como Internet) y decide la ruta de los paquetes?',
    opts: ['Switch', 'Router', 'Hub', 'Tarjeta de red'], ans: 1,
    html: function (q, i) { return '<select name="q' + i + '">' +
      '<option value="">-- Elige una opción --</option>' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { var v = f.querySelector('select[name=q' + i + ']').value; return v === '' ? null : +v; },
    ok: function (q, a) { return a === q.ans; }, show: function (q) { return q.opts[q.ans]; } },

  { type: 'Verdadero / Falso (radio)', text: 'El protocolo HTTPS cifra la comunicación entre el navegador y el servidor web.',
    ans: true,
    html: function (q, i) { return '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="1"> Verdadero</label>' +
      '<label class="check">' +
      '<input type="radio" name="q' + i + '" value="0"> Falso</label>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']:checked'); return e ? e.value === '1' : null; },
    ok: function (q, a) { return a === q.ans; }, show: function () { return 'Verdadero'; } },

  { type: 'Respuesta corta (cuadro de texto)', text: 'La dirección física única de una tarjeta de red se llama dirección ... (escribe las 3 letras)',
    html: function (q, i) { return '<input type="text" name="q' + i + '" maxlength="20" placeholder="Tu respuesta" autocomplete="off">'; },
    read: function (f, i) { var v = f.querySelector('input[name=q' + i + ']').value.trim().toLowerCase(); return v === '' ? null : v; },
    ok: function (q, a) { return a === 'mac' || a === 'dirección mac' || a === 'direccion mac'; }, show: function () { return 'MAC'; } },

  { type: 'Lista de selección múltiple (listbox)', text: 'En la lista, selecciona los MEDIOS de transmisión (mantén Ctrl/Cmd para elegir varios):',
    opts: ['Cable UTP', 'HTTP', 'Fibra óptica', 'DNS', 'Ondas de radio (Wi-Fi)', 'SMTP'], ans: [0, 2, 4],
    html: function (q, i) { return '<select multiple size="6" name="q' + i + '">' + q.opts.map(function (o, k) { return '<option value="' + k + '">' + o + '</option>'; }).join('') + '</select>'; },
    read: function (f, i) { return Array.from(f.querySelector('select[name=q' + i + ']').selectedOptions).map(function (o) { return +o.value; }); },
    ok: function (q, a) { return a.length === q.ans.length && q.ans.every(function (x) { return a.indexOf(x) > -1; }); },
    has: function (a) { return a.length > 0; },
    show: function (q) { return q.ans.map(function (k) { return q.opts[k]; }).join(', '); } },

  { type: 'Relacionar conceptos (varios select)', text: 'Relaciona cada protocolo o servicio con su función:',
    items: ['DNS', 'DHCP', 'HTTP'], descs: ['Asigna direcciones IP automáticamente', 'Traduce nombres de dominio a direcciones IP', 'Transfiere páginas web'], ans: [1, 0, 2],
    html: function (q, i) { return q.items.map(function (it, k) { return '<label>' + it + '</label>' +
      '<select name="q' + i + '_' + k + '">' +
      '<option value="">-- Función --</option>' + q.descs.map(function (d, j) { return '<option value="' + j + '">' + d + '</option>'; }).join('') + '</select>'; }).join(''); },
    read: function (f, i, q) { return q.items.map(function (_, k) { var v = f.querySelector('select[name=q' + i + '_' + k + ']').value; return v === '' ? null : +v; }); },
    ok: function (q, a) { return a.every(function (v, k) { return v === q.ans[k]; }); },
    has: function (a) { return a.every(function (v) { return v !== null; }); },
    show: function (q) { return q.items.map(function (it, k) { return it + ' → ' + q.descs[q.ans[k]]; }).join('; '); } },

  { type: 'Control deslizante (slider)', text: '¿Cuántas capas tiene el modelo OSI? Mueve el control.',
    html: function (q, i) { return '<input type="range" name="q' + i + '" min="0" max="5" step="1" value="0" data-touched="0" oninput="this.dataset.touched=1;this.nextElementSibling.textContent=OSI_STOPS[this.value]">' +
      '<output style="font-size:1.6rem;color:var(--gold)">3</output> <small style="color:var(--muted)">(3 · 4 · 5 · 7 · 9 · 12)</small>'; },
    read: function (f, i) { var e = f.querySelector('input[name=q' + i + ']'); return e.dataset.touched === '1' ? OSI_STOPS[+e.value] : null; },
    ok: function (q, a) { return a === 7; }, show: function () { return '7'; } }
];



