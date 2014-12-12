var otro = false;

otroladron= function(pieza,posSeg,vengode){
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
		}else{
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
