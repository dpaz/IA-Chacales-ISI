granjafinal = function(pieza,tablero){

	var seguidoresEncontrados = [];
	var piezasRecorridas = [];


	monCaminoGranja = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza;

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos pieza al array
		piezasRecorridas.push(pieza);

		//Miramos si existe seguidor
		aux.seguidores.forEach(function(seguidor){
			if(seguidor.tipo=='granjero'){
				seguidoresEncontrados.push(seguidor);
				i = aux.seguidores.indexOf(seguidor);
			aux.seguidores.splice(i,1);
			}
		});

		//Llamadas recursivas
		if(auxAr!= undefined && vengode!="Arriba"){ ok[0] = seleccionar(auxAr,"Abajo");}
		if(auxAb!= undefined && vengode!="Abajo" || "AbajoDerecha" || "AbajoIzquierda"){ ok[1] = seleccionar(auxAb,"Arriba");}
		if(auxDer!= undefined && vengode!="Derecha"){ok[2] = seleccionar(auxDer,"Izquierda");}
		if(auxIzq!= undefined && vengode!="Izquierda"){ok[3] = seleccionar(auxIzq,"Derecha");}

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}


	ciudadD = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas
		if(vengode=="Abajo" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}
				}
			});

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"AbajoIzquierda");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"AbajoDerecha");}

		}else if(vengode=="AbajoDerecha"){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"Arriba");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"AbajoDerecha");}

		}else if(vengode=="AbajoIzquierda"){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}
				}
			});

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"AbajoIzquierda");}
			if(auxAb!= undefined ){ok[1] = seleccionar(auxAb,"Arriba");}

		}else if(vengode=="ArribaDerecha"){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==1 || seguidor.posicion==3){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}
				}
			});

			if(auxIzq!= undefined ){ok[0] = seleccionar(auxIzq,"ArribaDerecha");}

		}else if(vengode=="ArribaIzquierda"){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==1 || seguidor.posicion==3){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}
				}
			});

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"ArribaIzquierda");}

		}else{
			console.log("De donde vienes tu: "vengode);
		}

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadE = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas
		if(vengode=="Abajo" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){		
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"Izquierda");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"Derecha");}

		}else if(vengode=="Derecha" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"Arriba");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"Derecha");}

		}else if(vengode=="Izquierda" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"Arriba");}
			if(auxDerecha!= undefined ){ok[1] = seleccionar(auxDer,"Izquierda");}

		}


		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadFG = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas no existen en estas piezas
	

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadH = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas
		if(vengode=="Derecha" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){		
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxIzq!= undefined ){ok[0] = seleccionar(auxIzq,"Derecha");}

		}else if(vengode=="Izquierda" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){		
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"Izquierda");}

		}

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadI = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas
		if(vengode=="Izquierda" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){		
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"Arriba");}

		}else if(vengode=="Abajo" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){		
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			if(auxIzq!= undefined ){ok[0] = seleccionar(auxIzq,"Derecha");}

		}

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadJ = function(pieza,vengode){
		var ok = [true,true,true,true];
		var fronteras;
		aux = pieza

		//Enderezamos la pieza
		fronteras =  giros(pieza);
		auxAr = fronteras[0];auxAb = fronteras[1];auxDer = fronteras[2]; auxIzq = fronteras[3];
		for(i=pieza.ngiros;i<4;i++){
			aux = aux.girar;
		}

		//Comprobamos si la pieza esta en el array
		if(piezasRecorridas.indexOf(pieza)>=0){return true}

		//Añadimos al array
		piezasRecorridas.push(pieza);

		//Llamadas recursivas

		if(vengode=="Izquierda" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){	
					if(seguidor.posicion==1 || seguidor.posicion== 3 || seguidor.posicion==4 || seguidor.posicion==7){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}	
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"ArribaIzquierda");}
			if(auxDer!= undefined ){ok[1] = seleccionar(auxDer,"ArribaIzquierda");}
		}else if(vengode=="AbajoIzquierda" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){	
					if(seguidor.posicion==1 || seguidor.posicion== 3 || seguidor.posicion==4 || seguidor.posicion==7){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}	
				}
			});

			if(auxIzq!= undefined ){ok[0] = seleccionar(auxIzq,"Derecha");}
			if(auxDer!= undefined ){ok[1] = seleccionar(auxDer,"ArribaIzquierda");}
		}else if(vengode=="ArribaDerecha" ){
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){	
					if(seguidor.posicion==1 || seguidor.posicion== 3 || seguidor.posicion==4 || seguidor.posicion==7){
						seguidoresEncontrados.push(seguidor);
						i = aux.seguidores.indexOf(seguidor);
						aux.seguidores.splice(i,1);
					}	
				}
			});

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"ArribaIzquierda");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"Derecha");}
		}

		//Si todas las llamadas recursivas han sido true seguimos devolvemos true
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}

	ciudadK = function(pieza,vengode){

	}

	ciudadL = function(pieza,vengode){

	}

	ciudadMN = function(pieza,vengode){

	}

	ciudadOP = function(pieza,vengode){

	}

	ciudadQR = function(pieza,vengode){

	}

	ciudadST = function(pieza,vengode){

	}

	recto = function(pieza,vengode){

	}

	curva = function(pieza,vengode){

	}

	cruce3 = function(pieza,vengode){

	}

	cruce4 = function(pieza,vengode){

	}

	giros = function(pieza){
		piezasFronterizas = new Array(4);
		//[Arriba,Abajo,Derecha,Izquierda]
		if(pieza.ngiros==1){
			piezasFronterizas[0] = tablero.piezaenposiciones(pieza.x-1,pieza.y);
			piezasFronterizas[1] = tablero.piezaenposiciones(pieza.x+1,pieza.y);
			piezasFronterizas[2] = tablero.piezaenposiciones(pieza.x,pieza.y+1);
			piezasFronterizas[3] = tablero.piezaenposiciones(pieza.x,pieza.y-1);
		}else if(pieza.ngiros==2){
			piezasFronterizas[0] = tablero.piezaenposiciones(pieza.x,pieza.y-1);
			piezasFronterizas[1] = tablero.piezaenposiciones(pieza.x,pieza.y+1);
			piezasFronterizas[2] = tablero.piezaenposiciones(pieza.x-1,pieza.y);
			piezasFronterizas[3] = tablero.piezaenposiciones(pieza.x+1,pieza.y);
		}else if(pieza.ngiros==3){
			piezasFronterizas[0] = tablero.piezaenposiciones(pieza.x+1,pieza.y);
			piezasFronterizas[1] = tablero.piezaenposiciones(pieza.x-1,pieza.y);
			piezasFronterizas[2] = tablero.piezaenposiciones(pieza.x,pieza.y-1);
			piezasFronterizas[3] = tablero.piezaenposiciones(pieza.x,pieza.y+1);
		}else{
			piezasFronterizas[0] = tablero.piezaenposiciones(pieza.x,pieza.y+1);
			piezasFronterizas[1] = tablero.piezaenposiciones(pieza.x,pieza.y-1);
			piezasFronterizas[2] = tablero.piezaenposiciones(pieza.x+1,pieza.y);
			piezasFronterizas[3] = tablero.piezaenposiciones(pieza.x-1,pieza.y);
		}
		return piezasFronterizas;
	}

	seleccionar = function(pieza,vengode){
		if(pieza.tipo=="monCamino" || pieza.tipo=="monGranja"){
			return monCaminoGranja(pieza,vengode);
		}else if(pieza.tipo=="cruce3"){
			return cruce3(pieza,vengode);
		}else if(pieza.tipo=="cruce4"){
			return cruce4(pieza,vengode);
		}else if(pieza.tipo=="curva"){
			return curva(pieza,vengode);
		}else if(pieza.tipo=="recto"){
			return recto(pieza,vengode);
		}else if(pieza.tipo=="ciudadQ" || pieza.tipo=="ciudadR"){
			return ciudadQR(pieza,vengode);
		}else if(pieza.tipo=="ciudadF" || pieza.tipo=="ciudadG"){
			return ciudadFG(pieza,vengode);
		}else if(pieza.tipo=="ciudadE"){
			return ciudadE(pieza,vengode);
		}else if(pieza.tipo=="ciudadD"){
			return ciudadD(pieza,vengode);
		}else if(pieza.tipo=="ciudadH"){
			return ciudadH(pieza,vengode);
		}else if(pieza.tipo=="ciudadI"){
			return ciudadI(pieza,vengode);
		}else if(pieza.tipo=="ciudadJ"){
			return ciudadJ(pieza,vengode);
		}else if(pieza.tipo=="ciudadK"){
			return ciudadK(pieza,vengode);
		}else if(pieza.tipo=="ciudadL"){
			return ciudadL(pieza,vengode);
		}else if(pieza.tipo=="ciudadM" || pieza.tipo=="ciudadN"){
			return ciudadMN(pieza,vengode);
		}else if(pieza.tipo=="ciudadO" || pieza.tipo=="ciudadP"){
			return ciudadOP(pieza,vengode);
		}else if(pieza.tipo=="ciudadS" || pieza.tipo=="ciudadT"){
			return ciudadST(pieza,vengode);
		}else{
			console.log("Este caso nunca deberia suceder");
		}
	}


	pieza.seguidores.forEach(function(seguidor){
		if(seguidor.tipo=='granjero'){
			seguidoresEncontrados.push(seguidor);
			i = aux.seguidores.indexOf(seguidor);
			aux.seguidores.splice(i,1);
		}
	});

	grajarecur(pieza);

}