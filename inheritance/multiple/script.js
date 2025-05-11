var Flyable = /** @class */ (function () {
    function Flyable() {
    }
    Flyable.prototype.fly = function () {
        return "It can fly!";
    };
    return Flyable;
}());
var Swimmable = /** @class */ (function () {
    function Swimmable() {
    }
    Swimmable.prototype.swim = function () {
        return "It can swim!";
    };
    return Swimmable;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
    }
    return Penguin;
}());
function applyMixins(derived, bases) {
    bases.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derived.prototype[name] = base.prototype[name];
        });
    });
}
applyMixins(Penguin, [Flyable, Swimmable]);
function show() {
    var penguin = new Penguin();
    document.getElementById("output").innerText =
        "".concat(penguin.fly(), " ").concat(penguin.swim());
}
