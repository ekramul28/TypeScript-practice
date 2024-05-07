{
  {
    //getter and setter
    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number;

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
      // addDeposit(amount: number) {
      //   this._balance = this._balance + amount;
      // }

      //getter

      get balance() {
        return this._balance;
      }

      //setter
      set deposit(amount: number) {
        this._balance = this.balance + amount;
      }

      // getBalance() {
      //   return this._balance;
      // }
    }

    const goribManusherAccount = new BankAccount(111, "mr.gorib", 20);

    // goribManusherAccount.addDeposit(60);
    // const my = goribManusherAccount.getBalance();

    const my = goribManusherAccount.balance;
    goribManusherAccount.deposit = 30;

    console.log(my);
  }
}
