{
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { rol: String };
  const user1: UserWithRoll1 = {
    name: "hasssan",
    rol: "ok",
    age: 24,
  };

  interface UserWithRoll2 extends User2 {
    role: string;
  }
  interface User2 {
    name: string;
    age: number;
  }
  const man: UserWithRoll2 = {
    name: "hasssan",
    role: "ok",
    age: 24,
  };
}
