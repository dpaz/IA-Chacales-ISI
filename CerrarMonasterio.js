
CierraMonasterio = function (pieza, final) {

		var puntos = 0;
		var monje;
		var piezasTotales = 0;

		this.sumar = function () {
		    var sumados = [];
		    seguidorEncontrado.forEach(function (seguidor) {
		        jugador = Tablero.listaSeguidores.find(function (jug) { jug == seguidor.jugador; });
		        if (jugador.indexOf(sumados) >= 0) {
		            jugador.puntuacion += puntos;
		            sumados.push(jugador);
		        }
		        jugador.seguidores++;
		    });
		};
        
		var cerrarMon = function (ficha) {
		    var TenemosMonje = false;
		    var FichasCercanas = 0;
		    ficha.seguidores.forEach(function(seguidor){
		        if(seguidor.tipo=='Monje'){
		            monje = seguidor;
		            TenemosMonje = true;
		        }  
		    });




		    };


		if ((ficha.tipo == "MonCamino") || (ficha.tipo == "MonGranja"))
		{
		    cerrarMon(ficha);
		}








		return [puntuacion, seguidoresEncontrados];
}
