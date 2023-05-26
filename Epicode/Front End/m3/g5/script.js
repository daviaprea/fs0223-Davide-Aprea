var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
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
            this.registroChiamate.push({
                id: this.numeroChiamate,
                durata: min,
                data: new Date()
            });
            this.carica -= this.costoMinuto * min;
            this.numeroChiamate++;
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    };
    Smartphone.prototype.mostraRegistroChiamate = function () {
        return this.registroChiamate;
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (dataFilter) {
        return this.registroChiamate.filter(function (chiamata) { return chiamata.data.toLocaleString() == dataFilter.toLocaleString(); });
    };
    return Smartphone;
}());
var myPhone = new Smartphone();
myPhone.ricarica(50);
myPhone.chiamata(8);
console.log(myPhone.getNumeroChiamate());
console.log(myPhone.numero404());
console.log(myPhone.mostraRegistroChiamate());
