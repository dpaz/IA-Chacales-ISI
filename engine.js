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



var Jugador = function(user_id){
	this.puntuacion = 0;
	this.seguidores = 8;
	this.id = user_id;
}

var Juego = function(id_game,jugadores,numeroIAS){
	this.id_game = id_game;
	this.jugadores = new Array(jugadores.length+numeroIAS);
	if(jugadores.length + numeroIAS <=5){
		for(i = 0; i<jugadores.length ;i++){
			this.jugadores[i] = new Jugador(jugadores[i].name);
		}
		//Esto sera mas adelante para añadir las IAs
		/*for(i = jugadores.length-1 ; i< 5 ; i++){
			this.jugadores[i] = new IA();
		}*/
	}else{
		this.jugadores = undefined;
		console.log("El numero de jugadores es incorrecto");
	}
	this.tablero = new Tablero(jugadores.length);
}

var Pieza = function(tipo,x,y){

	this.x = x || undefined;
	this.y = y || undefined;

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
}

var Piezas = function(piezas,npiezas){
	
	//Tipos de pieza
	this.piezas =piezas || Object.keys(TPiezas)
	//Numero de piezas por Tipo
	this.npiezas =npiezas || {Recto: 8, Curva: 9, Cruce3: 4, Cruce4: 1, MonCamino: 2, MonGranja: 2, CiudadC: 1, CiudadD: 4,    
				 			 CiudadE: 5, CiudadF: 2, CiudadG: 1, CiudadH: 3, CiudadI: 2, CiudadJ: 3, CiudadK: 3, CiudadL: 3,
				   			 CiudadM: 2, CiudadN: 3, CiudadO: 2, CiudadP: 3, CiudadQ: 1, CiudadR: 3, CiudadS:2, CiudadT:1};		   			 

    //Total de piezas
    this.totalPiezas = 0;
    for(i=0;i<this.piezas.length;i++){
    	this.totalPiezas += this.npiezas[this.piezas[i]];
    } 
     

}

var Tablero = function(njugadores,piezas,npiezas){
	if(piezas && npiezas) { this.piezas = new Piezas(piezas,npiezas);} 
	else { this.piezas = new Piezas();}

	this.azar = Math.floor(Math.random()*njugadores);
	
	// No es completamente aleatorio ya que tenemos la misma probabilidad de sacar un recto que un monasterio con camino
	// cuando el recto tendria que tener inicialmente 4 veces más probabilidad						   
	this.saca_pieza = function (){
		if(this.piezas.totalPiezas>0){
			random_num = Math.floor(Math.random()*this.piezas.piezas.length);
			var pieza = new Pieza(this.piezas.piezas[random_num]);

			//restamos del total de piezas y de las piezas restantes de ese tipo
			this.piezas.totalPiezas--;
			this.piezas.npiezas[this.piezas.piezas[random_num]]--;

			//Si no quedan de ese tipo las eliminamos
			if(this.piezas.npiezas[this.piezas.piezas[random_num]]<=0){
				this.piezas.piezas.pop(random_num);	
			}
			if(this.azar===4){
				this.azar=0;
			}else{
				this.azar++;
			}
				
			return pieza
		}else{
			console.log("No quedan piezas");
			return undefined;
		}
	}
	// ARRAY M*N CON COORDENADAS PARA TABLERO
	this.posiciones = []
	this.posiciones = new Array(15)
	for(var i=0;i<15;i++){
		this.posiciones[i]=new Array(15)
		for(var k=0;k<15;k++){
			this.posiciones[i][k]=[]	//sin esto me explota
			this.posiciones[i][k].ocupado=false; 	//cuando se ocupe una coordenada, a true
		}
	}
}

