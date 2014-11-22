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
	CiudadT:      {Arriba: 'Ciudad' , Abajo : 'Camino' , Derecha: 'Ciudad' , Izquierda: 'Ciudad' , Escudo: 0},

}

var recto = [TPiezas.Recto,TPiezas.Recto,TPiezas.Recto,TPiezas.Recto,TPiezas.Recto,TPiezas.Recto,TPiezas.Recto,TPiezas.Recto];
var curva = [TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva,TPiezas.Curva];
var cruce3 = [TPiezas.Cruce3,TPiezas.Cruce3,TPiezas.Cruce3,TPiezas.Cruce3];
var cruce4 = [TPiezas.Cruce4];
var mongranja = [TPiezas.monGranja,TPiezas.monGranja];
var moncamino = [TPiezas.MonCamino,TPiezas.MonCamino];
var ciudadc = [TPiezas.CiudadC];
var ciudadd = [TPiezas.CiudadD,TPiezas.CiudadD,TPiezas.CiudadD,TPiezas.CiudadD];
var ciudade = [TPiezas.CiudadE,TPiezas.CiudadE,TPiezas.CiudadE,TPiezas.CiudadE,TPiezas.CiudadE];
var ciudadf = [TPiezas.CiudadF,TPiezas.CiudadF];
var ciudadg = [TPiezas.CiudadG];
var ciudadh = [TPiezas.CiudadH,TPiezas.CiudadH,TPiezas.CiudadH];
var ciudadi = [TPiezas.CiudadI,TPiezas.CiudadI];
var ciudadj = [TPiezas.CiudadJ,TPiezas.CiudadJ,TPiezas.CiudadJ];
var ciudadk = [TPiezas.CiudadK,TPiezas.CiudadK,TPiezas.CiudadK];
var ciudadl = [TPiezas.CiudadL,TPiezas.CiudadL,TPiezas.CiudadL];
var ciudadm = [TPiezas.CiudadM,TPiezas.CiudadM];
var ciudadn = [TPiezas.CiudadN,TPiezas.CiudadN,TPiezas.CiudadN];
var ciudado = [TPiezas.CiudadO,TPiezas.CiudadO];
var ciudadp = [TPiezas.CiudadP,TPiezas.CiudadP,TPiezas.CiudadP];
var ciudadq = [TPiezas.CiudadQ];
var ciudadr = [TPiezas.CiudadR,TPiezas.CiudadR,TPiezas.CiudadR];
var ciudads = [TPiezas.CiudadS,TPiezas.CiudadS];
var ciudadt = [TPiezas.CiudadT];




var Jugador = function(user_id){
	this.puntuacion = 0;
	this.seguidores = 8;
	this.id = user_id;
}

var Juego = function(jugadores,numeroIAS){
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
	this.tablero = new Tablero;
}

var Tablero = function(){

	this.piezas = recto.concat(curva,cruce3,cruce4,moncamino,mongranja,ciudadc,ciudadd,ciudade,ciudadf,
							   ciudadg,ciudadh,ciudadi,ciudadj,ciudadk,ciudadl,ciudadm,ciudadn,ciudado,
							   ciudadp,ciudadq,ciudadr,ciudads,ciudadt);
	// Método dentro de Tablero??						   
	this.saca_pieza = function (){
		return this.piezas.pop(Math.floor(Math.random*fichas.length + 1))		
	}
}

