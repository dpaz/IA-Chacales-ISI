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
	this.seguidores = 8;
	this.id = user_id;
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
	this.seguidores = []; // Para llevar un control del numero de seguidores que hay en cada pieza
	
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

var Tablero = function(id_game, npiezas, piezas){
	this.id_game = id_game;
	this.listaJugadores = [];
	 
	
	if(piezas && npiezas) { this.piezas = new Piezas(piezas,npiezas);} 
	else { this.piezas = new Piezas();}

	//Eleccion de primer turno
	this.azar = Math.floor(Math.random()*listaJugadores.length);
	
	// No es completamente aleatorio ya que tenemos la misma probabilidad de sacar un recto que un monasterio con camino
	// cuando el recto tendria que tener inicialmente 4 veces mÃ¡s probabilidad						   
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
			//Pasar el turno al siguiente
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
	
	
	this.posiciones = [] //relación de piezas con coordenadas puestas
	
	this.sacopieza = function(x,y){
		return _.find(this.posiciones,function(pieza){// devuelve la pieza que hay en cierta coordenada
			return (pieza.x && pieza.y)
		})
	}
	
	var coloco = function(pieza,x,y){
		//saco si hay ficha en cada posicion
		var haypieza = this.sacopieza(x,y)	//si es undefined, puedo poner
		
		var comparo = function(){	//devuelve true si no hay conflicto con alguna pieza
			
				// para comparar con 4 posiciones alrededor
			var dummyU = Tablero.sacoficha(x,y+1)
			var dummyD = Tablero.sacoficha(x,y-1)
			var dummyR = Tablero.sacoficha(x+1,y)
			var dummyL = Tablero.sacoficha(x-1,y)
			
			if((dummyU==undefined)&&(dummyD==undefined)&&(dummyR==undefined)&&(dummyL==undefined)){return false}	//ninguna pieza cercana
			
			if(dummyU.Abajo!=pieza.Arriba){return false}	//algún conflicto; false
			if(dummyD.Arriba!=pieza.Abajo){return false}
			if(dummyR.Izquierda!=pieza.Derecha){return false}
			if(dummyL.Derecha!=pieza.Izquierda){return false}
		}()
		
		if((comparo)&&(haypieza==undefined)){ 	//éxito en la comparación
			// coordenadas
			pieza.x=x;
			pieza.y=y;
			Tablero.posiciones.push(pieza)
			
			return{true}	// éxito en colocar ficha
			
		}else{
			return{false}	// fallo en colocar ficha
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
