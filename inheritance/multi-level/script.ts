class Grandparent {
  legacy(): string {
    return "Grandparent legacy passed.";
  }
}

class Parent extends Grandparent {
  guidance(): string {
    return "Parent gives guidance.";
  }
}

class Child extends Parent {
  learn(): string {
    return "Child is learning.";
  }
}

function show() {
  const child = new Child();
  document.getElementById("output")!.innerText =
    `${child.legacy()} ${child.guidance()} ${child.learn()}`;
}
