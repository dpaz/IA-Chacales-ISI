
describe("Funciones generales",function(){
	it("Podemos crear partidas con diferentes numeros de jugadores",function(){
		ar1 = ['david','fernando','jesus'];
		ar2 = ['david','fernando','jesus','alejandro','david'];
		juego1 = new Juego(1,ar1,0);
		juego2 = new Juego(2,ar2,0);
		juego3 = new Juego(3,ar2,2);
		expect(juego1.jugadores.length).toBe(3);
		expect(juego2.jugadores.length).toBe(5);
		expect(juego3.jugadores).toBe(undefined);
		expect(juego1.id_game).toBe(1);
		expect(juego2.id_game).toBe(2);
		expect(juego3.id_game).toBe(3);
	});
});
