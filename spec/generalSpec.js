
describe("Funciones generales",function(){
	it("Podemos crear partidas con diferentes numeros de jugadores",function(){
		ar1 = ['david','fernando','jesus'];
		ar2 = ['david','fernando','jesus','alejandro','david'];
		juego1 = new Juego(ar1,0);
		juego2 = new Juego(ar2,0);
		juego3 = new Juego(ar2,2);
		expect(juego1.jugadores.length).toBe(3);
		expect(juego2.jugadores.length).toBe(5);
		expect(juego3.jugadores).toBe(undefined);
	});
});