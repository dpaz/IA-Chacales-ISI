granjafinal = function(pieza,tablero){

	var seguidoresEncontrados = [];
	var piezasRecorridas = [];

	piezaArriba = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x,pieza.y+1);

		if(aux != undefined && vengode != "Arriba" && pieza.Arriba!="Ciudad"){
			
		}else {
			return true;
		}
	}
	piezaAbajo = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x,pieza.y-1);

		if(aux != undefined && vengode != "Abajo" && pieza.Abajo!="Ciudad"){
			
		}else {
			return true;
		}
	}
	piezaDerecha = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x+1,pieza.y);

		if(aux != undefined && vengode != "Derecha" && pieza.Derecha!="Ciudad"){
			
		}else{
			return true;
		}
	}
	piezaIzquierda = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x-1,pieza.y);

		if(aux != undefined && vengode != "Izquierda" && pieza.Izquierda!="Ciudad"){
			
		}else{
			return true;
		}
	}

	granjarecur = function(pieza,vengode){
		var ok = new Array(4);
		piezasRecorridas.push(pieza);
		ok[0] = this.piezaAbajo(pieza,vengode);

		ok[1] = this.piezaArriba(pieza,vengode);

		ok[2] = this.piezaDerecha(pieza,vengode);

		ok[3] = this.piezaIzquierda(pieza,vengode);
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}
	}


	grajarecur(pieza);

}