
/* 
 * Capa de datos con IndexedDB.
 */
var DB = (function () {
    var NAME = 'AcademiaEstelarDB';
    var VER = 1;
    var db = null;

    // Abre la base de datos.
    function open() {
        return new Promise(function (ok, fail) {
            if (db) {
                return ok(db);
            }

            var rq = indexedDB.open(NAME, VER);

            rq.onupgradeneeded = function (e) {
                var d = e.target.result;

                var u = d.createObjectStore('users', {
                    keyPath: 'usuario'
                });
                u.createIndex('email', 'email', {
                    unique: true
                });

                var r = d.createObjectStore('results', {
                    keyPath: 'id',
                    autoIncrement: true
                });
                r.createIndex('usuario', 'usuario');

                d.createObjectStore('progress', {
                    keyPath: 'usuario'
                });

                d.createObjectStore('contacts', {
                    keyPath: 'id',
                    autoIncrement: true
                });
            };
            rq.onsuccess = function () {
                db = rq.result;
                seedAdmin().then(
                    function () {
                        ok(db);
                    },
                    fail
                );
            };
            rq.onerror = function () {
                fail(rq.error);
            };
        });
    }
    // Ejecuta una operación sobre un almacén.
    function tx(store, mode, fn) {
        return open().then(function (d) {
            return new Promise(function (ok, fail) {
                var t = d.transaction(store, mode);
                var s = t.objectStore(store);
                var out = fn(s);

                t.oncomplete = function () {
                    ok(out ? out.result : undefined);
                };

                t.onerror = t.onabort = function () {
                    fail(t.error);
                };
            });
        });
    }
    // Genera un hash para la contraseña.
    function hash(user, pass) {
        var txt = 'AE26|' + user + '|' + pass;

        if (window.crypto && crypto.subtle && window.TextEncoder) {
            return crypto.subtle.digest(
                'SHA-256',
                new TextEncoder().encode(txt)
            ).then(function (b) {
                return 's:' + Array.from(new Uint8Array(b))
                    .map(function (x) {
                        return x.toString(16).padStart(2, '0');
                    })
                    .join('');
            });
        }

        var h = 5381;

        for (var i = 0; i < txt.length; i++) {
            h = ((h << 5) + h + txt.charCodeAt(i)) | 0;
        }

        return Promise.resolve('d:' + (h >>> 0).toString(16));
    }
    /*
     * Usuario administrador para pruebas:
     * usuario: admin
     * contraseña: 2026
     *
     * La contraseña se guarda como hash.
     */
    function seedAdmin() {
        return new Promise(function (ok, fail) {
            var t = db.transaction('users', 'readonly');
            var g = t.objectStore('users').get('admin');

            g.onsuccess = function () {
                if (g.result) {
                    return ok();
                }

                hash('admin', '2026').then(function (h) {
                    var w = db.transaction('users', 'readwrite');

                    w.objectStore('users').add({
                        usuario: 'admin',
                        nombre: 'Administrador',
                        apellido: 'del Sistema',
                        email: 'admin@academiaestelar.edu',
                        pass: h,
                        telefono: '00000000',
                        nacimiento: '2000-01-01',
                        pais: 'Guatemala',
                        genero: 'Otro',
                        intereses: ['Hardware', 'Software'],
                        rol: 'admin',
                        creado: new Date().toISOString()
                    });

                    w.oncomplete = function () {
                        ok();
                    };

                    w.onerror = function () {
                        fail(w.error);
                    };
                });
            };

            g.onerror = function () {
                fail(g.error);
            };
        });
    }
    // Obtiene todos los registros de un almacén.
    function all(store) {
        return tx(store, 'readonly', function (s) {
            return s.getAll();
        });
    }
    // Métodos públicos de la base de datos.
    return {
        open: open,
        hash: hash,

        getUser: function (u) {
            return tx('users', 'readonly', function (s) {
                return s.get(u);
            });
        },

        emailExists: function (em) {
            return tx('users', 'readonly', function (s) {
                return s.index('email').get(em);
            }).then(function (r) {
                return !!r;
            });
        },

        addUser: function (u) {
            return tx('users', 'readwrite', function (s) {
                return s.add(u);
            });
        },

        users: function () {
            return all('users');
        },

        addResult: function (r) {
            return tx('results', 'readwrite', function (s) {
                return s.add(r);
            });
        },

        results: function () {
            return all('results');
        },

        resultsOf: function (u) {
            return tx('results', 'readonly', function (s) {
                return s.index('usuario').getAll(u);
            });
        },

        // Progreso por curso (si no se indica, usa el curso de hardware).
        getProgress: function (u, curso) {
            curso = curso || 'hardware';

            return tx('progress', 'readonly', function (s) {
                return s.get(u);
            }).then(function (p) {
                var m = [];

                if (p && p.cursos && p.cursos[curso]) {
                    m = p.cursos[curso];
                } else if (p && curso === 'hardware' && p.modulos) {
                    m = p.modulos;
                }

                return {
                    usuario: u,
                    curso: curso,
                    modulos: m.slice()
                };
            });
        },

        setProgress: function (p) {
            return open().then(function (d) {
                return new Promise(function (ok, fail) {
                    var t = d.transaction('progress', 'readwrite');
                    var s = t.objectStore('progress');
                    var g = s.get(p.usuario);

                    g.onsuccess = function () {
                        var rec = g.result || {
                            usuario: p.usuario,
                            modulos: [],
                            cursos: {}
                        };

                        rec.cursos = rec.cursos || {};
                        rec.cursos[p.curso || 'hardware'] = p.modulos;
                        s.put(rec);
                    };

                    t.oncomplete = ok;
                    t.onerror = function () {
                        fail(t.error);
                    };
                });
            });
        },

        addContact: function (c) {
            return tx('contacts', 'readwrite', function (s) {
                return s.add(c);
            });
        },

        contacts: function () {
            return all('contacts');
        },

        // Elimina un usuario y sus resultados y progreso.
        deleteUser: function (u) {
            return open().then(function (d) {
                return new Promise(function (ok, fail) {
                    var t = d.transaction(
                        ['users', 'results', 'progress'],
                        'readwrite'
                    );

                    t.objectStore('users').delete(u);
                    t.objectStore('progress').delete(u);

                    var c = t.objectStore('results')
                        .index('usuario')
                        .openKeyCursor(IDBKeyRange.only(u));

                    c.onsuccess = function () {
                        var k = c.result;

                        if (k) {
                            t.objectStore('results').delete(k.primaryKey);
                            k.continue();
                        }
                    };
                    t.oncomplete = ok;
                    t.onerror = function () {
                        fail(t.error);
                    };
                });
            });
        },
        // Reinicia la base de datos.
        reset: function () {
            if (db) {
                db.close();
            }
            db = null;
            return new Promise(function (ok) {
                var r = indexedDB.deleteDatabase(NAME);
                r.onsuccess = r.onerror = r.onblocked = function () {
                    ok();
                };
            });
        }
    };
})();
