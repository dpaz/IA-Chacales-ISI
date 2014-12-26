otrogranjero= function(pieza,posSeg,tablero){//aux tiene que ser false
	var valido=false;
	var valido2=false;

	if(pieza.Arriba!= 'Ciudad'){
		valido = piezaArriba(pieza,posSeg,tablero,valido);
	}

	if(pieza.Abajo!= 'Ciudad'){
		valido2 = piezaAbajo(pieza,posSeg,tablero,valido);	
	}

	if(valido==true || valido2==true){
		return true;
	}else{
		return false;
	}
	
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

piezaArriba = function(pieza,posSeg,tablero,otro){
	var aux =tablero.piezaenposiciones(pieza.x,pieza.y+1);
	var otro=false;
	if(aux == undefined){
		console.log('no mas piezas arriba');
		return false;
	}
////////////////cuidado monCamino recursividad
	if(pieza.Arriba != 'Ciudad' && aux.Abajo != 'Ciudad' && otro==false){
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
		}else{//aux abajo granja y pieza arriba granja con seguidor que comunica granja arriba 
			if(aux.Abajo == 'Granja' && pieza.Arriba == 'Granja' ){
				if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
		  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
		                   aux.tipo == 'CiudadN'){
					for(i=0;i<aux.seguidores.length;i++){
						if(aux.seguidores[i].tipo== 'granjero'){otro = true; return otro}
					}
					otro=piezaArriba(aux,posSeg,tablero,otro);//falta recursividad
				//solo granja 3ª fila
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
					otro=compruebaSeg(aux,7,8,9);
					if(otro==true){return otro}
					//mas campo derecha e izquierda 
				}else if(aux.tipo == 'CiudadJ'){
					otro=compruebaSeg(aux,1,5,7,8,9);
					if(otro==true){return otro}
					//mas campo arriba(hecho) y derecha			
					otro=piezaArriba(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'CiudadK'){
					otro=compruebaSeg(aux,3,5,7,8,9);
					if(otro==true){return otro}
					//mas campo arriba(hecho) e izquierda			
					otro=piezaArriba(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'Curva'){
					if(aux.Izquierda == 'Camino'){
						otro=compruebaSeg(aux,3,6,7,8,9);
						if(otro==true){return otro}
						//mas campo arriba(hecho) derecha e izquierda
						otro=piezaArriba(aux,posSeg,tablero,otro);
					}else if(aux.Derecha == 'Camino'){
						otro=compruebaSeg(aux,1,4,7,8,9);
						if(otro==true){return otro}
						//mas campo arriba(hecho) derecha e izquierda
						otro=piezaArriba(aux,posSeg,tablero,otro);
					}
				}	
			}else if (aux.Abajo == 'Camino' && pieza.Arriba == 'Camino'){
				var auxSeg=posSeg;
				//coloca el seguidor en 1 o 3 para comparar con la pieza de arriba
				if(pieza.tipo== 'CiudadJ'||pieza.tipo== 'CiudadK' || pieza.tipo== 'CiudadO'||pieza.tipo=='CiudadP'      			         ||pieza.tipo== 'Curva'){
					if(pieza.Izquierda == 'Camino' && posSeg== 7){
						auxSeg=3;
					}else if(pieza.Derecha == 'Camino' && posSeg== 9){
						auxSeg=1;	
					}
				}
				if (auxSeg==4 || auxSeg==7){
					auxSeg=1;
				}else if (auxSeg==6 || auxSeg==9){
					auxSeg=3;
				}
				if(aux.tipo == 'CiudadS' || aux.tipo=='CiudadT'){//cierra con estos
					if(auxSeg==1){
						otro=compruebaSeg(aux,7);
						if(otro==true){return otro}
					}else if(auxSeg==3){
						otro=compruebaSeg(aux,9);
						if(otro==true){return otro}
					}
				//compruebsi hay seguidores arriba en las posicion que coinciden con la granja de auxpos
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'){
					if(auxSeg==1){
						otro=compruebaSeg(aux,1,4,7);
						if(otro==true){return otro}
						otro=piezaArriba(aux,7,tablero,otro);
					}else if(auxSeg==3){
						otro=compruebaSeg(aux,3,6,9);
						if(otro==true){return otro}
						otro=piezaArriba(aux,9,tablero,otro);
					}//siguen por derecha e izquierda tambien(ciudad D por derecha no)
					
				}else if(aux.tipo == 'CiudadJ' || aux.tipo =='Curva'|| aux.tipo =='CiudadK'|| aux.tipo =='CiudadO'||
					 aux.tipo =='CiudadP'){  
					if(auxSeg==1){	
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,7);
							if(otro==true){return otro}
							//solo izq
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,1,2,3,4,7);
							if(otro==true){return otro}
							//derecha todos
							//izq J y Curva
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadK'){
								otro=piezaArriba(aux,1,tablero,otro);
							}
						}
					}else if(auxSeg==3){
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,1,2,3,6,9);
							if(otro==true){return otro}
							// der todos menos O y P
							//IZQ todos
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadJ'){
								otro=piezaArriba(aux,1,tablero,otro);
							}
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,9);
							if(otro==true){return otro}
							//solo der
						}
					}
				}else if(aux.tipo == 'CiudadL' || aux.tipo =='Cruce3'|| aux.tipo =='Cruce4'){
					if(auxSeg==1){
						otro=compruebaSeg(aux,7);
						if(otro==true){return otro}
						//izquierda
					}else if(auxSeg==3){
						otro=compruebaSeg(aux,9);
						if(otro==true){return otro}
						//derecha
					}
				}else if(aux.tipo=='MonCamino'){
					otro=compruebaSeg(aux,1,2,3,4,5,6,7,9);
					if(otro==true){return otro}
					otro=piezaArriba(aux,posSeg,tablero,otro);//no viene de ningun lado para que vaya para abajo
				}
			}
		}
	}
	return otro;
}

