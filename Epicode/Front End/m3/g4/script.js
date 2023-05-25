var Capo = /** @class */ (function () {
    function Capo(id, codProd, collezione, capo, modello, quantita, colore, prezzoSenzaIva, prezzoIva, disponibile, saldo) {
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoSenzaIva = prezzoSenzaIva;
        this.prezzoIva = prezzoIva;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Object.defineProperty(Capo.prototype, "getPrice", {
        get: function () { return this.prezzoIva; },
        enumerable: false,
        configurable: true
    });
    return Capo;
}());
fetch("./Abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (res) {
    var arr = [];
    res.forEach(function (el, i) {
        arr.push(new Capo(el.id, el.codprod, el.collezione, el.capo, el.modello, el.quantita, el.colore, el.prezzoivaesclusa, el.prezzoivainclusa, el.disponibile, el.saldo));
        console.log("Prezzo: ".concat(arr[i].getPrice, "\u20AC"));
    });
    console.log(arr);
});
