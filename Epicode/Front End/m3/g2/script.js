var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b, _c;
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
    }
    SonAccount.prototype.oneDeposit = function (val) {
        this.balanceInit += val;
        console.log("Versamento andato a buon fine. Saldo attuale: " + this.balanceInit);
    };
    SonAccount.prototype.oneWithDraw = function (val) {
        if (this.balanceInit - val >= 0) {
            this.balanceInit -= val;
            console.log("Prelievo andato a buon fine. Saldo attuale: " + this.balanceInit);
        }
        else
            console.log("Non hai mica tutti sti soldi, oh.");
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        this.balanceInit *= 0.9;
        console.log("Interessi pagati. Saldo attuale: " + this.balanceInit);
    };
    return MotherAccount;
}(SonAccount));
var deposit = new MotherAccount();
(_a = document.getElementById("prelievo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var sum = Number((_a = document.getElementById("sum")) === null || _a === void 0 ? void 0 : _a.value);
    deposit.oneWithDraw(sum);
});
(_b = document.getElementById("versamento")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var _a;
    var sum = Number((_a = document.getElementById("sum")) === null || _a === void 0 ? void 0 : _a.value);
    deposit.oneDeposit(sum);
});
(_c = document.getElementById("interessi")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return deposit.addInterest(); });
