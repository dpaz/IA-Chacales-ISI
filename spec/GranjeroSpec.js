describe("Pruebas relacionadas con posible granjero",function(){
	//falta probar los que cierran del principio
	//cuidado compruebacampo
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

		//primer y segundo if

		var tablero1 = new Tablero(1);

		var seguidor = new Seguidor(9,'granjero')
		var pieza_1 = new Pieza('CiudadJ',5,5)
		pieza_1 = pieza_1.girar();
		
		var pieza_3 = new Pieza('Recto',5,6);

		var pieza_2 = new Pieza('Curva',5,7)

		tablero1.posiciones.push(pieza_2);
		tablero1.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,3,tablero1)).toBe(false);
		pieza_2.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,3,tablero1)).toBe(true);

		//tercer if

		var tablero2 = new Tablero(2);

		var seguidor1 = new Seguidor(7,'granjero')
		pieza_1 = new Pieza('Recto',5,5)
		
		pieza_3 = new Pieza('Recto',5,6);

		pieza_2 = new Pieza('CiudadL',5,7)

		tablero2.posiciones.push(pieza_2);
		tablero2.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,1,tablero2)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(true);

		//MonCamino sin recursividad hacia abajo

		var tablero2 = new Tablero(2);

		var seguidor1 = new Seguidor(3,'granjero')
		pieza_1 = new Pieza('Recto',5,5)
		
		pieza_3 = new Pieza('Recto',5,6);

		pieza_2 = new Pieza('MonCamino',5,7)

		tablero2.posiciones.push(pieza_2);
		tablero2.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,3,tablero2)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(true);
		
	});

	it("Pieza abajo campo-campo",function(){
		//segundo if
		tablero = new Tablero(5);

		var seguidor = new Seguidor(3,'granjero')
		var pieza_1 = new Pieza('MonGranja',5,5)
		
		var pieza_3 = new Pieza('CiudadD',5,3);
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();

		var pieza_2 = new Pieza('MonGranja',5,4)

		tablero.posiciones.push(pieza_2);
		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
	

		//tercer if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('CiudadJ',5,3);
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
		

		//cuarto if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('Curva',5,3);
		var seguidor1 = new Seguidor(7,'granjero')

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.pop();
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
		

		//primer if
		tablero.posiciones.pop();
		pieza_3 = new Pieza('CiudadI',5,3);
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();
		tablero.posiciones.push(pieza_3);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
	});

	it("Pieza abajo camino-camino",function(){

		//primer y segundo if

		var tablero1 = new Tablero(1);

		var seguidor = new Seguidor(9,'granjero')
		var seguidor1 = new Seguidor(3,'granjero')

		var pieza_1 = new Pieza('CiudadJ',5,5)
		
		var pieza_3 = new Pieza('Recto',5,4);

		var pieza_2 = new Pieza('Curva',5,3);
		pieza_2 = pieza_2.girar();
		pieza_2 = pieza_2.girar();

		tablero1.posiciones.push(pieza_2);
		tablero1.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,3,tablero1)).toBe(false);
		pieza_2.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,3,tablero1)).toBe(true);

		pieza_2.seguidores.pop();
		expect(otrogranjero(pieza_1,3,tablero1)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,9,tablero1)).toBe(true);
		
		

		//tercer if

		var tablero2 = new Tablero(2);

		var seguidor1 = new Seguidor(7,'granjero')
		var seguidor2 = new Seguidor(1,'granjero')
		pieza_1 = new Pieza('Recto',5,5)
		
		pieza_3 = new Pieza('Recto',5,4);

		pieza_2 = new Pieza('CiudadL',5,3);
		pieza_2 = pieza_2.girar();
		pieza_2 = pieza_2.girar();

		tablero2.posiciones.push(pieza_2);
		tablero2.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,1,tablero2)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(false);

		pieza_2.seguidores.pop();
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(false);
		pieza_2.seguidores.push(seguidor2);
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(true);

		//MonCamino sin recursividad hacia abajo

		var tablero2 = new Tablero(2);

		var seguidor1 = new Seguidor(3,'granjero')
		pieza_1 = new Pieza('Recto',5,5)
		
		pieza_3 = new Pieza('Recto',5,4);

		pieza_2 = new Pieza('MonCamino',5,3);
		pieza_2 = pieza_2.girar();
		pieza_2 = pieza_2.girar();

		tablero2.posiciones.push(pieza_2);
		tablero2.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,3,tablero2)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero2)).toBe(true);
		
	});

	it("Piezas arriba y abajo",function(){
	
		var tablero = new Tablero(2);

		var seguidor1 = new Seguidor(3,'granjero')

		pieza_1 = new Pieza('Recto',5,5)
		
		pieza_3 = new Pieza('Recto',5,4);

		pieza_2 = new Pieza('MonCamino',5,3);
		pieza_2 = pieza_2.girar();
		pieza_2 = pieza_2.girar();

		pieza_4 = new Pieza('MonGranja',5,2);

		tablero.posiciones.push(pieza_2);
		tablero.posiciones.push(pieza_3);
		tablero.posiciones.push(pieza_4);
		
		pieza_5 = new Pieza('Recto',5,6);

		pieza_6 = new Pieza('MonCamino',5,7);

		pieza_7 = new Pieza('MonGranja',5,8);

		tablero.posiciones.push(pieza_5);
		tablero.posiciones.push(pieza_6);
		tablero.posiciones.push(pieza_7);

		expect(otrogranjero(pieza_1,3,tablero)).toBe(false);
		pieza_7.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,3,tablero)).toBe(true);
		pieza_7.seguidores.pop();
		expect(otrogranjero(pieza_1,3,tablero)).toBe(false);
		pieza_2.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero)).toBe(true);
		pieza_7.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,1,tablero)).toBe(true);


	});

	it("Pieza derecha campo campo",function(){
	
		//segundo if
		tablero = new Tablero(5);

		var seguidor = new Seguidor(3,'granjero')
		var seguidor1 = new Seguidor(7,'granjero')
		var pieza_1 = new Pieza('MonGranja',5,5)
		
		var pieza_3 = new Pieza('CiudadD',7,5);
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();
		pieza_3 = pieza_3.girar();

		var pieza_2 = new Pieza('MonGranja',6,5)

		tablero.posiciones.push(pieza_2);
		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.pop();
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
	

		//tercer if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('CiudadJ',7,5);

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
		

		//cuarto if
		tablero.posiciones.pop();

		pieza_3 = new Pieza('Curva',7,5);
		pieza_3 = pieza_3.girar();
		var seguidor2 = new Seguidor(9,'granjero')

		tablero.posiciones.push(pieza_3);

		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor2);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.pop();
		pieza_3.seguidores.push(seguidor);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);
		

		//primer if
		tablero.posiciones.pop();
		pieza_3 = new Pieza('CiudadI',7,5);
		tablero.posiciones.push(pieza_3);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(false);
		pieza_3.seguidores.push(seguidor1);
		expect(otrogranjero(pieza_1,7,tablero)).toBe(true);


	});
});
