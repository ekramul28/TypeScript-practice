{
  class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    sleep(numberOfHours: number) {
      console.log(
        `this student name is ${this.name} age is ${this.age} and address is ${this.address} and sleep ${numberOfHours}`
      );
    }
  }

  const student1 = new Student("Ekramul", 22, "Dhaka");
  console.log(student1);
  student1.sleep(20);

  class Teacher extends Student {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(
        `this teacher name is ${this.name} age is ${this.age} and address is ${this.address} designation ${this.designation} and take class ${numOfClass}`
      );
    }
  }

  const teacher = new Teacher("hassan", 34, "jessore", "English");
  teacher.takeClass(6);
}
