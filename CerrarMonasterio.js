
CierraMonasterio = function (pieza, final) {
		var puntos = 0;
		var seguidoresEncontrados = [];
		var piezasTotales = 0;

		this.sumar = function () {
		    var sumados = [];
		    seguidoresEncontrados.forEach(function (seguidor) {

		        jugador = Tablero.listaSeguidores.find(function (jug) { jug == seguidor.jugador; });
		        if (jugador.indexOf(sumados) >= 0) {
		            jugador.puntuacion += puntos;
		            sumados.push(jugador);
		        }
		        jugador.seguidores++;
		    });

		};










}
