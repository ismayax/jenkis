var movida = false; // Variable de estado

        function moverFlecha() {
            var Flecha = document.getElementById('mostrarTexto');
            var Sobrenosotros = document.querySelector('.sobrenosotros');
            var Banderas = document.querySelector('.banderas');
            var Participantes = document.querySelector('.participantes');

            var posicionFlecha = parseFloat(getComputedStyle(Flecha).top);
            var posicionSobrenosotros = parseFloat(getComputedStyle(Sobrenosotros).top);
            

            if (movida) {
                // Si la flecha ya se movió, vuelve a su posición original
                Flecha.style.top = '165%';
                Sobrenosotros.style.top = '150%';
            } else {
                // Si no se ha movido, se mueve hacia arriba
                var posicionFlecha2 = posicionFlecha - 180;
                var posicionSobrenosotros2 = posicionSobrenosotros - 180;
                Flecha.style.top = posicionFlecha2 + 'px';
                Sobrenosotros.style.top = posicionSobrenosotros2 + 'px';

            }

            // Cambiamos el estado
            movida = !movida;

        
            if (movida) {
                Banderas.style.display = 'block';
                Participantes.style.display = 'block';
            } else {
                Banderas.style.display = 'none';
                Participantes.style.display = 'none';
            }
        }

        function redirigirAInstagram() {
            window.open('https://www.instagram.com/cuevagaming', '_blank');
        }
        function redirigirATwitter() {
            window.open('https://www.twitter.com/@cuevagaming', '_blank');
        }
        function redirigirATiktok() {
            window.open('https://www.tiktok.com/@cuevagaming', '_blank');
        }