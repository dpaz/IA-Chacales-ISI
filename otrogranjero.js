var otro=false;
otrogranjero= function(pieza,posSeg,vengode,otro){//aux tiene que ser false
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

//comprueba que he puesto un seguidor que se comunica con el campo de arriba
compruebaCampo = function(pieza,posSeg){
	if(pieza.tipo == 'MonCamino' || pieza.tipo =='MonGranja'|| pieza.tipo =='CiudadE' ||
           pieza.tipo == 'CiudadH' || pieza.tipo =='CiudadI'|| pieza.tipo == 'CiudadM'||	 				      		   pieza.tipo=='CiudadN'|| pieza.tipo == 'CiudadQ' || pieza.tipo== 'CiudadR'){
			return true:
	}else if((pieza.tipo == 'CiudadD' || pieza.tipo == 'CiudadF' || pieza.tipo == 'CiudadG' || 
		  pieza.tipo == 'Recto' || pieza.tipo == 'Cruce3') && (pieza.arriba=='Granja') && 
		 (posSeg==1 || posSeg==2 || posSeg==3)){
			return true;				
	}else if((pieza.tipo == 'CiudadJ') &&  (PosSeg!=7)){
		return true;
	}else if((pieza.tipo == 'CiudadK') &&  (PosSeg!=9)){
		return true;
	}else if((pieza.tipo == 'Curva') &&  (pieza.Izquierda==Camino) && (PosSeg!=7)){
		return true;
	}else if((pieza.tipo == 'Curva') &&  (pieza.Derecha==Camino) && (PosSeg!=9)){
		return true;
	}return false;
	
}

piezaArriba = function(pieza,posSeg,otro,vengode){
	var aux =Tablero.piezaenposiciones(pieza.x,pieza.y+1);

	if(pieza.Arriba != 'Ciudad' && vengode !='Arriba' && aux.Abajo != 'Ciudad' &&){
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
		}else{//aux abajo granja y pieza arriba granja con seguidor que comunica granja arriba y pieza moncamino
		      //ahora hacer arriba camino abajo camino
			if((aux.Abajo == 'Granja' && pieza.Arriba == 'Granja' && compruebaCampo(pieza,posSeg)) || (pieza.tipo == 'MonCamino')){
				if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
		  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
		                   aux.tipo == 'CiudadN'){
					for(i=0;i<aux.seguidores.length;i++){
						if(aux.seguiguidores[i].tipo== 'granjero'){otro = true; return otro}
					}otro=otrogranjero(aux,posSeg,'Abajo',otro);
				//solo granja 3ª fila
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
					otro=compruebaSeg(aux,7,8,9);
					otro=otrogranjero(aux,posSeg,'Abajo',otro);
				}else if(aux.tipo == 'CiudadJ'){
					otro=compruebaSeg(aux,1,5,7,8,9);			
					otro=otrogranjero(aux,posSeg,'Abajo',otro);
				
//crear metodo que sepa si la pieza es de una granja 2 3 o 4
				}else if(aux.tipo == 'CiudadK'){
					otro=compruebaSeg(aux,3,5,7,8,9);
				}else if(aux.tipo == 'Curva'){
					if(aux.Izquierda == 'Camino'){
						otro=compruebaSeg(aux,3,6,7,8,9);
						otro=otrogranjero(aux,posSeg,'Abajo',otro);
					}else if(aux.Derecha == 'Camino'){
						otro=compruebaSeg(aux,1,4,7,8,9);
						otro=otrogranjero(aux,posSeg,'Abajo',otro);
					}
				}	
			}else{//aqui abajo camino
			}
			
		}
	}

	return otro;
}
