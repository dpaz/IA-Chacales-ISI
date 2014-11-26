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

var Pieza = function(tipo,x,y){

	this.x = x || undefined;
	this.y = y || undefined;
	this.tipo = tipo

	this.Abajo = TPiezas[tipo].Abajo;
	this.Arriba = TPiezas[tipo].Arriba;
	this.Derecha = TPiezas[tipo].Derecha;
	this.Izquierda = TPiezas[tipo].Izquierda;

	//Devuelvo una variable auxiliar en vez de la original girada, no se si es lo mejor
	this.girar = function(pieza){
		var aux = pieza;
		aux.Abajo = pieza.Izquierda;
		aux.Derecha = pieza.Abajo;
		aux.Arriba = pieza.Derecha;
		aux.Izquierda = pieza.Arriba;
		return aux;
	}
	this.seguidores = []; // Para llevar un control del numero de seguidores que hay en cada pieza	
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
	
	 this.coloco = function(pieza,x,y){
		//saco si hay ficha en cada posicion
		var haypieza = this.piezaenposiciones(x,y)	//si es undefined, puedo poner
		
			//devuelve true si no hay conflicto con alguna pieza
		var comparo = true	
				// para comparar con 4 posiciones alrededor
		var dummyU = this.piezaenposiciones(x,y+1)	//AQUÍ EXPLOTA PREGUNTAR A PEDRO
		var dummyD = this.piezaenposiciones(x,y-1)
		var dummyR = this.piezaenposiciones(x+1,y)
		var dummyL = this.piezaenposiciones(x-1,y)
			
		if((dummyU==undefined)&&(dummyD==undefined)&&(dummyR==undefined)&&(dummyL==undefined)){comparo = false}//ninguna pieza cercana
			
		if((dummyU!=undefined)&&(dummyU.Abajo!=pieza.Arriba)){comparo = false}	//alg�n conflicto; false
		if((dummyD!=undefined)&&(dummyD.Arriba!=pieza.Abajo)){comparo = false}
		if((dummyR!=undefined)&&(dummyR.Izquierda!=pieza.Derecha)){comparo = false}
		if((dummyL!=undefined)&&(dummyL.Derecha!=pieza.Izquierda)){comparo = false}	//exista y no coincida
		
		
		if((comparo)&&(haypieza==undefined)){ 	//�xito en la comparaci�n
			// coordenadas
			pieza.x=x;
			pieza.y=y;
			this.posiciones.push(pieza)
			
			return true	// �xito en colocar ficha
			
		}else{
			return false	// fallo en colocar ficha
		}
	}	
 }




