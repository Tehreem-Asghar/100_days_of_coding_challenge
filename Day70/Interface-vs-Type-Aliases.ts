console.log(`****************
Interface vs. Type Aliases
*****************`);
// both syntax:

//Interface: Declared using the interface keyword.
interface Person {
  name: string;
  age: number;
}

// Type Alias: Declared using the type keyword.

type Person1 = {
  name: string;
  age: number;
};

// Extending And Implementing:

// Interface
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}
// Type
type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};

// Compatibility:
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};