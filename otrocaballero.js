var otro = false;

otrocaballero= function(pieza,posSeg,vengode){
	if(pieza.tipo == 'CiudadH' || pieza.tipo== 'CiudadI'){
		if(posSeg==2){
			//Pieza de arriba
			otro = piezaArriba(pieza,posSeg,otro,vengode);
		}else if(posSeg==4){
			//Pieza de la izquierda
			otro = piezaIzquierda(pieza,posSeg,otro,vengode);
		}else if(posSeg==6){
			//Pieza de la derecha
			otro = piezaDerecha(pieza,posSeg,otro,vengode);
		}else if(posSeg==8){
			//Pieza de abajo
			otro = piezaAbajo(pieza,posSeg,otro,vengode);
		}
	}else{
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


piezaAbajo = function(pieza,posSeg,otro,vengode){
	//Pieza de abajo
	if(pieza.Abajo == 'Ciudad' && Tablero.piezaenposiciones(pieza.x,pieza.y-1).Arriba=='Ciudad' && vengode !='Abajo'){
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y-1);

		if(aux.tipo == 'CiudadG' || aux.tipo =='CiudadF'){
			//Ciudades conectadas arriba y abajo only
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando la ciudad (en este caso abajo == 8)
			otro = otrocaballero(aux,8,'Arriba');
		}else if(aux.tipo == 'CiudadQ' || aux.tipo == 'CiudadR' || aux.tipo == 'CiudadS' || aux.tipo == 'CiudadT' || aux.tipo == 'CiudadC'){
			//Ciudades con 3 trozos de ciudad y la de 4 cachos de ciudad
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//no hay caballeros pues recursividad
			otro = otrocaballero(aux,4,'Derecha'); //Izquierda
			otro = otrocaballero(aux,6,'Izquierda'); //Derecha
			otro = otrocaballero(aux,8,'Arriba'); //Abajo (puede estar girada) o la de todos los trozos
			
		 
		}else if(aux.tipo == 'CiudadM' || aux.tipo=='CiudadN' || aux.tipo=='CiudadO' || aux.tipo=='CiudadP'){
			//Ciudades con dos trozos de ciudad en modo "curva"
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			
			if(aux.Derecha == 'Ciudad'){
				otro = otrocaballero(aux,6,'Izquierda');
			}else{
				otro = otrocaballero(aux,4,'Derecha');
			}
		}else{
			//El resto de ciudades que ya cierran conexiones con otras ciudades
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero' && aux.seguidores[i].posicion == 2){otro = true; return otro}
			}
			//Aqui no hay mas conexiones, por lo tanto no hay recursividad
		}
	}
	return otro;
}

piezaArriba = function(pieza,posSeg,otro,vengode){
	//Pieza de arriba
	if(pieza.Arriba == 'Ciudad' && Tablero.piezaenposiciones(pieza.x,pieza.y+1).Abajo=='Ciudad' && vengode !='Arriba'){
		var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);

		if(aux.tipo == 'CiudadG' || aux.tipo =='CiudadF'){
			//Ciudades conectadas arriba y abajo only
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando la ciudad (en este caso arriba == 2)
			otro = otrocaballero(aux,2,'Abajo');
		}else if(aux.tipo == 'CiudadQ' || aux.tipo == 'CiudadR' || aux.tipo == 'CiudadS' || aux.tipo == 'CiudadT' || aux.tipo == 'CiudadC'){
			//Ciudades con 3 trozos de ciudad y la de 4 cachos de ciudad
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//no hay caballeros pues recursividad
			otro = otrocaballero(aux,4,'Derecha'); //Izquierda
			otro = otrocaballero(aux,6,'Izquierda'); //Derecha
			otro = otrocaballero(aux,2,'Abajo'); //Arriba (puede estar girada) o la de todos los trozos
			
		 
		}else if(aux.tipo == 'CiudadM' || aux.tipo=='CiudadN' || aux.tipo=='CiudadO' || aux.tipo=='CiudadP'){
			//Ciudades con dos trozos de ciudad en modo "curva"
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			
			if(aux.Derecha == 'Ciudad'){
				otro = otrocaballero(aux,6,'Izquierda'); //Derecha
			}else{
				otro = otrocaballero(aux,4,'Derecha'); //Izquierda
			}
		}else{
			//El resto de ciudades que ya cierran conexiones con otras ciudades
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero' && aux.seguidores[i].posicion == 2){otro = true; return otro}
			}
			//Aqui no hay mas conexiones, por lo tanto no hay recursividad
		}
	}
	return otro;
}

