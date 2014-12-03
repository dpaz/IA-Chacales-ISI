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
		var pieza_inicial = new Pieza('Recto',5,5);
		
		tablero.posiciones.push(pieza_inicial);
		
		var pieza_prueba = new Pieza('Recto'); //Recto
		
		expect(tablero.coloco(pieza_prueba,5,4)).toBe(true)    // ok
		expect(tablero.coloco(pieza_prueba,5,5)).toBe(false)   // si existe pieza en esa posición
		expect(tablero.coloco(pieza_prueba,15,25)).toBe(false) // si la pongo en medio de la nada
		
		var pieza_prueba2 = new Pieza('CiudadD',11,9); //CiudadD
		var pieza_prueba3 = new Pieza('MonGranja',9,9); //MonjGranja
		
		tablero.posiciones.push(pieza_prueba2,pieza_prueba3);
		
		var pieza_prueba4 = new Pieza('CiudadJ'); //CiudadJ
		
		expect(tablero.coloco(pieza_prueba4,10,9)).toBe(true) 
		
		
	});
	
	it("Posible pieza",function(){
		tablero = new Tablero(6);
	
		/*var pieza_1 = new Pieza('Recto',2,2);
		tablero.posiciones.push(pieza_1);

		var pieza_2 = new Pieza('Recto',3,2);
		tablero.posiciones.push(pieza_2);

		var pieza_3 = new Pieza('MonGranja',3,3);
		tablero.posiciones.push(pieza_3);

		var aux= tablero.posiblelugar(pieza_3);
		
		expect(aux[0].x).toBe(1);
		expect(aux[0].y).toBe(2);
		expect(aux[1].x).toBe(4);
		expect(aux[1].y).toBe(2);

		var pieza_4 = new Pieza('Recto');

		aux= tablero.posiblelugar(pieza_3);

		expect(aux[0].x).toBe(1);
		expect(aux[0].y).toBe(2);
		expect(aux[1].x).toBe(4);
		expect(aux[1].y).toBe(2);
		expect(aux[2].x).toBe(4);
		expect(aux[2].y).toBe(3);
		*/
		var pieza_1 = new Pieza('Recto',2,2);
		tablero.posiciones.push(pieza_1);

		var pieza_2 = new Pieza('Curva',2,3);
		tablero.posiciones.push(pieza_2);

		var pieza_3 = new Pieza('MonGranja',3,2);
		tablero.posiciones.push(pieza_3);

		var pieza_4 = new Pieza('Recto');

		var aux= tablero.posiblelugar(pieza_4);

		console.log(aux)
	});
	
});
