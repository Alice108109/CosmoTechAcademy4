
/*
* diploma
 */
var Diploma = (function () {
    function draw(canvas, d) {
        var c = canvas.getContext('2d');
        var W = canvas.width;
        var H = canvas.height;
        // Fondo degradado espacial.
        var g = c.createLinearGradient(0, 0, W, H);
        g.addColorStop(0, '#050818');
        g.addColorStop(1, '#2a1060');

        c.fillStyle = g;
        c.fillRect(0, 0, W, H);

        // Estrellas decorativas.
        for (var i = 0; i < 160; i++) {
            c.globalAlpha = Math.random() * 0.8 + 0.2;
            c.fillStyle = '#fff';

            c.beginPath();

            c.arc(
                Math.random() * W,
                Math.random() * H,
                Math.random() * 1.8 + 0.3,
                0,
                7
            );

            c.fill();
        }

        c.globalAlpha = 1;

        // Dibuja el planeta decorativo.
        var pg = c.createRadialGradient(
            W - 180, 180, 10,
            W - 180, 180, 120
        );

        pg.addColorStop(0, '#ffd9a0');
        pg.addColorStop(0.6, '#e0793a');
        pg.addColorStop(1, '#6b2a12');

        c.fillStyle = pg;
        c.beginPath();
        c.arc(W - 180, 180, 90, 0, 7);
        c.fill();

        // Anillo del planeta.
        c.strokeStyle = 'rgba(255,211,122,.7)';
        c.lineWidth = 6;

        c.beginPath();

        c.ellipse(
            W - 180, 180,
            150, 30,
            -0.4, 0, 7
        );

        c.stroke();

        // Bordes del diploma.
        c.strokeStyle = '#ffd37a';
        c.lineWidth = 8;
        c.strokeRect(30, 30, W - 60, H - 60);

        c.strokeStyle = '#7cf3ff';
        c.lineWidth = 2;
        c.strokeRect(50, 50, W - 100, H - 100);

        // Nombre de la academia.
        c.textAlign = 'center';
        c.fillStyle = '#ffd37a';
        c.font = 'bold 40px Georgia, serif';

        c.fillText(
            'ACADEMIA ESTELAR DE COMPUTACIÓN',
            W / 2,
            160
        );
        // Título principal.
        c.fillStyle = '#fff';
        c.font = 'bold 92px Georgia, serif';
        c.fillText('DIPLOMA', W / 2, 290);

        // Texto introductorio.
        c.fillStyle = '#a9b6e6';
        c.font = '30px Georgia, serif';
        c.fillText('Se otorga a', W / 2, 380);
        // Ajusta el tamaño del nombre del estudiante.
        var name = d.nombre;
        var size = 80;
        c.fillStyle = '#7cf3ff';
        do {
            c.font = 'italic bold ' + size + 'px Georgia, serif';
            size -= 4;
        } while (
            c.measureText(name).width > W - 240 &&
            size > 28
        );
        c.fillText(name, W / 2, 490);
        // Línea decorativa debajo del nombre.
        c.strokeStyle = '#ffd37a';
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(W / 2 - 340, 515);
        c.lineTo(W / 2 + 340, 515);
        c.stroke();
        // Nombre del curso.
        c.fillStyle = '#e8eeff';
        c.font = '32px Georgia, serif';
        c.fillText(
            'por aprobar satisfactoriamente el curso',
            W / 2,
            590
        );
        // Ajusta el tamaño del nombre del curso (los nombres largos se reducen).
        var curso = d.curso || 'HARDWARE Y SOFTWARE';
        var cs = 54;
        c.fillStyle = '#ffd37a';
        do {
            c.font = 'bold ' + cs + 'px Georgia, serif';
            cs -= 2;
        } while (
            c.measureText(curso).width > W - 240 &&
            cs > 24
        );
        c.fillText(curso, W / 2, 665);
        // Calificación obtenida.
        c.fillStyle = '#e8eeff';
        c.font = '32px Georgia, serif';
        c.fillText(
            'con una calificación de ' + d.nota + ' / 100',
            W / 2,
            735
        );
        // Fecha y folio del diploma.
        c.fillStyle = '#a9b6e6';
        c.font = '24px Georgia, serif';
        c.fillText(
            'Emitido el ' + d.fecha + ' · Folio AE-' + d.folio,
            W / 2,
            800
        );
        // Firma de la dirección académica.
        c.fillStyle = '#fff';
        c.font = 'italic 36px Georgia, serif';
        c.fillText(
            'Dirección Académica',
            W / 2 - 330,
            905
        );
        c.beginPath();
        c.moveTo(W / 2 - 520, 880);
        c.lineTo(W / 2 - 140, 880);
        c.stroke();
        // Elementos decorativos finales.
        c.font = '110px serif';
        c.fillText('🏅', W / 2 + 330, 900);

        c.font = '60px serif';
        c.fillText('🧑‍🚀', 140, 900);
        c.fillText('🚀', 140, 260);
    }
    return {
        draw: draw
    };
})();
