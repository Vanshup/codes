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
var Grandparent = /** @class */ (function () {
    function Grandparent() {
    }
    Grandparent.prototype.legacy = function () {
        return "Grandparent legacy passed.";
    };
    return Grandparent;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parent.prototype.guidance = function () {
        return "Parent gives guidance.";
    };
    return Parent;
}(Grandparent));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.learn = function () {
        return "Child is learning.";
    };
    return Child;
}(Parent));
function show() {
    var child = new Child();
    document.getElementById("output").innerText =
        "".concat(child.legacy(), " ").concat(child.guidance(), " ").concat(child.learn());
}
