{
  //generics type

  type GenericsArray<T> = Array<T>;

  const name: GenericsArray<string> = ["name", "hassan", "ok"];
  const number: GenericsArray<number> = [1, 3, 5];

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<{
    display: string;
    color: string;
  }> = {
    name: "hassan",
    computer: {
      brand: "asus",
      model: "x-ee",
      releaseYear: 2013,
    },
    smartWatch: {
      display: "1.2",
      color: "black",
    },
  };

  const riceDeveloper: Developer<{
    display: string;
    color: string;
    man: string;
    hand: string;
  }> = {
    name: "hassan",
    computer: {
      brand: "asus",
      model: "x-ee",
      releaseYear: 2013,
    },
    smartWatch: {
      display: "1.2",
      color: "black",
      man: "black",
      hand: "black",
    },
  };
}
