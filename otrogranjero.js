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

compruebaSeg = function(aux,a,b,c,d,e,f,g,h,i){
	for(i=0;i<aux.seguidores.length;i++){
		if(aux.seguidores[i].tipo== 'granjero' ){
			if(aux.seguidores[i].posicion== a ||aux.seguidores[i].posicion== b  ||aux.seguidores[i].posicion== c ||
			   aux.seguidores[i].posicion== d ||aux.seguidores[i].posicion== e  ||aux.seguidores[i].posicion== f ||
			   aux.seguidores[i].posicion== g ||aux.seguidores[i].posicion== h  ||aux.seguidores[i].posicion== i){ 
				return true;
			}else{
				return false;
			}
		}
	}
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
							otro=compruebaSeg(aux,7,8,9);
						}else if(aux.tipo == 'CiudadJ'){
							otro=compruebaSeg(aux,1,5,7,8,9);			
//falta meter la recursividad
//crear metodo que sepa si la pieza es de una granja 2 3 o 4
						}else if(aux.tipo == 'CiudadK'){
							otro=compruebaSeg(aux,3,5,7,8,9);
						}else if(aux.tipo == 'Curva'){
							if(aux.Izquierda == 'Camino'){
								otro=compruebaSeg(aux,3,6,7,8,9);
							}else if(aux.Derecha == 'Camino'){
								otro=compruebaSeg(aux,1,4,7,8,9);
							}
						}	
				}else if(){
				}
			}else{//aqui abajo camino
			}
			
		}
	}

	return otro;
}
