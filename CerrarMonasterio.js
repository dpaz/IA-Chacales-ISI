
CierraMonasterio = function (pieza, final) {

		var puntos = 0;
		var monje;
		var seguidoresEncontrados = [];
		var piezasTotales = 0;
		var fichaAux;
		this.sumar = function () {
		    var sumados = [];
		    seguidorEncontrado.forEach(function (seguidor) {
		        jugador = Tablero.listaSeguidores.find(function (jug) { jug == seguidor.jugador; });
		        if (jugador.indexOf(sumados) >= 0) {
		            jugador.puntuacion += puntos;
		            sumados.push(jugador);
		        }
		        jugador.seguidores++;
		    });
		};
        
		var cerrarMon = function (ficha) {
		    var TenemosMonje = false;
		    var FichasCercanas = 0;
		    var fichaAux;
		    ficha.seguidores.forEach(function(seguidor){
		        if(seguidor.tipo=='Monje'){
		            monje = seguidor;
		            seguidoresEncontrados.push(seguidor);
		            TenemosMonje = true;
		            FichasCercanas++;
		        }  
		    });
		    if (TenemosMonje) {
		        fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x, ficha.y + 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x, ficha.y - 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y + 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y - 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y + 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y - 1);
		        if (fichaAux.lleno) { FichasCercanas++; }
		        if (FichasCercanas == 9 || final == false)
		        {
		            puntos = FichasCercanas;
		            sumarpuntos();
		            console.log("Sumamos Por Cerrar Entero el Monasterio");
		        }
		        else if (final == true)
		        {
		            puntos = FichasCercanas;
		            sumarpuntos();
		            console.log("Sumamos Al ser Final de Partida");
		        }
		    }
		};

		if (final == false) {
		    if ((ficha.tipo == "MonCamino") || (ficha.tipo == "MonGranja"))
		    { cerrarMon(ficha); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x, ficha.y + 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x, ficha.y - 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y + 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x + 1, ficha.y - 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y + 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		    fichaAux = Tablero.piezaenposiciones(ficha.x - 1, ficha.y - 1);
		    if ((fichaAux.tipo == "MonCamino") || (fichaAux.tipo == "MonGranja"))
		    { cerrarMon(fichaAux); }
		}
		else {
		    if ((ficha.tipo == "MonCamino") || (ficha.tipo == "MonGranja"))
		    { cerrarMon(ficha); }
		}
        return [puntos, seguidoresEncontrados];
}
