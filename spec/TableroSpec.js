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
		expect(tablero.piezaenposiciones(8,6)).toBe(undefined);
		
	});
	
	it("Pieza correcta",function(){
		tablero = new Tablero(5);
		var pieza_inicial = new Pieza(tablero.piezas.piezas[0],5,5);
		
		tablero.posiciones.push(pieza_inicial);
		
		var pieza_prueba = new Pieza(tablero.piezas.piezas[0]); //Recto
		
		expect(tablero.coloco(pieza_prueba,5,4)).toBe(true)    // ok
		expect(tablero.coloco(pieza_prueba,5,5)).toBe(false)   // si existe pieza en esa posición
		expect(tablero.coloco(pieza_prueba,15,25)).toBe(false) // si la pongo en medio de la nada
		
		var pieza_prueba2 = new Pieza(tablero.piezas.piezas[7],11,9); //CiudadD
		var pieza_prueba3 = new Pieza(tablero.piezas.piezas[5],9,9); //MonjGranja
		
		tablero.posiciones.push(pieza_prueba2,pieza_prueba3);
		
		var pieza_prueba4 = new Pieza(tablero.piezas.piezas[13]); //CiudadJ
		
		expect(tablero.coloco(pieza_prueba4,10,9)).toBe(true) 
		
		
		
	});
});
