describe("Pruebas relacionadas con ladrones y caminos",function(){
	it("Otro ladron comprueba correctamente por arriba si hay ladron",function(){

		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		ladron = new Seguidor(8,"ladron",1);
		pieza2 = new Pieza("Recto",0,1);
		pieza3 = new Pieza("Curva",0,2);
		pieza3.seguidores.push(ladron);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],2,tablero)).toBe(true);

	});
	it("Otro ladron comprueba correctamente por arriba si no hay ladron",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		pieza2 = new Pieza("Recto",0,1);
		pieza3 = new Pieza("Curva",0,2);
		

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);

		expect(otroladron(tablero.posiciones[0],2,tablero)).toBe(false);
	});
	it("Otro ladron comprueba correctamente por abajo si hay ladron",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		ladron = new Seguidor(8,"ladron",1);
		pieza2 = new Pieza("Recto",0,-1);
		pieza3 = new Pieza("Curva",0,-2);
		pieza3 = pieza3.girar().girar();
		pieza1.seguidores.push(ladron);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],8,tablero)).toBe(true);
	});
	it("Otro ladron comprueba correctamente por abajo si no hay ladron",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		pieza2 = new Pieza("Recto",0,-1);
		pieza3 = new Pieza("Curva",0,-2);
		pieza3 = pieza3.girar(pieza3.girar());
		

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],8,tablero)).toBe(false);
	});
	
	it("Otro ladron comprueba correctamente por derecha si hay ladron",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		ladron = new Seguidor(4,"ladron",1);
		pieza2 = new Pieza("Recto",1,0);
		pieza2 = pieza2.girar();
		pieza3 = new Pieza("Curva",2,0);
		pieza3.seguidores.push(ladron);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],6,tablero)).toBe(true);
	});
	
	it("Otro ladron comprueba correctamente por derecha si no hay ladron",function(){
		tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		pieza2 = new Pieza("Recto",1,0);
		pieza2 = pieza2.girar();
		pieza3 = new Pieza("Curva",2,0);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],6,tablero)).toBe(false);
	});

	it("Otro ladron comprueba correctamente por izquierda si hay ladron",function(){
	    tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		ladron = new Seguidor(6,"ladron",1);
		pieza2 = new Pieza("Recto",-1,0);
		pieza2 = pieza2.girar();
		pieza3 = new Pieza("Curva",-2,0);
		pieza3 = pieza3.girar();
		pieza3.seguidores.push(ladron);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],4,tablero)).toBe(true);
	});
	it("Otro ladron comprueba correctamente por izquierda si no hay ladron",function(){
	    tablero = new Tablero(5)
		pieza1 = new Pieza("Cruce4",0,0);
		pieza2 = new Pieza("Recto",-1,0);
		pieza2 = pieza2.girar();
		pieza3 = new Pieza("Curva",-2,0);
		pieza3 = pieza3.girar();
		

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		
		expect(otroladron(tablero.posiciones[0],4,tablero)).toBe(false);
	});

	it("Otro ladron comprueba correctamente en un mapa complejo si hay ladron",function(){
		tablero = new Tablero(5);
		pieza1 = new Pieza("Recto",0,0);
		pieza2 = new Pieza("Recto",0,1);
		pieza3 = new Pieza("Curva",0,2);
		pieza3 = pieza3.girar();
		pieza4 = new Pieza("Curva",1,2);
		pieza4 = pieza4.girar().girar().girar();
		pieza5 = new Pieza("Cruce4",1,3);

		ladron = new Seguidor(8,"ladron",1);
		pieza5.seguidores.push(ladron);

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		tablero.posiciones.push(pieza4);
		tablero.posiciones.push(pieza5);

		expect(otroladron(tablero.posiciones[0],2,tablero)).toBe(true);
	});
	it("Otro ladron comprueba correctamente en un mapa complejo si hay ladron",function(){
		tablero = new Tablero(5);
		pieza1 = new Pieza("Recto",0,0);
		pieza2 = new Pieza("Recto",0,1);
		pieza3 = new Pieza("Curva",0,2);
		pieza3 = pieza3.girar();
		pieza4 = new Pieza("Curva",1,2);
		pieza4 = pieza4.girar().girar().girar();
		pieza5 = new Pieza("Cruce4",1,3);

		

		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		tablero.posiciones.push(pieza4);
		tablero.posiciones.push(pieza5);

		expect(otroladron(tablero.posiciones[0],2,tablero)).toBe(false);
	});
});