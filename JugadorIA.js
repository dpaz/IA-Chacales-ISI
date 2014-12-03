jugadorIA=function(id_jugador){

    this.robar = function () {
        var robado = Tablero.saca_pieza();
        this.nuevaficha = new Pieza(robado, 0, 0);
        var posicion = Tablero.posiblelugar(this.nuevaficha);
        if (this.posicion.length == 0 && Tablero.totalFichas != 71) { this.robar() }
    };

    this.robar();










    return [this.nuevaFicha.Tipo, TipoJugada];


}