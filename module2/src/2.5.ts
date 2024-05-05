{
  //function with generic
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bangladesh");
  const res2 = createArrayWithGeneric<string>("bangladesh");
  const res3 = createArrayWithGeneric<{ name: string; age: number }>({
    name: "hassan",
    age: 20,
  });
  console.log(res1);
}
