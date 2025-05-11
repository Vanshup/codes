class Animal {
  walk(): string {
    return "The animal walks.";
  }
}

class Dog extends Animal {
  make_sound(): string {
    return "The dog barks! 🐶";
  }
}

function show() {
  const dog = new Dog();
  document.getElementById("output")!.innerText =
    `${dog.walk()} ${dog.make_sound()}`;
}
