var TPiezas = {
	Recto:        {Arriba: 'Camino' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Granja' , Escudo: 0},
	Curva:        {Arriba: 'Granja' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Camino' , Escudo: 0},
	Cruce3:       {Arriba: 'Granja' , Abajo : 'Camino' , Derecha: 'Camino' , Izquierda: 'Camino' , Escudo: 0},
	Cruce4:       {Arriba: 'Camino' , Abajo : 'Camino' , Derecha: 'Camino' , Izquierda: 'Camino' , Escudo: 0},
	MonCamino:    {Arriba: 'Granja' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Granja' , Escudo: 0},
	MonGranja:    {Arriba: 'Granja' , Abajo : 'Granja' , Derecha: 'Granja' , Izquierda: 'Granja' , Escudo: 0},
	CiudadC:      {Arriba: 'Ciudad' , Abajo : 'Ciudad' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 1},
	CiudadD:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Camino' , Izquierda: 'Camino' , Escudo: 0},
	CiudadE:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Granja' , Izquierda: 'Granja' , Escudo: 0},
	CiudadF:      {Arriba: 'Granja' , Abajo : 'Granja' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 1},
	CiudadG:      {Arriba: 'Granja' , Abajo : 'Granja' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 0},
	CiudadH:      {Arriba: 'Ciudad' , Abajo : 'Ciudad' , Derecha: 'Camino' , Izquierda: 'Camino' , Escudo: 0},
	CiudadI:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Ciudad' , Izquierda: 'Granja' , Escudo: 0},
	CiudadJ:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Camino' , Izquierda: 'Granja' , Escudo: 0},
	CiudadK:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Camino' , Escudo: 0},
	CiudadL:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Camino' , Izquierda: 'Camino' , Escudo: 0},
	CiudadM:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Granja' , Izquierda: 'Ciudad' , Escudo: 1},
	CiudadN:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Granja' , Izquierda: 'Ciudad' , Escudo: 0},
	CiudadO:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Camino' , Escudo: 1},
	CiudadP:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Granja' , Izquierda: 'Camino' , Escudo: 0},
	CiudadQ:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 1},
	CiudadR:      {Arriba: 'Ciudad' , Abajo : 'Granja' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 0},
	CiudadS:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 1},
	CiudadT:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 0}

}


var Jugador = function(user_id,nombre){
	this.puntuacion = 0;
	this.nombre = nombre;
	this.seguidores = 7;
	this.id = user_id;
	this.IA = false;
}

var Piezas = function(piezas,npiezas){	
	//Tipos de pieza
	this.piezas =piezas || Object.keys(TPiezas)
	//Numero de piezas por Tipo
	this.npiezas =npiezas || {Recto: 8, Curva: 9, Cruce3: 4, Cruce4: 1, MonCamino: 2, MonGranja: 2, CiudadC: 1, CiudadD: 4,    
				  CiudadE: 5, CiudadF: 2, CiudadG: 1, CiudadH: 3, CiudadI: 2, CiudadJ: 3, CiudadK: 3, CiudadL: 3,
				  CiudadM: 2, CiudadN: 3, CiudadO: 2, CiudadP: 3, CiudadQ: 1, CiudadR: 3, CiudadS:2,CiudadT:1};		  
	//Total de piezas
	this.totalPiezas = 0;
	for(i=0;i<this.piezas.length;i++){
		this.totalPiezas += this.npiezas[this.piezas[i]];
	} 
}

var Seguidor = function(posicion,tipo, jugador){
	this.posicion = posicion || undefined;
	this.tipo = tipo || undefined;
	this.jugador = jugador || undefined;
}

var Pieza = function(tipo,x,y){

	if(x!=undefined){
		this.x=x
	}else{
		this.x=undefined
	}
	if(y!=undefined){
		this.y=y
	}else{
		this.y=undefined
	}
	
	this.tipo = tipo

	this.Abajo = TPiezas[tipo].Abajo;
	this.Arriba = TPiezas[tipo].Arriba;
	this.Derecha = TPiezas[tipo].Derecha;
	this.Izquierda = TPiezas[tipo].Izquierda;

	//Devuelvo una variable auxiliar en vez de la original girada, no se si es lo mejor
	this.girar = function(){
		var aux = new Pieza();
		aux.Abajo = this.Izquierda;
		aux.Derecha = this.Abajo;
		aux.Arriba = this.Derecha;
		aux.Izquierda = this.Arriba;
		return aux;
	}
	this.seguidores = []; // Para llevar un control del numero de seguidores que hay en cada pieza	
	this.EncajaCon = []; //Array para saber con que otras piezas puede encajar.
}

var Coor = function(x,y){

	if(x!=undefined){
		this.x=x
	}else{
		this.x=undefined
	}
	if(y!=undefined){
		this.y=y
	}else{
		this.y=undefined
	}
}

