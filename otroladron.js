// Le paso por parametro la pieza que acabamos de colocar, la posicon donde colocar el seguidor
var valido = true;

otroladron= function(pieza,posSeg,vengode){
	if(pieza.tipo == 'Cruce4' || pieza.tipo== 'Cruce3' || pieza.tipo='CiudadL'){
		if(posSeg==2){
			//Pieza de arriba
			valido = piezaArriba(pieza,posSeg,valido,vengode);
		}

		else if(posSeg==4){
			//Pieza de la izquierda
			valido = piezaIzquierda(pieza,posSeg,valido,vengode);
		}

		else if(posSeg==6){
			//Pieza de la derecha
			valido = piezaDerecha(pieza,posSeg,valido,vengode);
		}

		else{
			//Pieza de abajo
			valido = piezaAbajo(pieza,posSeg,valido,vengode);
		}
	}
	else{
		//Pieza de arriba
		valido = piezaArriba(pieza,posSeg,valido,vengode);

		//Pieza de abajo
		valido = piezaAbajo(pieza,posSeg,valido,vengode);



		//Pieza de la derecha
		valido = piezaDerecha(pieza,posSeg,valido,vengode);


		//Pieza de la izquierda
		valido = piezaIzquierda(pieza,posSeg,valido,vengode);
	}
	return valido;
}

piezaArriba = function(pieza,posSeg,valido,vengode){
	
	//Pieza de arriba
	if(pieza.Arriba == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y+1).Abajo=='Camino'&& vengode !='Arriba'){
		//Primero compruebo que en esa pieza no hay ladrones
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,2,'Arriba');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){valido =otroladron(aux,6,'Arriba');}
			else{valido = otroladron(aux,4,'Arriba');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 8){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}

	return valido;
}

piezaAbajo = function(pieza,posSeg,valido,vengode){
	//Pieza de abajo
	if(pieza.Abajo == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y-1).Arriba=='Camino' && vengode !='Abajo'){
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y-1);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,8,'Abajo');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){valido =  otroladron(aux,6,'Abajo');}
			else{valido = otroladron(aux,4,'Abajo');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 2){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return valido;
}

piezaDerecha = function(pieza,posSeg,valido,vengode){
	//Pieza de la derecha
	if(pieza.Derecha == 'Camino' && Tablero.piezaenposiciones(pieza.x+1,pieza.y).Izquierda=='Camino' && vengode !='Derecha'){
		var aux =Tablero.piezaenposiciones(pieza.x+1,pieza.y);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,6,'Derecha');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){valido = otroladron(aux,2,'Derecha');}
			else{valido = otroladron(aux,8,'Derecha');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 4){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio o las entradas de ciudad no hay recursividad ya
		}
	}
	return valido;
}

piezaIzquierda = function(pieza,posSeg,valido,vengode){
	//Pieza de la izquierda
	if(pieza.Izquierda == 'Camino'&& Tablero.piezaenposiciones(pieza.x-1,pieza.y).Derecha=='Camino' && vengode != 'Izquierda'){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,4,'Izquierda');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){valido =  otroladron(aux,2,'Izquierda');}
			else{valido =  otroladron(aux,8,'Izquierda');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 6){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return valido;
}