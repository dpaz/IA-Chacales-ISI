otrogranjero= function(pieza,posSeg,tablero, vengode,otro){//aux tiene que ser false
	var otro=false;
	var valido=false;
	/*if(pieza.tipo== 'Cruce3' || pieza.tipo='CiudadL'){//3 campos distintos
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
	return valido;*/
	if(pieza.arriba!= 'Ciudad' ){
		var valido = piezaArriba(pieza,posSeg,tablero,valido,vengode);
	}return valido;
}

//comprueba si las posicione donde decidmos hay seguidor en la pieza de arriba 
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
	}return false;
}

//comprueba que el seguidor que quiero poner se comunica con el campo de arriba
compruebaCampo = function(pieza,posSeg){
	if(pieza.tipo == 'MonCamino' || pieza.tipo =='MonGranja'|| pieza.tipo =='CiudadE' ||
           pieza.tipo == 'CiudadH' || pieza.tipo =='CiudadI'|| pieza.tipo == 'CiudadM'||	 				      		   pieza.tipo=='CiudadN'|| pieza.tipo == 'CiudadQ' || pieza.tipo== 'CiudadR' ||
	   pieza.tipo=='CiudadD'|| pieza.tipo == 'CiudadJ' || pieza.tipo== 'CiudadK' ||
	   pieza.tipo=='CiudadO'|| pieza.tipo == 'CiudadP' || pieza.tipo== 'CiudadS' ||
	   pieza.tipo=='CiudadT'|| pieza.tipo == 'Recto'){
			return true;
	}else if((pieza.tipo == 'CiudadD' || pieza.tipo == 'CiudadF' || pieza.tipo == 'CiudadG' || 
		  pieza.tipo == 'Recto' || pieza.tipo == 'Cruce3') && (pieza.arriba=='Granja') && 
		 (posSeg==1 || posSeg==2 || posSeg==3)){
			return true;				
	}else if((pieza.tipo == 'CiudadJ') &&  (PosSeg!=7)){
		return true;
	}else if((pieza.tipo == 'CiudadK') &&  (PosSeg!=9)){
		return true;
	}else if((pieza.tipo == 'Curva') &&  (pieza.Izquierda=='Camino') && (PosSeg!=7)){
		return true;
	}else if((pieza.tipo == 'Curva') &&  (pieza.Derecha=='Camino') && (PosSeg!=9)){
		return true;
	}else if((pieza.tipo == 'CiudadL') &&  (pieza.Derecha=='Camino') && (PosSeg!=9)){
		return true;
	}else if((pieza.tipo == 'CiudadL') &&  (pieza.Izquierda=='Camino') && (PosSeg!=7)){
		return true;
	}else if((pieza.tipo == 'Cruce3') &&  (pieza.Abajo=='Granja') && (PosSeg!=7 && PosSeg!=8 && PosSeg!=9)){
		return true;
	}else if((pieza.tipo == 'Cruce3') &&  (pieza.Derecha=='Granja') && (PosSeg!=7 )){
		return true;
	}else if((pieza.tipo == 'Cruce3') &&  (pieza.Izquierda=='Granja') && (PosSeg!=9)){
		return true;
	}return false;
	
}

piezaArriba = function(pieza,posSeg,tablero,otro,vengode){
	var aux =tablero.piezaenposiciones(pieza.x,pieza.y+1);
	if(aux == undefined){
		console.log('no mas piezas');
		return false;
	}

	console.log('111');
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
		}else{//aux abajo granja y pieza arriba granja con seguidor que comunica granja arriba y pieza moncamino
		      //ahora hacer arriba camino abajo camino
			if((aux.Abajo == 'Granja' && pieza.Arriba == 'Granja' && compruebaCampo(pieza,posSeg)) || (pieza.tipo == 'MonCamino')){
				if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
		  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
		                   aux.tipo == 'CiudadN'){
					for(i=0;i<aux.seguidores.length;i++){
						if(aux.seguidores[i].tipo== 'granjero'){otro = true; return otro}
					}otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				//solo granja 3ª fila
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
					otro=compruebaSeg(aux,7,8,9);
					//mas campo derecha e izquierda 
				}else if(aux.tipo == 'CiudadJ'){
					otro=compruebaSeg(aux,1,5,7,8,9);			
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if(aux.tipo == 'CiudadK'){
					otro=compruebaSeg(aux,3,5,7,8,9);
				}else if(aux.tipo == 'Curva'){
					if(aux.Izquierda == 'Camino'){
						otro=compruebaSeg(aux,3,6,7,8,9);
						otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
					}else if(aux.Derecha == 'Camino'){
						otro=compruebaSeg(aux,1,4,7,8,9);
						otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
					}
				}	
			}else if (aux.Abajo == 'Camino' && pieza.Arriba == 'Camino' && compruebaCampo(pieza,posSeg)){
				var auxSeg=posSeg;
				//coloca el seguidor en 1 o 3 para comparar con la pieza de arriba
				if ((pieza.tipo== 'CiudadJ'|| pieza.tipo== 'CiudadK' || pieza.tipo== 'CiudadO' ||pieza.tipo== 'CiudadP' ||
				     pieza.tipo== 'Curva') && pieza.Derecha == 'Camino' && posSeg== 9){
					auxSeg=1;
				}else if((pieza.tipo== 'CiudadJ'||pieza.tipo== 'CiudadK' || pieza.tipo== 'CiudadO'||pieza.tipo=='CiudadP'      						||pieza.tipo== 'Curva') && pieza.Izquierda == 'Camino' && posSeg== 7){
					auxSeg=3;
				}if (auxSeg==4 || auxSeg==7){
					auxSeg=1;
				}else if (auxSeg==6 || auxSeg==9){
					auxSeg=3;
				}
				//compruebsi hay seguidores arriba en las posicion que coinciden con la granja de auxpos
				if((aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='CiudadS'|| aux.tipo =='CiudadT') &&(auxSeg==1)){
					otro=compruebaSeg(aux,1,4,7);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if((aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='CiudadS'|| aux.tipo =='CiudadT')
				       &&(auxSeg==3)){
					otro=compruebaSeg(aux,3,6,9);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if((aux.tipo == 'CiudadJ' || aux.tipo =='Curva'|| aux.tipo =='CiudadK'|| aux.tipo =='CiudadO'||
					  aux.tipo =='CiudadP') && (auxSeg==1)){
					otro=compruebaSeg(aux,1,2,3,4,7);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if((aux.tipo == 'CiudadJ' || aux.tipo =='Curva'|| aux.tipo =='CiudadK'|| aux.tipo =='CiudadO'||
					  aux.tipo =='CiudadP') &&(auxSeg==3)){
					otro=compruebaSeg(aux,9);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if((aux.tipo == 'CiudadL' || aux.tipo =='Cruce3'|| aux.tipo =='Cruce4') && (auxSeg==1)){
					otro=compruebaSeg(aux,7);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}else if((aux.tipo == 'CiudadL' || aux.tipo =='Cruce3'|| aux.tipo =='Cruce4') &&(auxSeg==3)){
					otro=compruebaSeg(aux,9);
					otro=otrogranjero(aux,posSeg,tablero,'Abajo',otro);
				}
			}
		}
	}

	return otro;
}
