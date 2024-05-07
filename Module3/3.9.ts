{
  //abstraction
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`i Am Atarting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am Stoping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
    test() {
      console.log(`i am just testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
}
