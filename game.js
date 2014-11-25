// Lós metodos van dentro de Meteor.methods ya que utilizamos Meteor para desarrollar el juego

var ArrPartidas = {} // En esta coleccion guardamos las id de todas las partidas


Meteor.methods({
	//Crea una nueva partida, devuelve true si se consiguio false si no
	nuevaPartida: function(id_game){
		if(ArrPartidas[id_game]== undefined){
			Partida = new Tablero(id_game);
			ArrPartidas[id_game]= Partida;
			return true;
		}else{
			console.log("Esa id ya pertenece a una partida creada");
			return false;
		}
	},

	//Los jugadores se añaden de uno en 1 y solo se podran meter en partidas ya creadas devuelve true si se consiguio, false si no
	nuevoJugador: function(id_game,id_jugador,nombre){
		if(ArrPartidas[id_game]){
			Partida = ArrPartidas[id_game];
			Partida.listaJugadores.push(new Jugador(id_jugador,nombre));
			return true;
		}else{
			return false;
		}
	},
	/*Se comprueba que la partida tiene menos de 5 jugadores entre las IAS y los jugadores reales, se devuelve false si
	  el numero excede el maximo. Se devuelve la lista de jugadores si es correcto. Ademas elige aleatoriamente quien
	  comienza el juego */
	comenzar: function(id_game,nIAs){
		if(ArrPartidas[id_game]){
			Partida= ArrPartidas[id_game];
			if(Partida.listaJugadores.length+nIAs<=5){
				for(i=1;i<=nIAs;i++){
					Partida.listaJugadores.push(new Jugador(-i,"IA"+i));
					Partida.listaJugadores[i].IA = true;
				}
				Partida.turno = Math.floor(Math.random()*Partida.listaJugadores.length);
				return Partida.listaJugadores;
			}else{
				console.log("Excede el numero maximo de jugadores");
				return false;
			}
		}
	},


	//Roba una ficha, si id = id_game es un juego existente, si no devuelve false, si no quedan piezas que extraer devuelve undefined
	robarFicha: function(id_game){
		if(ArrPartidas[id_game]){
			Partida = ArrPartidas[id_game];
			ficha = Partida.saca_pieza();
			return ficha;
		}else{
			return false;
		}
	},
	

	//Devuelve el turno en el que se encuentra la partida con id = id_game, si no existe devuelve undefined
	turnoActual: function(id_game){
		if(ArrPartidas[id_game]){
			return ArrPartidas[id_game].turno
		}else{
			return undefined;
		}
	},
	
	//Pasa al siguiente turno de la partida id = id_game, devuelve el turno siguiente y si no existe esa partida devuelve undefined
	cambiarTurno: function(id_game){
		if(ArrPartidas[id_game]){
			Partida = ArrPartidas[id_game];
			if(Partida.turno===Partida.listaJugadores.length){
				Partida.turno=1;
			}else{
				Partida.turno++;
			}
			return Partida.turno;
		}else{
			return undefined;
		}
	};
});

