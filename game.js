// Lós metodos van dentro de Meteor.methods ya que utilizamos Meteor para desarrollar el juego

Meteor.methods({
	//Prototipo de nueva partida
	nuevaPartida: function(id_game){
		jugadores=new Array('david','fernando','jesus','alejandro','david');
		partida = new Juego(id_game, jugadores, 0);
		//Ahora habría que iniciar el juego
	};
	

	
	
});

