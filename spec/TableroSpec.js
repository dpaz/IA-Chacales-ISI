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
		expect(ran4).toBe(undefined);
		
	});
	it("Posiciones de tablero creadas",function(){
		piezas = ["Recto","Curva","Cruce4"];
		npiezas = {"Recto": 1,"Curva":1,"Cruce4":1};
		tablero = new Tablero(5,piezas,npiezas);
	
	//	expect(tablero.posiciones[5][8].ocupado).toBe(false);
	//	tablero.posiciones[5][8].ocupado=true;
	//	expect(tablero.posiciones[5][8].ocupado).toBe(true);		
		
		
	});
});
