//learning Function
//normal Function
//Arrow Function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result: number = add(23, 23);
console.log(result);

const poorUser = {
  name: "hassan",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
