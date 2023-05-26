var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return this.carica + "€";
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        if (this.costoMinuto * min < this.carica) {
            this.carica -= this.costoMinuto * min;
            this.numeroChiamate++;
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
