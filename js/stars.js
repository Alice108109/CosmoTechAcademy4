
/* 
 * Campo de estrellas
 */
(function () {
    var c = document.getElementById('stars');
    var x = c.getContext('2d');
    var s = [];
    var W;
    var H;
    var my = 0;
    // Inicializa el tamaño del canvas y genera las estrellas.
    function init() {
        W = c.width = innerWidth;
        H = c.height = innerHeight;

        var n = Math.min(
            260,
            Math.floor(W * H / 6000)
        );
        s = [];
        for (var i = 0; i < n; i++) {
            s.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 1.6 + 0.2,
                v: Math.random() * 0.35 + 0.05,
                t: Math.random() * 6
            });
        }
    }
    // Dibuja y anima las estrellas.
    function draw() {
        x.clearRect(0, 0, W, H);
        for (var i = 0; i < s.length; i++) {
            var p = s[i];
            p.y += p.v;
            p.t += 0.03;
            // Reinicia la estrella cuando sale de la pantalla.
            if (p.y > H) {
                p.y = 0;
                p.x = Math.random() * W;
            }
            // Crea el efecto de brillo.
            x.globalAlpha =
                0.45 + 0.55 * Math.abs(Math.sin(p.t));
            // Alterna los colores de las estrellas.
            x.fillStyle = i % 9 === 0
                ? '#ffd37a'
                : (i % 7 === 0 ? '#7cf3ff' : '#fff');
            x.beginPath();
            x.arc(
                p.x,
                p.y + my * p.v * 20,
                p.r,
                0,
                6.283
            );
            x.fill();
        }
        requestAnimationFrame(draw);
    }
    // Ajusta el fondo cuando cambia el tamaño de la ventana.
    addEventListener('resize', init);
    // Calcula el movimiento parallax según la posición del ratón.
    addEventListener('mousemove', function (e) {
        my = e.clientY / H - 0.5;
    });
    // Inicia la animación.
    init();
    draw();
})();
