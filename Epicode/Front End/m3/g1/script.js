var draw = function (a, b) {
    var randNum = Math.floor(Math.random() * 100) + 1;
    Math.abs(a - randNum) < Math.abs(b - randNum) ? console.log("Il valore che si avvicina di pi\u00F9 al numero casuale ".concat(randNum, " \u00E8 ").concat(a, ".")) : console.log("Il valore che si avvicina di pi\u00F9 al numero casuale ".concat(randNum, " \u00E8 ").concat(b, "."));
};
draw(70, 34);