piezaAbajo = function(pieza,posSeg,tablero,otro){
	var aux =tablero.piezaenposiciones(pieza.x,(pieza.y-1));
	var otro=false;
	if(aux == undefined){
		console.log('no mas piezas abajo');
		return false;
	}
////////////////cuidado monCamino recursividad
	if(pieza.Abajo != 'Ciudad' && aux.Arriba != 'Ciudad' && otro==false){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'CiudadF' || aux.tipo =='CiudadG'|| aux.tipo =='CiudadQ' || aux.tipo =='CiudadR'){//cierra con estos 
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'granjero'){otro = true; return otro}
			}
		}else{//aux abajo granja y pieza arriba granja con seguidor que comunica granja abajo
			if(aux.Arriba == 'Granja' && pieza.Abajo == 'Granja' ){
				if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
		  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
		                   aux.tipo == 'CiudadN'){
					for(i=0;i<aux.seguidores.length;i++){
						if(aux.seguidores[i].tipo== 'granjero'){otro = true; return otro}
					}
					otro=piezaAbajo(aux,posSeg,tablero,otro);//falta recursividad
				//solo granja 3ª fila
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
					otro=compruebaSeg(aux,1,2,3);
					if(otro==true){return otro}
					//mas campo derecha e izquierda 
				}else if(aux.tipo == 'CiudadJ'){
					otro=compruebaSeg(aux,1,2,3);
					if(otro==true){return otro}
					//mas campo arriba(hecho) y derecha			
					otro=piezaAbajo(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'CiudadK'){
					otro=compruebaSeg(aux,1,2,3,7);
					if(otro==true){return otro}
					//mas campo arriba(hecho) e izquierda			
					otro=piezaAbajo(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'Curva'){
					if(aux.Izquierda == 'Camino'){
						otro=compruebaSeg(aux,1,2,3,6,9);
						if(otro==true){return otro}
						//mas campo abajo(hecho) derecha e izquierda
						otro=piezaAbajo(aux,posSeg,tablero,otro);
					}else if(aux.Derecha == 'Camino'){
						otro=compruebaSeg(aux,1,2,3,4,7);
						if(otro==true){return otro}
						//mas campo abajo(hecho) derecha e izquierda
						otro=piezaAbajo(aux,posSeg,tablero,otro);
					}
				}	
			}else if (aux.Arriba == 'Camino' && pieza.Abajo == 'Camino'){
				
				var auxSeg=posSeg;
				//coloca el seguidor en 1 o 3 para comparar con la pieza de abajo
				if(pieza.tipo== 'CiudadJ'||pieza.tipo== 'CiudadK' || pieza.tipo== 'CiudadO'||pieza.tipo=='CiudadP'      			         ||pieza.tipo== 'Curva'){
					if(pieza.Izquierda == 'Camino' && posSeg== 1){
						auxSeg=9;
					}else if(pieza.Derecha == 'Camino' && posSeg== 3){
						auxSeg=7;	
					}
				}
				if (auxSeg==1 || auxSeg==4){
					auxSeg=7;
				}else if (auxSeg==3 || auxSeg==6){
					auxSeg=9;
				}
				
				if(aux.tipo == 'CiudadS' || aux.tipo=='CiudadT'){//cierra con estos
					if(auxSeg==7){
						otro=compruebaSeg(aux,1);
						if(otro==true){return otro}
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3);
						if(otro==true){return otro}
					}
				//compruebsi hay seguidores arriba en las posicion que coinciden con la granja de auxpos
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'){
					if(auxSeg==7){
						otro=compruebaSeg(aux,1,4,7);
						if(otro==true){return otro}
						otro=piezaAbajo(aux,7,tablero,otro);
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3,6,9);
						if(otro==true){return otro}
						otro=piezaAbajo(aux,9,tablero,otro);
					}//siguen por derecha e izquierda tambien(ciudad D por derecha no)
					
				}else if(aux.tipo == 'CiudadJ' || aux.tipo =='Curva'|| aux.tipo =='CiudadK'|| aux.tipo =='CiudadO'||
					 aux.tipo =='CiudadP'){  
					if(auxSeg==7){	
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,1);
							if(otro==true){return otro}
							//izq 
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,1,4,7,8,9);
							if(otro==true){return otro}
							//derecha todos
							//izq K y Curva
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadJ'){
								otro=piezaAbajo(aux,7,tablero,otro);
							}
						} 
					}else if(auxSeg==9){
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,3,7,8,9);
							if(otro==true){return otro}
							// der ciudad J y curva
							//IZQ todos
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadK'){
								otro=piezaAbajo(aux,9,tablero,otro);
							}
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,3);
							if(otro==true){return otro}
							//solo der
						}
					}
				}else if(aux.tipo == 'CiudadL' || aux.tipo =='Cruce3'|| aux.tipo =='Cruce4'){
					if(auxSeg==7){
						otro=compruebaSeg(aux,1);
						if(otro==true){return otro}
						//izquierda
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3);
						if(otro==true){return otro}
						//derecha
					}
				}else if(aux.tipo=='MonCamino'){
					otro=compruebaSeg(aux,1,3,4,5,6,7,8,9);
					if(otro==true){return otro}
					otro=piezaAbajo(aux,posSeg,tablero,otro);//no viene de ningun lado para que vaya para abajo
				}
			}
		}
	}
	return otro;
}

