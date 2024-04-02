import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    deposit(depositAmount: number): number {
        return  this.balance += depositAmount;
    }

    withdraw(withdrawAmount: number): number {
        if(withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
        }else {
            throw new Error(`Your ${withdrawAmount} exceed your balance ${this.balance}`)
        }
        return this.balance;
    }

    getBalance(): number {
        return this.balance;
    }
}