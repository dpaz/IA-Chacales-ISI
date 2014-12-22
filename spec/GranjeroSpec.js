describe("Pruebas relacionadas con posible granjero",function(){
	it("Pieza arriba campo-campo",function(){
		//segundo if
		tablero = new Tablero(5);

		var seguidor = new Seguidor(9,'granjero')
		var pieza_1 = new Pieza('MonCamino',5,5)
		
		var pieza_3 = new Pieza('CiudadD',5,7);

		var pieza_2 = new Pieza('MonGranja',5,6)

		tablero.posiciones.push(pieza_2);
		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);

		//tercer if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('CiudadJ',5,7);
		pieza_3 = pieza_3.girar();

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);

		//cuarto if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('Curva',5,7);
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();
		var seguidor1 = new Seguidor(3,'granjero')

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.pop();
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);

		//primer if
		tablero.posiciones.pop();
		pieza_3 = new Pieza('CiudadI',5,7);
		tablero.posiciones.push(pieza_3);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
	});

	it("Pieza arriba camino-camino",function(){
	});
});
