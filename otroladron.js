

// Le paso por parametro la pieza que acabamos de colocar, la posicon donde colocar el seguidor
otroladron= function(pieza,posSeg){
	var valido = true;
	if(pieza.tipo == 'Cruce4' || pieza.tipo== 'Cruce3' || pieza.tipo='CiudadL'){
		if(posSeg==2){
			//Pieza de arriba
			valido = piezaArriba(pieza,posSeg,valido);
		}

		else if(posSeg==4){
			//Pieza de la izquierda
			valido = piezaIzquierda(pieza,posSeg,valido);
		}

		else if(posSeg==6){
			//Pieza de la derecha
			valido = piezaDerecha(pieza,posSeg,valido);
		}

		else{
			//Pieza de abajo
			valido = piezaAbajo(pieza,posSeg,valido);
		}
	}
	else{
		//Pieza de arriba
		valido = piezaArriba(pieza,posSeg,valido);

		//Pieza de abajo
		valido = piezaAbajo(pieza,posSeg,valido);



		//Pieza de la derecha
		valido = piezaDerecha(pieza,posSeg,valido);


		//Pieza de la izquierda
		valido = piezaIzquierda(pieza,posSeg,valido);
	}
	return valido;
}

piezaArriba = function(pieza,posSeg,valido){
	
	//Pieza de arriba
	if(pieza.Arriba == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y+1).Abajo=='Camino'){
		//Primero compruebo que en esa pieza no hay ladrones
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,2);
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){valido =otroladron(aux,6);}
			else{valido = otroladron(aux,4);}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 8){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}

	return valido;
}

piezaAbajo = function(pieza,posSeg,valido){
	//Pieza de abajo
	if(pieza.Abajo == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y-1).Arriba=='Camino'){
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y-1);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			otroladron(aux,8);
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){valido =  otroladron(aux,6);}
			else{valido = otroladron(aux,4);}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 2){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return valido;
}

piezaDerecha = function(pieza,posSeg,valido){
	//Pieza de la derecha
	if(Tablero.piezaenposiciones(pieza.x+1,pieza.y).Izquierda=='Camino'){
		var aux =Tablero.piezaenposiciones(pieza.x+1,pieza.y);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,6);
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){valido = otroladron(aux,2);}
			else{valido = otroladron(aux,8);}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 4){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio o las entradas de ciudad no hay recursividad ya
		}
	}
	return valido;
}

piezaIzquierda = function(pieza,posSeg,valido){
	//Pieza de la izquierda
	if(Tablero.piezaenposiciones(pieza.x-1,pieza.y).Derecha=='Camino'){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//llamada recursiva para seguir comprobando el camino
			valido = otroladron(aux,4);
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){valido = false; return valido}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){valido =  otroladron(aux,2);}
			else{valido =  otroladron(aux,8);}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 6){valido = false; return valido}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return valido;
}