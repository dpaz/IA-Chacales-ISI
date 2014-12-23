// Le paso por parametro la pieza que acabamos de colocar, la posicon donde colocar el seguidor


otroladron= function(pieza,posSeg,tablero,vengode){


	this.piezaArriba = function(pieza,posSeg,tablero,vengode){
	
		//Pieza de arriba
		if(pieza.Arriba == 'Camino'&& tablero.piezaenposiciones(pieza.x,pieza.y+1) && tablero.piezaenposiciones(pieza.x,pieza.y+1).Abajo=='Camino'&& vengode !='Arriba'){
			//Primero compruebo que en esa pieza no hay ladrones
			var aux =tablero.piezaenposiciones(pieza.x,pieza.y+1);
			
			if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguiguidores[i].tipo== 'ladron'){return true;}
				}
				//llamada recursiva para seguir comprobando el camino
				return otroladron(aux,2,tablero,'Abajo');
			}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true;}
				}
				//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
				if(aux.Derecha == 'Camino'){return otroladron(aux,6,tablero,'Abajo');}
				else{return otroladron(aux,4,tablero,'Abajo');}
			}else{
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron' && aux.seguidores[i].posicion == 8){return true}
				}
				//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
			}
		}

		return false;
	}

	this.piezaAbajo = function(pieza,posSeg,tablero,vengode){
		//Pieza de abajo

		if(pieza.Abajo == 'Camino'&& tablero.piezaenposiciones(pieza.x,pieza.y-1) && tablero.piezaenposiciones(pieza.x,pieza.y-1).Arriba=='Camino' && vengode !='Abajo'){
			var aux =tablero.piezaenposiciones(pieza.x,pieza.y-1);
			//Primero compruebo que en esa pieza no hay ladrones
			if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguiguidores[i].tipo== 'ladron'){return true}
				}
				//llamada recursiva para seguir comprobando el camino
				return otroladron(aux,8,tablero,'Arriba');
			}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true}
				}
				//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
				if(aux.Derecha == 'Camino'){return otroladron(aux,6,tablero,'Arriba');}
				else{return otroladron(aux,4,tablero,'Arriba');}
			}else{
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron' && aux.seguidores[i].posicion == 2){return true}
				}
				//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
			}
		}
		return false;
	}

	this.piezaDerecha = function(pieza,posSeg,tablero,vengode){
		//Pieza de la derecha
		if(pieza.Derecha == 'Camino'&& tablero.piezaenposiciones(pieza.x+1,pieza.y) && tablero.piezaenposiciones(pieza.x+1,pieza.y).Izquierda=='Camino' && vengode !='Derecha'){
			var aux =tablero.piezaenposiciones(pieza.x+1,pieza.y);
			//Primero compruebo que en esa pieza no hay ladrones
			if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true}
				}
				//llamada recursiva para seguir comprobando el camino
				return otroladron(aux,6,tablero,'Izquierda');
			}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true}
				}
				//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
				if(aux.Arriba == 'Camino'){return otroladron(aux,2,tablero,'Izquierda');}
				else{return otroladron(aux,8,tablero,'Izquierda');}
			}else{
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron' && aux.seguidores[i].posicion == 4){return true}
				}
				//En caso de que sea uno de los cruces o el monasterio o las entradas de ciudad no hay recursividad ya
			}
		}
		return false;
	}

	this.piezaIzquierda = function(pieza,posSeg,tablero,vengode){
		//Pieza de la izquierda
		if(pieza.Izquierda == 'Camino'&& tablero.piezaenposiciones(pieza.x-1,pieza.y) && tablero.piezaenposiciones(pieza.x-1,pieza.y).Derecha=='Camino' && vengode != 'Izquierda'){
			var aux =tablero.piezaenposiciones(pieza.x-1,pieza.y);
			//Primero compruebo que en esa pieza no hay ladrones
			if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true}
				}
				//llamada recursiva para seguir comprobando el camino
				return otroladron(aux,4,tablero,'Derecha');
			}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron'){return true}
				}
				//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
				if(aux.Arriba == 'Camino'){return otroladron(aux,2,tablero,'Derecha');}
				else{return otroladron(aux,8,tablero,'Derecha');}
			}else{
				for(i=0;i<aux.seguidores.length;i++){
					if(aux.seguidores[i].tipo== 'ladron' && aux.seguidores[i].posicion == 6){return true}
				}
				//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
			}
		}
		return false;
	}
	//Esto es para el caso de que nuestra pieza inicial tenga el seguidor
	for(i=0;i<pieza.seguidores.length;i++){
		if(pieza.seguidores[i].tipo="ladron"){return true}
	}
	if(pieza.tipo == 'Cruce4' || pieza.tipo== 'Cruce3' || pieza.tipo=='CiudadL'){
		if(posSeg==2){
			//Pieza de arriba

			return piezaArriba(pieza,posSeg,tablero,vengode);

		}

		else if(posSeg==4){
			//Pieza de la izquierda
			return piezaIzquierda(pieza,posSeg,tablero,vengode);
		}

		else if(posSeg==6){
			//Pieza de la derecha
			return piezaDerecha(pieza,posSeg,tablero,vengode);
		}

		else{
			//Pieza de abajo
			return piezaAbajo(pieza,posSeg,tablero,vengode);
		}
	}
	else{
		//Pieza de arriba
		return piezaArriba(pieza,posSeg,tablero,vengode);

		//Pieza de abajo
		return piezaAbajo(pieza,posSeg,tablero,vengode);



		//Pieza de la derecha
		return piezaDerecha(pieza,posSeg,tablero,vengode);


		//Pieza de la izquierda
		return piezaIzquierda(pieza,posSeg,tablero,vengode);
	}
	
}








