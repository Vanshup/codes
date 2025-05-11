// Rectangle class implementing Shape interface
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Circle class implementing Shape interface
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Triangle class implementing Shape interface
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}());
// Create instances of each shape
var rectangle = new Rectangle(10, 5);
var circle = new Circle(7);
var triangle = new Triangle(6, 4);
// Display the areas on the webpage
window.onload = function () {
    document.getElementById('rectangleArea').textContent = rectangle.getArea().toString();
    document.getElementById('circleArea').textContent = circle.getArea().toString();
    document.getElementById('triangleArea').textContent = triangle.getArea().toString();
};