var Tablero = function(id_game, npiezas, piezas){
	this.id_game = id_game;
        this.listaJugadores = [];	
        this.turno = 0;
	
	if(piezas && npiezas) { this.piezas = new Piezas(piezas,npiezas);} 
	else { this.piezas = new Piezas();}
						   
    	
	this.aleatorio = function(numero){
 		for(i=0; i< this.piezas.piezas.length;i++){ 
 			if(this.piezas.npiezas[this.piezas.piezas[i]] > numero){ 
 				return i; 
 			}else{ 
				numero=numero - this.piezas.npiezas[this.piezas.piezas[i]]; 
 			} 
 		} 
	} 
			       
	this.saca_pieza = function (){
		if(this.piezas.totalPiezas>0){
			indice = this.aleatorio(Math.floor(Math.random()*this.piezas.totalPiezas));
	 		var pieza = new Pieza(this.piezas.piezas[indice]);
			 
			//restamos del total de piezas y de las piezas restantes de ese tipo
			this.piezas.totalPiezas--;
			this.piezas.npiezas[this.piezas.piezas[this.piezas.piezas[indice]]]--;

			//Si no quedan de ese tipo las eliminamos
			if(this.piezas.npiezas[this.piezas.piezas[this.piezas.piezas[indice]]]<=0){
				this.piezas.piezas.pop(this.piezas.piezas[indice]);	
			}
			//Pasar el turno al siguiente
			
			return pieza
		}else{
			console.log("No quedan piezas");
			return undefined;
		}
	}


	
	this.posiciones = [] //relaci�n de piezas con coordenadas puestas
	this.piezaenposiciones = function(x,y){
		var i;
		for(i=0;i<this.posiciones.length;i++){
			if((this.posiciones[i].x==x)&&(this.posiciones[i].y==y))
				return this.posiciones[i]
		}return undefined
	}

	this.posiblelugar= function(pieza){
		var array= [];
		for(i=0; i<=this.posiciones.length-1; i++){
			var aux = this.posiciones[i];
			var cooraux = new Coor();
			console.log(i);
			if(this.puedocolocar(pieza,aux.x,aux.y+1)){
				cooraux.x=aux.x;
				cooraux.y=aux.y+1;
				if(array.indexOf(cooraux)==-1){
					array.push(cooraux);
					console.log('00000');
				}
			}if(this.puedocolocar(pieza,aux.x,aux.y-1)){
				cooraux.x=aux.x;
				cooraux.y=aux.y-1;
				if(array.indexOf(cooraux)==-1){
					console.log('11111111');
					array.push(cooraux);
				}
			}if(this.puedocolocar(pieza,aux.x+1,aux.y)){
				cooraux.x=aux.x+1;
				cooraux.y=aux.y;
				if(array.indexOf(cooraux)==-1){
					array.push(cooraux);
					console.log('33333');
				}
			}if(this.puedocolocar(pieza,aux.x-1,aux.y)){
				cooraux.x=aux.x-1;
				cooraux.y=aux.y;
				 

				if(array.indexOf(cooraux)==-1){
					array.push(cooraux);
					console.log('444444');
				}
			}
		}
		pieza.EncajaCon = array;
		return array;	
	}
	
	 this.puedocolocar = function(pieza,x,y){
		//saco si hay ficha en cada posicion
		var haypieza = this.piezaenposiciones(x,y)	//si es undefined, puedo poner
		
			//devuelve true si no hay conflicto con alguna pieza
		var comparo = true	
				// para comparar con 4 posiciones alrededor
		var dummyU = this.piezaenposiciones(x,y+1)	
		var dummyD = this.piezaenposiciones(x,y-1)
		var dummyR = this.piezaenposiciones(x+1,y)
		var dummyL = this.piezaenposiciones(x-1,y)
			
		if((dummyU==undefined)&&(dummyD==undefined)&&(dummyR==undefined)&&(dummyL==undefined)){comparo = false}//ninguna pieza cercana
			
		if((dummyU!=undefined)&&(dummyU.Abajo!=pieza.Arriba)){comparo = false}	//algun conflicto; false
		if((dummyD!=undefined)&&(dummyD.Arriba!=pieza.Abajo)){comparo = false}
		if((dummyR!=undefined)&&(dummyR.Izquierda!=pieza.Derecha)){comparo = false}
		if((dummyL!=undefined)&&(dummyL.Derecha!=pieza.Izquierda)){comparo = false}	//exista y no coincida
		
		
		if((comparo)&&(haypieza==undefined)){ 	//exito en la comparacion
			
			return true	// puedo colocar ficha
			
		}else{
			return false	// no puedo colocar ficha
		}
	}
	
	this.coloco = function(pieza,x,y){
		
		
		if(this.puedocolocar(pieza,x,y)){
			pieza.x=x;
			pieza.y=y;
			this.posiciones.push(pieza)
			return true
		}
		return false
	}
	
	
	// ENTRA UNA PIEZA YA COLOCADA Y DEVUELVE ARRAY CON POSIBLES SITIOS DONDE COLOCAR SEGUIDOR (ARRAY CON VALORES DE 1 A 9)
	this.posibleseguidor= function(pieza){		//la pieza ya trae las coordenadas				//a otroladron(pieza,posicion cuadrícula)
		var array= [];
		var correcto = 0;
		for(i=1; i<=9; i++){		//posiciones pieza (cuadricula)
		
		
			/////////// ESQUINAS ///////////////
			if(i==1){	//superior izq 
				
				if (((pieza.Arriba == 'Camino')||(pieza.Arriba=='Granja')||(pieza.Arriba != pieza.Izquierda)) &&(otrogranjero(pieza,i)==false)){ array.push(1)}
				else{ if(otrocaballero(pieza,i)==false) {array.push(1)}}	
						//si granja o camino, 1 siempre granja. Si arriba==izquierda --> es ciudad, sino granja también
				
			}
			if(i==3){	//superior dcha 
				
				if (((pieza.Derecha == 'Camino')||(pieza.Derecha=='Granja')||(pieza.Derecha != pieza.Arriba)) &&(otrogranjero(pieza,i)==false)){ array.push(3)}
				else{ if(otrocaballero(pieza,i)==false) {array.push(3)}}	
						//si granja o camino, 1 siempre granja. Si Derecha==Izquierda --> es ciudad, sino granja también
				
			}
			if(i==7){	//inferior izda 
				
				if (((pieza.Izquierda == 'Camino')||(pieza.Izquierda=='Granja')||(pieza.Izquierda != pieza.Abajo)) &&(otrogranjero(pieza,i)==false)){ array.push(7)}
				else{ if(otrocaballero(pieza,i)==false) {array.push(7)}}	
						//si granja o camino, 1 siempre granja. Si Izquierda==Abajo --> es ciudad, sino granja también
				
			}
			if(i==9){	//inferior izda 
				
				if (((pieza.Abajo == 'Camino')||(pieza.Abajo=='Granja')||(pieza.Abajo != pieza.Derecha)) &&(otrogranjero(pieza,i)==false)){ array.push(9)}
				else{ if(otrocaballero(pieza,i)==false) {array.push(9)}}	
						//si granja o camino, 1 siempre granja. Si Abajo==Derecha --> es ciudad, sino granja también
				
			}
			
			/////////// EJE + (cruz central) ///////////////
			
			if(i==2){	//superior centro 
				
				if (((pieza.Arriba == 'Camino')&&(otroladron(pieza,i)==false))
					|| ((pieza.Arriba == 'Ciudad')&&(otrocaballero(pieza,i)==false))
					|| ((pieza.Arriba == 'Granja')&&(otrogranjero(pieza,i)==false))){array.push(2)}
			}
			if(i==4){	//medio izq
				
				if (((pieza.Izquierda == 'Camino')&&(otroladron(pieza,i)==false))
					|| ((pieza.Izquierda == 'Ciudad')&&(otrocaballero(pieza,i)==false))
					|| ((pieza.Izquierda == 'Granja')&&(otrogranjero(pieza,i)==false))){array.push(4)}
			}
			if(i==6){	//medio dcha
				
				if (((pieza.Derecha == 'Camino')&&(otroladron(pieza,i)==false))
					|| ((pieza.Derecha == 'Ciudad')&&(otrocaballero(pieza,i)==false))
					|| ((pieza.Derecha == 'Granja')&&(otrogranjero(pieza,i)==false))){array.push(6)}
			}
			if(i==8){	//inferior centro 
				
				if (((pieza.Abajo == 'Camino')&&(otroladron(pieza,i)==false))
					|| ((pieza.Abajo == 'Ciudad')&&(otrocaballero(pieza,i)==false))
					|| ((pieza.Abajo == 'Granja')&&(otrogranjero(pieza,i)==false))){array.push(8)}
			}
			
			/////////// PIEZA CENTRAL ///////////////

			if(i==5){	//inferior centro 
				
				if ((pieza.tipo=='MonCamino')||(pieza.tipo=='MonGranja')){array.push(5)}
			}
		
		}return array;	
	}

	this.colocarseguidor = function(pieza, posicion){
		if(listaJugadores[turno].seguidores > 0){ //SIEMPRE Y CUANDO EL JUGADOR TENGA SEGUIDORES
			//POR CADA POSICION DE LA MATRIZ DE LA PIEZA
			if(posicion == 1){
				if(pieza.Arriba == "Granja" || pieza.Izquierda == "Granja" || pieza.Izquierda == "Camino" || pieza.Arriba == "Camino"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Izquierda == "Ciudad" && pieza.Arriba == "Ciudad" && pieza.tipo != "CiudadI"){ //ciudad especial (dos cachos separados)
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Izquierda == "Ciudad" && pieza.Arriba == "Ciudad" && pieza.tipo == "CiudadI"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}
				
			}else if(posicion == 2){
				if(pieza.Arriba == "Camino"){
					var ladron = new Seguidor(1, "ladron", listaJugadores[turno]);
					pieza.seguidores.push(ladron);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Arriba == "Ciudad"){
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Arriba == "Granja"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}
				
			}else if(posicion == 3){
				if(pieza.Derecha == "Granja" || pieza.Arriba == "Granja" || pieza.Arriba == "Camino" || pieza.Derecha == "Camino"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Arriba == "Ciudad" && pieza.Derecha == "Ciudad" && pieza.tipo != "CiudadI"){ //ciudad especial (dos cachos separados)
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Arriba == "Ciudad" && pieza.Derecha == "Ciudad" && pieza.tipo == "CiudadI"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}
			
			}else if(posicion == 4){
				if(pieza.Izquierda == "Camino"){
					var ladron = new Seguidor(1, "ladron", listaJugadores[turno]);
					pieza.seguidores.push(ladron);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Izquierda == "Ciudad"){
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Izquierda == "Granja"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}				
				
			}else if(posicion == 5){
				if(pieza.tipo == "MonCamino" || pieza.tipo == "MonGranja"){
					var monje = new Seguidor(1, "monje", listaJugadores[turno]);
					pieza.seguidores.push(monje);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.tipo == "CiudadE" || pieza.tipo == "CiudadH" || pieza.tipo == "CiudadI" || pieza.tipo == "CiudadM" || pieza.tipo == "CiudadN"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.tipo == "CiudadC" || pieza.tipo == "CiudadF" || pieza.tipo == "CiudadG" || pieza.tipo == "CiudadQ" || pieza.tipo == "CiudadR" || pieza.tipo == "CiudadS" || pieza.tipo == "CiudadT"){
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.tipo == "CiudadD" || pieza.tipo == "CiudadJ" || pieza.tipo == "CiudadK" || pieza.tipo == "CiudadO" || pieza.tipo == "CiudadP" || pieza.tipo == "Recto" || pieza.tipo == "Curva"){
					var ladron = new Seguidor(1, "ladron", listaJugadores[turno]);
					pieza.seguidores.push(ladron);
					listaJugadores[turno]=seguidores--; return true; 
				}else if(pieza.tipo == "CiudadL" || pieza.tipo == "Cruce3" || pieza.tipo == "Cruce4"){
					console.log("AHI NO PUEDES COLOCAR EL SEGUIDOR QUE ES UN CRUCE¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡");
					return false;
				} 				
								
			}else if(posicion == 6){
				if(pieza.Derecha == "Camino"){
					var ladron = new Seguidor(1, "ladron", listaJugadores[turno]);
					pieza.seguidores.push(ladron);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Derecha == "Ciudad"){
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Derecha == "Granja"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}	
			}else if(posicion == 7){
				if(pieza.Izquierda == "Granja" || pieza.Abajo == "Granja" || pieza.Abajo == "Camino" || pieza.Izquierda == "Camino"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Abajo == "Ciudad" && pieza.Izquierda == "Ciudad" && pieza.tipo != "CiudadI"){ //ciudad especial (dos cachos separados)
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Abajo == "Ciudad" && pieza.Izquierda == "Ciudad" && pieza.tipo == "CiudadI"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}			
			}else if(posicion == 8){
				if(pieza.Abajo == "Camino"){
					var ladron = new Seguidor(1, "ladron", listaJugadores[turno]);
					pieza.seguidores.push(ladron);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Abajo == "Ciudad"){
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Abajo == "Granja"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}
			}else if(posicion == 9){
				if(pieza.Abajo == "Granja" || pieza.Derecha == "Granja" || pieza.Derecha == "Camino" || pieza.Abajo == "Camino"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Derecha == "Ciudad" && pieza.Abajo == "Ciudad" && pieza.tipo != "CiudadI"){ //ciudad especial (dos cachos separados)
					var caballero = new Seguidor(1, "caballero", listaJugadores[turno]);
					pieza.seguidores.push(caballero);
					listaJugadores[turno]=seguidores--; return true;
				}else if(pieza.Derecha == "Ciudad" && pieza.Abajo == "Ciudad" && pieza.tipo == "CiudadI"){
					var granjero = new Seguidor(1, "granjero", listaJugadores[turno]);
					pieza.seguidores.push(granjero);
					listaJugadores[turno]=seguidores--; return true;
					
				}
			}
		}else{
			console.log("Jugador sin seguidores!!!!");
			return false;
		}
		
	}	
	
 }




