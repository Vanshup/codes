// Shape interface with getArea method
interface Shape {
  getArea(): number;
}

// Rectangle class implementing Shape interface
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

// Circle class implementing Shape interface
class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Triangle class implementing Shape interface
class Triangle implements Shape {
  constructor(private base: number, private height: number) {}

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

// Create instances of each shape
const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);
const triangle = new Triangle(6, 4);

// Display the areas on the webpage
window.onload = () => {
  document.getElementById('rectangleArea')!.textContent = rectangle.getArea().toString();
  document.getElementById('circleArea')!.textContent = circle.getArea().toString();
  document.getElementById('triangleArea')!.textContent = triangle.getArea().toString();
};
