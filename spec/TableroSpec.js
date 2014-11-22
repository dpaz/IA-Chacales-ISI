describe("Pruebas relacionadas con las piezas",function(){
	it("Podemos sacar piezas de forma aleatoria",function(){
		piezas = ["pieza1","pieza2","pieza3"];
		var tablero = new Tablero(piezas);
		
		ran1 = tablero.saca_pieza();
		ran2 = tablero.saca_pieza();
		ran3 = tablero.saca_pieza();
		
		
		expect(ran1).not.toBe(ran2);
		expect(ran1).not.toBe(ran3);
		expect(ran2).not.toBe(ran3);
		expect(tablero.piezas.length).toBe(0);
		ran4 = tablero.saca_pieza();
		expect(ran4).toBe(undefined);
	});
});