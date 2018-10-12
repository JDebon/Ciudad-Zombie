/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, orientacion) {
    /* Completar constructor a partir de Enemigo */
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, orientacion);
    this.orientacion = orientacion;
};

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.constructor = ZombieConductor;
/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function moverFn() {
    if (this.orientacion === 'h') {
        this.x += this.velocidad;
    } else if (this.orientacion === 'v') {
        this.y += this.velocidad;
    }

    if (this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX) {
        this.velocidad *= -1;
    }
    if (this.y < this.rangoMov.desdeY || this.y > this.rangoMov.hastaY) {
        this.velocidad *= -1;
    }
};
