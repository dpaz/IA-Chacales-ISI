granjafinal = function(pieza,tablero){

	var seguidoresEncontrados = [];
	var piezasRecorridas = [];
/*
	piezaArriba = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x,pieza.y+1);

		if(aux != undefined && vengode != "Arriba" && pieza.Arriba!="Ciudad"){
			
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

			//
		}else {
			return true;
		}
	}
	piezaAbajo = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x,pieza.y-1);

		if(aux != undefined && vengode != "Abajo" && pieza.Abajo!="Ciudad"){
			
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

		}else {
			return true;
		}
	}
	piezaDerecha = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x+1,pieza.y);

		if(aux != undefined && vengode != "Derecha" && pieza.Derecha!="Ciudad"){
			
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

		}else{
			return true;
		}
	}
	piezaIzquierda = function(pieza,vengode){
		var aux =tablero.piezaenposiciones(pieza.x-1,pieza.y);

		if(aux != undefined && vengode != "Izquierda" && pieza.Izquierda!="Ciudad"){
			
			aux.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					seguidoresEncontrados.push(seguidor);
					i = aux.seguidores.indexOf(seguidor);
					aux.seguidores.splice(i,1);
				}
			});

		}else{
			return true;
		}
	}

	granjarecur = function(pieza,vengode){
		var ok = new Array(4);
		piezasRecorridas.push(pieza);
		ok[0] = this.piezaAbajo(pieza,vengode);

		ok[1] = this.piezaArriba(pieza,vengode);

		ok[2] = this.piezaDerecha(pieza,vengode);

		ok[3] = this.piezaIzquierda(pieza,vengode);
		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}
	}
*/

	monCaminoGranja = function(pieza,vengode){
		var ok = new Array(4);
		piezasRecorridas.push(pieza);
		pieza.seguidores.forEach(function(seguidor){
			if(seguidor.tipo=='granjero'){
				seguidoresEncontrados.push(seguidor);
				i = pieza.seguidores.indexOf(seguidor);
			pieza.seguidores.splice(i,1);
			}
		});

		var auxAr =tablero.piezaenposiciones(pieza.x+1,pieza.y);
		var auxAb = tablero.piezaenposiciones(pieza.x-1,pieza.y);
		var auxDer = tablero.piezaenposiciones(pieza.x,pieza.y+1);
		var auxIzq = tablero.piezaenposiciones(pieza.x,pieza.y-1);

		if(auxAr!= undefined && vengode!="Arriba"){ ok[0] = seleccionar(auxAr,"Abajo");}else{ok[0]= true;}
		if(auxAb!= undefined && vengode!="Abajo"){ ok[1] = seleccionar(auxAb,"Arriba");}else{ok[1] = true;}
		if(auxDer!= undefined && vengode!="Derecha"){ok[2] = seleccionar(auxDer,"Izquierda");}else{ok[2]= true;}
		if(auxIzq!= undefined && vengode!="Izquierda"){ok[3] = seleccionar(auxIzq,"Derecha");}else{ok[3]= true;}

		if(ok[0] || ok[1] || ok[2] || ok[3]){return true;}	
	}


	ciudadD = function(pieza,vengode){
		var ok = [true,true,true,true];

		piezasRecorridas.push(pieza);
		if(vengode=="Abajo" ){
			pieza.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = pieza.seguidores.indexOf(seguidor);
						pieza.seguidores.splice(i,1);
					}
				}
			});

			var auxDer = tablero.piezaenposiciones(pieza.x,pieza.y+1);
			var auxIzq = tablero.piezaenposiciones(pieza.x,pieza.y-1);

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"AbajoIzquierda");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"AbajoDerecha");}

		}else if(vengode=="AbajoDerecha"){
			pieza.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = pieza.seguidores.indexOf(seguidor);
						pieza.seguidores.splice(i,1);
					}
				}
			});

			var auxAb = tablero.piezaenposiciones(pieza.x-1,pieza.y);
			var auxIzq = tablero.piezaenposiciones(pieza.x,pieza.y-1);

			if(auxAb!= undefined ){ok[0] = seleccionar(auxAb,"Arriba");}
			if(auxIzq!= undefined ){ok[1] = seleccionar(auxIzq,"AbajoDerecha");}

		}else if(vengode=="AbajoIzquierda"){
			pieza.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==7 || seguidor.posicion==8 || seguidor.posicion==9){
						seguidoresEncontrados.push(seguidor);
						i = pieza.seguidores.indexOf(seguidor);
						pieza.seguidores.splice(i,1);
					}
				}
			});

			var auxAb = tablero.piezaenposiciones(pieza.x-1,pieza.y);
			var auxDer = tablero.piezaenposiciones(pieza.x,pieza.y+1);

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"AbajoIzquierda");}
			if(auxAb!= undefined ){ok[1] = seleccionar(auxAb,"Arriba");}

		}else if(vengode=="ArribaDerecha"){
			pieza.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==1 || seguidor.posicion==3){
						seguidoresEncontrados.push(seguidor);
						i = pieza.seguidores.indexOf(seguidor);
						pieza.seguidores.splice(i,1);
					}
				}
			});

			var auxIzq = tablero.piezaenposiciones(pieza.x,pieza.y-1);

			if(auxIzq!= undefined ){ok[0] = seleccionar(auxIzq,"ArribaDerecha");}

		}else if(vengode=="ArribaIzquierda"){
			pieza.seguidores.forEach(function(seguidor){
				if(seguidor.tipo=='granjero'){
					if(seguidor.posicion==1 || seguidor.posicion==3){
						seguidoresEncontrados.push(seguidor);
						i = pieza.seguidores.indexOf(seguidor);
						pieza.seguidores.splice(i,1);
					}
				}
			});

			var auxDer = tablero.piezaenposiciones(pieza.x,pieza.y+1);

			if(auxDer!= undefined ){ok[0] = seleccionar(auxDer,"ArribaIzquierda");}

		}else{
			console.log("De donde vienes tu: "vengode);
		}
	}

	ciudadE = function(pieza,vengode){

	}

	ciudadFG = function(pieza,vengode){

	}

	ciudadH = function(pieza,vengode){

	}

	ciudadI = function(pieza,vengode){

	}

	ciudadJ = function(pieza,vengode){

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