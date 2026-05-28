function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.describe = function () {
  return `Vehicle brand: ${this.brand}`;
};

function Car(brand, model, running = false) {
  Vehicle.call(this, brand);
  this.model = model;
  this.running = running;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function () {
  this.running = true;
  return `${this.model} is now running`;
};

Car.prototype.stop = function () {
  this.running = false;
  return `${this.model} has stopped`;
};

Car.prototype.showModel = function () {
  return `Model: ${this.model}`;
};

function ElectricCar(brand, model, batteryLevel) {
  Car.call(this, brand, model);
  this.batteryLevel = batteryLevel;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function () {
    this.batteryLevel = 100;

    return `${this.model} is fully charged`;
};

function Animal(name) {
  this.name = name;
}

Animal.prototype.describe = function () {
  return `This animal is named ${this.name}`;
};

function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  return `${this.name} meows`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks loudly`;
};

Dog.prototype.describe = function () {
  return `${this.name} is a ${this.breed}`;
};

const dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.describe());
console.log(dog1.bark());

class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This animal is named ${this.name}`;
  }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks`;
  }
}

const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic", true);

  const dog2 = new Dog("Buddy", "Golden Retriever");

  const cat1 = new Cat("Lina", "White");

  const electricCar1 = new ElectricCar("Tesla", "Model 3", 55);

  const dogClass1 = new DogClass("Simon", "German Shepherd");

  console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
  console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
  console.log(Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);

  console.log(dog2.describe === cat1.describe);
  console.log(car1.describe === car2.describe);

  output.innerHTML = `
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car2.describe()}</p>
    <p>${car2.showModel()}</p>
    <p>${car2.stop()}</p>
    <hr>
    <p>${electricCar1.describe()}</p>
    <p>${electricCar1.showModel()}</p>
    <p>${electricCar1.start()}</p>
    <p>${electricCar1.charge()}</p>
    <hr>
    <p>${dog2.describe()}</p>
    <p>${dog2.bark()}</p>
    <hr>
    <p>${cat1.describe()}</p>
    <p>Color: ${cat1.color}</p>
    <p>${cat1.meow()}</p>
    <hr>
    <p>${dogClass1.describe()}</p>
    <p>${dogClass1.bark()}</p>
  `;
});