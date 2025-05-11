class Vehicle {
  move(): string {
    return "Vehicle is moving.";
  }
}

class Car extends Vehicle {
  honk(): string {
    return "Car honks. 🚗";
  }
}

class Motorcycle extends Vehicle {
  rev(): string {
    return "Motorcycle revs. 🏍️";
  }
}

function show() {
  const car = new Car();
  const bike = new Motorcycle();
  document.getElementById("output")!.innerText =
    `${car.move()} ${car.honk()} | ${bike.move()} ${bike.rev()}`;
}
