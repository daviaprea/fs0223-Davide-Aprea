var TassCalc = /** @class */ (function () {
    function TassCalc(red, cod) {
        this.codRedd = cod;
        this.redAnnoLordo = red;
        if (red < 1000) {
            this.tasseInps = 0.05;
            this.tasseIrpef = 0.03;
        }
        else if (red >= 1000 && red < 2500) {
            this.tasseInps = 0.08;
            this.tasseIrpef = 0.06;
        }
        else if (red >= 2500 && red < 5000) {
            this.tasseInps = 0.1;
            this.tasseIrpef = 0.08;
        }
        else if (red >= 5000 && red < 8000) {
            this.tasseInps = 0.13;
            this.tasseIrpef = 0.1;
        }
        else {
            this.tasseInps = 0.16;
            this.tasseIrpef = 0.12;
        }
    }
    Object.defineProperty(TassCalc.prototype, "inpsTax", {
        get: function () {
            return this.tasseInps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TassCalc.prototype, "irpefTax", {
        get: function () {
            return this.tasseIrpef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TassCalc.prototype, "redditoAnnuoNetto", {
        get: function () {
            return this.tasseIrpef * (1 - this.tasseInps) * (1 - this.tasseIrpef) * (1 - this.codRedd);
        },
        enumerable: false,
        configurable: true
    });
    return TassCalc;
}());
