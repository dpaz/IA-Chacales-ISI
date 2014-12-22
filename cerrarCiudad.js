cerrarCiudad = function(pieza,final){
	var finalesCiudad = ["CiudadD", "CiudadE", "CiudadH", "CiudadI", "CiudadJ", "CiudadK", "CiudadL"];
	var seguidoresEncontrados = [];
	var puntos = 0;
	var cerrado = 0;
	var piezasRecorridas = [];


	this.sumar = function(){
		var sumados = [];
		seguidoresEncontrados.forEach(function(seguidor){

			jugador = Tablero.listaSeguidores.find(function(jug){jug == seguidor.jugador;});
			if(jugador.indexOf(sumados)>=0){
				jugador.puntuacion += puntos;
				sumados.push(jugador);
			}
			jugador.seguidores++;
		});
		
	};
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// ARRIBA-ABAJO-DCHA-IZDA
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	this.cerrarCiudadRecur = function(pieza,vengode){
		var ok = new Array(4);
		piezasRecorridas.push(pieza);
		ok[0] = this.piezaAbajo(pieza,vengode);

		ok[1] = this.piezaArriba(pieza,vengode);

		ok[2] = this.piezaDerecha(pieza,vengode);

		ok[3] = this.piezaIzquierda(pieza,vengode);
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}
	};
	
	if(finalesCiudad.idexOf(pieza.tipo)<0){
	//esto significa que la pieza no es un final de ciudad por lo tanto tendrá que cerrarse por varios lados (minimo 2 lados)
		cerrarCiudadRecur(pieza);
		if(cerrado >= 2 || final){
			this.sumar();
			piezasRecorridas.forEach(function(pieza){
				pieza.ciudadCerrada = true;
			});
			
		}else{
			puntuacion=0;
			seguidoresEncontrados = [];
		}
	}else{
	//es un final de ciudad por lo tanto tiene que haber como mínimo otro final de ciudad
		cerrarCiudadRecur(pieza);
		if(cerrado >= 1 || final){
			this.sumar();
			piezasRecorridas.forEach(function(pieza){
				pieza.ciudadCerrada = true;
			});
			
		}else{
			puntuacion=0;
			seguidoresEncontrados = [];
		}
	}
	return [puntuacion, seguidoresEncontrados];
}
