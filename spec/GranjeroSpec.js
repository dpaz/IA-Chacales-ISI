describe("Pruebas relacionadas con posible granjero",function(){
	it("Pieza arriba",function(){
		//piezas = ["Recto","Curva","Cruce4"];
		//npiezas = {"Recto": 1,"Curva":1,"Cruce4":1};
		tablero = new Tablero(5);

		/*var pieza_ini = new Pieza('CiudadE',3,3)
		var pieza_2 = new Pieza('CiudadC')
		var pieza_3 = new Pieza('CiudadF')
		
		var pieza_4 = new Pieza('CiudadT')
		var pieza_5 = new Pieza('CiudadO')
		var pieza_6 = new Pieza('CiudadH')*/
		var seguidor = new Seguidor(9,'granjero')

		var pieza_7 = new Pieza('MonCamino',5,5)
		
		var pieza_8 = new Pieza('CiudadD',5,7)
		var pieza_9 = new Pieza('MonGranja',5,6)
		pieza_8.seguidores.push(seguidor);

		tablero.posiciones.push(pieza_8);
		tablero.posiciones.push(pieza_9);

		expect(otrogranjero(pieza_7,7,tablero)).toBe(true);
	});
});
