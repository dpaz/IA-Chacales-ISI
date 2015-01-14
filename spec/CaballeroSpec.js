describe("Pruebas relacionadas con caballeros y ciudades",function(){
	it("Otro caballero comprueba correctamente por arriba si hay caballero (NO RECUR)",function(){

		tablero = new Tablero(10)
		pieza1 = new Pieza("CiudadH",10,10);
		caballero = new Seguidor(8,"caballero",1);

		pieza2 = new Pieza("CiudadJ",10,9);

		pieza1.seguidores.push(caballero);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);

		expect(tablero.posiciones[1]).toBe(pieza2);
		expect(otrocaballero(tablero,tablero.posiciones[1],2)).toBe(true);

	});
	
	it("Comprobación que sigue un camino curvado ",function(){

		tablero = new Tablero(10)
		//pieza1 = new Pieza("CiudadH",10,10);
		caballero = new Seguidor(6,"caballero",1);

		pieza2 = new Pieza("CiudadJ",10,8);
		pieza3 = new Pieza("CiudadP",10,9);
		pieza4 = new Pieza("CiudadI",9,9);
		pieza3 = pieza3.girar();
		expect(pieza3.Izquierda).toBe("Ciudad");
		pieza4.seguidores.push(caballero);

		//tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		tablero.posiciones.push(pieza4);

		expect(tablero.posiciones[0]).toBe(pieza2);
		expect(otrocaballero(tablero,tablero.posiciones[0],2)).toBe(true);

	});


	it("sigue un camino con PIEZA 3-4 SITIOS CIUDAD",function(){
		console.log("--------------------------------------------------------3-------------------------------_");
		tablero3 = new Tablero(10)
		//pieza1 = new Pieza("CiudadH",10,10);
		caballero = new Seguidor(6,"caballero",1);

		pieza2 = new Pieza("CiudadJ",10,8);
		pieza3 = new Pieza("CiudadC",10,9);
		pieza4 = new Pieza("CiudadI",9,9);
		pieza3 = pieza3.girar();
		expect(pieza3.Izquierda).toBe("Ciudad");
		pieza4.seguidores.push(caballero);

		//tablero.posiciones.push(pieza1);
		tablero3.posiciones.push(pieza2);
		tablero3.posiciones.push(pieza3);
		tablero3.posiciones.push(pieza4);

		expect(tablero3.posiciones[0]).toBe(pieza2);
		expect(otrocaballero(tablero3,tablero3.posiciones[0],2)).toBe(true);

	});
	
	it("Largo camino",function(){
		console.log("--------------------------------------------------------4-------------------------------_");
		tablero3 = new Tablero(10)
		//pieza1 = new Pieza("CiudadH",10,10);
		caballero = new Seguidor(5,"caballero",1);

		pieza1 = new Pieza("CiudadF",10,10);
		pieza2 = new Pieza("CiudadN",11,10);
		pieza3 = new Pieza("CiudadD",11,11);
		pieza3 = pieza3.girar().girar();

		pieza1.seguidores.push(caballero);

		tablero3.posiciones.push(pieza1);
		tablero3.posiciones.push(pieza2);
		tablero3.posiciones.push(pieza3);


		expect(tablero3.posiciones[2]).toBe(pieza3);
		expect(otrocaballero(tablero3,tablero3.posiciones[2],8)).toBe(true);

	});
	
	it("Cerrar ciudad (no fin)",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("CiudadJ",0,0);
		caba = new Seguidor(8,"caballero",1);
		pieza2 = new Pieza("CiudadH",0,1);
		//pieza3 = new Pieza("Curva",0,2);
		pieza2.seguidores.push(caba);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		
		resultado = cerrarCiudad(tablero.posiciones[0],false,tablero);	
		expect(resultado[0]).toBe(2);		
	});
	
	it("Cerrar ciudad (no fin) (3 piezas unidas)",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("CiudadJ",0,0);
		caba = new Seguidor(8,"caballero",1);
		pieza2 = new Pieza("CiudadH",0,2);
		pieza3 = new Pieza("CiudadG",0,1);
		pieza2.seguidores.push(caba);
		pieza3 = pieza3.girar()

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		resultado = cerrarCiudad(tablero.posiciones[0],false,tablero);	
		expect(resultado[0]).toBe(6);		
	});
});
