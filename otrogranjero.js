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
