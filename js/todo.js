/* Lógica principal  */
(function () {
    var $ = function (s, r) {
        return (r || document).querySelector(s);
    };
    var $$ = function (s, r) {
        return Array.from((r || document).querySelectorAll(s));
    };
    var EMAIL_RE =
        /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9\-]+(\.[A-Za-z0-9\-]+)*\.[A-Za-z]{2,}$/;
    var PASS_NOTA = 60;
    var session = null;
    var lastResult = null;
    var curMod = 0;
    var adminTab = 'u';
    var curso = 'hardware';

    /* ---------- Funciones auxiliares ---------- */
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[c];
        });
    }
    function store(k, v) {
        try {
            if (v === undefined) {
                return sessionStorage.getItem(k);
            }

            if (v === null) {
                sessionStorage.removeItem(k);
            } else {
                sessionStorage.setItem(k, v);
            }
        } catch (e) {
        }
    }

    function showMsg(el, text, good) {
        el.textContent = text;
        el.className = 'msg show ' + (good ? 'good' : 'bad');
    }

    function setErr(id, t) {
        var e = $('.err[data-for="' + id + '"]');

        if (e) {
            e.textContent = t || '';
        }

        return !t;
    }

    function clearErrs(f) {
        $$('.err', f).forEach(function (e) {
            e.textContent = '';
        });
    }

    function fmt(iso) {
        return new Date(iso).toLocaleString('es-GT', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    }
    /* ---------- Rutas ---------- */

    var PRIVATE = ['perfil', 'curso', 'eval', 'resultado'];
    function route() {
        var r = (location.hash || '#inicio').slice(1);

        if (!$('#v-' + r)) {
            r = 'inicio';
        }

        if (PRIVATE.indexOf(r) > -1 && !session) {
            r = 'login';
        }

        if (r === 'admin' && (!session || session.rol !== 'admin')) {
            r = 'login';
        }

        if (r === 'resultado' && !lastResult) {
            r = 'perfil';
        }

        $$('.view').forEach(function (v) {
            v.classList.toggle('active', v.id === 'v-' + r);
        });

        var render = {
            perfil: renderPerfil,
            curso: renderCurso,
            eval: renderEval,
            resultado: renderResultado,
            admin: renderAdmin,
            juegos: renderJuegos
        }[r];

        if (render) {
            render();
        }

        scrollTo(0, 0);
    }

    function updateNav() {
        var on = !!session;

        $('#nav-reg').hidden = on;
        $('#nav-login').hidden = on;

        $('#nav-perfil').hidden = !on;
        $('#nav-curso').hidden = !on;
        $('#btn-logout').hidden = !on;

        $('#nav-admin').hidden = !(on && session.rol === 'admin');

        $('#userchip').textContent = on
            ? '👨‍🚀 ' + session.usuario
            : '';
    }

    function setSession(u) {
        session = u;
        store('ae_user', u ? u.usuario : null);
        updateNav();
    }
    /* ---------- Juegos educativos ---------- */

    function cargarJuego(url) {
        var fr = $('#juego-iframe');

        // Evita recargar el mismo juego al volver a la ventana.
        if (fr.getAttribute('src') !== url) {
            fr.setAttribute('src', url);
        }

        $('#juego-abrir').href = url;

        $$('#juegos-tabs button').forEach(function (b) {
            b.classList.toggle('on', b.dataset.juego === url);
        });
    }

    function renderJuegos() {
        var actual = $('#juego-iframe').getAttribute('src');
        var primero = $('#juegos-tabs button').dataset.juego;

        cargarJuego(actual || primero);
    }

    $('#juegos-tabs').addEventListener('click', function (e) {
        var b = e.target.closest('button');

        if (b) {
            cargarJuego(b.dataset.juego);
        }
    });

    /* ---------- Contacto (RF-01, RF-02) ---------- */

    $('#f-contacto').addEventListener('submit', function (e) {
        e.preventDefault();

        var f = e.target;
        clearErrs(f);

        var n = $('#c-nombre').value.trim();
        var m = $('#c-email').value.trim();
        var a = $('#c-asunto').value;
        var t = $('#c-msg').value.trim();
        var ok = true;

        ok = setErr(
            'c-nombre',
            n.length < 3 ? 'Ingresa tu nombre (mín. 3 letras).' : ''
        ) && ok;

        ok = setErr(
            'c-email',
            !EMAIL_RE.test(m)
                ? 'Correo con formato inválido (ej. usuario@dominio.com).'
                : ''
        ) && ok;

        ok = setErr(
            'c-asunto',
            !a ? 'Selecciona un asunto.' : ''
        ) && ok;

        ok = setErr(
            'c-msg',
            t.length < 10
                ? 'El mensaje debe tener al menos 10 caracteres.'
                : ''
        ) && ok;

        if (!ok) {
            return;
        }

        DB.addContact({
            nombre: n,
            email: m,
            asunto: a,
            mensaje: t,
            fecha: new Date().toISOString()
        }).then(function () {
            showMsg(
                $('#c-ok'),
                '¡Mensaje enviado! Te responderemos pronto.',
                true
            );

            f.reset();
        });
    });

    /* ---------- Registro ---------- */

    $('#f-registro').addEventListener('submit', function (e) {
        e.preventDefault();

        var f = e.target;
        clearErrs(f);

        var d = {
            nombre: $('#r-nombre').value.trim(),
            apellido: $('#r-apellido').value.trim(),
            usuario: $('#r-usuario').value.trim().toLowerCase(),
            email: $('#r-email').value.trim().toLowerCase(),
            pass: $('#r-pass').value,
            pass2: $('#r-pass2').value,
            tel: $('#r-tel').value.trim(),
            nac: $('#r-nac').value,
            pais: $('#r-pais').value,
            gen: ($('input[name=r-gen]:checked') || {}).value,
            ints: $$('input[name=r-int]:checked').map(function (x) {
                return x.value;
            }),
            terms: $('#r-terms').checked
        };

        var ok = true;
        var hoy = new Date().toISOString().slice(0, 10);

        ok = setErr(
            'r-nombre',
            d.nombre.length < 2 ? 'Ingresa tus nombres.' : ''
        ) && ok;

        ok = setErr(
            'r-apellido',
            d.apellido.length < 2 ? 'Ingresa tus apellidos.' : ''
        ) && ok;

        ok = setErr(
            'r-usuario',
            !/^[a-z0-9_]{3,20}$/.test(d.usuario)
                ? '3-20 caracteres: letras, números o guion bajo.'
                : ''
        ) && ok;

        ok = setErr(
            'r-email',
            !EMAIL_RE.test(d.email)
                ? 'Correo con formato inválido.'
                : ''
        ) && ok;

        ok = setErr(
            'r-pass',
            d.pass.length < 4 ? 'Mínimo 4 caracteres.' : ''
        ) && ok;

        ok = setErr(
            'r-pass2',
            d.pass !== d.pass2
                ? 'Las contraseñas no coinciden.'
                : ''
        ) && ok;

        ok = setErr(
            'r-tel',
            !/^\d{8,15}$/.test(d.tel)
                ? 'Solo dígitos (8 a 15).'
                : ''
        ) && ok;

        ok = setErr(
            'r-nac',
            !d.nac || d.nac >= hoy || d.nac < '1920-01-01'
                ? 'Fecha de nacimiento no válida.'
                : ''
        ) && ok;

        ok = setErr(
            'r-pais',
            !d.pais ? 'Selecciona tu país.' : ''
        ) && ok;

        ok = setErr(
            'r-gen',
            !d.gen ? 'Selecciona una opción.' : ''
        ) && ok;

        ok = setErr(
            'r-terms',
            !d.terms ? 'Debes aceptar los términos.' : ''
        ) && ok;

        if (!ok) {
            return;
        }
        Promise.all([
            DB.getUser(d.usuario),
            DB.emailExists(d.email)
        ]).then(function (r) {
            if (r[0]) {
                return setErr(
                    'r-usuario',
                    'Ese usuario ya existe.'
                );
            }

            if (r[1]) {
                return setErr(
                    'r-email',
                    'Ese correo ya está registrado.'
                );
            }

            return DB.hash(d.usuario, d.pass).then(function (h) {
                var u = {
                    usuario: d.usuario,
                    nombre: d.nombre,
                    apellido: d.apellido,
                    email: d.email,
                    pass: h,
                    telefono: d.tel,
                    nacimiento: d.nac,
                    pais: d.pais,
                    genero: d.gen,
                    intereses: d.ints,
                    rol: 'estudiante',
                    creado: new Date().toISOString()
                };

                return DB.addUser(u).then(function () {
                    f.reset();
                    setSession(u);
                    location.hash = '#perfil';
                });
            });
        }).catch(function (er) {
            showMsg(
                $('#r-ok'),
                'Error al guardar: ' + (er && er.message),
                false
            );
        });
    });

    /* ---------- Login ---------- */

    $('#f-login').addEventListener('submit', function (e) {
        e.preventDefault();

        var u = $('#l-user').value.trim().toLowerCase();
        var p = $('#l-pass').value;

        DB.getUser(u).then(function (rec) {
            if (!rec) {
                return showMsg(
                    $('#l-err'),
                    'Usuario o contraseña incorrectos.',
                    false
                );
            }

            return DB.hash(u, p).then(function (h) {
                if (h !== rec.pass) {
                    return showMsg(
                        $('#l-err'),
                        'Usuario o contraseña incorrectos.',
                        false
                    );
                }

                $('#l-err').className = 'msg';
                e.target.reset();

                setSession(rec);
                location.hash = '#perfil';
            });
        });
    });

    $('#btn-logout').addEventListener('click', function () {
        setSession(null);
        lastResult = null;
        location.hash = '#inicio';
    });

    /* ---------- Perfil (RF-04) ---------- */

    function renderPerfil() {
        var u = session;
        var keys = Object.keys(CURSOS);

        $('#perfil-data').innerHTML = [
            ['Nombre', u.nombre + ' ' + u.apellido],
            ['Usuario', u.usuario],
            ['Correo', u.email],
            ['Teléfono', u.telefono],
            ['Nacimiento', u.nacimiento],
            ['País', u.pais],
            ['Género', u.genero],
            ['Intereses', (u.intereses || []).join(', ') || '—'],
            ['Rol', u.rol],
            ['Registrado', fmt(u.creado)]
        ].map(function (r) {
            return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>';
        }).join('');

        Promise.all([DB.resultsOf(u.usuario)].concat(
            keys.map(function (k) {
                return DB.getProgress(u.usuario, k);
            })
        )).then(function (r) {
            var hist = r[0];
            var total = 0;
            var hechos = 0;
            var html = '';

            keys.forEach(function (k, i) {
                var c = CURSOS[k];
                var p = r[i + 1];

                var best = hist.filter(function (x) {
                    return (x.curso || 'hardware') === k;
                }).reduce(function (m, x) {
                    return Math.max(m, x.nota);
                }, -1);

                total += c.modulos.length;
                hechos += p.modulos.length;

                html += '<p><strong>' + c.icono + ' ' + esc(c.nombre) +
                    '</strong><br>Módulos completados: ' +
                    p.modulos.length + ' de ' + c.modulos.length + ' · ' +
                    (best < 0
                        ? 'Aún sin evaluación'
                        : 'Mejor calificación: ' + best + ' / 100') +
                    '</p>';
            });

            $('#perfil-bar').style.width =
                Math.round(hechos / total * 100) + '%';

            /* Actualizado con el nuevo botón interactivo multi-capa */
            $('#perfil-prog').innerHTML = html +
                '<a href="#curso" class="btn-wrapper" style="margin-top: 14px;">' +
                '<div class="light"></div>' +
                '<div class="gradient-layer" style="animation-delay: 0s; animation-duration: 25s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 0.15s; animation-duration: 15.9s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 0.53s; animation-duration: 26.4s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 0.45s; animation-duration: 17.8s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 1.6s; animation-duration: 19.2s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 1.6s; animation-duration: 29.2s;"></div>' +
                '<div class="gradient-layer" style="animation-delay: 1.6s; animation-duration: 20.2s;"></div>' +
                '<span class="gradient-btn">Acceder al curso →</span>' +
                '<div class="text-overlay">Acceder al curso →</div>' +
                '</a>';

            $('#perfil-hist').innerHTML = hist.length
                ? hist.map(function (x, i) {
                    var c = CURSOS[x.curso || 'hardware'];

                    return '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + fmt(x.fecha) + '</td>' +
                        '<td>' + esc(c.nombre) + '</td>' +
                        '<td>' + x.nota + '</td>' +
                        '<td>' + x.aciertos + '/' + (x.total || 8) + '</td>' +
                        '<td>' +
                        (x.aprobado ? '✅ Aprobado' : '❌ No aprobado') +
                        '</td>' +
                        '</tr>';
                }).join('')
                : '<tr><td colspan="6">Sin intentos todavía.</td></tr>';
        });
    }

    /* ---------- Curso ---------- */

    function renderCurso() {
        var c = CURSOS[curso];

        $('#curso-titulo').innerHTML = esc(c.nombre) + ': <span class="grad">' +
            esc(c.subtitulo) + '</span>';

        $('#curso-tabs').innerHTML = Object.keys(CURSOS).map(function (k) {
            return '<button data-curso="' + k + '"' +
                (k === curso ? ' class="on"' : '') + '>' +
                CURSOS[k].icono + ' ' + esc(CURSOS[k].nombre) + '</button>';
        }).join('');

        DB.getProgress(session.usuario, curso).then(function (p) {
            var done = p.modulos;
            var m = c.modulos[curMod];

            $('#curso-bar').style.width =
                Math.round(done.length / c.modulos.length * 100) + '%';

            $('#toc').innerHTML =
                '<h3>Módulos</h3>' +
                c.modulos.map(function (x, i) {
                    return '<button data-i="' + i + '" class="' +
                        (i === curMod ? 'on ' : '') +
                        (done.indexOf(x.id) > -1 ? 'done' : '') +
                        '">' + esc(x.titulo) + '</button>';
                }).join('') +
                '<button data-eval="1" style="margin-top:14px;border-color:var(--gold)">' +
                '📝 Evaluación final</button>';

            var isDone = done.indexOf(m.id) > -1;
            var last = curMod === c.modulos.length - 1;

            $('#lesson').innerHTML =
                '<div class="time">⏱️ ' + esc(m.tiempo) + '</div>' +
                '<h2>' + esc(m.titulo) + '</h2>' +
                m.html +
                '<div class="nav-row">' +
                '<button class="btn alt" id="m-prev"' +
                (curMod === 0 ? ' disabled style="opacity:.4"' : '') +
                '>← Anterior</button>' +
                '<button class="btn" id="m-done">' +
                (isDone ? '✔ Completado' : 'Marcar como completado') +
                '</button>' +
                (last
                    ? '<a class="btn" href="#eval" id="m-eval">Ir a la evaluación →</a>'
                    : '<button class="btn alt" id="m-next">Siguiente →</button>') +
                '</div>';

            $('#m-prev').onclick = function () {
                if (curMod > 0) {
                    curMod--;
                    renderCurso();
                    scrollTo(0, 0);
                }
            };

            var nx = $('#m-next');

            if (nx) {
                nx.onclick = function () {
                    curMod++;
                    renderCurso();
                    scrollTo(0, 0);
                };
            }

            $('#m-done').onclick = function () {
                if (!isDone) {
                    done.push(m.id);
                    DB.setProgress(p).then(renderCurso);
                }
            };
        });
    }

    $('#toc').addEventListener('click', function (e) {
        var b = e.target.closest('button');

        if (!b) {
            return;
        }

        if (b.dataset.eval) {
            location.hash = '#eval';
            return;
        }

        curMod = +b.dataset.i;
        renderCurso();
    });

    // Cambio de curso desde las pestañas.
    $('#curso-tabs').addEventListener('click', function (e) {
        var b = e.target.closest('button');

        if (b && b.dataset.curso !== curso) {
            curso = b.dataset.curso;
            curMod = 0;
            renderCurso();
        }
    });

    // Botones "Comenzar" de la oferta académica.
    $('#v-cursos').addEventListener('click', function (e) {
        var b = e.target.closest('[data-curso]');

        if (!b) {
            return;
        }

        e.preventDefault();
        curso = b.dataset.curso;
        curMod = 0;
        location.hash = session ? '#curso' : '#registro';
    });

    /* ---------- Evaluación (RF-08/09/10) ---------- */

    function renderEval() {
        var c = CURSOS[curso];

        $('#eval-info').textContent = c.icono + ' ' + c.nombre + ' · ' +
            c.preguntas.length + ' preguntas · 100 puntos · Aprobación: ' +
            PASS_NOTA + ' o más. Cada pregunta usa una interfaz distinta.';

        DB.getProgress(session.usuario, curso).then(function (p) {
            var f = $('#f-eval');
            var err = $('#e-err');

            err.className = 'msg';

            if (p.modulos.length < c.modulos.length && session.rol !== 'admin') {
                f.innerHTML =
                    '<div class="card">' +
                    '<p>Primero completa los ' + c.modulos.length +
                    ' módulos del curso para desbloquear la evaluación.</p>' +
                    '<a class="btn" href="#curso">Ir al curso</a>' +
                    '</div>';

                return;
            }

            f.innerHTML = c.preguntas.map(function (q, i) {
                return '<div class="q" data-i="' + i + '">' +
                    '<span class="type">Pregunta ' + (i + 1) +
                    ' · ' + q.type + '</span>' +
                    '<h3>' + q.text + '</h3>' +
                    q.html(q, i) +
                    '<div class="fb"></div>' +
                    '</div>';
            }).join('') +
                '<button class="btn" type="submit">Enviar evaluación 🚀</button>';
        });
    }

    $('#f-eval').addEventListener('submit', function (e) {
        e.preventDefault();

        var f = e.target;
        var err = $('#e-err');
        var preguntas = CURSOS[curso].preguntas;
        var answers = [];
        var missing = [];

        preguntas.forEach(function (q, i) {
            var a = q.read(f, i, q);
            var has = q.has ? q.has(a) : a !== null;

            if (!has) {
                missing.push(i + 1);
            }

            answers.push(a);
        });

        if (missing.length) {
            return showMsg(
                err,
                'Responde todas las preguntas. Faltan: ' + missing.join(', '),
                false
            );
        }

        var det = preguntas.map(function (q, i) {
            return {
                ok: q.ok(q, answers[i]),
                resp: answers[i]
            };
        });

        var ac = det.filter(function (x) {
            return x.ok;
        }).length;

        var nota = Math.round(
            ac / preguntas.length * 1000
        ) / 10;

        var rec = {
            usuario: session.usuario,
            nombre: session.nombre + ' ' + session.apellido,
            curso: curso,
            fecha: new Date().toISOString(),
            respuestas: answers,
            aciertos: ac,
            total: preguntas.length,
            nota: nota,
            aprobado: nota >= PASS_NOTA
        };

        DB.addResult(rec)
            .then(function (id) {
                rec.id = id;
                lastResult = {
                    rec: rec,
                    det: det,
                    curso: curso
                };

                location.hash = '#resultado';
            })
            .catch(function (er) {
                showMsg(
                    err,
                    'No se pudo guardar: ' + (er && er.message),
                    false
                );
            });
    });

    /* ---------- Resultado + diploma (RF-10/11) ---------- */

    function renderResultado() {
        var r = lastResult.rec;
        var det = lastResult.det;
        var c = CURSOS[lastResult.curso];
        var preguntas = c.preguntas;

        $('#res-score').textContent = r.nota;

        $('#res-text').textContent = r.aprobado
            ? '¡Misión cumplida! Aprobaste ' + c.nombre + ' con ' +
                r.aciertos + ' de ' + preguntas.length +
                ' respuestas correctas.'
            : 'Obtuviste ' + r.aciertos + ' de ' + preguntas.length +
                '. Necesitas ' + PASS_NOTA +
                ' para aprobar; repasa el curso e inténtalo de nuevo.';

        $('#res-review').innerHTML =
            '<h3>Revisión</h3>' +
            preguntas.map(function (q, i) {
                return '<div class="q ' +
                    (det[i].ok ? 'correct' : 'wrong') + '">' +
                    '<strong>' + (i + 1) + '. ' + q.text + '</strong>' +
                    '<div class="fb">' +
                    (det[i].ok
                        ? '<span class="ok">✔ Correcta</span>'
                        : '<span style="color:var(--bad)">✘ Incorrecta</span> · Respuesta correcta: ' +
                            esc(q.show(q))) +
                    '</div>' +
                    '</div>';
            }).join('');

        $('#res-dip').hidden = !r.aprobado;

        if (r.aprobado) {
            Diploma.draw($('#diploma'), {
                nombre: r.nombre,
                curso: c.diploma,
                nota: r.nota,
                fecha: new Date(r.fecha).toLocaleDateString('es-GT', {
                    dateStyle: 'long'
                }),
                folio: String(r.id).padStart(5, '0')
            });
        }
    }

    $('#dl-dip').addEventListener('click', function () {
        var a = document.createElement('a');

        a.download = 'diploma-' + lastResult.curso + '-' + session.usuario + '.png';
        a.href = $('#diploma').toDataURL('image/png');
        a.click();
    });

    $('#print-dip').addEventListener('click', function () {
        window.print();
    });

    /* ---------- Administración ---------- */

    function renderAdmin() {
        $$('#admin-tabs button').forEach(function (b) {
            b.classList.toggle('on', b.dataset.t === adminTab);
        });

        var body = $('#admin-body');

        if (adminTab === 'u') {
            DB.users().then(function (us) {
                body.innerHTML =
                    '<table class="t">' +
                    '<thead><tr>' +
                    '<th>Usuario</th><th>Nombre</th><th>Correo</th>' +
                    '<th>País</th><th>Rol</th><th>Registro</th><th></th>' +
                    '</tr></thead><tbody>' +
                    us.map(function (u) {
                        return '<tr>' +
                            '<td>' + esc(u.usuario) + '</td>' +
                            '<td>' + esc(u.nombre + ' ' + u.apellido) + '</td>' +
                            '<td>' + esc(u.email) + '</td>' +
                            '<td>' + esc(u.pais) + '</td>' +
                            '<td>' + esc(u.rol) + '</td>' +
                            '<td>' + fmt(u.creado) + '</td>' +
                            '<td>' +
                            (u.rol === 'admin'
                                ? ''
                                : '<button class="btn sm danger" data-del="' +
                                    esc(u.usuario) + '">Eliminar</button>') +
                            '</td>' +
                            '</tr>';
                    }).join('') +
                    '</tbody></table>';
            });
        } else if (adminTab === 'r') {
            DB.results().then(function (rs) {
                body.innerHTML =
                    '<table class="t">' +
                    '<thead><tr>' +
                    '<th>ID</th><th>Usuario</th><th>Curso</th><th>Fecha</th>' +
                    '<th>Nota</th><th>Aciertos</th><th>Estado</th>' +
                    '</tr></thead><tbody>' +
                    (rs.map(function (x) {
                        return '<tr>' +
                            '<td>' + x.id + '</td>' +
                            '<td>' + esc(x.usuario) + '</td>' +
                            '<td>' + esc(CURSOS[x.curso || 'hardware'].nombre) + '</td>' +
                            '<td>' + fmt(x.fecha) + '</td>' +
                            '<td>' + x.nota + '</td>' +
                            '<td>' + x.aciertos + '/' + (x.total || 8) + '</td>' +
                            '<td>' + (x.aprobado ? '✅' : '❌') + '</td>' +
                            '</tr>';
                    }).join('') ||
                    '<tr><td colspan="7">Sin evaluaciones.</td></tr>') +
                    '</tbody></table>';
            });
        } else {
            DB.contacts().then(function (cs) {
                body.innerHTML =
                    '<table class="t">' +
                    '<thead><tr>' +
                    '<th>Fecha</th><th>Nombre</th><th>Correo</th>' +
                    '<th>Asunto</th><th>Mensaje</th>' +
                    '</tr></thead><tbody>' +
                    (cs.map(function (c) {
                        return '<tr>' +
                            '<td>' + fmt(c.fecha) + '</td>' +
                            '<td>' + esc(c.nombre) + '</td>' +
                            '<td>' + esc(c.email) + '</td>' +
                            '<td>' + esc(c.asunto) + '</td>' +
                            '<td>' + esc(c.mensaje) + '</td>' +
                            '</tr>';
                    }).join('') ||
                    '<tr><td colspan="5">Sin mensajes.</td></tr>') +
                    '</tbody></table>';
            });
        }
    }

    $('#admin-tabs').addEventListener('click', function (e) {
        if (e.target.dataset.t) {
            adminTab = e.target.dataset.t;
            renderAdmin();
        }
    });

    $('#admin-body').addEventListener('click', function (e) {
        var u = e.target.dataset.del;

        if (u && confirm(
            '¿Eliminar al estudiante ' + u + ' y sus resultados?'
        )) {
            DB.deleteUser(u).then(renderAdmin);
        }
    });

    $('#btn-reset').addEventListener('click', function () {
        if (confirm(
            'Se borrarán TODOS los datos (se recreará solo el usuario admin). ¿Continuar?'
        )) {
            DB.reset().then(function () {
                setSession(null);
                lastResult = null;
                location.hash = '#inicio';
                location.reload();
            });
        }
    });

    /* ---------- Exportar datos a CSV ---------- */

    $('#btn-export').addEventListener('click', function () {

        Promise.all([
            DB.users(),
            DB.results(),
            DB.contacts()
        ]).then(function (r) {

            var usuarios = r[0];
            var resultados = r[1];
            var contactos = r[2];

            // Encabezados de todas las columnas del archivo CSV.
            var encabezados = [
                'tipo',
                'usuario',
                'nombre',
                'apellido',
                'email',
                'telefono',
                'nacimiento',
                'pais',
                'genero',
                'intereses',
                'rol',
                'fecha_registro',
                'id',
                'curso',
                'fecha_evaluacion',
                'respuestas',
                'aciertos',
                'total',
                'nota',
                'aprobado',
                'asunto',
                'mensaje',
                'fecha_contacto'
            ];

            var filas = [];

            // Convierte un valor en una celda CSV segura.
            function celda(valor) {

                if (valor === null || valor === undefined) {
                    valor = '';
                }

                if (Array.isArray(valor) || typeof valor === 'object') {
                    valor = JSON.stringify(valor);
                }

                valor = String(valor);

                // Evita que Excel interprete ciertos textos como fórmulas.
                if (/^[=+\-@]/.test(valor)) {
                    valor = "'" + valor;
                }

                // Escapa las comillas dobles.
                valor = valor.replace(/"/g, '""');

                // Las comas, comillas y saltos de línea requieren comillas.
                return '"' + valor + '"';
            }

            // Agrega una fila al archivo respetando el orden de columnas.
            function agregarFila(datos) {
                filas.push(
                    encabezados.map(function (columna) {
                        return celda(datos[columna]);
                    }).join(',')
                );
            }

            // Exportar usuarios sin incluir contraseñas ni hashes.
            usuarios.forEach(function (u) {

                agregarFila({
                    tipo: 'usuario',
                    usuario: u.usuario,
                    nombre: u.nombre,
                    apellido: u.apellido,
                    email: u.email,
                    telefono: u.telefono,
                    nacimiento: u.nacimiento,
                    pais: u.pais,
                    genero: u.genero,
                    intereses: u.intereses,
                    rol: u.rol,
                    fecha_registro: u.creado
                });

            });

            // Exportar resultados de las evaluaciones.
            resultados.forEach(function (x) {

                agregarFila({
                    tipo: 'resultado',
                    usuario: x.usuario,
                    nombre: x.nombre,
                    id: x.id,
                    curso: x.curso,
                    fecha_evaluacion: x.fecha,
                    respuestas: x.respuestas,
                    aciertos: x.aciertos,
                    total: x.total,
                    nota: x.nota,
                    aprobado: x.aprobado ? 'Sí' : 'No'
                });

            });

            // Exportar mensajes enviados desde el formulario de contacto.
            contactos.forEach(function (c) {

                agregarFila({
                    tipo: 'contacto',
                    nombre: c.nombre,
                    email: c.email,
                    asunto: c.asunto,
                    mensaje: c.mensaje,
                    fecha_contacto: c.fecha
                });

            });

            // Agregar encabezados y todas las filas.
            var contenido = [
                encabezados.map(celda).join(',')
            ].concat(filas).join('\r\n');

            // BOM para facilitar la lectura de tildes y caracteres especiales.
            var archivo = new Blob(
                ['\uFEFF' + contenido],
                { type: 'text/csv;charset=utf-8;' }
            );

            // Crear y descargar el archivo.
            var url = URL.createObjectURL(archivo);
            var a = document.createElement('a');

            a.href = url;
            a.download = 'academia-estelar.csv';

            document.body.appendChild(a);
            a.click();
            a.remove();

            URL.revokeObjectURL(url);

        }).catch(function (error) {

            alert(
                'No se pudieron exportar los datos: ' +
                (error && error.message ? error.message : error)
            );

        });

    });

    /* ---------- Arranque ---------- */

    addEventListener('hashchange', route);

    DB.open()
        .then(function () {
            var u = store('ae_user');
            return u ? DB.getUser(u) : null;
        })
        .then(function (rec) {
            if (rec) {
                session = rec;
            }

            updateNav();
            route();
        })
        .catch(function () {
            updateNav();
            route();

            alert(
                'Este navegador no permite IndexedDB: el registro no funcionará.'
            );
        });

})();