piezaDerecha = function(pieza,posSeg,tablero,otro){
	var aux =tablero.piezaenposiciones(pieza.x+1,pieza.y);
	var otro=false;
	if(aux == undefined){
		console.log('no mas piezas derecha');
		return false;
	}
////////////////cuidado monCamino recursividad
	if(pieza.Derecha != 'Ciudad' && aux.Izquierda != 'Ciudad' && otro==false){
		//Primero compruebo que en esa pieza no hay ladrones
		if(aux.tipo == 'CiudadF' || aux.tipo =='CiudadG'|| aux.tipo =='CiudadQ' || aux.tipo =='CiudadR'){//cierra con estos 
			for(i=0;i<aux.seguidores.length;i++){
				if(aux.seguiguidores[i].tipo== 'granjero'){otro = true; return otro}
			}
		}else{
			if(aux.Izquierda== 'Granja' && pieza.Derecha == 'Granja'){
				if(aux.tipo == 'MonCamino' || aux.tipo =='MonGranja'|| aux.tipo =='CiudadE' ||
		  		   aux.tipo == 'CiudadH' || aux.tipo =='CiudadI'|| aux.tipo =='CiudadM' ||
		                   aux.tipo == 'CiudadN'){
					for(i=0;i<aux.seguidores.length;i++){
						if(aux.seguidores[i].tipo== 'granjero'){otro = true; return otro}
					}
					otro=piezaArriba(aux,posSeg,tablero,otro);//falta recursividad
				//solo granja 3ª fila
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'|| aux.tipo =='Cruce3'){
					otro=compruebaSeg(aux,1,2,3);
					if(otro==true){return otro}
					//mas campo derecha e izquierda 
				}else if(aux.tipo == 'CiudadJ'){
					otro=compruebaSeg(aux,1,2,3);
					if(otro==true){return otro}
					//mas campo arriba(hecho) y derecha			
					otro=piezaAbajo(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'CiudadK'){
					otro=compruebaSeg(aux,1,2,3,7);
					if(otro==true){return otro}
					//mas campo arriba(hecho) e izquierda			
					otro=piezaAbajo(aux,posSeg,tablero,otro);
				}else if(aux.tipo == 'Curva'){
					if(aux.Izquierda == 'Camino'){
						otro=compruebaSeg(aux,1,2,3,6,9);
						if(otro==true){return otro}
						//mas campo abajo(hecho) derecha e izquierda
						otro=piezaAbajo(aux,posSeg,tablero,otro);
					}else if(aux.Derecha == 'Camino'){
						otro=compruebaSeg(aux,1,2,3,4,7);
						if(otro==true){return otro}
						//mas campo abajo(hecho) derecha e izquierda
						otro=piezaAbajo(aux,posSeg,tablero,otro);
					}
				}	
			}else if (aux.Arriba == 'Camino' && pieza.Abajo == 'Camino'){
				
				var auxSeg=posSeg;
				//coloca el seguidor en 1 o 3 para comparar con la pieza de abajo
				if(pieza.tipo== 'CiudadJ'||pieza.tipo== 'CiudadK' || pieza.tipo== 'CiudadO'||pieza.tipo=='CiudadP'      			         ||pieza.tipo== 'Curva'){
					if(pieza.Izquierda == 'Camino' && posSeg== 1){
						auxSeg=9;
					}else if(pieza.Derecha == 'Camino' && posSeg== 3){
						auxSeg=7;	
					}
				}
				if (auxSeg==1 || auxSeg==4){
					auxSeg=7;
				}else if (auxSeg==3 || auxSeg==6){
					auxSeg=9;
				}
				
				if(aux.tipo == 'CiudadS' || aux.tipo=='CiudadT'){//cierra con estos
					if(auxSeg==7){
						otro=compruebaSeg(aux,1);
						if(otro==true){return otro}
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3);
						if(otro==true){return otro}
					}
				//compruebsi hay seguidores arriba en las posicion que coinciden con la granja de auxpos
				}else if(aux.tipo == 'CiudadD' || aux.tipo =='Recto'){
					if(auxSeg==7){
						otro=compruebaSeg(aux,1,4,7);
						if(otro==true){return otro}
						otro=piezaAbajo(aux,7,tablero,otro);
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3,6,9);
						if(otro==true){return otro}
						otro=piezaAbajo(aux,9,tablero,otro);
					}//siguen por derecha e izquierda tambien(ciudad D por derecha no)
					
				}else if(aux.tipo == 'CiudadJ' || aux.tipo =='Curva'|| aux.tipo =='CiudadK'|| aux.tipo =='CiudadO'||
					 aux.tipo =='CiudadP'){  
					if(auxSeg==7){	
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,1);
							if(otro==true){return otro}
							//izq 
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,1,4,7,8,9);
							if(otro==true){return otro}
							//derecha todos
							//izq K y Curva
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadJ'){
								otro=piezaAbajo(aux,7,tablero,otro);
							}
						} 
					}else if(auxSeg==9){
						if(aux.Izquierda=='Camino'){
							otro=compruebaSeg(aux,3,7,8,9);
							if(otro==true){return otro}
							// der ciudad J y curva
							//IZQ todos
							if(aux.tipo =='Curva'|| aux.tipo =='CiudadK'){
								otro=piezaAbajo(aux,9,tablero,otro);
							}
						}else if(aux.Derecha=='Camino'){
							otro=compruebaSeg(aux,3);
							if(otro==true){return otro}
							//solo der
						}
					}
				}else if(aux.tipo == 'CiudadL' || aux.tipo =='Cruce3'|| aux.tipo =='Cruce4'){
					if(auxSeg==7){
						otro=compruebaSeg(aux,1);
						if(otro==true){return otro}
						//izquierda
					}else if(auxSeg==9){
						otro=compruebaSeg(aux,3);
						if(otro==true){return otro}
						//derecha
					}
				}else if(aux.tipo=='MonCamino'){
					otro=compruebaSeg(aux,1,3,4,5,6,7,8,9);
					if(otro==true){return otro}
					otro=piezaAbajo(aux,posSeg,tablero,otro);//no viene de ningun lado para que vaya para abajo
				}
			}
		}
	}
	return otro;
}
