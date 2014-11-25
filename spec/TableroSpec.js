describe("Pruebas relacionadas con las piezas",function(){
	it("Podemos sacar piezas de forma aleatoria",function(){
		//piezas = ["Recto","Curva","Cruce4"];
		//npiezas = {"Recto": 1,"Curva":1,"Cruce4":1};
		tablero = new Tablero(5);

		ran1 = tablero.saca_pieza();
		ran2 = tablero.saca_pieza();
		ran3 = tablero.saca_pieza();
		
		
		expect(ran1).not.toBe(ran2);
		expect(ran1).not.toBe(ran3);
		expect(ran2).not.toBe(ran3);
		
		expect(tablero.piezas.totalPiezas).toBe(67);
		ran4 = tablero.saca_pieza();
		//expect(ran4).toBe(undefined);
		
	});
	
	it("Método pieza en posiciones",function(){
		tablero = new Tablero(5);
		var pieza_inicial = new Pieza(tablero.piezas.piezas[0],5,5);
		
		tablero.posiciones.push(pieza_inicial);
		
		expect(tablero.piezaenposiciones(5,5).tipo).toBe(pieza_inicial.tipo); //mal aquí el método sacapieza
		//expect(tablero.piezaenposiciones(8,6)).toBe(undefined);
		
	});
	
	it("Pieza correcta",function(){
		/*tablero = new Tablero(5);
		pieza_inicial = new Pieza(Recto,5,5);
		
		tablero.posiones.push(pieza_inicial);
		
		pieza_prueba = new Pieza(Recto)
		
		expect(tablero.coloco(pieza_prueba,5,4)).toBe(true)
		expect(tablero.coloco(pieza_prueba,12,12)).toBe(false)
		*/
		
	});
});
