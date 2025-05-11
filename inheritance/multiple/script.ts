class Flyable {
  fly(): string {
    return "It can fly!";
  }
}

class Swimmable {
  swim(): string {
    return "It can swim!";
  }
}

class Penguin implements Flyable, Swimmable {
  fly!: () => string;
  swim!: () => string;
}

function applyMixins(derived: any, bases: any[]) {
  bases.forEach(base => {
    Object.getOwnPropertyNames(base.prototype).forEach(name => {
      derived.prototype[name] = base.prototype[name];
    });
  });
}

applyMixins(Penguin, [Flyable, Swimmable]);

function show() {
  const penguin = new Penguin();
  document.getElementById("output")!.innerText =
    `${penguin.fly()} ${penguin.swim()}`;
}
