describe("Pruebas relacionadas con monjes y monasterios",function(){
	it("Cerrar Monasterio funciona si no  es fin de partida y no hay cerrado por compleo el monasterio",function(){
    
    	tablero = new Tablero(4)
		pieza1 = new Pieza("MonCamino",0,0);
		monje = new Seguidor(5,"Monje",1);
		pieza1.seguidores.push(monje);
		tablero.posiciones.push(pieza1);
        resultado = cerrarMonasterio(tablero.posiciones[0],false,tablero);	
		expect(resultado[0]).toBe(0);	
    
    	});
 	it("Cerrar Monasterio funciona si no  es fin de partida y hay cerrado por compleo el monasterio",function(){
    
    	tablero = new Tablero(3)
		pieza1 = new Pieza("MonGranja",0,0);
		pieza2 = new Pieza("MonGranja",0,1)
		pieza3 = new Pieza("MonGranja",0,-1)
		pieza4 = new Pieza("MonGranja",1,0)
		pieza5 = new Pieza("MonGranja",1,-1)
		pieza6 = new Pieza("MonGranja",1,1)
		pieza7 = new Pieza("MonGranja",-1,0)
		pieza8 = new Pieza("MonGranja",-1,1)
		pieza9 = new Pieza("MonGranja",-1,-1)
		monje = new Seguidor(5,"Monje",1);
		pieza1.seguidores.push(monje);
		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		tablero.posiciones.push(pieza4);
		tablero.posiciones.push(pieza5);
		tablero.posiciones.push(pieza6);
		tablero.posiciones.push(pieza7);
		tablero.posiciones.push(pieza8);
		tablero.posiciones.push(pieza9);
        resultado = cerrarMonasterio(tablero.posiciones[0],false,tablero);	
		expect(resultado[0]).toBe(9);	
    
    	});
    		it("Cerrar Monasterio funciona si  es fin de partida y no hay cerrado por compleo el monasterio",function(){
    
    	tablero = new Tablero(4)
		pieza1 = new Pieza("MonCamino",0,0);
		monje = new Seguidor(5,"Monje",1);
		pieza1.seguidores.push(monje);
		tablero.posiciones.push(pieza1);
        resultado = cerrarMonasterio(tablero.posiciones[0],true,tablero);	
		expect(resultado[0]).toBe(1);	
    
    	});
    	 	it("Cerrar Monasterio funciona si es fin de partida y hay cerrado por compleo el monasterio",function(){
    
    	tablero = new Tablero(3)
		pieza1 = new Pieza("MonGranja",0,0);
		pieza2 = new Pieza("MonGranja",0,1)
		pieza3 = new Pieza("MonGranja",0,-1)
		pieza4 = new Pieza("MonGranja",1,0)
		pieza5 = new Pieza("MonGranja",1,-1)
		pieza6 = new Pieza("MonGranja",1,1)
		pieza7 = new Pieza("MonGranja",-1,0)
		pieza8 = new Pieza("MonGranja",-1,1)
		pieza9 = new Pieza("MonGranja",-1,-1)
		monje = new Seguidor(5,"Monje",1);
		pieza1.seguidores.push(monje);
		tablero.posiciones.push(pieza1);
		tablero.posiciones.push(pieza2);
		tablero.posiciones.push(pieza3);
		tablero.posiciones.push(pieza4);
		tablero.posiciones.push(pieza5);
		tablero.posiciones.push(pieza6);
		tablero.posiciones.push(pieza7);
		tablero.posiciones.push(pieza8);
		tablero.posiciones.push(pieza9);
        resultado = cerrarMonasterio(tablero.posiciones[0],true,tablero);	
		expect(resultado[0]).toBe(9);	
    
    	});
});