piezaDerecha = function(pieza,posSeg,otro,vengode){
	//Pieza de derecha
	if(pieza.Derecha == 'Ciudad' && Tablero.piezaenposiciones(pieza.x+1,pieza.y).Izquierda=='Ciudad' && vengode !='Derecha'){
		var aux =Tablero.piezaenposiciones(pieza.x+1,pieza.y);

		if(aux.tipo == 'CiudadG' || aux.tipo =='CiudadF'){
			//Ciudades conectadas Izquierda y Derecha only
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando la ciudad (en este caso derecha == 6)
			otro = otrocaballero(aux,6,'Izquierda');
		}else if(aux.tipo == 'CiudadQ' || aux.tipo == 'CiudadR' || aux.tipo == 'CiudadS' || aux.tipo == 'CiudadT' || aux.tipo == 'CiudadC'){
			//Ciudades con 3 trozos de ciudad y la de 4 cachos de ciudad
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//no hay caballeros pues recursividad
			otro = otrocaballero(aux,8,'Arriba'); //Abajo
			otro = otrocaballero(aux,6,'Izquierda'); //Derecha
			otro = otrocaballero(aux,2,'Abajo'); //Arriba (puede estar girada) o la de todos los trozos
			
		 
		}else if(aux.tipo == 'CiudadM' || aux.tipo=='CiudadN' || aux.tipo=='CiudadO' || aux.tipo=='CiudadP'){
			//Ciudades con dos trozos de ciudad en modo "curva"
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			
			if(aux.Derecha == 'Ciudad'){
				otro = otrocaballero(aux,2,'Abajo'); //Arriba
			}else{
				otro = otrocaballero(aux,8,'Arriba'); //Abajo
			}
		}else{
			//El resto de ciudades que ya cierran conexiones con otras ciudades
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero' && aux.seguidores[i].posicion == 2){otro = true; return otro}
			}
			//Aqui no hay mas conexiones, por lo tanto no hay recursividad
		}
	}
	return otro;
}

piezaIzquierda = function(pieza,posSeg,otro,vengode){
	//Pieza de izquierda
	if(pieza.izquierda == 'Ciudad' && Tablero.piezaenposiciones(pieza.x-1,pieza.y).Izquierda=='Ciudad' && vengode !='Izquierda'){
		var aux =Tablero.piezaenposiciones(pieza.x-1,pieza.y);

		if(aux.tipo == 'CiudadG' || aux.tipo =='CiudadF'){
			//Ciudades conectadas Izquierda y Derecha only
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//llamada recursiva para seguir comprobando la ciudad (en este caso derecha == 6)
			otro = otrocaballero(aux,4,'Derecha');
		}else if(aux.tipo == 'CiudadQ' || aux.tipo == 'CiudadR' || aux.tipo == 'CiudadS' || aux.tipo == 'CiudadT' || aux.tipo == 'CiudadC'){
			//Ciudades con 3 trozos de ciudad y la de 4 cachos de ciudad
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			//no hay caballeros pues recursividad
			otro = otrocaballero(aux,8,'Arriba'); //Abajo
			otro = otrocaballero(aux,4,'Derecha'); //Izquierda
			otro = otrocaballero(aux,2,'Abajo'); //Arriba (puede estar girada) o la de todos los trozos
			
		 
		}else if(aux.tipo == 'CiudadM' || aux.tipo=='CiudadN' || aux.tipo=='CiudadO' || aux.tipo=='CiudadP'){
			//Ciudades con dos trozos de ciudad en modo "curva"
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero'){otro = true; return otro}
			}
			
			if(aux.Derecha == 'Ciudad'){
				otro = otrocaballero(aux,2,'Abajo'); //Arriba
			}else{
				otro = otrocaballero(aux,8,'Arriba'); //Abajo
			}
		}else{
			//El resto de ciudades que ya cierran conexiones con otras ciudades
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'caballero' && aux.seguidores[i].posicion == 2){otro = true; return otro}
			}
			//Aqui no hay mas conexiones, por lo tanto no hay recursividad
		}
	}
	return otro;
}

