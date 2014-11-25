// Lós metodos van dentro de Meteor.methods ya que utilizamos Meteor para desarrollar el juego

Meteor.methods({
	//Prototipo de nueva partida
	nuevaPartida: function(id_game){
		jugadores=new Array('david','fernando','jesus','alejandro','david');
		partida = new Juego(id_game, jugadores, 0);
		//Ahora habría que iniciar el juego
	};
	//Al extraer la ficha el turno cambia automaticamente
	robarFicha: function(id_game){
		ficha = partida(id_game).tablero.saca_pieza();
		return ficha;
		//partida(id_game).tablero.azar
	};
	
	
	
	cambiarTurno: function(){
		return partida(id_game).listaJugadores[partida(id_game).tablero.azar];	
	};
});

