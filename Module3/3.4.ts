{
  //instanceof guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("i am making sound");
    }
  }
  //dog
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am barking");
    }
  }

  //cat
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMewa() {
      console.log("i am mewa");
    }
  }

  //smart way ta handele korar jonno ata bavore korta hoba

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Dog => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMewa();
    } else {
      animal.makeSound();
    }
    // if (animal instanceof Dog) {
    //   animal.makeBark();
    // } else if (animal instanceof Cat) {
    //   animal.makeMewa();
    // } else {
    //   animal.makeSound();
    // }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");
  getAnimal(dog);
}
