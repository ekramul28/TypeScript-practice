{
  //polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for | hours per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }
  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const student = new Student();
  const developer = new Developer();
  getSleepingHours(student);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    getArea(): number {}
  }
}
