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
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.startEngine = function () {
        return "Engine started.";
    };
    return Engine;
}());
var Wheels = /** @class */ (function () {
    function Wheels() {
    }
    Wheels.prototype.roll = function () {
        return "Wheels are rolling.";
    };
    return Wheels;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        return "Car is driving.";
    };
    return Car;
}());
applyMixins(Car, [Engine, Wheels]);
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricCar.prototype.charge = function () {
        return "Charging battery. ⚡";
    };
    return ElectricCar;
}(Car));
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
function show() {
    var tesla = new ElectricCar();
    document.getElementById("output").innerText =
        "".concat(tesla.startEngine(), " ").concat(tesla.roll(), " ").concat(tesla.drive(), " ").concat(tesla.charge());
}
