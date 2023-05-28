var _a, _b, _c, _d, _e, _f, _g;
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
        return this.registroChiamate.filter(function (chiamata) {
            return chiamata.data.toLocaleDateString() == dataFilter.toLocaleDateString() &&
                chiamata.data.getHours() == dataFilter.getHours() &&
                chiamata.data.getMinutes() == dataFilter.getMinutes();
        });
    };
    return Smartphone;
}());
var myPhone = new Smartphone();
(_a = document.querySelector("#ric button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var inp = Number(document.querySelector("#ric input").value);
    if (inp > 0)
        myPhone.ricarica(inp);
});
(_b = document.querySelector("#call button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var inp = Number(document.querySelector("#call input").value);
    if (inp > 0)
        myPhone.chiamata(inp);
});
(_c = document.querySelector("#dateFilt button")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return console.log(myPhone.filtraChiamatePerDataOra(new Date(document.querySelector("#dateFilt input").value))); });
(_d = document.getElementById("creditCheck")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return console.log(myPhone.numero404()); });
(_e = document.getElementById("callsCheck")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return console.log(myPhone.getNumeroChiamate()); });
(_f = document.getElementById("callsHistory")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { return console.log(myPhone.mostraRegistroChiamate()); });
(_g = document.getElementById("deleteCallsHistory")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () { return myPhone.azzeraChiamate(); });
