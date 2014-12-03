jugadorIA=function(id_jugador){

    this.robar = function () {
        var robado = Tablero.saca_pieza();
        this.nuevaficha = new Pieza(robado, 0, 0);
        var posicion = Tablero.posiblelugar(this.nuevaficha);
        if (this.posicion.length == 0 && Tablero.totalFichas != 71) { this.robar() }
    };

    this.robar();

    var TipoJugada = { puntos: 0, coorx: 0, coory: 0, giros: 0, }
    var ProbarColocarFicha = function (ngiros) {



    }

    for (cont in this.nuevaficha.EncajaCon) {
        ProbarColocarFicha(0);
        this.nuevaficha = this.nuevaficha.girar();
        ProbarColocarFicha(1);
        this.nuevaficha = this.nuevaficha.girar();
        this.nuevaficha = this.nuevaficha.girar();
        colocarFicha(2);
        this.nuevaficha = this.nuevaficha.girar();
        this.nuevaficha = this.nuevaficha.girar();
        this.nuevaficha = this.nuevaficha.girar();
        colocarFicha(3);
    }

    return [this.nuevaFicha.Tipo, TipoJugada];


}