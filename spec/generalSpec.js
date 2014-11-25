
describe("Funciones generales",function(){
	it("Podemos crear partidas con diferentes numeros de jugadores",function(){
		ar1 = ['david','fernando','jesus'];
		ar2 = ['david','fernando','jesus','alejandro','david'];
		juego1 = new Tablero(1);
		juego1.listaJugadores.push(new Jugador(10, "Alejandro"));
		juego1.listaJugadores.push(new Jugador(20, "David"));
    	juego1.listaJugadores.push(new Jugador(30, "Jesus"));
		juego1.listaJugadores.push(new Jugador(40, "Fernando"));
		juego1.listaJugadores.push(new Jugador(50, "David"));
        juego2 = new Tablero(2);
        juego2.listaJugadores.push(new Jugador(10, "Alejandro"));
		juego2.listaJugadores.push(new Jugador(20, "David"));
    	juego2.listaJugadores.push(new Jugador(30, "Jesus"));
	//	juego3 = new Juego(3,ar2,2);
		expect(juego1.listaJugadores.length).toBe(5);	
    	expect(juego2.listaJugadores.length).toBe(3);
	//	expect(juego3.listaJugadores).toBe(undefined);
	//	expect(juego1.id_game).toBe(1);
	//	expect(juego2.id_game).toBe(2);
	//	expect(juego3.id_game).toBe(3);
	});
});
