'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    Animal.alive.push(this);
  }
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      if (animal.health === 50) {
        const deletedAnimalIndex = Animal.alive.indexOf(animal);

        Animal.alive.splice(deletedAnimalIndex, 1);
      } else {
        animal.health -= 50;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
