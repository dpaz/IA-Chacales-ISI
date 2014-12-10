otrogranjero= function(pieza,posSeg,vengode){
	if(pieza.tipo== 'Cruce3' || pieza.tipo='CiudadL'){//3 campos distintos
	}else if(pieza.tipo== 'Cruce4'){//4 campos
	}else if(pieza.tipo== 'CiudadC'){//0 campos
		console.log("Como vas a querer granjero si es solo ciudad");
		return true;
	}else if(pieza.tipo== 'MonCamino' ||pieza.tipo== 'MonGranja' ||pieza.tipo== 'CiudadE' ||pieza.tipo== 'CiudadH' ||
		 pieza.tipo== 'CiudadI'||pieza.tipo== 'CiudadM' ||pieza.tipo== 'CiudadN' ||pieza.tipo== 'CiudadQ' ||pieza.tipo== 'CiudadR'){
			if(pieza.arriba!=Ciudad){
				valido = piezaArriba(pieza,posSeg,valido,vengode);
			}else if(pieza.abajo!=Ciudad){
				valido = piezaAbajo(pieza,posSeg,valido,vengode);
			}else if(pieza.izquierda!=Ciudad){
				valido = piezaIzquierda(pieza,posSeg,valido,vengode);
			}else if(pieza.derecha!=Ciudad){
				valido = piezaDerecha(pieza,posSeg,valido,vengode);
			}	
	}else{//2 campos
	}
	return valido;
}

piezaArriba = function(pieza,posSeg,otro,vengode){
	var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);
	if(pieza.Arriba != 'Ciudad' && vengode !='Arriba' && aux.Abajo != 'Ciudad'){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'CiudadF' || aux.tipo =='CiudadG'|| aux.tipo =='CiudadQ' || aux.tipo =='CiudadR'){//cierra con estos 
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'granjero'){otro = true; return otro}
			}
		}else if(aux.tipo == 'CiudadS' || aux.tipo=='CiudadT'){//cierra con estos
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguidores[i].tipo== 'granjero' ){
					if((aux.seguidores[i].posicion== 7 && posSeg==1) || (aux.seguidores[i].posicion== 9 && posSeg==3)){
						otro = true; 
						return otro;
					}
				}
			}
		}else{
			if(aux.Abajo == 'Granja'){
				//pieza con una unica granja
				if(pieza.tipo == 'MonCamino' || pieza.tipo =='MonGranja'|| pieza.tipo =='CiudadE' ||
				   pieza.tipo == 'CiudadH' || pieza.tipo =='CiudadI'|| pieza.tipo == 'CiudadM'||	 					   pieza.tipo=='CiudadN'|| pieza.tipo == 'CiudadQ' || pieza.tipo== 'CiudadR'){	
						//aux con una unica granja
						if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
				  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
				                   aux.tipo == 'CiudadN'){
							for(i=0;i<aux.seguidores.length;i++){
								if(aux.seguiguidores[i].tipo== 'granjero'){otro = true; return otro}
							}
						//solo granja 3ª fila
						}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
							for(i=0;i<aux.seguidores.length;i++){
								if(aux.seguidores[i].tipo== 'granjero' ){
									if(aux.seguidores[i].posicion== 7 ||aux.seguidores[i].posicion== 8 
									 ||aux.seguidores[i].posicion== 9){
										otro = true; 
										return otro;
									}
								}
							}
						}else if(aux.tipo == 'CiudadJ'){
							for(i=0;i<aux.seguidores.length;i++){
								if(aux.seguidores[i].tipo== 'granjero' ){
////////crear funcion para hacer simple los seguidores
									if(aux.seguidores[i].posicion== 1 ||aux.seguidores[i].posicion== 5 
									 ||aux.seguidores[i].posicion== 7 ||aux.seguidores[i].posicion== 8 
									 ||aux.seguidores[i].posicion== 9){
										otro = true; 
										return otro;
									}
								}
							}
						}else if(aux.tipo == 'CiudadK'){
							for(i=0;i<aux.seguidores.length;i++){
								if(aux.seguidores[i].tipo== 'granjero' ){
									if(aux.seguidores[i].posicion== 3 ||aux.seguidores[i].posicion== 5 
									 ||aux.seguidores[i].posicion== 7 ||aux.seguidores[i].posicion== 8 
									 ||aux.seguidores[i].posicion== 9){
										otro = true; 
										return otro;
									}
								}
							}
						}else if(aux.tipo == 'Curva'){
							for(i=0;i<aux.seguidores.length;i++){
								if(aux.seguidores[i].tipo== 'granjero' ){
									if(aux.Izquierda == 'Camino'){
									if(aux.seguidores[i].posicion== 3 ||aux.seguidores[i].posicion== 6 
									 ||aux.seguidores[i].posicion== 7 ||aux.seguidores[i].posicion== 8 
									 ||aux.seguidores[i].posicion== 9){
										otro = true; 
										return otro;
									}
									}else if(aux.Derecha == 'Camino'){
									if(aux.seguidores[i].posicion== 1 ||aux.seguidores[i].posicion== 4 
									 ||aux.seguidores[i].posicion== 7 ||aux.seguidores[i].posicion== 8 
									 ||aux.seguidores[i].posicion== 9){
										otro = true; 
										return otro;
									}
									}
								}
							}
						}	
				}
			}else//ahora abajo camino{
			}
			
		}
	}

	return otro;
}
