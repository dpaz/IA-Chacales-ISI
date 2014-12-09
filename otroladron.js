// Le paso por parametro la pieza que acabamos de colocar, la posicon donde colocar el seguidor
var otro = false;

otroladron= function(pieza,posSeg,vengode){
	if(pieza.tipo == 'Cruce4' || pieza.tipo== 'Cruce3' || pieza.tipo=='CiudadL'){
		if(posSeg==2){
			//Pieza de arriba
			otro = piezaArriba(pieza,posSeg,otro,vengode);
		}

		else if(posSeg==4){
			//Pieza de la izquierda
			otro = piezaIzquierda(pieza,posSeg,otro,vengode);
		}

		else if(posSeg==6){
			//Pieza de la derecha
			otro = piezaDerecha(pieza,posSeg,otro,vengode);
		}

		else{
			//Pieza de abajo
			otro = piezaAbajo(pieza,posSeg,otro,vengode);
		}
	}
	else{
		//Pieza de arriba
		otro = piezaArriba(pieza,posSeg,otro,vengode);

		//Pieza de abajo
		otro = piezaAbajo(pieza,posSeg,otro,vengode);



		//Pieza de la derecha
		otro = piezaDerecha(pieza,posSeg,otro,vengode);


		//Pieza de la izquierda
		otro = piezaIzquierda(pieza,posSeg,otro,vengode);
	}
	return otro;
}

piezaArriba = function(pieza,posSeg,otro,vengode){
	
	//Pieza de arriba
	if(pieza.Arriba == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y+1).Abajo=='Camino'&& vengode !='Arriba'){
		//Primero compruebo que en esa pieza no hay ladrones
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando el camino
			otro = otroladron(aux,2,'Abajo');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){otro =otroladron(aux,6,'Abajo');}
			else{otro = otroladron(aux,4,'Abajo');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 8){otro = true; return otro}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}

	return otro;
}

piezaAbajo = function(pieza,posSeg,otro,vengode){
	//Pieza de abajo
	if(pieza.Abajo == 'Camino' && Tablero.piezaenposiciones(pieza.x,pieza.y-1).Arriba=='Camino' && vengode !='Abajo'){
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y-1);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando el camino
			otro = otroladron(aux,8,'Arriba');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Derecha == 'Camino'){otro =  otroladron(aux,6,'Arriba');}
			else{otro = otroladron(aux,4,'Arriba');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 2){otro = true; return otro}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return otro;
}

piezaDerecha = function(pieza,posSeg,otro,vengode){
	//Pieza de la derecha
	if(pieza.Derecha == 'Camino' && Tablero.piezaenposiciones(pieza.x+1,pieza.y).Izquierda=='Camino' && vengode !='Derecha'){
		var aux =Tablero.piezaenposiciones(pieza.x+1,pieza.y);
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando el camino
			otro = otroladron(aux,6,'Izquierda');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){otro = otroladron(aux,2,'Izquierda');}
			else{otro = otroladron(aux,8,'Izquierda');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 4){otro = true; return otro}
			}
			//En caso de que sea uno de los cruces o el monasterio o las entradas de ciudad no hay recursividad ya
		}
	}
	return otro;
}

piezaIzquierda = function(pieza,posSeg,otro,vengode){
	//Pieza de la izquierda
	if(pieza.Izquierda == 'Camino'&& Tablero.piezaenposiciones(pieza.x-1,pieza.y).Derecha=='Camino' && vengode != 'Izquierda'){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'Recto' || aux.tipo =='CiudadD'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando el camino
			otro = otroladron(aux,4,'Derecha');
		}else if(aux.tipo == 'Curva' || aux.tipo=='CiudadJ' || aux.tipo=='CiudadK' || aux.tipo=='CiudadO'|| aux.tipo=='CiudadP'){
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron'){otro = true; return otro}
			}
			//En esta llamada recursiva compruebo antes el lado hacia donde esta el camino
			if(aux.Arriba == 'Camino'){otro =  otroladron(aux,2,'Derecha');}
			else{otro =  otroladron(aux,8,'Derecha');}
		}else{
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'ladron' && aux.seguidres[i].posicion == 6){otro = true; return otro}
			}
			//En caso de que sea uno de los cruces o el monasterio no hay recursividad ya
		}
	}
	return otro;
}