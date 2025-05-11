class Engine {
  startEngine(): string {
    return "Engine started.";
  }
}

class Wheels {
  roll(): string {
    return "Wheels are rolling.";
  }
}

class Car {
  drive(): string {
    return "Car is driving.";
  }
}

interface Car extends Engine, Wheels {}

applyMixins(Car, [Engine, Wheels]);

class ElectricCar extends Car {
  charge(): string {
    return "Charging battery. ⚡";
  }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

function show() {
  const tesla = new ElectricCar();
  document.getElementById("output")!.innerText =
    `${tesla.startEngine()} ${tesla.roll()} ${tesla.drive()} ${tesla.charge()}`;
}
